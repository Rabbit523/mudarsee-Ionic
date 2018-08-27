import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../../providers/http-service';
import { GlobalMethods } from '../../../providers/global-methods';
import { ServiceName } from '../../../providers/service';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../../providers/validation-service';

@IonicPage()
@Component({
  selector: 'page-student-privacy',
  templateUrl: 'student-privacy.html',
  providers: [HttpService, GlobalMethods, ServiceName, ValidationService]
})
export class StudentPrivacyPage {
  userData: any;
  privacyForm: any;
  availability: string;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public globalMethods: GlobalMethods,
    public httpService: HttpService,
    public serviceName: ServiceName,
    public formBuilder: FormBuilder,
    public validationService: ValidationService) {
    this.privacyForm = formBuilder.group({
      freeDemo: ['', Validators.compose([Validators.required])],
      visibilityInSearch: [''],
      showContact: ['', Validators.compose([Validators.required])],
      availabilityStatus: ['', Validators.compose([Validators.required])]
    });
    this.userData = JSON.parse(this.globalMethods.getter(this.serviceName.userProfile));
  }
  ionViewDidLoad() { }
  updatePrivacySettings() {
    let params = {
      user_id: this.userData.id,
      free_demo: this.userData.free_demo,
      visibility_in_search: this.userData.visibility_in_search,
      show_contact: this.userData.show_contact,
      availability_status: this.userData.availability_status
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.updatePrivacySettings, params).subscribe(
      data => {
        this.globalMethods.loaderStop();
        if (data[1].response.status == 1) {
          this.globalMethods.showToast(data[1].response.message);
          this.globalMethods.setter(this.serviceName.userProfile, JSON.stringify(data[0].data));
        }
        else {
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
}
