import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpService } from '../../../providers/http-service';
import { GlobalMethods } from '../../../providers/global-methods';
import { ServiceName } from '../../../providers/service';
import { TutorProfilePage } from '../tutor-profile/tutor-profile';
import { ReserveYourSpotPage } from '../reserve-your-spot/reserve-your-spot';
import { FilterPage } from '../filter/filter';

@Component({
  selector: 'page-tutors',
  templateUrl: 'tutors.html',
  providers: [HttpService, GlobalMethods, ServiceName]
})
export class TutorsPage {
  course: any;
  tutors = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService,
    public globalMethods: GlobalMethods,
    public serviceName: ServiceName,
    public modalCtrl: ModalController
  ) {
    this.course = this.navParams.data.course;
  }
  ionViewDidLoad() {
    let params = {
      course_id: this.course.id
    }
    this.httpService.httpServicePost(this.serviceName.getTutors, params).subscribe(
      data => {
        this.tutors = data[0].data;
      },
      error => {
        this.globalMethods.showToast(JSON.stringify(error));
      },
      () => {

      }
    );
  }
  openTutorProfile(tutor) {
    this.navCtrl.push(TutorProfilePage, { tutor: tutor });
  }
  openReserveYourSpot() {
    this.navCtrl.push(ReserveYourSpotPage);
  }
  openFilterTutors() {
    let filterTutors = this.modalCtrl.create(FilterPage);
    filterTutors.present();
  }
}
