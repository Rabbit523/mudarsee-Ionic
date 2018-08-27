import { Component } from '@angular/core';
import { NavController, NavParams, MenuController,Platform } from 'ionic-angular';
import { HttpService } from '../../providers/http-service';
import { ServiceName } from "../../providers/service";
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../providers/validation-service';
import { GlobalMethods } from '../../providers/global-methods';
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers:[HttpService,ServiceName,GlobalMethods,ValidationService]
})
export class RegisterPage {
  registerForm: any;
  userType:any;
  phoneCodes = [];
  registerData = {
    email: '',
    password: '',
    group:'',
    firstName:'',
    lastName:'',
    phoneCode:'',
    phone:'',
    pincode:'',
    confirmPassword:'',
    device_id:''
  };

  submitAttempt:boolean;
  submitted:boolean;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private menuCtrl: MenuController,
    public httpService:HttpService,
    public serviceName:ServiceName,
    public formBuilder: FormBuilder,
    public validationService:ValidationService,
    public globalMethods:GlobalMethods,
    public platform:  Platform) {
    this.menuCtrl.enable(false);
    this.registerForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, ValidationService.emailValidator])],
      password: ['', Validators.compose([Validators.required, ValidationService.passwordValidator])],
      firstName: ['', Validators.compose([Validators.required])],
      lastName:['', Validators.compose([])],
      group:['', Validators.compose([Validators.required])],
      phoneCode:['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required,ValidationService.mobileValidator])],
      pincode: ['', Validators.compose([Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.required,ValidationService.passwordMatchValidator])]
    });
    this.registerData.email= "";
    this.registerData.password= "";
    this.registerData.group="";
    this.registerData.firstName="";
    this.registerData.lastName="";
    this.registerData.phone="";
    this.registerData.phoneCode="";
    this.registerData.pincode="";
    this.registerData.confirmPassword="";
    this.registerData.device_id = this.globalMethods.getter('oneSignalId');
  }

  ionViewDidLoad() {
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.get_phone_codes,'').subscribe(
      data =>{
        this.globalMethods.loaderStop();
        this.phoneCodes = data[0].data;
      },
      error=>{
        this.globalMethods.loaderStop();
      });
  }

  navToLoginPage(){
    this.navCtrl.setRoot(LoginPage);
  }

  register()
  {
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.register,this.registerData).subscribe(
      data => {
        this.globalMethods.loaderStop();
        if(data[1].response.status==1){
          this.navCtrl.push(LoginPage);
          this.globalMethods.showToast(data[1].response.message);
        }else{
          this.globalMethods.showToast(data[1].response.message);
        }
      },
      error => {
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      });
  }
}
