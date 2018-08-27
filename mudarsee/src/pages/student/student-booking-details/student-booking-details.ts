import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, FabContainer } from 'ionic-angular';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';
import { GlobalMethods } from '../../../providers/global-methods';
import { StudentBookingsPage } from '../student-bookings/student-bookings';
import { StuQuestionAnswerPage } from '../stu-question-answer/stu-question-answer';
import { StuChatPage } from '../stu-chat/stu-chat';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';
import { CasePipe } from '../../../pipes/case/case';

@IonicPage()
@Component({
  selector: 'page-student-booking-details',
  templateUrl: 'student-booking-details.html',
  providers: [HttpService, GlobalMethods, ServiceName]
})
export class StudentBookingDetailsPage {
  bookingDetails: any;
  booking_status = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService,
    public serviceName: ServiceName,
    public globalMethods: GlobalMethods,
    public alertCtrl: AlertController,
    public callNumber: CallNumber,
    public emailComposer: EmailComposer
  ) {
    this.bookingDetails = this.navParams.data.selectedBooking;
  }
  ionViewDidLoad() {
    let params = {
      booking_id: this.bookingDetails.booking_id,
      user_id: this.globalMethods.userType('id')
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.getStudentBookingStatus, params).subscribe(
      data => {
        this.globalMethods.loaderStop();
        if (data[1].response.status == 1) {
          if (data[0].data.length != 0) {
            this.booking_status = data[0].data;
          }
        } else {
          this.globalMethods.showToast(data[1].response.message);
        }
      },
      error => {
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      });
  }
  changeStatusAlert() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Change Booking Status');
    let booking_length = this.booking_status.length;
    for (let index = 0; index < booking_length; index++) {
      let element = this.booking_status[index];
      alert.addInput({
        type: 'radio',
        label: element.status_value,
        value: element.status_key,
        checked: false
      });
    }
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        let params = {
          booking_id: this.bookingDetails.booking_id,
          status: data,
          prev_status: this.bookingDetails.status,
          updated_by: this.globalMethods.userType('id'),
          device_id: this.bookingDetails.device_id
        }
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.updateBookingStatus, params).subscribe(
          data => {
            this.globalMethods.loaderStop();
            if (data[1].response.status == 1) {
              this.globalMethods.showToast(data[1].response.message);
              this.navCtrl.push(StudentBookingsPage);
            } else {
              this.globalMethods.showToast(data[1].response.message);
            }
          },
          error => {
            this.globalMethods.loaderStop();
            this.globalMethods.showToast(JSON.stringify(error));
          });
      }
    });
    alert.present();
  }
  chatPagePopCallback(_params) {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
  openChatPage(receiverDetails, fab: FabContainer) {
    fab.close();
    receiverDetails['messages_count'] = 0;
    this.navCtrl.push(StuChatPage, { receiver: receiverDetails, callback: this.chatPagePopCallback, chat_members: [], dashboard_data_dasboardDetials: {} });
  }
  openQuestionAnswerPage(receiverDetails, fab: FabContainer) {
    fab.close();
    this.navCtrl.push(StuQuestionAnswerPage, { receiver: receiverDetails });
  }
  voiceCall(receiver, fab: FabContainer) {
    fab.close();
    this.globalMethods.loaderStart();
    if (receiver.phone != '') {
      this.callNumber.callNumber(receiver.phone, true).then((data) => {
        this.globalMethods.loaderStop();
      }).catch((error) => {
        this.globalMethods.loaderStop();
      });
    }
  }
  emailChat(receiver, fab: FabContainer) {
    fab.close();
    if (receiver.email != '') {
      let email = { to: receiver.email, isHtml: true };
      this.emailComposer.open(email);
    }
  }
}
