import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, ModalController } from 'ionic-angular';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';
import { GlobalMethods } from '../../../providers/global-methods';
import { StudentBookingsPage } from '../student-bookings/student-bookings';
import { StudentLeadsPage } from '../student-leads/student-leads';
import { StudentDashboardChatPage } from '../student-dashboard-chat/student-dashboard-chat';
import { StudentDashboardQuestionsPage } from '../student-dashboard-questions/student-dashboard-questions';

@Component({
  selector: 'page-student-dashboard',
  templateUrl: 'student-dashboard.html',
  providers:[HttpService,GlobalMethods,ServiceName]
})
export class StudentDashboardPage {
  userDetails:any;
  dashboardDetails = {
    net_credits:'',
    total_bookings:'',
    pending_bookings:'',
    completed_bookings:'',
    approved_bookings:'',
    open_leads:'',
    closed_leads:'',
    messages:'',
    questions:''
  }

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public globalMethods: GlobalMethods,
    public httpService: HttpService,
    public serviceName: ServiceName,
    private menuCtrl: MenuController,
    public modalCtrl: ModalController) {
    localStorage.setItem('pageName','StudentDashboardPage');
    this.menuCtrl.enable(true),
    this.userDetails = JSON.parse(this.globalMethods.getter(this.serviceName.userProfile));

  }

  ionViewDidLoad() {
    let params = {
      user_id : this.userDetails.id
    };
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.studentDashboard,params).subscribe(
      data=> {
        this.globalMethods.loaderStop();
        if(data[0].data.total_bookings != undefined) {
          this.dashboardDetails.total_bookings  = data[0].data.total_bookings;
        }
        if(data[0].data.pending_bookings != undefined) {
          this.dashboardDetails.pending_bookings = data[0].data.pending_bookings;
        }
        if(data[0].data.completed_bookings != undefined) {
          this.dashboardDetails.completed_bookings = data[0].data.completed_bookings;
        }
        if(data[0].data.approved_bookings != undefined) {
          this.dashboardDetails.approved_bookings = data[0].data.approved_bookings;
        }
        if(data[0].data.open_leads != undefined) {
          this.dashboardDetails.open_leads = data[0].data.open_leads;
        }
        if(data[0].data.closed_leads != undefined) {
          this.dashboardDetails.closed_leads = data[0].data.closed_leads;
        }
        if(data[0].data.messages!=undefined){
          this.dashboardDetails.messages = data[0].data.messages;
        }
        if(data[0].data.questions!=undefined){
          this.dashboardDetails.questions = data[0].data.questions;
        }
        if(this.userDetails.net_credits!=undefined){
          this.dashboardDetails.net_credits = this.userDetails.net_credits;
        }
      },
      error => {
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      },
      ()=>{});
  }
  netCredits(){
    this.globalMethods.showToast("Net Credits are "+ this.dashboardDetails.net_credits +"");
  }

  bookings(type) {
    this.navCtrl.push(StudentBookingsPage,{booking_type:type});
  }

  leads() {
    this.navCtrl.push(StudentLeadsPage);
  }
  openQuestions(){
    this.navCtrl.push(StudentDashboardQuestionsPage);
  }
  
  openChat(){
    this.navCtrl.push(StudentDashboardChatPage,{callback: this.studentDashboardChatPagePopCallback,dasboardDetials:this.dashboardDetails});
  }

  studentDashboardChatPagePopCallback(_params) {
    return new Promise((resolve, reject) => {
      this.dashboardDetails = _params.dasboardDetials;
      resolve();
    });
  }

}
