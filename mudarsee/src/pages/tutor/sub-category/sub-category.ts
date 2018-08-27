import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';
import { GlobalMethods } from '../../../providers/global-methods';
import { TutorsPage } from '../tutors/tutors';

@Component({
    selector: 'page-sub-category',
    templateUrl: 'sub-category.html',
    providers: [HttpService, ServiceName, GlobalMethods]
})
export class SubCategoryPage {
    courseList = [];
    category_id: any;
    category_name: any;
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public httpService: HttpService,
        public serviceName: ServiceName,
        public globalMethods: GlobalMethods) {
        this.category_id = this.navParams.data.category.id;
        this.category_name = this.navParams.data.category.name;
    }

    ionViewDidLoad() {
        var params = { 'category_id': this.category_id };
        this.httpService.httpServicePost(this.serviceName.get_courses, params)
            .subscribe(
            data => this.handleData(data),
            error => this.globalMethods.showToast(JSON.stringify(error)),
            () => { }
            );
    }

    handleData(response) {
        for (let val of response[0].data) {
            var course = {
                id: val.id,
                name: val.name,
                image: this.serviceName.coursesImage + val.image,
                description: val.description
            }
            this.courseList.push(course);
        }
    }

    getTutors(course) {
        this.navCtrl.push(TutorsPage, { course: course });
    }
}