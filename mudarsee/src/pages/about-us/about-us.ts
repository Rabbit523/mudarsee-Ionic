import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalMethods } from '../../providers/global-methods';
import { HttpService } from '../../providers/http-service';
import { ServiceName } from '../../providers/service';
@IonicPage()
@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
  providers:[HttpService,GlobalMethods,ServiceName]
})
export class AboutUsPage {
  aboutus:any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public globalMethods: GlobalMethods,
              public httpService: HttpService,
              public serviceName: ServiceName) {
  }
  ionViewDidLoad() {
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.getAboutUs,'').subscribe(
        data=>{
          this.globalMethods.loaderStop();
          this.aboutus = data[0].data[0].description;
        },  
        error=>{
          this.globalMethods.loaderStop();
          this.globalMethods.showToast(JSON.stringify(error));
        });
  }
}
