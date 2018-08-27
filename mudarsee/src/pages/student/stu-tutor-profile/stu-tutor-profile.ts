import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { GlobalMethods } from '../../../providers/global-methods';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';
import { StuSendMessagePage } from '../stu-send-message/stu-send-message';
import { TutorReviewsPage } from '../tutor-reviews/tutor-reviews';
import { StuReserveYourSpotPage } from '../stu-reserve-your-spot/stu-reserve-your-spot';

@Component({
  selector: 'page-stu-tutor-profile',
  templateUrl: 'stu-tutor-profile.html',
  providers:[HttpService,GlobalMethods,ServiceName]
})
export class StuTutorProfilePage {
  tutor:any;
  tutorDetails=[];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public globalMethods: GlobalMethods,
              public httpService: HttpService,
              public serviceName: ServiceName,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController) {
              this.tutor = this.navParams.data.tutor;
  }
  ionViewDidLoad() {
     let params = {
      tutor_id:this.tutor.id
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.getStuTutorProfile,params).subscribe(
      data=>{
        this.globalMethods.loaderStop();
        this.tutorDetails = data[0].data[0];
      },
      error=>{
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      },
      ()=>{});
  }
  sendMessageModal(tutor_id) {
    let sendMessage = this.modalCtrl.create(StuSendMessagePage,{selectedTutor: tutor_id});
    sendMessage.present();
  }

  openReviews(tutor_id) {
    this.navCtrl.push(TutorReviewsPage,{selectedTutor:tutor_id});
  }
  
  openReserveYourSpot(tutor) {
    this.navCtrl.push(StuReserveYourSpotPage,{selectedTutor:tutor});
  }

}
