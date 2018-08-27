import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TutorsPage } from '../tutors/tutors';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';
import { GlobalMethods } from '../../../providers/global-methods';

@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
  providers: [HttpService, ServiceName]
})
export class CoursesPage {
  courses: any;
  profileImage = '';
  showLoadMore: boolean;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService,
    public serviceName: ServiceName,
    public globalMethods: GlobalMethods) {
    this.profileImage = this.serviceName.profileImages;
    this.courses = [];
    this.showLoadMore = true;
  }

  ionViewDidLoad() {
    this.getCourses('');
  }
  getCourses(infiniteScroll) {
    let params = {
      from_limit: this.courses.length
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.get_all_courses, params).subscribe(
      data => {
        this.globalMethods.loaderStop();
        if (data[0].data.length != 0) {
          if (infiniteScroll != '') {
            infiniteScroll.enable(true);
            this.showLoadMore = true;
          }
          for (let val of data[0].data) {
            let course = {
              id: val.id,
              name: val.name,
              image: this.serviceName.coursesImage + val.image,
              description: val.description
            }
            this.courses.push(course);
          }
        } else {
          if (infiniteScroll != '') {
            infiniteScroll.complete();
            this.showLoadMore = false;
            infiniteScroll.enable(false);
          }
        }
      },
      error => {
        this.globalMethods.loaderStop();
        this.globalMethods.showToast("Data loading error");
      });
  }
  openTutors(course) {
    this.navCtrl.push(TutorsPage, { course: course });
  }

}
