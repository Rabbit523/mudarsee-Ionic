import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Navbar } from 'ionic-angular'; 
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';
import { GlobalMethods } from '../../../providers/global-methods';
import { StuChatPage } from '../stu-chat/stu-chat';

@IonicPage()
@Component({
  selector: 'page-student-dashboard-chat',
  templateUrl: 'student-dashboard-chat.html',
})
export class StudentDashboardChatPage {
  @ViewChild(Navbar) navBar: Navbar;
  chat_members:any;
  showLoadMore:boolean;
  callback:any;
  dashboard_data_dasboardDetials:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public globalMethods:GlobalMethods,
    public httpService:HttpService,
    public serviceName:ServiceName) {
    this.chat_members = [];
    this.showLoadMore = true;
    this.callback = this.navParams.get("callback");
    this.dashboard_data_dasboardDetials = this.navParams.data.dasboardDetials;
  }

  ionViewDidLoad() {
    this.getChatTutorsList('');
    this.navBar.backButtonClick = (e:UIEvent)=>{
      this.callback(this.dashboard_data_dasboardDetials).then(()=>{
        this.navCtrl.pop();
      });
    }
  }
  getChatTutorsList(infiniteScroll){
    let params = {
      user_id: this.globalMethods.userType('id'),
      from_limit: this.chat_members.length,
      type:'student'
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.tutor_chat_students_list_get,params).subscribe(
      data=> {
        this.globalMethods.loaderStop();
        if(data[0].data.length!=0){
          if(infiniteScroll!=''){
            infiniteScroll.enable(true);
            this.showLoadMore = true;
          }
          for(let member of data[0].data){
            if(member.photo=='' || member.photo==null){
              member['imageFullUrl'] = this.serviceName.default_pictureImage;
            }else{
              member['imageFullUrl'] = this.serviceName.profileUrl + member.photo; 
            }
            
            this.chat_members.push(member);
          }
        }else{
          if(infiniteScroll!=''){
            infiniteScroll.complete();
            this.showLoadMore = false;
            infiniteScroll.enable(false);
          }
        }
      },
      error=>{
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      });
  }
  chatPagePopCallback(_params) {
    return new Promise((resolve, reject) => {
      this.chat_members = _params.chat_members;
      this.dashboard_data_dasboardDetials = _params.dashboard_data_dasboardDetials;
      for(let member of this.chat_members){
        if(member.from_id == _params.from_id){
          if(_params.status=='success'){
            this.dashboard_data_dasboardDetials.messages = parseInt(this.dashboard_data_dasboardDetials.messages) - parseInt(member.messages_count);
          }
          member.messages_count = _params.count;     
        }
      }
      resolve();
    });
  }
  openChatPage(receiver) {
    let tutor_details={
      tutor_photo : receiver.photo,
      tutor_name : receiver.username,
      device_id : receiver.device_id,
      course_name : '',
      tutor_id : receiver.from_id,
      messages_count : receiver.messages_count
    }
    this.navCtrl.push(StuChatPage,{receiver: tutor_details,callback: this.chatPagePopCallback,chat_members:this.chat_members,dashboard_data_dasboardDetials:this.dashboard_data_dasboardDetials});
  }
}
