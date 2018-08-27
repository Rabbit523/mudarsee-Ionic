import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { GlobalMethods } from '../../../providers/global-methods';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../../providers/validation-service';

@Component({
  selector: 'page-stu-send-message',
  templateUrl: 'stu-send-message.html',
  providers:[HttpService,GlobalMethods,ServiceName,ValidationService]
})
export class StuSendMessagePage {
  tutorCourses=[];
  tutor_id:any;
  student:any;
  messageForm:any;
  messageDetails = {
    name:'',
    course_id:'',
    email:'',
    phone:'',
    message:''
  };
  credits_for_sending_message:any;
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
    public viewCtrl: ViewController,
    public globalMethods: GlobalMethods,
    public httpService: HttpService,
    public serviceName: ServiceName,
    public formBuilder: FormBuilder,
    public validationService: ValidationService
    ) {
    this.tutor_id = this.navParams.data.selectedTutor;
    this.student = JSON.parse(this.globalMethods.getter(this.serviceName.userProfile));
    this.messageDetails = {
      name:this.student.username,
      course_id:'',
      email:this.student.email,
      phone:this.student.phone,
      message:''
    };
    this.messageForm = formBuilder.group({
      name:['',Validators.compose([Validators.required])],
      course:['',Validators.compose([Validators.required])],
      email:['',Validators.compose([Validators.required])],
      phone:['',Validators.compose([Validators.required])],
      message:['',Validators.compose([Validators.required])]
    });
    this.credits_for_sending_message = this.globalMethods.siteValue('credits_for_sending_message');
  }

  ionViewDidLoad() {
    let params = {
      user_id : this.tutor_id
    };
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.getTutorCourses,params).subscribe(
      data=>{
        this.globalMethods.loaderStop();
        if(data[0].data.length!=0){
          this.tutorCourses = data[0].data;
        } else {
          this.globalMethods.showToast('No Courses Available');
        }
      },
      error=>{
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      },
      ()=>{}
      );
  }

  dismiss() {
    this.viewCtrl.dismiss(StuSendMessagePage);
  }

  sendMessage() {
    let params = {
      student_id: this.student.id,
      tutor_id:this.tutor_id,
      name: this.messageDetails.name,
      course_id:this.messageDetails.course_id,
      email:this.messageDetails.email,
      phone:this.messageDetails.phone,
      message:this.messageDetails.message
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.studentSendMessage,params).subscribe(
      data=>{
        this.globalMethods.loaderStop();
        if(data[1].response.status==1) {
          this.globalMethods.setter(this.serviceName.userProfile,JSON.stringify(data[0].data[0]));
          this.dismiss();
        }
        this.globalMethods.showToast(data[1].response.message);
      },
      error=>{
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      },
      ()=>{});
  }
}
