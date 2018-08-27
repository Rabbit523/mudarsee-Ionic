import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalMethods } from '../../../providers/global-methods';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';
import { AddTutorExperiencePage } from "../add-tutor-experience/add-tutor-experience";

@Component({
  selector: 'page-tutor-experience',
  templateUrl: 'tutor-experience.html',
  providers: [HttpService, GlobalMethods, ServiceName]
})
export class TutorExperiencePage {
  experiences = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService,
    public serviceName: ServiceName,
    public globalMethods: GlobalMethods) {
  }

  ionViewDidLoad() {
    let param = {
      user_id: this.globalMethods.userType('id')
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.tutorExperiences, param).subscribe(
      data => {
        this.globalMethods.loaderStop();
        this.experiences = data[0].data;
      },
      error => {
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      },
      () => {

      }
    );
  }

  addExperience() {
    this.navCtrl.push(AddTutorExperiencePage);
  }

  editExperience(experience) {
    this.navCtrl.push(AddTutorExperiencePage, { experience: experience });
  }

}
