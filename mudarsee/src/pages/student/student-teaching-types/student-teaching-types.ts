import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../../providers/http-service';
import { GlobalMethods } from '../../../providers/global-methods';
import { ServiceName } from '../../../providers/service';

@IonicPage()
@Component({
  selector: 'page-student-teaching-types',
  templateUrl: 'student-teaching-types.html',
  providers: [HttpService, GlobalMethods, ServiceName]
})
export class StudentTeachingTypesPage {
  teaching_types = [];
  selected_teaching_types = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public globalMethods: GlobalMethods,
    public httpService: HttpService,
    public serviceName: ServiceName) {

  }

  ionViewDidLoad() {
    let params = {
      user_id: this.globalMethods.userType('id')
    }

    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.getStudentTeachingTypes, params).subscribe(
      data => {
        this.globalMethods.loaderStop();
        if (data[0].data.length != 0) {
          var result_length = data[0].data.length;
          for (var i = 0; i < result_length; i++) {
            var element;
            var checked = false;
            if (data[0].data[i].checked == 1) {
              checked = true;
            }
            element = {
              id: data[0].data[i].id,
              teaching_type: data[0].data[i].teaching_type,
              checked: checked
            }
            this.teaching_types.push(element);
          }
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
  updateTeachingTypes() {

    for (let val of this.teaching_types) {
      if (val.checked == true) {
        this.selected_teaching_types.push(val);
      }
    }
    let params = {
      student_id: this.globalMethods.userType('id'),
      teaching_types: this.selected_teaching_types
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.updateStudentTeachingTypes, params).subscribe(
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
      },
      () => {

      }
    );
  }
}
