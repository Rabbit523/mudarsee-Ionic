import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalMethods } from '../../providers/global-methods';
import { HttpService } from '../../providers/http-service';
import { ServiceName } from '../../providers/service'; 
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../providers/validation-service';
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
  providers:[HttpService,ServiceName,GlobalMethods,ValidationService]
})
export class ContactUsPage {
  contactForm:any;
  contactDetails = {
    first_name:'',
    last_name:'',
    email:'',
    subject:'',
    message:''
  };
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public globalMethods: GlobalMethods,
    public httpService: HttpService,
    public serviceName: ServiceName,
    public formBuilder: FormBuilder,
    public validationService: ValidationService) {
    this.contactForm = formBuilder.group({
      firstName:['',Validators.compose([Validators.required])],
      lastName:['',Validators.compose([Validators.required])],
      email:['',Validators.compose([Validators.required, ValidationService.emailValidator])],
      subject:['',Validators.compose([Validators.required])],
      message:['',Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {}

  contact() {
    let params = this.contactDetails;
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.contact,params).subscribe(
      data=>{
        this.globalMethods.loaderStop();
        if(data[1].response.status==1) {
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
