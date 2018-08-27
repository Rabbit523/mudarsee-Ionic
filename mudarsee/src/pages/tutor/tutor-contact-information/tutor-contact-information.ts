import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalMethods } from '../../../providers/global-methods';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';
import { TutorContactDetailsPage } from '../tutor-contact-details/tutor-contact-details';

@Component({
  selector: 'page-tutor-contact-information',
  templateUrl: 'tutor-contact-information.html',
  providers: [HttpService, GlobalMethods, ServiceName]
})
export class TutorContactInformationPage {
  userData: any;
  user: any;
  currency_symbol: any;
  per_credit_value: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public globalMethods: GlobalMethods,
    public httpService: HttpService,
    public serviceName: ServiceName) {
    this.user = {
      photo: this.globalMethods.userType('photo')
    }
    this.userData = JSON.parse(this.globalMethods.getter(this.serviceName.userProfile));
    this.currency_symbol = this.globalMethods.siteValue('currency_symbol');
    this.per_credit_value = this.globalMethods.siteValue('per_credit_value');
  }

  ionViewDidLoad() {

  }

  editAddressDetails() {
    this.navCtrl.push(TutorContactDetailsPage);
  }
}
