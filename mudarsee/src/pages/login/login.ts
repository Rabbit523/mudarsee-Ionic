import { Component } from '@angular/core';
import { NavController, NavParams, MenuController,Platform } from 'ionic-angular';
import { HttpService } from '../../providers/http-service';
import { ServiceName } from "../../providers/service";
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../providers/validation-service';
import { GlobalMethods } from '../../providers/global-methods';
import { MyApp } from '../../app/app.component';
import { RegisterPage } from '../register/register';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import {StudentDashboardPage} from '../student/student-dashboard/student-dashboard';
import {TutorsDasboardPage} from '../tutor/tutors-dasboard/tutors-dasboard';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';

import { FindTutorPage } from '../student/find-tutor/find-tutor';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[HttpService,ServiceName,GlobalMethods,ValidationService]
})
export class LoginPage {
  loginForm: any;
  userType:any;
  loginData = {
    email: '',
    password: '',
    device_id:''
  };
  submitAttempt:boolean;
  googleApi:any;
  submitted:boolean;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private menuCtrl: MenuController,
    public httpService:HttpService,
    public serviceName:ServiceName,
    public formBuilder: FormBuilder,
    public validationService:ValidationService,
    public globalMethods:GlobalMethods,
    public platform:  Platform,
    private googlePlus:GooglePlus,
    private facebook: Facebook
    ) {
    localStorage.setItem('pageName','LoginPage');
    this.menuCtrl.enable(false);
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, ValidationService.emailValidator])],
      password: ['', Validators.compose([Validators.required, ValidationService.passwordValidator])]
    });
    this.googleApi='';
    this.loginData.email= "";
    this.loginData.password= "";
    this.loginData.device_id = "";
  }
  ionViewDidLoad() {}
  openRegisterPage() {
    this.navCtrl.push(RegisterPage);
  }
  openForgotPassowrdPage() {
    this.navCtrl.push(ForgotPasswordPage);
  }
  login() {
    //test
  
    this.globalMethods.loaderStart();
    this.loginData.device_id = this.globalMethods.getter('oneSignalId');
    this.httpService.httpServicePost(this.serviceName.login,this.loginData)
    .subscribe(
      data  => {
        this.globalMethods.loaderStop();
        if(data[1].response.status==1){
          if(data[0].data[0].id && data[0].data[0].id!=null){
            this.globalMethods.setter(this.serviceName.userProfile,JSON.stringify(data[0].data[0]));
            if(data[0].data[0].user_belongs_group== this.serviceName.student){
              MyApp.prototype.studentMenu();
              this.navCtrl.setRoot(FindTutorPage);
              // this.navCtrl.setRoot(StudentDashboardPage);
            }else{
              MyApp.prototype.tutorMenu();
              this.navCtrl.setRoot(TutorsDasboardPage);
            }
          }else{
            this.globalMethods.showToast(data[1].response.message);
          }
        }else{ 
          this.globalMethods.showToast(data[1].response.message);
        }
        this.globalMethods.showToast(data[1].response.message);
      },
      error => {
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      },
      () => {
      });      
  }
  // Google plus login code
  googleLogin(){
    let self = this;
    this.googlePlus.login({}).then(
      data => {
        let res = data.displayName.split(" ");
        let param={
          email: data.email,
          first_name: res[0],
          last_name: res[1],
          phone: '',
          dob: '',
          platform: 'android',
          device_id: self.globalMethods.getter(self.serviceName.oneSignalId),
          registered_by: 'google',
          social_id: data.userId,
          social_token: data.idToken,
          image_url: data.imageUrl
        }
        self.globalMethods.loaderStart();
        self.httpService.httpServicePost(self.serviceName.social_login,param).subscribe(
          data => {
            self.globalMethods.loaderStop();
            if(data[1].response.status==1 && data[0].data[0].id && data[0].data[0].id!=null){
              self.globalMethods.setter(self.serviceName.userProfile,JSON.stringify(data[0].data[0]));
              if(data[0].data[0].user_belongs_group== self.serviceName.student){
                MyApp.prototype.studentMenu();
                self.navCtrl.setRoot(StudentDashboardPage);
              } else {
                MyApp.prototype.tutorMenu();
                self.navCtrl.setRoot(TutorsDasboardPage);
              }
              self.globalMethods.showToast(data[1].response.message);
            }else if(data[1].response.status == 0){
              self.navCtrl.push(RegisterPage,{userData:param});
              self.globalMethods.showToast(data[1].response.message);
            }else{
              self.globalMethods.showToast(data[1].response.message);
            } 
          },
          error =>{
            self.globalMethods.loaderStop();
          },
          () => {});
      }).catch(
      err => {

      });
    }


    //Facebook code
    facebookSignUp(){ 
      let self = this;
      let permissions = new Array();
      permissions = ["public_profile","email"];
      this.facebook.login(permissions).then(function(response){
        self.globalMethods.loaderStart();
        let url = "https://graph.facebook.com/me?fields=id,gender,first_name,last_name,picture,email,birthday&access_token="+response.authResponse.accessToken;
        self.httpService.httpSocialLoginsGet(url).subscribe(
          data =>{
            self.globalMethods.loaderStop();
            var param={
              first_name: data.first_name,
              last_name: data.last_name,
              email: data.email,
              phone:'',
              registered_by: 'facebook',
              device_id: self.globalMethods.getter(self.serviceName.oneSignalId),
              platform: 'android',
              social_id: data.id,
              social_token: response.authResponse.accessToken,
              image_url:  'https://graph.facebook.com/'+data.id+'/picture?type=large',
            }
            self.globalMethods.loaderStart();
            self.httpService.httpServicePost(self.serviceName.social_login,param).subscribe(
              data => {
                self.globalMethods.loaderStop();
                if(data[1].response.status==1 && data[0].data[0].id && data[0].data[0].id!=null){
                  self.globalMethods.setter(self.serviceName.userProfile,JSON.stringify(data[0].data[0]));
                  if(data[0].data[0].user_belongs_group== self.serviceName.student){
                    MyApp.prototype.studentMenu();
                    self.navCtrl.setRoot(StudentDashboardPage);
                  } else {
                    MyApp.prototype.tutorMenu();
                    self.navCtrl.setRoot(TutorsDasboardPage);
                  }
                  self.globalMethods.showToast(data[1].response.message);
                }else if(data[1].response.status == 0){
                  self.navCtrl.push(RegisterPage,{userData:param});
                  self.globalMethods.showToast(data[1].response.message);
                }else{
                  self.globalMethods.showToast(data[1].response.message);
                }
              },
              error =>{
                self.globalMethods.loaderStop();
              },
              () => {}
              );
          },
          error =>{
          });
      }, function(error){
      });
    }

  }
