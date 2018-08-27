import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalMethods } from '../../../providers/global-methods';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../../providers/validation-service';

@IonicPage()
@Component({
  selector: 'page-student-post-lead',
  templateUrl: 'student-post-lead.html',
  providers: [HttpService, GlobalMethods, ServiceName, ValidationService]
})
export class StudentPostLeadPage {
  leadForm: any;
  locations: any;
  courses: any;
  teachingTypes: any;
  leadData = {
    location_id: '',
    course_id: '',
    teaching_type_id: '',
    priority_of_requirement: '',
    present_status: '',
    duration_needed: '',
    budget: '',
    budget_type: '',
    title_of_requirement: '',
    requirement_details: ''
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public globalMethods: GlobalMethods,
    public httpService: HttpService,
    public serviceName: ServiceName,
    public validationService: ValidationService,
    public formBuilder: FormBuilder) {
    this.leadForm = formBuilder.group({
      location: ['', Validators.compose([Validators.required])],
      course: ['', Validators.compose([Validators.required])],
      teachingType: ['', Validators.compose([Validators.required])],
      priorityOfRequirement: ['', Validators.compose([Validators.required])],
      presentStatus: [''],
      duration: ['', Validators.compose([Validators.required])],
      budget: [''],
      budgetType: [''],
      titleOfRequirement: ['', Validators.compose([Validators.required])],
      requirementDetails: ['']
    });

  }

  ionViewDidLoad() { this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.getLeadData, '').subscribe(
      data => {
        this.globalMethods.loaderStop(); this.locations = data[0].data.locations;
        this.courses = data[0].data.courses;
        this.teachingTypes = data[0].data.teaching_types;
      },
      error => {
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      },
      () => {

      }
    );
  }


  postLead() {

    let params = {
      user_id: this.globalMethods.userType('id'),
      lead_data: this.leadData
    }

    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.postLead, params).subscribe(
      data => {
        this.globalMethods.loaderStop();
        if (data[1].response.status == 1) {
          this.globalMethods.showToast(data[1].response.message);
        } else {
          this.globalMethods.showToast(data[1].response.message);
        }
      },
      error => {
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      }

    );
  }

}
