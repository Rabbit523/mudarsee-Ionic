import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../../providers/validation-service';
import { HttpService } from '../../../providers/http-service';
import { GlobalMethods } from '../../../providers/global-methods';
import { ServiceName } from '../../../providers/service';
import { TutorExperiencePage } from "../tutor-experience/tutor-experience";
import moment from 'moment';

@Component({
  selector: 'page-add-tutor-experience',
  templateUrl: 'add-tutor-experience.html',
  providers: [HttpService, ServiceName, GlobalMethods, ValidationService]
})
export class AddTutorExperiencePage {
  maxDate: any;
  experience: any;
  experienceForm: any;
  experienceData = {
    record_id: '',
    user_id: '',
    company: '',
    role: '',
    description: '',
    from_date: '',
    to_date: ''
  }
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService,
    public formBuilder: FormBuilder,
    public globalMethods: GlobalMethods,
    public serviceName: ServiceName) {
    this.experienceForm = formBuilder.group({
      company: ['', Validators.compose([Validators.required])],
      role: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      from_date: ['', Validators.compose([Validators.required])],
      to_date: ['', Validators.compose([Validators.required, ValidationService.toDateValidate])]
    });
    this.maxDate = moment().format('YYYY');
    if (this.navParams.data.experience != undefined) {
      this.experience = this.navParams.data.experience;

      this.experienceData.record_id = this.experience.record_id;
      this.experienceData.company = this.experience.company;
      this.experienceData.role = this.experience.role;
      this.experienceData.description = this.experience.description;

      this.experienceData.from_date = moment(this.experience.from_date).format('YYYY-MM-DD');
      this.experienceData.to_date = moment(this.experience.to_date).format('YYYY-MM-DD');

    }
  }

  ionViewDidLoad() { }

  addExperience() {
    this.experienceData.user_id = this.globalMethods.userType('id');
    this.experienceData.from_date = moment(this.experienceData.from_date).format('MMMM YYYY');
    this.experienceData.to_date = moment(this.experienceData.to_date).format('MMMM YYYY');
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.addExperience, this.experienceData).subscribe(
      data => {
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(data[1].response.message);
        if (data[1].response.status == 1) {
          this.navCtrl.push(TutorExperiencePage);
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
