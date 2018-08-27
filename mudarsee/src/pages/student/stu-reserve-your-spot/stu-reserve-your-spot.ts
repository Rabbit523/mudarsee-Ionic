import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalMethods } from '../../../providers/global-methods';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../../providers/validation-service';
import { StuTutorProfilePage } from '../stu-tutor-profile/stu-tutor-profile';
import { TutorProfilePage } from '../../tutor/tutor-profile/tutor-profile';
import {CalendarController} from "ion2-calendar/dist";
import * as moment from 'moment';
@Component({
  selector: 'page-stu-reserve-your-spot',
  templateUrl: 'stu-reserve-your-spot.html',
  providers:[HttpService,GlobalMethods,ServiceName,ValidationService]
})
export class StuReserveYourSpotPage {
  tutor:any;
  courses=[];
  tutor_locations=[];
  time_slots=[];
  reserveForm:any;
  reserveData = {
    course_id:'',
    teaching_type:'',
    prefered_location:'',
    start_date:'',
    time_slot:'',
    message:'',
    content:'',
    credits:'',
    duration_type:'',
    duration_value:'',
    days_off:'',
    tutor_slug:'',
    course_slug:'',
    student_id:'',
    tutor_id:''
  }
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public globalMethods: GlobalMethods,
    public httpService: HttpService,
    public serviceName: ServiceName,
    public formBuilder: FormBuilder,
    public validationService: ValidationService,
    public calendarCtrl: CalendarController) {
    this.tutor = this.navParams.data.selectedTutor;
    this.tutor_locations = this.tutor.tutoring_locations_data;
    this.reserveData.tutor_slug = this.tutor.slug;
    this.reserveData.tutor_id = this.tutor.id;
    this.reserveData.student_id = this.globalMethods.userType('id');
    this.reserveForm = formBuilder.group({
      courseId:['',Validators.compose([Validators.required])],
      teachingType:['',Validators.compose([Validators.required])],
      preferredLocation:[''],
      startDate:['',Validators.compose([Validators.required])],
      timeSlot:['',Validators.compose([Validators.required])],
      message:['']
    });
  }

  ionViewDidLoad() {
    let params = {
      user_id: this.tutor.id
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.getTutorCourses,params).subscribe(
      data=>{
        this.globalMethods.loaderStop();
        if(data[0].data.length!=0) {
          this.courses = data[0].data;
        }
      },
      error=>{
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      },
      ()=>{
      }
      );
  }
  openCalendar(){
    let daysConfig = [{
      date: this.reserveData.start_date?new Date(this.reserveData.start_date):new Date,
      marked: true
    }];
    this.calendarCtrl.openCalendar({
      from:new Date(),
      weekdaysTitle:["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      title:'Select Date',
      isRadio:true,
      defaultDate: new Date(),
      // cssClass: 'calendar-class',
      daysConfig: daysConfig
    })
    .then( res => { 
      var date = new Date(res.date.time).toDateString();
      this.reserveData.start_date = moment(date).format("MM-DD-YYYY");
    },error=>{
    }).catch( cat => {
    });
  }
  changeCourse(){
    for(let val of this.courses){
      if(val.course_id==this.reserveData.course_id){
        this.reserveData.content = val.content;
        this.reserveData.credits = val.fee;
        this.reserveData.duration_value = val.duration_value;
        this.reserveData.duration_type = val.duration_type;
        this.reserveData.days_off = val.days_off;
        this.reserveData.course_slug = val.course_slug;
        this.time_slots = val.time_slots.split(',');
        break;
      }
    }
  }
  requestTutor(){
    if(this.reserveData.teaching_type=='willing-to-travel' && this.reserveData.prefered_location=='') {
      this.globalMethods.showToast('Please select Location');
    } else {
      this.globalMethods.loaderStart();
      this.httpService.httpServicePost(this.serviceName.bookTutor,this.reserveData).subscribe(
        data=>{
          this.globalMethods.loaderStop();
          this.globalMethods.showToast(data[1].response.message);
          if(data[1].response.status==1) {
            if(this.globalMethods.userType('user_belongs_group')==this.serviceName.student) {
              this.navCtrl.push(StuTutorProfilePage,{tutor:this.tutor});
            } else {
              this.navCtrl.push(TutorProfilePage,{tutor:this.tutor});
            }
          } else {
            this.globalMethods.showToast(data[1].response.message);
          }
        },
        error=>{
          this.globalMethods.loaderStop();
          this.globalMethods.showToast(JSON.stringify(error));
        },
        ()=>{});
    }
  }
}
