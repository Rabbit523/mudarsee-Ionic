import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../../providers/http-service';
import { GlobalMethods } from '../../../providers/global-methods';
import { ServiceName } from '../../../providers/service';

@Component({
  selector: 'page-reviews',
  templateUrl: 'reviews.html',
  providers: [HttpService, ServiceName, GlobalMethods]
})
export class ReviewsPage {
  tutor: any;
  reviews = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService,
    public globalMethods: GlobalMethods,
    public serviceName: ServiceName) {
    this.tutor = this.navParams.data.tutor;
  }
  ionViewDidLoad() {
    let params = {
      tutor_id: this.tutor
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.reviews, params).subscribe(
      data => {
        this.globalMethods.loaderStop();
        this.reviews = data[0].data;
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
