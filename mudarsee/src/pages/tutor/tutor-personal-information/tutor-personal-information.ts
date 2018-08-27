import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalMethods } from '../../../providers/global-methods';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../../providers/validation-service';

@Component({
  selector: 'page-tutor-personal-information',
  templateUrl: 'tutor-personal-information.html',
  providers: [HttpService, GlobalMethods, ServiceName, ValidationService]
})
export class TutorPersonalInformationPage {
  personalDetailsForm: any;
  userData: any;
  user: any;
  currency_symbol: any;
  per_credit_value: any;
  languages: any;
  selectedLanguages: any;
  resultArray: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService,
    public serviceName: ServiceName,
    public globalMethods: GlobalMethods,
    public validationService: ValidationService,
    public formBuilder: FormBuilder) {
    this.personalDetailsForm = formBuilder.group({
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, ValidationService.emailValidator])],
      dateOfBirth: ['', Validators.compose([Validators.required])],
      gender: [''],
      languageOfTeaching: [''],
      website: [''],
      facebook: [''],
      twitter: [''],
      linkedin: [''],
      paypal_email: ['', Validators.compose([Validators.required, ValidationService.emailValidator])],
      bank_ac_details: ['']
    });

    this.user = {
      photo: this.globalMethods.userType('photo')
    };
    this.userData = JSON.parse(this.globalMethods.getter(this.serviceName.userProfile));
    this.currency_symbol = this.globalMethods.siteValue('currency_symbol');
    this.per_credit_value = this.globalMethods.siteValue('per_credit_value');
    this.selectedLanguages = this.mySplit(this.userData.language_of_teaching);
  }

  ionViewDidLoad() {
    let params = {
      user_id: this.userData.id
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.getKnownLanguages, params).subscribe(
      data => {
        this.globalMethods.loaderStop();
        this.languages = data[0].data;
      },
      error => {
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      },
      () => {

      }
    );
  }

  mySplit(string) {
    this.resultArray = string.split(',');
    return this.resultArray;
  }

  updatePersonalInformation() {
    let params = {
      userData: this.userData,
      language_of_teaching: JSON.stringify(this.selectedLanguages)
    }

    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.updateStudentPersonalDetails, params).subscribe(
      data => {
        this.globalMethods.loaderStop();
        if (data[1].response.status == 1) {
          this.globalMethods.setter(this.serviceName.userProfile, JSON.stringify(data[0].data));
          this.globalMethods.showToast(data[1].response.message);
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
