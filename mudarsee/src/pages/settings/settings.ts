import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalMethods } from "../../providers/global-methods";
import { LoginPage } from "../login/login";
import { TermsConditionsPage } from '../terms-conditions/terms-conditions';
import { AboutUsPage } from '../about-us/about-us';
import { ContactUsPage } from '../contact-us/contact-us';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Device } from '@ionic-native/device';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public globalMethods:GlobalMethods,
    public socialSharing:SocialSharing,
    public device:Device) {}
  openTermsConditions() {
    this.navCtrl.push(TermsConditionsPage);
  }

  openAboutUs() {
    this.navCtrl.push(AboutUsPage);
  }

  openContactUs() {
    this.navCtrl.push(ContactUsPage);
  }

  ionViewDidLoad() {}

  logout() {
    this.globalMethods.clear();
    this.globalMethods.clearStorage();
    this.navCtrl.push(LoginPage);
  }
  appShare() {
    if(this.device.platform == 'Android'){
      this.socialSharing.share(this.globalMethods.siteValue('site_title'), '', '', this.globalMethods.siteValue('androd_app')).then(() => {}).catch(() => {});
    }else{
      this.socialSharing.share(this.globalMethods.siteValue('site_title'), '', '', this.globalMethods.siteValue('ios_app')).then(() => {}).catch(() => {});
    }
  }
}
