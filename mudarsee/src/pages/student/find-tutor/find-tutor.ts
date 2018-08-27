import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, MenuController } from 'ionic-angular';
import { GlobalMethods } from '../../../providers/global-methods';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';
import { StuTutorProfilePage } from '../stu-tutor-profile/stu-tutor-profile';
import { TutorFilterPage } from '../tutor-filter/tutor-filter';

@IonicPage()
@Component({
  selector: 'page-find-tutor',
  templateUrl: 'find-tutor.html',
  providers:[HttpService,GlobalMethods,ServiceName]
})
export class FindTutorPage {
  tutors:any;
  courses=[];
  locations=[];
  teaching_types=[];
  showLoadMore:boolean;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public globalMethods: GlobalMethods,
              public httpService: HttpService,
              public serviceName: ServiceName,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController,
              private menuCtrl: MenuController) {
              localStorage.setItem('pageName','FindTutorPage');
              this.menuCtrl.enable(true);
              this.courses = this.navParams.data.courses;
              this.locations = this.navParams.data.locations;
              this.teaching_types = this.navParams.data.teachings;   
              this.tutors = [];
              this.showLoadMore = true;

  }
  ionViewDidLoad() {
    this.getTutors('');
  }
  getTutors(infiniteScroll){
    let params = {
      student_id:this.globalMethods.userType('id'),
      courses: this.courses,
      locations:this.locations,
      teaching_types:this.teaching_types,
      from_limit: this.tutors.length
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.getSearchTutors,params).subscribe(
      data  => {
        this.globalMethods.loaderStop();
        if(data[0].data.length!=0){
          if(infiniteScroll!=''){
            infiniteScroll.enable(true);
            this.showLoadMore = true;
          }
          for(let val of data[0].data){
            this.tutors.push(val);
          }
        }else{
          if(infiniteScroll!=''){
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
  openTutorProfile(tutor) {
    if(tutor.availability_status==0) {
      let alert = this.alertCtrl.create({
        title:'Tutor Status',
        subTitle:'This Tutor Is Not Available Now',
        buttons:['OK']
      });
      alert.present();
    } else {
      this.navCtrl.push(StuTutorProfilePage,{tutor:tutor});
    }
  }

  openFilterTutors() {
    let filterTutors = this.modalCtrl.create(TutorFilterPage);
    filterTutors.present();
  }
  favTutor(tutor) {
    let params = {
      student_id: this.globalMethods.userType('id'),
      tutor_id: tutor.id,
      fav_id:tutor.fav_id,
      courses: this.courses,
      locations:this.locations,
      teaching_types:this.teaching_types
    };

    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.addFavTutor,params).subscribe(
      data=>{
        this.globalMethods.loaderStop();
         if(data[0].data.length!=0) {
          this.tutors = data[0].data;
        }
        this.globalMethods.showToast(data[1].response.message);
      },
      error=>{
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      },
      ()=>{}
    );
  }

}
