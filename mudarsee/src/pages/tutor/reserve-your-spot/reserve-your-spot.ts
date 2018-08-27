import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../../providers/http-service';
import { GlobalMethods } from '../../../providers/global-methods';
import { ServiceName } from '../../../providers/service';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../../providers/validation-service';

@Component({
  selector: 'page-reserve-your-spot',
  templateUrl: 'reserve-your-spot.html',
  providers: [HttpService, ServiceName, GlobalMethods, ValidationService]
})
export class ReserveYourSpotPage {
  tutor: any;
  tutor_locations = [];
  courses = [];
  time_slots = [];
  reserveForm: any;
  reserveData = {
    course_id: '',
    teaching_type: '',
    prefered_location: '',
    start_date: '',
    time_slot: '',
    message: '',
    content: '',
    credits: '',
    duration_type: '',
    duration_value: '',
    days_off: '',
    tutor_slug: '',
    course_slug: '',
    student_id: '',
    tutor_id: ''
  }
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService,
    public globalMethods: GlobalMethods,
    public formBuilder: FormBuilder,
    public validationService: ValidationService,
    public serviceName: ServiceName
  ) {
    this.tutor = this.navParams.data.tutor;
    this.reserveData.tutor_slug = this.tutor.slug;
    this.reserveData.tutor_id = this.tutor.id;
    this.reserveData.student_id = this.globalMethods.userType('id');
    this.tutor_locations = this.tutor.tutoring_locations_data;
  }


  ionViewDidLoad() {
    let params = {
      user_id: this.tutor.id
    }

    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.tutorCourses, params).subscribe(
      data => {
        this.globalMethods.loaderStop();
        this.courses = data[0].data;
      },
      error => {
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      },
      () => {

      }
    );
  }

  changeCourse() {
    for (let val of this.courses) {
      if (val.course_id == this.reserveData.course_id) {
        this.reserveData.content = val.content;
        this.reserveData.credits = val.fee;
        this.reserveData.duration_value = val.duration_value;
        this.reserveData.duration_type = val.duration_type;
        this.reserveData.days_off = val.days_off;
        this.reserveData.course_slug = val.course_slug;
        this.time_slots = val.time_slots.split(',');
        break;
      }
    }
  }

  requestTutor() {

    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.bookTutorTutor, this.reserveData).subscribe(
      data => {
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(data[1].response.message);
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
