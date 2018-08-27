import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';
import { GlobalMethods } from '../../../providers/global-methods';
import { TutorCourseDetailsPage } from '../tutor-course-details/tutor-course-details';
import { TutorAddCoursePage } from '../tutor-add-course/tutor-add-course';

@Component({
  selector: 'page-tutor-courses',
  templateUrl: 'tutor-courses.html',
  providers: [HttpService, GlobalMethods, ServiceName]
})
export class TutorCoursesPage {
  courses = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService,
    public serviceName: ServiceName,
    public globalMethods: GlobalMethods,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController) {

  }
  ionViewDidLoad() {
    this.loadTuttorCourses();
  }
  loadTuttorCourses() {
    let params = {
      user_id: this.globalMethods.userType('id')
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
  // OPEN COURSE DETAILS
  openCourseDetails(course) {
    this.navCtrl.push(TutorCourseDetailsPage, { selectedCourse: course });
  }
  // ADD TUTOR COURSES
  addTutorCourse() {
    let tutorAddCourseModal = this.modalCtrl.create(TutorAddCoursePage);
    tutorAddCourseModal.onDidDismiss(response => {
      let data: any = response;
      if (data.response.status == 1) {
        this.loadTuttorCourses();
      } else {
        this.globalMethods.showToast(data[1].response.message);
      }

    });
    tutorAddCourseModal.present();
  }

  // DELETE COURSE
  deleteCourse(course) {
    let deleteConfirm = this.alertCtrl.create({
      title: 'Delete Course',
      message: 'Do you want to delete course ?' + course.course_name,
      buttons: [
        {
          text: 'No',
          handler: () => {
          }
        },
        {
          text: 'Yes',
          handler: () => {
            let params = {
              user_id: this.globalMethods.userType('id'),
              id: course.id
            }

            this.globalMethods.loaderStart();
            this.httpService.httpServicePost(this.serviceName.deleteTutorCourse, params).subscribe(
              data => {
                this.globalMethods.loaderStop();
                if (data[1].response.status == 1) {
                  this.globalMethods.showToast(data[1].response.message);
                  this.loadTuttorCourses();
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
      ]
    });
    deleteConfirm.present();
  }

}
