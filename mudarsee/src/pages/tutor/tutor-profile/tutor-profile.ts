import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { HttpService } from '../../../providers/http-service';
import { GlobalMethods } from '../../../providers/global-methods';
import { ServiceName } from '../../../providers/service';
import { ReviewsPage } from "../reviews/reviews";
import { StuReserveYourSpotPage } from '../../student/stu-reserve-your-spot/stu-reserve-your-spot';
import { StuSendMessagePage } from '../../student/stu-send-message/stu-send-message';

@Component({
  selector: 'page-tutor-profile',
  templateUrl: 'tutor-profile.html',
  providers: [HttpService, ServiceName, GlobalMethods]
})
export class TutorProfilePage {
  tutor: any;
  tutorDetails = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService,
    public globalMethods: GlobalMethods,
    public serviceName: ServiceName,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController
  ) {
    this.tutor = this.navParams.data.tutor;
  }

  ionViewDidLoad() {
    let params = {
      tutor_id: this.tutor.id
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.tutorProfile, params).subscribe(
      data => {
        this.globalMethods.loaderStop();
        this.tutorDetails = data[0].data[0];
      },
      error => {
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      },
      () => {

      }
    );
  }
  openReviews(tutor) {
    this.navCtrl.push(ReviewsPage, { tutor: tutor });
  }

  sendMessageModal(tutor_id) {
    let sendMessage = this.modalCtrl.create(StuSendMessagePage, { selectedTutor: tutor_id });
    sendMessage.present();
  }
  openReserveYourSpot(tutor) {
    this.navCtrl.push(StuReserveYourSpotPage, { selectedTutor: tutor });
  }

}
