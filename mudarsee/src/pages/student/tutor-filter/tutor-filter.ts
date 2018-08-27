import { Component, ApplicationRef } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { GlobalMethods } from '../../../providers/global-methods';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';
import { FindTutorPage } from '../find-tutor/find-tutor';

@Component({
  selector: 'page-tutor-filter',
  templateUrl: 'tutor-filter.html',
  providers: [HttpService, GlobalMethods, ServiceName]
})
export class TutorFilterPage {
  filterTutors: string = "course";
  courses = [];
  selectedCourses: any;
  locations = [];
  selectedLocations: any;
  teachingTypes = [];
  selectedTeachingTypes: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public globalMethods: GlobalMethods,
    public httpService: HttpService,
    public serviceName: ServiceName,
    public alertCtrl: AlertController,
    private _applicationRef: ApplicationRef,
  ) { }
  ionViewDidLoad() {    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.getFilterData, '').subscribe(
      data => {
        this.globalMethods.loaderStop();
        this.courses = [];
        if (data[0].data[0].length != 0) {
          var courses = data[0].data[0];
          for (let course of courses) {
            var temp = {
              id: course.id,
              course_name: course.name,
              avail_records_cnt: course.avail_records_cnt,
              checked: false
            };
            this.courses.push(temp);
          }
        }
               this.locations = [];
              if (data[0].data[1].length != 0) {
          var locations = data[0].data[1];
          for (let location of locations) {
                  var templ = {
                    id: location.id,
                     location_name: location.location_name,
                     avail_records_cnt: location.avail_records_cnt,
                      checked: false
                     };
                     this.locations.push(templ);
                   }
                 }
                 this.teachingTypes = [];
                if (data[0].data[2].length != 0) {
          var teachings = data[0].data[2];
          for (let teaching of teachings) {
                    var tempt = {
                      id: teaching.id,
                       teaching: teaching.teaching_type,
                       avail_records_cnt: teaching.avail_records_cnt,
                        checked: false
                       };
                       this.teachingTypes.push(tempt);
                     }
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
  dismiss() {
    this.viewCtrl.dismiss();
 }
  setSegment(value) {
   this.filterTutors = value;
    let self = this;
   setTimeout(() => {
     self._applicationRef.tick();
    }, 50);
  }
 getFilterTutors() {
    this.selectedCourses = [];
    var courses = this.courses;
    for (let course of courses) {
     if (course.checked == true) {
        this.selectedCourses.push(course.id);
      }
    }
    this.selectedLocations = [];
    var locations = this.locations;
    for (let location of locations) {
      if (location.checked == true) {
      this.selectedLocations.push(location.id);
    }
  }
  this.selectedTeachingTypes = [];
 var teachings = this.teachingTypes;
    for (let teaching of teachings) {
      if (teaching.checked == true) {
      this.selectedTeachingTypes.push(teaching.id);
    }
  }
  if (this.selectedCourses.length == 0 && this.selectedLocations.length == 0 && this.selectedTeachingTypes.length == 0) {
   let alert = this.alertCtrl.create({
        title: 'Filter',
        subTitle: 'Please select Course(s) or Location(s) or Teaching type(s) to filter tutors',
      buttons: ['OK']
      });
     alert.present();
    } else {
   this.navCtrl.push(FindTutorPage, { courses: this.selectedCourses, locations: this.selectedLocations, teachings: this.selectedTeachingTypes });
 }
  }

  changeCourse(course) {
    for (let item of this.courses){
      if (item.course_name == course){
        item.checked = !item.checked
      }
    }
  }

  changeLocation(location) {
    for (let item of this.locations){
      if (item.location_name == location){
        item.checked = !item.checked
      }
    }
  }

  changeTeaching(teaching) {
    for (let item of this.teachingTypes){
      if (item.teaching == teaching){
        item.checked = !item.checked
      }
    }
  }

}
