import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalMethods } from '../../providers/global-methods';
import { HttpService } from '../../providers/http-service';
import { ServiceName } from '../../providers/service';
import { FormBuilder,Validators } from '@angular/forms';
import { ValidationService } from '../../providers/validation-service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
  providers:[HttpService,ServiceName,GlobalMethods,ValidationService]
})
export class ChangePasswordPage {
  changePasswordForm:any;
  data = {
    current_password:'',
    new_password:'',
    new_confirm_password:''
  };
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public globalMethods: GlobalMethods,
    public httpService: HttpService,
    public serviceName: ServiceName,
    public formBuilder: FormBuilder,
    public validationService: ValidationService) {
    this.changePasswordForm = formBuilder.group({
      currentPassword:['',Validators.compose([Validators.required])],
      password:['',Validators.compose([Validators.required])],
      newConfirmPassword:['',Validators.compose([Validators.required,ValidationService.passwordMatchValidator])]
    });
  }

  ionViewDidLoad() {}

  changePassword() {
    let params = {
      email:this.globalMethods.userType('email'),
      data:this.data
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.changePassword,params).subscribe(
      data=>{
        this.globalMethods.loaderStop();
        if(data[1].response.status==1) {
          this.globalMethods.clear();
          this.globalMethods.clearStorage();
          this.navCtrl.push(LoginPage);
          this.globalMethods.showToast(data[1].response.message);
        } else {
          this.globalMethods.showToast(data[1].response.message);
        }
      },
      error=>{
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      },
      ()=>{});
  }
}
