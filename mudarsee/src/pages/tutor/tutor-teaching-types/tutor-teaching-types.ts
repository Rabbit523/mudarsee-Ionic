import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';
import { GlobalMethods } from '../../../providers/global-methods';

@Component({
  selector: 'page-tutor-teaching-types',
  templateUrl: 'tutor-teaching-types.html',
  providers: [HttpService, GlobalMethods, ServiceName]
})
export class TutorTeachingTypesPage {
  teaching_types = [];
  selected_types = [];
  constructor(public navCtrl: NavController,
    public httpService: HttpService,
    public serviceName: ServiceName,
    public globalMethods: GlobalMethods,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let params = {
      user_id: this.globalMethods.userType('id')
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.getTutorTeachingTypes, params).subscribe(
      data => {
        this.globalMethods.loaderStop();
        for (let val of data[0].data) {
          var type = false;
          if (val.checked == 1) {
            type = true;
          }
          var element = {
            id: val.id,
            teaching_type: val.teaching_type,
            checked: type
          }
          this.teaching_types.push(element);
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
    this.selected_types = [];
    for (let val of this.teaching_types) {
      if (val.checked == true) {
        var select_type = {
          teaching_id: val.id
        }
        this.selected_types.push(select_type);
      }

    }
    let params = {
      user_id: this.globalMethods.userType('id'),
      types: JSON.stringify(this.selected_types)
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.updateTutorTeachingTypes, params).subscribe(
      data => {
        this.globalMethods.loaderStop();
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
