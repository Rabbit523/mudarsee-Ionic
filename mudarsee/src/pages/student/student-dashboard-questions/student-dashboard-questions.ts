import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionAnswerPage } from '../question-answer/question-answer';
import { StuQuestionAnswerConversationPage } from '../stu-question-answer-conversation/stu-question-answer-conversation';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';
import { GlobalMethods } from '../../../providers/global-methods';

@IonicPage() 
@Component({
  selector: 'page-student-dashboard-questions',
  templateUrl: 'student-dashboard-questions.html',
})
export class StudentDashboardQuestionsPage {
question_members:any;
  showLoadMore:boolean;
  constructor(public navCtrl: NavController,  
              public navParams: NavParams,
              public globalMethods:GlobalMethods,
              public httpService:HttpService,
              public serviceName:ServiceName) {
    this.question_members = [];
    this.showLoadMore = true;
  }
  ionViewDidLoad() {
    this.getQuestionTutorsList('');
  }
  getQuestionTutorsList(infiniteScroll){
    let params = {
      user_id: this.globalMethods.userType('id'),
      from_limit: this.question_members.length
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.get_student_questions_tutors_list,params).subscribe(
      data=> {
        this.globalMethods.loaderStop();
        if(data[0].data.length!=0){
               if(infiniteScroll!=''){
                 infiniteScroll.enable(true);
                 this.showLoadMore = true;
               }
        for(let question of data[0].data){
           if(question.photo=='' || question.photo==null){
              question['imageFullUrl'] = this.serviceName.default_pictureImage;
           }else{
              question['imageFullUrl'] = this.serviceName.profileUrl + question.photo; 
           }
             this.question_members.push(question);
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
  openConversationPage(object){
    let question={
        question_id: object.question_id,
        question_text: object.question_text,
        questionConversation:[],
        questionConversation_filtered:[],
    }
    let sender={
        imageFullUrl: this.globalMethods.userType('photo'),
        user_id: this.globalMethods.userType('id'),
    }
    let receiver={
        imageFullUrl: object.imageFullUrl,
        user_id: object.user_id,
        device_id: object.device_id
    }
     this.navCtrl.push(StuQuestionAnswerConversationPage,{question:question,sender:sender,receiver:receiver});
    }
}
