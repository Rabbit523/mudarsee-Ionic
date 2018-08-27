import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalMethods } from '../../../providers/global-methods';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';

@IonicPage()
@Component({
  selector: 'page-student-courses',
  templateUrl: 'student-courses.html',
  providers:[HttpService,GlobalMethods,ServiceName]
})
export class StudentCoursesPage {
  courses=[];
  selected_courses=[];
  shownGroup = null;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public globalMethods: GlobalMethods,
    public httpService: HttpService,
    public serviceName: ServiceName,
    ) {

  }

  ionViewDidLoad() {
    let params = {
      user_id:this.globalMethods.userType('id')
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.getStudentCourses,params).subscribe(
      data=>{
        this.globalMethods.loaderStop();
        if(data[0].data.length!=0) {
          for(let val of data[0].data) {
            var element = {
              parentcourse_name:val.parent_course_name,
              sub_courses:[]
            }
            for(let sub of val.courses) {
              var checked=false;
              if(sub.child_course_id==sub.checked_id) {
                var checked=true;
              }
              var temp = {
                child_course_id:sub.child_course_id,
                child_course_name:sub.child_course_name,
                checked:checked
              }
              element.sub_courses.push(temp);
            }
            this.courses.push(element);
          }
        }
      },
      error=>{
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      },
      ()=>{}
      );
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  };
  isGroupShown(group) {
    return this.shownGroup === group;
  };
  updateCourses() {
    this.selected_courses=[];
    for(let val of this.courses){
      for(let sub of val.sub_courses){
        if(sub.checked==true){
          var selected_course = {
            course_id:sub.child_course_id
          }
          this.selected_courses.push(selected_course);
        }
      }
    }
    let params = {
      user_id:this.globalMethods.userType('id'),
      courses:this.selected_courses
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.updateStudentCourses,params).subscribe(
      data=>{
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(data[1].response.message);
      },
      error=>{
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      },
      ()=>{});
  }

}
