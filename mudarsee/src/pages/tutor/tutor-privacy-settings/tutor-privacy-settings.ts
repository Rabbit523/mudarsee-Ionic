import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';
import { ValidationService } from '../../../providers/validation-service';
import { GlobalMethods } from '../../../providers/global-methods';

@Component({
  selector: 'page-tutor-privacy-settings',
  templateUrl: 'tutor-privacy-settings.html',
  providers: [HttpService, GlobalMethods, ServiceName, ValidationService]
})
export class TutorPrivacySettingsPage {
  privacyForm: any;
  privacyData = {
    free_demo: '',
    visibility_in_search: '',
    show_contact: '',
    availability_status: '',
    user_id: ''
  };
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService,
    public serviceName: ServiceName,
    public formBuilder: FormBuilder,
    public validationService: ValidationService,
    public globalMethods: GlobalMethods) {
    this.privacyForm = formBuilder.group({
      free_demo: ['', Validators.compose([Validators.required])],
      visibility_in_search: [''],
      show_contact: ['', Validators.compose([Validators.required])],
      availability_status: ['', Validators.compose([Validators.required])],
    });
    this.privacyData.free_demo = this.globalMethods.userType('free_demo');
    this.privacyData.visibility_in_search = this.globalMethods.userType('visibility_in_search');
    this.privacyData.show_contact = this.globalMethods.userType('show_contact');
    this.privacyData.availability_status = this.globalMethods.userType('availability_status');
    this.privacyData.user_id = this.globalMethods.userType('id');
  }

  ionViewDidLoad() { }

  savePrivacy() {
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.setTutorPrivacySettings, this.privacyData).subscribe(
      data => {
        this.globalMethods.loaderStop();
        if (data[1].response.status == 1) {
          this.globalMethods.setter(this.serviceName.userProfile, JSON.stringify(data[0].data));
        }
        this.globalMethods.showToast(data[1].response.message);
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
