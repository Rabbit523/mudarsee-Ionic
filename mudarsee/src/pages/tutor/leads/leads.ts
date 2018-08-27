import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';
import { GlobalMethods } from '../../../providers/global-methods';
import { LeadDetailsPage } from '../lead-details/lead-details';
import { FilterPage } from '../filter/filter';
import { LoginPage } from "../../login/login";

@Component({
  selector: 'page-leads',
  templateUrl: 'leads.html',
  providers: [HttpService, ServiceName, GlobalMethods]
})

export class LeadsPage {
  leads = [];
  profileImage = '';
  courses = [];
  locations = [];
  teaching_types = [];
  showLoadMore: boolean;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService,
    public globalMethods: GlobalMethods,
    public serviceName: ServiceName,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController
  ) {
    this.profileImage = this.serviceName.profileImages;
    this.courses = this.navParams.data.courses;
    this.locations = this.navParams.data.locations;
    this.teaching_types = this.navParams.data.teachings;
    this.leads = [];
    this.showLoadMore = true;
  }

  ionViewDidLoad() {
    this.getLeads('');
  }
  getLeads(infiniteScroll) {
    let params = {
      user_id: this.globalMethods.userType('id'),
      courses: this.courses,
      locations: this.locations,
      teaching_types: this.teaching_types,
      from_limit: this.leads.length
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.get_leads, params).subscribe(
      data => {
        this.globalMethods.loaderStop();
        if (data[0].data.length != 0) {
          if (infiniteScroll != '') {
            infiniteScroll.enable(true);
            this.showLoadMore = true;
          }
          for (let value of data[0].data) {
            this.leads.push(value);
          }
        } else {
          if (infiniteScroll != '') {
            infiniteScroll.complete();
            this.showLoadMore = false;
            infiniteScroll.enable(false);
          }
        }
      },
      error => {
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      });
  }

  openLeadDetails(lead) {
    // CHECK FOR LOGIN
    if (this.globalMethods.userType('id') > 0) {
      if (this.globalMethods.userType('net_credits') >= this.globalMethods.siteValue('credits_for_viewing_lead')) {
        let params = {
          user_id: this.globalMethods.userType('id'),
          lead_id: lead.lead_id
        }
        // CHECK FOR ALREADY VIEWED THE LEAD
        this.httpService.httpServicePost(this.serviceName.checkViewedLead, params).subscribe(
          data => {

            if (data[1].response.status == 1) {
              this.navCtrl.push(LeadDetailsPage, { lead: lead });
            } else {
              this.showConfirm(lead);
            }
          },
          error => {
            this.globalMethods.loaderStop();
            this.globalMethods.showToast(JSON.stringify(error));
          });
      } else {
        this.globalMethods.showToast("You don't have enough credits to view leads");
      }
    } else {
      this.navCtrl.setRoot(LoginPage);
    }
  }

  showConfirm(lead) {
    let credits_for_viewing_lead = this.globalMethods.siteValue('credits_for_viewing_lead');
    let confirm = this.alertCtrl.create({
      title: 'Information',
      message: 'You will be charged <b color="primary">' + credits_for_viewing_lead + '</b> Credits for viewing the lead Are you sure to continue',
      buttons: [
        {
          text: 'No',
          handler: () => {

          }
        },
        {
          text: 'Yes',
          handler: () => {
            // CUT THE CREDITS AND ALLOW TO VIEW THE LEAD
            let params = {
              tutor_id: this.globalMethods.userType('id'),
              lead_id: lead.lead_id,
              student_id: lead.id,
              student_slug: lead.slug
            }
            this.globalMethods.loaderStart();

            // CHECK FOR ALREADY VIEWED THE LEAD
            this.httpService.httpServicePost(this.serviceName.tutorViewLead, params).subscribe(
              data => {
                this.globalMethods.loaderStop();
                if (data[1].response.status == 1) {

                  this.globalMethods.setter(this.serviceName.userProfile, JSON.stringify(data[0].data[0]));
                  this.navCtrl.push(LeadDetailsPage, { lead: lead });
                  this.globalMethods.showToast(data[1].response.status);
                } else {
                  this.globalMethods.showToast(data[1].response.status);
                }
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
      ]
    });
    confirm.present();
  }

  openLeadsFilter() {
    let filterTutors = this.modalCtrl.create(FilterPage);
    filterTutors.present();
  }
}
