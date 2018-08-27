import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpService } from '../../../providers/http-service';
import { GlobalMethods } from '../../../providers/global-methods';
import { ServiceName } from '../../../providers/service';

@Component({
  selector: 'page-leads-filter',
  templateUrl: 'leads-filter.html',
  providers: [HttpService, ServiceName, GlobalMethods]
})
export class LeadsFilterPage {
  filterTutors: string = "course";
  cse = [];
  locat = [];
  teachingType = [];
  courses = [];
  locations = [];
  teaching_types = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService,
    public globalMethods: GlobalMethods,
    public serviceName: ServiceName,
    public viewCtrl: ViewController
  ) { }

  ionViewDidLoad() {
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.leads_filter_data, '').subscribe(
      data => {
        this.globalMethods.loaderStop();
        this.courses = data[0].data.course_opts;
        this.locations = data[0].data.location_opts;
        this.teaching_types = data[0].data.teaching_type_opts;
      },
      error => {
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      },
      () => {

      }
    );
  }
  updateCheckedOptions(chBox, event) {
    var cbIdx = this.courses.indexOf(chBox);
    if (event.target.checked) {
      if (cbIdx < 0) {
        this.cse.push(chBox);
      }
    } else {
      if (cbIdx >= 0) {
        this.cse.splice(cbIdx, 1);
      }

    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
