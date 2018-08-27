import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalMethods } from '../../providers/global-methods';
import { HttpService } from '../../providers/http-service';
import { ServiceName } from '../../providers/service';

@IonicPage()
@Component({
  selector: 'page-terms-conditions',
  templateUrl: 'terms-conditions.html',
  providers: [HttpService, GlobalMethods, ServiceName]
})
export class TermsConditionsPage {
  terms_conditions: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public globalMethods: GlobalMethods,
    public httpService: HttpService,
    public serviceName: ServiceName) {
  }
  ionViewDidLoad() {
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.getTermsConditions, '').subscribe(
      data => {
        this.globalMethods.loaderStop();
        this.terms_conditions = data[0].data[0].description;
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
