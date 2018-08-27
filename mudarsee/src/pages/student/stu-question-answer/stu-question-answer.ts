import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalMethods } from '../../../providers/global-methods';
import { ServiceName } from '../../../providers/service';
import { HttpService } from '../../../providers/http-service';
import { Content } from 'ionic-angular';
import move from 'move-js';
import { Keyboard } from 'ionic-native';
import { StuQuestionAnswerConversationPage } from "../stu-question-answer-conversation/stu-question-answer-conversation";
import { TranslateService} from 'ng2-translate';

@IonicPage()
@Component({
  selector: 'page-stu-question-answer',
  templateUrl: 'stu-question-answer.html',
  providers:[HttpService,GlobalMethods,ServiceName]  
})
export class StuQuestionAnswerPage {
	@ViewChild(Content) content: Content;
	sender:any;    // current user
	receiver:any;  // oposit person	
	questionAnswer:any;
	questions:any;
  questions_filtered:any;
  history_temp:any;
  showLoadMore:any;
  is_conversation_visible:boolean;
  is_reply:boolean;
  question_id_match:any;
  searchInput:any;
  question_ask:any;
  is_add_question:boolean;
  show_hide_search:boolean;
  showLoadMoreQuestions:boolean;
  showLoadMoreQuestions_conversation:any;
  added_questions:any;
  constructor(public navCtrl: NavController,public translate: TranslateService,
    public params: NavParams,
    public globalMethods : GlobalMethods,
    public httpService: HttpService,
    public serviceName : ServiceName) {
    this.sender = {};    
    this.receiver = {};
    this.question_ask = '';
    this.show_hide_search = false;
    this.showLoadMoreQuestions = true;
    this.showLoadMoreQuestions_conversation = true;
    this.questionAnswer= {
      message:''
    }
    this.questions = [];
    this.added_questions = [];
    this.showLoadMore = true;
    this.is_conversation_visible = false;
    this.is_reply =false;
    this.is_add_question = false;
  }

  ionViewDidLoad() {
    this.searchInput='';
    this.httpService.cacheClearAll();
    if(this.globalMethods.userType('user_belongs_group') == this.serviceName.student){
      this.receiver.imageFullUrl = this.serviceName.profileUrl + this.params.data.receiver.tutor_photo;
      this.receiver.name = this.params.data.receiver.tutor_name;
      this.receiver.device_id = this.params.data.receiver.device_id;//not getting from booking details
      this.receiver.course_name = this.params.data.receiver.course_name;
      this.receiver.user_id = this.params.data.receiver.tutor_id;
    }
    this.sender.imageFullUrl = this.globalMethods.userType('photo');
    this.sender.name = this.globalMethods.userType('username');
    this.sender.device_id = this.globalMethods.userType('device_id');
    this.sender.user_id = this.globalMethods.userType('id');
    this.getQuestions('');
  }
  
  getQuestions(infiniteScroll){
    let params = {
      student_id: this.sender.user_id,
      tutor_id:this.receiver.user_id,
      booking_id: this.params.data.receiver.booking_id,
      records_from: this.questions.length,
      limit: 10
    }

    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.booking_questions_get,params).subscribe(data=>{
      this.globalMethods.loaderStop();
      if(data[0].data.length!=0){
        if(infiniteScroll!=''){
          infiniteScroll.enable(true);
          this.showLoadMoreQuestions = true;
        }
        let i=0;
        for(let question of data[0].data){
          i++;
          question['show_chat'] = false;
          question['is_reply'] = false;
          question['questionConversation'] = [];
          question['questionConversation_filtered'] = [];
          this.questions.push(question);
          this.questions_filtered = this.questions.slice();
          if(i == data[0].data.length && this.added_questions.length>0){
            for(let que of this.added_questions){
              this.questions_filtered.push(que);
            }
          }
        }
      }else{
        if(infiniteScroll!=''){
          infiniteScroll.complete();
          this.showLoadMoreQuestions = false;
          infiniteScroll.enable(false);
        }
      }    
    },error=>{
      this.globalMethods.loaderStop();
    });
  }
  addQuestion(){
    this.is_add_question = !this.is_add_question;
    this.show_hide_search = false;
    if(this.is_add_question){
      this.question_ask = '';
      move('.add_question_fab').ease('in').y(-65).rotate(180).end();
    }else{
      move('.add_question_fab').ease('in').y(0).end();
    }

  }
  saveQuestion(question_text){
    let params = {
      student_id: this.sender.user_id,
      tutor_id: this.receiver.user_id,
      device_id: this.receiver.device_id,
      booking_id: this.params.data.receiver.booking_id,
      question_text: question_text,
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.question_add,params).subscribe(
      data=>{
        this.globalMethods.loaderStop();
        this.question_ask = '';
        let que = {
          question_id: data[0].data[0].question_id,
          imageFullUrl :data[0].data[0].imageFullUrl,
          question_text: data[0].data[0].question_text,
          chat_count:data[0].data[0].chat_count,
          show_chat: false,
          is_reply: false,
          datetime: data[0].data[0].datetime,
          questionConversation:[],
          questionConversation_filtered:[]
        }
        this.added_questions.push(que);
        this.questions_filtered.reverse();
        this.questions_filtered.push(que);
        this.questions_filtered.reverse();
        this.addQuestion();
      },error=>{
        this.globalMethods.loaderStop();
      });
  }
  showHideSearch(){
    this.show_hide_search = !this.show_hide_search;
    let self = this;
    setTimeout(function(){
      if(self.show_hide_search){
        let elem:any = document.querySelector('.search_bar input');
        if (elem) {
          elem.focus();
          Keyboard.show();
        }
      }
    },20);
  }
  
  searchQuestions(ev) {
    let val = ev.target.value;
    this.questions_filtered = this.questions;
    this.questions_filtered = this.questions.slice();
    if (val && val.trim() != '') {
      this.questions_filtered = this.questions_filtered.filter((item) => {
        return (item.question_text.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }else{
      this.questions_filtered = this.questions.slice();
      return this.questions_filtered;
    }
  }
  onCancel(ev) { 
    this.show_hide_search = !this.show_hide_search;
    ev.target.value = '';
  }
  openConversationPage(question,sender,receiver){
    this.navCtrl.push(StuQuestionAnswerConversationPage,{question:question,sender:sender,receiver:receiver});
  }
}

