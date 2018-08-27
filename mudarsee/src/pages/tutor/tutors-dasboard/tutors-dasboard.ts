import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';
import { GlobalMethods } from '../../../providers/global-methods';
import { BookingPage } from '../booking/booking';
import { TutorCoursesPage } from '../tutor-courses/tutor-courses';
import { TutorDashboardQuestionsPage } from "../tutor-dashboard-questions/tutor-dashboard-questions";
import { TutorDashboardChatPage } from "../tutor-dashboard-chat/tutor-dashboard-chat";

@Component({
  selector: 'page-tutors-dasboard',
  templateUrl: 'tutors-dasboard.html',
  providers: [HttpService, GlobalMethods, ServiceName]
})
export class TutorsDasboardPage {
  userDetails: any;
  dasboardDetials = {
    total_bookings: '',
    pending_bookings: '',
    completed_bookings: '',
    running_bookings: '',
    courses: '',
    net_credits: '',
    messages: '',
    questions: ''
  }
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public globalMethods: GlobalMethods,
    public menuCtrl: MenuController,
    public httpService: HttpService,
    public serviceName: ServiceName) {
    localStorage.setItem('pageName', 'TutorsDasboardPage');
    this.menuCtrl.enable(true);
    this.userDetails = JSON.parse(this.globalMethods.getter(this.serviceName.userProfile));
  }

  ionViewDidLoad() {
    let params = {
      user_id: this.userDetails.id
    };

    this.httpService.httpServicePost(this.serviceName.tutorDashboard, params).subscribe(
      data => {
        if (data[0].data.completed_bookings != undefined) {
             this.dasboardDetials.completed_bookings = data[0].data.completed_bookings;
        }
        if (data[0].data.pending_bookings != undefined) {
          this.dasboardDetials.pending_bookings = data[0].data.pending_bookings;
        }
        if (data[0].data.total_bookings != undefined) {
          this.dasboardDetials.total_bookings = data[0].data.total_bookings;
        }
        if (data[0].data.running_bookings != undefined) {
          this.dasboardDetials.running_bookings = data[0].data.running_bookings;
        }
        if (data[0].data.courses != undefined) {
          this.dasboardDetials.courses = data[0].data.courses;
        }
        if (data[0].data.messages != undefined) {
          this.dasboardDetials.messages = data[0].data.messages;
        }
        if (data[0].data.questions != undefined) {
          this.dasboardDetials.questions = data[0].data.questions;
        }
        if (this.userDetails.net_credits != undefined) {
          this.dasboardDetials.net_credits = this.userDetails.net_credits;
        }
      },
      error => {

      },
      () => {

      }
    );
  }


  bookings(type) {
    this.navCtrl.push(BookingPage, { booking_type: type });
  }

  courses() {
    this.navCtrl.push(TutorCoursesPage);
  }
  openQuestions() {
      this.navCtrl.push(TutorDashboardQuestionsPage);
  }
  openChat() {
   this.navCtrl.push(TutorDashboardChatPage, { callback: this.tutorDashboardChatPagePopCallback, dasboardDetials: this.dasboardDetials });
  }
 tutorDashboardChatPagePopCallback(_params) {
   return new Promise((resolve, reject) => {
     this.dasboardDetials = _params.dasboardDetials;
     resolve();
  });
  }
}
