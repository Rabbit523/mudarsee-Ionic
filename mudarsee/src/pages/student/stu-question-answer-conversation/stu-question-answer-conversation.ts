import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalMethods } from '../../../providers/global-methods';
import { ServiceName } from '../../../providers/service';
import { HttpService } from '../../../providers/http-service';
import { Content } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-stu-question-answer-conversation',
  templateUrl: 'stu-question-answer-conversation.html',
  providers: [HttpService, GlobalMethods, ServiceName]
})
export class StuQuestionAnswerConversationPage {
  @ViewChild(Content) content: Content;
  sender: any;    // current user
  receiver: any;  // oposit person	
  msg: any;
  messages: any;
  questionAnswer: any;
  added_history_conversation: any;
  chat_filtered: any;
  showLoadMore: any;
  question: any;
  showLoadMoreQuestions_conversation: boolean;
  constructor(public navCtrl: NavController,
    public params: NavParams,
    public globalMethods: GlobalMethods,
    public httpService: HttpService,
    public serviceName: ServiceName) {
    this.sender = {};
    this.receiver = {};
    this.question = {};
    this.questionAnswer = { message: '' };
    this.added_history_conversation = [];
    this.showLoadMoreQuestions_conversation = false;
  }

  ionViewDidLoad() {
    this.httpService.cacheClearAll();
    this.question = this.params.data.question;
    this.receiver = this.params.data.receiver;
    this.sender = this.params.data.sender;
    this.added_history_conversation = [];
    this.getQuestionConversation('', this.question);
  }
  getQuestionConversation(infiniteScroll, question: any) {
    let params = {
      question_id: question.question_id,
      from_limit: question.questionConversation.length,
      to_limit: 10
    }
    this.httpService.httpServicePost(this.serviceName.question_conversation_get, params).subscribe(data => {
      if (data[0].data.length != 0) {
        if (infiniteScroll != '') {
          infiniteScroll.enable(true);
          this.showLoadMoreQuestions_conversation = true;
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
          question.questionConversation.push(message);
          question.questionConversation_filtered = question.questionConversation.slice();
          question.questionConversation_filtered.reverse();
          if (i == data[0].data.length && this.added_history_conversation.length > 0) {
            for (let que of this.added_history_conversation) {
              question.questionConversation_filtered.push(que);
            }
          }
          let self = this;
          setTimeout(function() {
            if (infiniteScroll == '') {
              self.content.scrollToBottom();
              self.enableLoadMore();
            }
          }, 100);
        }
        this.upgdateStatus();
      } else {
        if (infiniteScroll != '') {
          infiniteScroll.complete();
          this.showLoadMoreQuestions_conversation = false;
          infiniteScroll.enable(false);
        }
      }
    }, error => {

    });
  }
  upgdateStatus() {
    let params = {
      question_id: this.question.question_id,
      student_id: this.globalMethods.userType('id'),
      tutor_id: this.receiver.user_id,
      type: 'student'
    }

    this.httpService.httpServicePost(this.serviceName.update_answer_status, params).subscribe(data => {
    }, error => {
    });
  }
  replyMessage(question: any, msg) {
    let params = {
      question_id: question.question_id,
      sender_id: this.sender.user_id,
      receiver_id: this.receiver.user_id,
      message: msg,
      device_id: this.receiver.device_id,
      type: "student"
    }
    let sending = {
      "answer_id": '',
      "question_id": '',
      "from_id": this.sender.user_id,
      "to_id": this.receiver.user_id,
      "message": msg,
      "datetime": "Now",
      "img": this.sender.imageFullUrl,
      "position": 'right'
    }
    question.questionConversation_filtered.push(sending);
    this.added_history_conversation.push(sending);
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.answer_to_question, params).subscribe(data => {
      this.globalMethods.loaderStop();
      this.questionAnswer.message = '';
      question.questionConversation_filtered[question.questionConversation_filtered.length - 1].answer_id = data[0].data[0].answer_id;
      question.questionConversation_filtered[question.questionConversation_filtered.length - 1].question_id = data[0].data[0].question_id;
      question.questionConversation_filtered[question.questionConversation_filtered.length - 1].from_id = data[0].data[0].from_id;
      question.questionConversation_filtered[question.questionConversation_filtered.length - 1].to_id = data[0].data[0].to_id;
      question.questionConversation_filtered[question.questionConversation_filtered.length - 1].message = data[0].data[0].message;
      question.questionConversation_filtered[question.questionConversation_filtered.length - 1].datetime = data[0].data[0].datetime;
      question.questionConversation_filtered[question.questionConversation_filtered.length - 1].img = this.sender.imageFullUrl;
      question.questionConversation_filtered[question.questionConversation_filtered.length - 1].position = 'right';
      this.added_history_conversation[this.added_history_conversation.length - 1].answer_id = data[0].data[0].answer_id;
      this.added_history_conversation[this.added_history_conversation.length - 1].question_id = data[0].data[0].question_id;
      this.added_history_conversation[this.added_history_conversation.length - 1].from_id = data[0].data[0].from_id;
      this.added_history_conversation[this.added_history_conversation.length - 1].to_id = data[0].data[0].to_id;
      this.added_history_conversation[this.added_history_conversation.length - 1].message = data[0].data[0].message;
      this.added_history_conversation[this.added_history_conversation.length - 1].datetime = data[0].data[0].datetime;
      this.added_history_conversation[this.added_history_conversation.length - 1].img = this.sender.imageFullUrl;
      this.added_history_conversation[this.added_history_conversation.length - 1].position = 'right';
      let self = this;
      setTimeout(function() {
        self.content.scrollToBottom();
      }, 100);
    }, error => {
      this.globalMethods.loaderStop();
    });
  }
  enableLoadMore() {
    let self = this;
    setTimeout(function() {
      self.showLoadMoreQuestions_conversation = true;
    }, 300);
  }
}
