import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalMethods } from '../../../providers/global-methods';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';
@IonicPage()
@Component({
  selector: 'page-credit-trans-history',
  templateUrl: 'credit-trans-history.html',
  providers:[HttpService,GlobalMethods,ServiceName]
})
export class CreditTransHistoryPage {
  credit_history=[];
  filteredCreditHistory=[];
  creditType:string="all";
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public globalMethods: GlobalMethods,
    public httpService: HttpService,
    public serviceName: ServiceName,) {
  }
  ionViewDidLoad() {
    let params = {
      user_id:this.globalMethods.userType('id')
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.getStudentCreditTransHistory,params).subscribe(
      data=>{
        this.globalMethods.loaderStop();
        this.credit_history  = data[0].data;
        this.filteredCreditHistory  = data[0].data;
      },
      error=>{
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      },
      ()=>{}
      );
  }

  filterByStatus() {
    this.filteredCreditHistory = [];
    if(this.creditType!='all') {
      for(var i=0;i<this.credit_history.length;i++) {
        if(this.creditType==this.credit_history[i].action) {
          var element = this.credit_history[i];
          this.filteredCreditHistory.push(element);
        }
      }
    } 
    else {
      this.filteredCreditHistory = this.credit_history;
    }
  }
}
