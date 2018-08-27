import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';
import { ValidationService } from '../../../providers/validation-service';
import { GlobalMethods } from '../../../providers/global-methods';

@Component({
  selector: 'page-tutor-add-course',
  templateUrl: 'tutor-add-course.html',
  providers: [HttpService, GlobalMethods, ServiceName, ValidationService]
})
export class TutorAddCoursePage {
  courses = [];
  courseDetails: any;
  addCourseForm: any;
  title: string;
  buttonText: any;
  userType: any;
  addCourseData = {
    course_id: '',
    duration_value: '',
    duration_type: '',
    fee: '',
    content: '',
    time_slots: '',
    days_off: '',
    sort_order: '',
    user_id: '',
    id: ''
  };
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService,
    public serviceName: ServiceName,
    public formBuilder: FormBuilder,
    public validationService: ValidationService,
    public globalMethods: GlobalMethods,
    public viewCtrl: ViewController) {
    this.title = 'Add Course';
    this.buttonText = 'Save';
    this.addCourseForm = formBuilder.group({
      course_id: ['', Validators.compose([Validators.required])],
      duration_value: ['', Validators.compose([Validators.required])],
      duration_type: ['', Validators.compose([Validators.required])],
      fee: ['', Validators.compose([Validators.required])],
      content: ['', Validators.compose([Validators.required])],
      time_slots: ['', Validators.compose([Validators.required])],
      days_off: [''],
      sort_order: ['']
    });
    this.courseDetails = this.navParams.data.course;
    if (this.courseDetails != undefined) {
      this.addCourseData.course_id = this.courseDetails.course_id;
      this.addCourseData.duration_value = this.courseDetails.duration_value;
      this.addCourseData.duration_type = this.courseDetails.duration_type;
      this.addCourseData.fee = this.courseDetails.fee;
      this.addCourseData.content = this.courseDetails.content;
      this.addCourseData.time_slots = this.courseDetails.time_slots;
      this.addCourseData.days_off = this.courseDetails.days_off;
      this.addCourseData.sort_order = this.courseDetails.sort_order;
      this.addCourseData.id = this.courseDetails.id;
      this.title = 'Edit Course';
      this.buttonText = 'Update';
    }
  }

  ionViewDidLoad() {
    let params = {
      from_limit: this.courses.length
    }
    this.httpService.httpServicePost(this.serviceName.get_all_courses, params).subscribe(
      data => {
        this.courses = data[0].data;
      },
      error => {
        this.globalMethods.showToast(JSON.stringify(error));
      });
  }

  addCourse() {
    this.addCourseData.user_id = this.globalMethods.userType('id');
    let selectedValues = this.addCourseData.days_off;
    let daysOff: string = '';
    if (selectedValues.length > 0) {
      for (let value of selectedValues) {
        daysOff += value + ',';
      }
    }
    this.addCourseData.days_off = daysOff;
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.addTutorCourse, this.addCourseData).subscribe(
      data => {
        this.globalMethods.loaderStop();
        if (data[1].response.status == 1) {
          this.globalMethods.showToast(data[1].response.message);
          this.viewCtrl.dismiss(data[1]);
        } else {
          this.globalMethods.showToast(data[1].response.message);
        }
      },
      error => {
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      });
  }

  dismiss() {
    let data = { 'response': 'User Dismissed', 'status': '0' };
    this.viewCtrl.dismiss(data);
  }

}
