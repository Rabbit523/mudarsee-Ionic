import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../../providers/validation-service';
import { HttpService } from '../../../providers/http-service';
import { GlobalMethods } from '../../../providers/global-methods';
import { ServiceName } from '../../../providers/service';

@Component({
  selector: 'page-send-message',
  templateUrl: 'send-message.html',
  providers: [HttpService, ServiceName, GlobalMethods, ValidationService]
})
export class SendMessagePage {
  credits_required: number;
  lead: any;
  messageForm: any;
  messageData = {
    firstName: '',
    email: '',
    phone: '',
    msg: '',
    student_id: '',
    student_slug: '',
    lead_id: '',
    tutor_id: ''
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService,
    public formBuilder: FormBuilder,
    public globalMethods: GlobalMethods,
    public serviceName: ServiceName,
    public viewCtrl: ViewController) {
    this.credits_required = this.globalMethods.siteValue('credits_for_sending_message');
    this.lead = this.navParams.data.lead;
    this.messageForm = formBuilder.group({
      firstName: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, ValidationService.emailValidator])],
      phone: ['', Validators.compose([Validators.required])],
      message: ['', Validators.compose([Validators.required])]
    });
    this.messageData.firstName = this.globalMethods.userType('username');
    this.messageData.email = this.globalMethods.userType('email');
    this.messageData.phone = this.globalMethods.userType('phone');
    this.messageData.tutor_id = this.globalMethods.userType('id');
    this.messageData.student_id = this.lead.id;
    this.messageData.lead_id = this.lead.lead_details[0].id;
    this.messageData.student_slug = this.lead.slug;
  }

  ionViewDidLoad() { }

  sendMessage() {
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.sendLeadMessage, this.messageData).subscribe(
      data => {
        this.globalMethods.loaderStop();
        if (data[1].response.status == 1) {
          this.globalMethods.setter(this.serviceName.userProfile, JSON.stringify(data[0].data[0]));
          this.viewCtrl.dismiss();
          this.globalMethods.showToast(data[1].response.message);
        } else {
          this.globalMethods.showToast(data[1].response.message);
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

  dismiss() {
    this.viewCtrl.dismiss(SendMessagePage);
  }

}
