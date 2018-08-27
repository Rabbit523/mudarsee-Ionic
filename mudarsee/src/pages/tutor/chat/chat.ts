import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar } from 'ionic-angular';
import { GlobalMethods } from '../../../providers/global-methods';
import { ServiceName } from '../../../providers/service';
import { HttpService } from '../../../providers/http-service';
import { Content } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
  providers: [HttpService, GlobalMethods, ServiceName]
})
export class ChatPage {
	@ViewChild(Content) content: Content;
  @ViewChild(Navbar) navBar: Navbar;
	sender: any;    // current user
	receiver: any;  // oposit person	
	msg: any;
	messages: any;
	chat: any;
  added_history_chat: any;
  chat_filtered: any;
  showLoadMore: any;
  callback: any;
  update: any;
  constructor(public navCtrl: NavController,
    public params: NavParams,
    public globalMethods: GlobalMethods,
    public httpService: HttpService,
    public serviceName: ServiceName) {
    this.sender = {};
    this.receiver = {};
    this.chat = {
      message: ''
    }
    this.update = {
      status: '',
      count: this.params.data.receiver.messages_count,
      from_id: this.params.data.receiver.student_id,
      chat_members: this.params.data.chat_members,
      dashboard_data_dasboardDetials: this.params.data.dashboard_data_dasboardDetials
    };
    this.showLoadMore = false;
    this.callback = this.params.get("callback");
  }

  ionViewDidLoad() {
    this.httpService.cacheClearAll();
    if (this.globalMethods.userType('user_belongs_group') == this.serviceName.tutor) {
      if (this.params.data.receiver.student_photo == '' || this.params.data.receiver.student_photo == null) {
        this.receiver.imageFullUrl = this.serviceName.default_pictureImage;
      } else {
        this.receiver.imageFullUrl = this.serviceName.profileUrl + this.params.data.receiver.student_photo;
      }
      this.receiver.name = this.params.data.receiver.student_name;
      this.receiver.device_id = this.params.data.receiver.device_id;
      this.receiver.course_name = this.params.data.receiver.course_name;
      this.receiver.user_id = this.params.data.receiver.student_id;
    } else {

    }

    if (this.globalMethods.userType('photo') == '' || this.globalMethods.userType('photo') == null) {
      this.sender.imageFullUrl = this.serviceName.default_pictureImage;
    } else {
      this.sender.imageFullUrl = this.globalMethods.userType('photo');
    }
    this.sender.name = this.globalMethods.userType('username');
    this.sender.device_id = this.globalMethods.userType('device_id');
    this.sender.user_id = this.globalMethods.userType('id');
    this.messages = [];
    this.chat_filtered = [];
    this.added_history_chat = [];
    this.getChatHistory('');
    this.navBar.backButtonClick = (e: UIEvent) => {
      this.callback(this.update).then(() => {
        this.navCtrl.pop();
      });
    }
  }
  sendMessage(msg) {
    // sender
    let params = {
      sender_id: this.sender.user_id,
      reciever_id: this.receiver.user_id,
      message: this.chat.message,
      device_id: this.receiver.device_id,
      type: 'tutor'
    }
    this.chat.message = '';
    let sending = {
      id: "",
      from_id: this.sender.user_id,
      to_id: this.receiver.device_id,
      message: msg,
      datetime: "Now",
      position: "right",
      img: this.sender.imageFullUrl,
    }
    this.chat_filtered.push(sending);
    this.added_history_chat.push(sending);
    let self = this;
    setTimeout(function() {
      self.content.scrollToBottom();
    }, 100);
    this.httpService.httpServicePost(this.serviceName.message_send, params).subscribe(data => {

      this.chat_filtered[this.chat_filtered.length - 1].id = data[0].data[0].id;
      this.chat_filtered[this.chat_filtered.length - 1].datetime = data[0].data[0].datetime;
      this.added_history_chat[this.added_history_chat.length - 1].id = data[0].data[0].id;
      this.added_history_chat[this.added_history_chat.length - 1].datetime = data[0].data[0].datetime;
    }, error => {

    });
  }
  upgdateStatus() {
    let params = {
      tutor_id: this.sender.user_id,
      student_id: this.receiver.user_id,
      type: 'tutor'
    }
    let self = this;
    this.httpService.httpServicePost(this.serviceName.update_chat_status, params).subscribe(data => {
      this.update.status = 'success';
      this.update.count = 0;
    }, error => {
      this.update.status = 'fail';
    });
  }

  getChatHistory(infiniteScroll) {
    let params = {
      sender_id: this.receiver.user_id,
      reciever_id: this.sender.user_id,
      cache: 0,
      from_limit: this.messages.length,
      to_limit: 10
    }

    this.httpService.httpServicePost(this.serviceName.chat_history_get, params).subscribe(data => {
      if (data[0].data.length != 0) {
        if (infiniteScroll != '') {
          infiniteScroll.enable(true);
          this.showLoadMore = true;
        }
        let i = 0;
        for (let message of data[0].data) {
          i++;
          if (message.from_id == this.sender.user_id) {
            message['position'] = 'right';
            message['img'] = this.sender.imageFullUrl;
          } else {
            message['position'] = 'left';
            message['img'] = this.receiver.imageFullUrl;
          }
          this.messages.push(message);
          this.chat_filtered = this.messages.slice();
          this.chat_filtered.reverse();
          if (i == data[0].data.length && this.added_history_chat.length > 0) {
            for (let que of this.added_history_chat) {
              this.chat_filtered.push(que);
            }
          }
        }
        let self = this;
        setTimeout(function() {
          if (infiniteScroll == '') {
            self.content.scrollToBottom();
            self.enableLoadMore();
          }
        }, 100);
        this.upgdateStatus();
      } else {
        if (infiniteScroll != '') {
          infiniteScroll.complete();
          this.showLoadMore = false;
          infiniteScroll.enable(false);
        }
      }
    }, error => {

    });
  }
  enableLoadMore() {
    let self = this;
    setTimeout(function() {
      self.showLoadMore = true;
    }, 300);
  }
  doInfinite(infiniteScroll) {
    let params = {
      sender_id: this.receiver.user_id,
      reciever_id: this.sender.user_id,
      cache: 0,
      message_id: this.messages[this.messages.length - 1].id,
      limit: 20
    }
    this.httpService.httpServicePost(this.serviceName.chat_history_get, params).subscribe(data => {
      if (data[0].data.length != 0) {
        infiniteScroll.enable(true);
        this.showLoadMore = true;
        for (let news of data[0].data) {
          this.messages.push(news);
          this.chat_filtered = this.messages.slice();
        }
      } else {
        infiniteScroll.complete();
        this.showLoadMore = false;
        infiniteScroll.enable(false);
      }
    }, error => {
    });
  }

}
