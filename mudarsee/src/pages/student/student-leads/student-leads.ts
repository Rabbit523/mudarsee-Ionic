import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalMethods } from '../../../providers/global-methods';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';
import { StudentLeadDetailsPage } from '../student-lead-details/student-lead-details';
import { StudentPostLeadPage } from '../student-post-lead/student-post-lead';

@IonicPage()
@Component({
  selector: 'page-student-leads',
  templateUrl: 'student-leads.html',
  providers:[HttpService,GlobalMethods,ServiceName]
})
export class StudentLeadsPage {
  leads=[];
  leadType:string="";
  showLoadMore:boolean;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public globalMethods: GlobalMethods,
    public httpService: HttpService,
    public serviceName: ServiceName) {
    this.leads = [];
    this.showLoadMore = true;
  }
  ionViewDidLoad() {
    this.getLeads('');
  }
  getLeads(infiniteScroll){
    let params = {
      user_id:this.globalMethods.userType('id'),
      from_limit: this.leads.length
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.getStudentLeads,params).subscribe(
      data=>{
        this.globalMethods.loaderStop();
        if(data[0].data.length!=0){
          if(infiniteScroll!=''){
            infiniteScroll.enable(true);
            this.showLoadMore = true;
          }
          for(let value of data[0].data){
            this.leads.push(value);
          }
        }else{
          if(infiniteScroll!=''){
            infiniteScroll.complete();
            this.showLoadMore = false;
            infiniteScroll.enable(false);
          }
        }
      },
      error=>{
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      });
  }
  openLeadDetails(lead) {
    this.navCtrl.push(StudentLeadDetailsPage,{selecteLead:lead});
  }
  postLead() {
    this.navCtrl.push(StudentPostLeadPage);
  }

}
