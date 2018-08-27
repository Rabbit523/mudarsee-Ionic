import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalMethods } from '../../../providers/global-methods';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';

@Component({
  selector: 'page-tutor-reviews',
  templateUrl: 'tutor-reviews.html',
  providers: [HttpService, GlobalMethods, ServiceName]
})
export class TutorReviewsPage {
  tutor: any;
  reviews: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public globalMethods: GlobalMethods,
    public httpService: HttpService,
    public serviceName: ServiceName) {
      this.tutor = this.navParams.data.selectedTutor;
  }
  ionViewDidLoad() {
    let params = {
      tutor_id: this.tutor
    };
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.getTutorReviews, params).subscribe(
      data => {
        this.globalMethods.loaderStop();
        if (data[1].response.status == 1) {
          this.reviews = data[0].data;
        } else {
          this.globalMethods.showToast(data[1].response.message);
        }
      },
      error => {
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      },
      () => {

      }
    );
  }

}
