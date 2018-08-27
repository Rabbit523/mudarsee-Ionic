import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController } from 'ionic-angular';
import { GlobalMethods } from '../../../providers/global-methods';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';
import { FormBuilder,Validators } from '@angular/forms';
import { ValidationService } from '../../../providers/validation-service';
import { MyAddressPage } from '../my-address/my-address';
@IonicPage()
@Component({
  selector: 'page-contact-details',
  templateUrl: 'contact-details.html',
  providers: [HttpService,GlobalMethods,ServiceName,ValidationService]
})
export class ContactDetailsPage {
  userData:any;
  countries:any;
  contactForm:any;
  academic_checked:boolean;
  non_academic_checked:boolean;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public globalMethods: GlobalMethods,
    public httpService: HttpService,
    public serviceName: ServiceName,
    private menuCtrl: MenuController,
    public modalCtrl: ModalController,
    public validationservice: ValidationService,
    public formBuilder:FormBuilder) {
    this.userData = JSON.parse(this.globalMethods.getter(this.serviceName.userProfile));
    this.academic_checked=false;
    if(this.userData.academic_class=='yes') {
      this.academic_checked=true;
    }
    this.userData.academic_class=this.academic_checked;
    this.non_academic_checked=false;
    if(this.userData.non_academic_class=='yes'){
      this.non_academic_checked=true;
    }
    this.userData.non_academic_class=this.non_academic_checked;
    this.contactForm = formBuilder.group({
      city:['',Validators.compose([Validators.required])],
      landMark:['',Validators.compose([Validators.required])],
      country:['',Validators.compose([Validators.required])],
      pinCode: ['',Validators.compose([Validators.required])],
      phone: ['',Validators.compose([Validators.required])],
      academicClass:[''],
      nonAcademicClass:['']
    });
  }
  ionViewDidLoad() {
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.getCountries,'').subscribe(
      data=>{
        this.globalMethods.loaderStop();
        this.countries = data[0].data;
      },
      error=>{
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      },
      ()=>{
      }
      );
  }
  updateContactInfo() {
    let params = {
      user_id: this.userData.id,
      city:this.userData.city,
      land_mark:this.userData.land_mark,
      country:this.userData.country,
      pin_code:this.userData.pin_code,
      phone:this.userData.phone,
      academic_class: (this.userData.academic_class==true) ? 'yes':'no',
      non_academic_class:(this.userData.non_academic_class==true) ? 'yes':'no'
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.updateStudentContactDetails,params).subscribe(
      data=>{
        this.globalMethods.loaderStop();
        if(data[1].response.status==1) {
          this.globalMethods.showToast(data[1].response.message);
          this.globalMethods.setter(this.serviceName.userProfile,JSON.stringify(data[0].data));
          this.navCtrl.setRoot(MyAddressPage);
        } else {
          this.globalMethods.showToast(data[1].response.message);
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
}
