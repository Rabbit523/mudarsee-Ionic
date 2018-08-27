import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { HttpService } from '../../../providers/http-service';
import { GlobalMethods } from '../../../providers/global-methods';
import { ServiceName } from '../../../providers/service';
import { SendMessagePage } from '../send-message/send-message';

@Component({
  selector: 'page-lead-details',
  templateUrl: 'lead-details.html',
  providers: [HttpService, ServiceName, GlobalMethods]
})
export class LeadDetailsPage {
  lead_id: any;
  slug: any;
  profileImage = '';
  lead_details = [];
  requirement_details = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService,
    public globalMethods: GlobalMethods,
    public serviceName: ServiceName,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController
  ) {
    this.lead_id = this.navParams.data.lead.lead_id;
    this.slug = this.navParams.data.lead.slug;
    this.profileImage = this.serviceName.profileImages;
  }

  openReviews() { }

  sendMessageModal(lead) {
    let sendMessage = this.modalCtrl.create(SendMessagePage, { lead: lead });
    sendMessage.present();
  }

  ionViewDidLoad() {
    var params = {
      lead_id: this.lead_id,
      slug: this.slug
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.get_lead_details, params).subscribe(
      data => {
        this.globalMethods.loaderStop();
        this.lead_details = data[0].data[0];
        this.requirement_details = data[0].data[0].lead_details[0];
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
