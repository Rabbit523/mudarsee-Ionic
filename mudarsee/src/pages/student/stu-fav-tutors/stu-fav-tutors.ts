import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { GlobalMethods } from '../../../providers/global-methods';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';
import { StuTutorProfilePage } from '../stu-tutor-profile/stu-tutor-profile';

@IonicPage()
@Component({
  selector: 'page-stu-fav-tutors',
  templateUrl: 'stu-fav-tutors.html',
  providers:[HttpService,GlobalMethods,ServiceName]
})
export class StuFavTutorsPage {
  favTutors=[];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public globalMethods: GlobalMethods,
              public httpService: HttpService,
              public serviceName: ServiceName,
              public alertCtrl: AlertController) {
  }
  ionViewDidLoad() {
    let params = {
      student_id : this.globalMethods.userType('id')
    };
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.getStudentFavTutors,params).subscribe(
      data=>{
        this.globalMethods.loaderStop();
        if(data[0].data.length!=0) {
          this.favTutors = data[0].data;
        } 
      },
      error=>{
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      },  
      ()=>{

      }
    );
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

  removeTutor(fav_id) {
    let params = {
      fav_id:fav_id,
      student_id:this.globalMethods.userType('id')
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.removeFavTutor,params).subscribe(
      data=>{
        this.globalMethods.loaderStop();
        if(data[0].data.length!=0) {
          this.favTutors = data[0].data;
        }
        this.globalMethods.showToast(data[1].response.message);
      },
      error=>{
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      },
      ()=>{});
  }

}
