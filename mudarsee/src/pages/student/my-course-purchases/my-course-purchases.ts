import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalMethods } from '../../../providers/global-methods';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';

@IonicPage()
@Component({
  selector: 'page-my-course-purchases',
  templateUrl: 'my-course-purchases.html',
  providers:[HttpService,GlobalMethods,ServiceName]
})
export class MyCoursePurchasesPage {
  coursePurchases=[];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public globalMethods:GlobalMethods,
    public httpService: HttpService,
    public serviceName: ServiceName) {
  }

  ionViewDidLoad() {
    let params = {
      user_id: this.globalMethods.userType('id')
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.getStudentCoursePurchases,params).subscribe(
      data=>{
        this.globalMethods.loaderStop();
        this.coursePurchases = data[0].data;
      },
      error=>{
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      },
      ()=>{}
      );
  }

}
