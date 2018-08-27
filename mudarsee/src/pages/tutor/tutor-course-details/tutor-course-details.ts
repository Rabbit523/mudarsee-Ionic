import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { TutorAddCoursePage } from '../tutor-add-course/tutor-add-course';
import { GlobalMethods } from '../../../providers/global-methods';

@Component({
  selector: 'page-tutor-course-details',
  templateUrl: 'tutor-course-details.html',
})
export class TutorCourseDetailsPage {
  courseDetails: any;
  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public globalMethods: GlobalMethods) {
    this.courseDetails = this.navParams.data.selectedCourse;
  }

  editCourse(course) {
    let tutorAddCourseModal = this.modalCtrl.create(TutorAddCoursePage, { course: course });
    tutorAddCourseModal.onDidDismiss(data => {
      if (data.response.status == 1) {
        this.globalMethods.showToast(data[1].response.message);
      } else {
        this.globalMethods.showToast(data[1].response.message);
      }
    });
    tutorAddCourseModal.present();
  }

  ionViewDidLoad() {

  }

}
