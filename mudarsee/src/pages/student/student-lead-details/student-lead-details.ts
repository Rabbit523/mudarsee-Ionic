import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { GlobalMethods } from '../../../providers/global-methods';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';
import { StudentLeadsPage } from '../student-leads/student-leads';

@IonicPage()
@Component({
  selector: 'page-student-lead-details',
  templateUrl: 'student-lead-details.html',
  providers:[HttpService,GlobalMethods,ServiceName]
})
export class StudentLeadDetailsPage {
  lead:any;
  leadStatus:any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public globalMethods: GlobalMethods,
              public httpService: HttpService,
              public serviceName: ServiceName,
              public alertCtrl: AlertController) {
              this.lead = this.navParams.data.selecteLead;
              this.leadStatus = this.lead.status;
  }
  ionViewDidLoad() {}

  updateLeadStatus() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Change Lead Status');
    alert.addInput({
      type: 'radio',
      label: 'Opened',
      value: 'Opened',
      checked: this.lead.status=='Opened' ? true:false
    });
     alert.addInput({
      type: 'radio',
      label: 'Closed',
      value: 'Closed',
      checked: this.lead.status=='Closed' ? true:false
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        let params = {
          user_id: this.globalMethods.userType('id'),
          lead_id: this.lead.id,
          lead_status: data
        }
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.updateStudentLeadStatus,params).subscribe(
          data=>{
            this.globalMethods.loaderStop();
            if(data[1].response.status==1) {
              this.navCtrl.setRoot(StudentLeadsPage);
              this.globalMethods.showToast(data[1].response.message);
            } else {
              this.globalMethods.showToast(data[1].response.message);
            }
          },
          error=>{
            this.globalMethods.loaderStop();
            this.globalMethods.showToast(JSON.stringify(error));
          },
          ()=>{});
      }
    });
    alert.present();
  }
}
