import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { HttpService } from "../../providers/http-service";
import { ServiceName } from "../../providers/service";
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../providers/validation-service';
import { GlobalMethods } from '../../providers/global-methods';
import { LoginPage } from "../../pages/login/login";
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
  providers:[HttpService,ServiceName,GlobalMethods,ValidationService]
})
export class ForgotPasswordPage {
  forgotPasswordForm:any;
  forgotPasswordData = {
    email:''
  };
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private menuCtrl: MenuController,
    public httpService:HttpService,
    public serviceName:ServiceName,
    public formBuilder: FormBuilder,
    public validationService:ValidationService,
    public globalMethods:GlobalMethods) {
    this.menuCtrl.enable(false);
    this.forgotPasswordForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, ValidationService.emailValidator])]
    });
    this.forgotPasswordData.email='';
  }

  forgotPassword(){
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.forgot_password,this.forgotPasswordData).subscribe(
      data =>{
        this.globalMethods.loaderStop();
        if(data[1].response.status==1){
          this.globalMethods.showToast(data[1].response.message);
          this.navCtrl.push(LoginPage);
        }else{
          this.globalMethods.showToast(data[1].response.message);
        }
      },
      error =>{
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      },
      ()=>{});
  }

  ionViewDidLoad() {}

}
