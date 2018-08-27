import { Component, ViewChild,ApplicationRef, } from '@angular/core';
import { Nav, Platform,Events,MenuController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';

//transelate
import { TranslateService} from 'ng2-translate';
import { Storage } from '@ionic/storage';
// Pages
import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { CertificatesPage } from "../pages/certificates/certificates";
import { BlogPage } from "../pages/blog/blog";
//tutor
import { TutorsDasboardPage } from '../pages/tutor/tutors-dasboard/tutors-dasboard';
import { BookingPage } from '../pages/tutor/booking/booking';
import { TutorCoursesPage } from '../pages/tutor/tutor-courses/tutor-courses';
import { TutorLocationsPage } from '../pages/tutor/tutor-locations/tutor-locations';
import { TutorTeachingTypesPage } from '../pages/tutor/tutor-teaching-types/tutor-teaching-types';
import { TutorPrivacySettingsPage } from '../pages/tutor/tutor-privacy-settings/tutor-privacy-settings';
import { TutorPersonalInformationPage } from '../pages/tutor/tutor-personal-information/tutor-personal-information';
import { TutorProfileInformationPage } from '../pages/tutor/tutor-profile-information/tutor-profile-information';
import { TutorExperiencePage } from '../pages/tutor/tutor-experience/tutor-experience';
import { TutorContactInformationPage } from '../pages/tutor/tutor-contact-information/tutor-contact-information';
import { LeadsPage } from '../pages/tutor/leads/leads';
import { CoursesPage } from '../pages/tutor/courses/courses';
import { CourseCategoriesPage } from '../pages/tutor/course-categories/course-categories';
import { ConversionRequestsPage } from '../pages/tutor/conversion-requests/conversion-requests';
//Student
import { StudentDashboardPage } from '../pages/student/student-dashboard/student-dashboard';
import { StudentProfilePage } from '../pages/student/student-profile/student-profile';
import { StudentBookingsPage } from '../pages/student/student-bookings/student-bookings';
import { StudentProfileInfoPage } from '../pages/student/student-profile-info/student-profile-info';
import { MyAddressPage } from '../pages/student/my-address/my-address';
import { StudentPrivacyPage } from '../pages/student/student-privacy/student-privacy';
import { StudentTeachingTypesPage } from '../pages/student/student-teaching-types/student-teaching-types';
import { StudentLocationsPage } from '../pages/student/student-locations/student-locations';
import { StudentCoursesPage } from '../pages/student/student-courses/student-courses';
import { CreditTransHistoryPage } from '../pages/student/credit-trans-history/credit-trans-history';
import { MyCoursePurchasesPage } from '../pages/student/my-course-purchases/my-course-purchases';
import { StudentLeadsPage } from '../pages/student/student-leads/student-leads';
import { FindTutorPage } from '../pages/student/find-tutor/find-tutor';
import { StuFavTutorsPage } from '../pages/student/stu-fav-tutors/stu-fav-tutors';
// Providers
import { GlobalMethods } from '../providers/global-methods';
import { ServiceName } from '../providers/service';
import { HttpService } from '../providers/http-service';
import {enableProdMode} from '@angular/core';

enableProdMode();

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav; 
  shownGroup = '';
  rootPage: any;
  rate:any;
  userType: any; 
  userData:any;
  subMenu:any;
  application_language:string= navigator.language.split('-')[0];
  data: any = {};
  menuSide: string = "left";

  pages: Array<{name:string,title: string, icon:string, component: any,subMenu:any}>;
  constructor(public platform: Platform,
		private storage: Storage,
    private splashScreen: SplashScreen,
    public globalMethods: GlobalMethods,
    public serviceName:ServiceName,
    private _applicationRef : ApplicationRef,
    private translate: TranslateService,
    public httpService:HttpService,
    public events: Events,
    private oneSignal: OneSignal,
    private menuCtrl:MenuController){
    this.userData = {};

    console.log(this.application_language);
  
  }

  ngAfterViewInit() {
    this.initializeApp();
    this.menuSetting();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.userData.username            = this.globalMethods.userType('username');
      this.userData.photo               = this.globalMethods.userType('photo');
      this.userData.email               = this.globalMethods.userType('email');
      this.userData.user_id             = this.globalMethods.userType('id');
      this.userData.city                = this.globalMethods.userType('city');
      this.userData.net_credits         = this.globalMethods.userType('net_credits');
      this.userData.user_belongs_group  = this.globalMethods.userType('user_belongs_group');

//trans
this.storage.get('Language').then(Language => {
  let element: HTMLElement = document.getElementById("lovelyMenu");
  if(Language=='en')
  {
    this.translate.setDefaultLang(Language);
    this.translate.use(Language);
    this.menuSide= 'left';
    this.data["Lang"] = 'English';
    element.setAttribute("side", this.menuSide);

    this.platform.setDir('rtl', false);
    this.platform.setDir('ltr', true);

  }
  else
  {
     console.log(navigator.language.split('-')[0]);
     this.menuSide= 'right';
     this.data["Lang"] = 'العربيه';
     element.setAttribute("side", this.menuSide);

     this.translate.setDefaultLang('ar');
     this.translate.use('ar');
     this.platform.setDir('rtl', true);
     this.platform.setDir('ltr', false);
}


 
});













      if(this.userData.user_id == 0){
       this.rootPage = LoginPage;
       // this.rootPage=StudentDashboardPage;

      }else{
        switch(localStorage.getItem('pageName')){
          case "StudentDashboardPage":
          this.rootPage = FindTutorPage;
          break;
          case "LoginPage":
         this.rootPage = LoginPage;
          break;
          case "TutorsDasboardPage":
          this.rootPage = TutorsDasboardPage;
          break;
        }
      }
      this.httpService.httpServicePost(this.serviceName.site_settings_get,'').subscribe(
        data => {
          if(data[0].data!=''){
            this.globalMethods.setter(this.serviceName.site_settings_key,JSON.stringify(data[0].data));
            this.oneSignal.startInit(data[0].data.one_signal_app_id, data[0].data.project_no);
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
            this.oneSignal.handleNotificationReceived().subscribe((data) => {
            });
            this.oneSignal.handleNotificationOpened().subscribe((data) => {
            });
            this.oneSignal.enableSound(true);
            this.oneSignal.endInit();
            this.oneSignal.getIds().then(data =>{
              this.globalMethods.setter('oneSignalId',data.userId);
            });
          }
        }, 
        error => {});
    });

    this.splashScreen.hide();
  }























  setTimeout(){
    let self = this;
    if(self.userData.user_id==0){
      self.rootPage = LoginPage;
    }else{

      switch(localStorage.getItem('pageName')){
        case "StudentDashboardPage":
        self.rootPage = StudentDashboardPage;
        break;
        case "LoginScreen":
        self.rootPage = LoginPage;
        break;
        case "TutorsDasboardPage":
        self.rootPage = TutorsDasboardPage;
        break;
      }
    }
  }

  loginScreen(){
    this.nav.push(LoginPage);
  }

  menuSetting(){
    this.userType  = this.globalMethods.userType('user_belongs_group');
    switch(this.userType){
      case ""+this.serviceName.student+"":
      this.studentMenu();
    
      break;
      case ""+this.serviceName.tutor+"":
   
          this.tutorMenu();
     
      break;
      default:
  
          this.studentMenu();
     
    }
  }

  studentMenu(){
    // this.translate.get('studentMenu').subscribe(translated => {
    //console.log(translated);
    this.pages = [
    { name:'studentMenu.title_Dashboard',title: 'Dashboard', icon:'tuts-house', component: StudentDashboardPage,subMenu:[] },
    { name:'studentMenu.title_booking',title: 'Bookings', icon:'tuts-hand', component: StudentBookingsPage,subMenu:[] },
    { name:'studentMenu.title_lead',title: 'My Leads', icon:'tuts-file-folder', component: StudentLeadsPage,subMenu:[] },
    { name:'studentMenu.title_purchase',title: 'My Course Purchases', icon:'tuts-book2', component: MyCoursePurchasesPage,subMenu:[] },
    { name:'studentMenu.title_credit',title: 'Credits Transactions History', icon:'tuts-shuffle', component: CreditTransHistoryPage,subMenu:[] }, 
    { name:'studentMenu.title_manag',title: 'Manage', icon:'tuts-monitor',component: '',
      subMenu:[
        {  name:'studentMenu.title_course',title:'Courses',icon:'tuts-file-folder',component:StudentCoursesPage,showDetails:false},
        {  name:'studentMenu.title_cert',title:'Certificates',icon:'tuts-diploma',component:CertificatesPage,showDetails:false},
        {  name:'studentMenu.title_locat',title:'Locations',icon:'tuts-location',component:StudentLocationsPage,showDetails:false},
        {  name:'studentMenu.title_type',title:'Preferred Teaching Type',icon:'tuts-class',component:StudentTeachingTypesPage,showDetails:false},
        {  name:'studentMenu.title_privacy',title:'Privacy',icon:'tuts-padlock',component:StudentPrivacyPage,showDetails:false}]},
    { name:'studentMenu.title_acount',title: 'Account', icon:'tuts-info',component: '',
      subMenu:[
        {  name:'studentMenu.title_pers',title:'Personal Information',icon:'tuts-hand',component:StudentProfilePage,showDetails:false},
        {  name:'studentMenu.title_prof',title:'Profile Information',icon:'tuts-file',component:StudentProfileInfoPage,showDetails:false},
        {  name:'studentMenu.title_addres',title:'My Address',icon:'tuts-settings-1',component:MyAddressPage,showDetails:false},
        {  name:'studentMenu.title_pass',title:'Change Password',icon:'tuts-reload',component:ChangePasswordPage,showDetails:false}
      ]},
    { name:'studentMenu.title_tutor',title:'Favourite Tutors',icon:'tuts-heart',component:StuFavTutorsPage,subMenu:[]},
    { name:'studentMenu.title_blog',title:'Blogs',icon:'tuts-blogger',component:BlogPage,subMenu:[]},
    { name:'studentMenu.title_fin',title:'Find Tutor',icon:'tuts-magnifying-glass',component:FindTutorPage,subMenu:[]},
    { name:'studentMenu.title_set',title: 'Settings', icon:'tuts-settings', component: SettingsPage,subMenu:[] }
    ];
 // });
  }
  tutorMenu(){
    // this.translate.get('studentMenu').subscribe(translated => {
    this.pages = [
    { name:'studentMenu.title_Dashboard',title: 'Dashboard', icon:'tuts-house', component: TutorsDasboardPage,subMenu:[] },
    { name:'studentMenu.title_booking',title: 'Bookings', icon:'tuts-hand', component: BookingPage,subMenu:[] },
    { name:'studentMenu.title_manag',title: 'Manage', icon:'tuts-monitor', component: '',
      subMenu:[
        { name:'studentMenu.title_course',title:'Courses',icon:'tuts-file-folder',component:TutorCoursesPage,showDetails:false},
        { name:'studentMenu.title_locat',title:'Locations',icon:'tuts-location',component:TutorLocationsPage,showDetails:false},
        { name:'studentMenu.title_type',title:'Teaching Type',icon:'tuts-class',component:TutorTeachingTypesPage,showDetails:false},
        { name:'studentMenu.title_cert',title:'Certificates',icon:'tuts-diploma',component:CertificatesPage,showDetails:false},
        { name:'studentMenu.title_privacy',title:'Privacy',icon:'tuts-padlock',component:TutorPrivacySettingsPage,showDetails:false}
      ]},
    { name:'studentMenu.title_acount',title: 'Account', icon:'tuts-info', component: '',
      subMenu:[
        { name:'studentMenu.title_pers',title:'Personnel Information',icon:'tuts-file',component:TutorPersonalInformationPage,showDetails:false},
        { name:'studentMenu.title_prof',title:'Profile information',icon:'tuts-avatar',component:TutorProfileInformationPage,showDetails:false},
        { name:'studentMenu.title_exp',title:'Experience',icon:'tuts-medal',component:TutorExperiencePage,showDetails:false},
        { name:'studentMenu.title_info',title:'Contact Information',icon:'tuts-pen',component:TutorContactInformationPage,showDetails:false},
        { name:'studentMenu.title_pass',title:'Change Password',icon:'tuts-reload',component:ChangePasswordPage,showDetails:false}
      ]},
    { name:'studentMenu.title_lead',title: 'Leads', icon:'tuts-file-folder', component: LeadsPage,subMenu:[] }, 
    { name:'studentMenu.title_course',title: 'Courses', icon:'tuts-school-material', component: CoursesPage,subMenu:[] }, 
    { name:'studentMenu.title_cat',title: 'Course Categories', icon:'tuts-book2', component: CourseCategoriesPage,subMenu:[] },
    { name:'studentMenu.title_conv',title: 'Credit Conversion Request', icon:'tuts-shuffle', component: ConversionRequestsPage,subMenu:[] },
    { name:'studentMenu.title_blog',title: 'Blogs', icon:'tuts-blogger',component:BlogPage,subMenu:[]},
    { name:'studentMenu.title_credit',title: 'Credits Transactions History', icon:'tuts-shuffle', component: CreditTransHistoryPage,subMenu:[] },
    { name:'studentMenu.title_set',title: 'Settings', icon:'tuts-settings', component: SettingsPage,subMenu:[] }
    ];
 // });
  }



  menuOpened(){
    this.userData.username            = this.globalMethods.userType('username');
    this.userData.photo               = this.globalMethods.userType('photo');
    this.userData.email               = this.globalMethods.userType('email');
    this.userData.user_id             = this.globalMethods.userType('id');
    this.userData.city                = this.globalMethods.userType('city');
    this.userData.net_credits         = this.globalMethods.userType('net_credits');
    this.userData.user_belongs_group  = this.globalMethods.userType('user_belongs_group');
    this.menuSetting();
    let self = this; 
    setTimeout(() => {
      self._applicationRef.tick();
    }, 200);
  }
  menuClosed(){}
  openPage(page) {
    if(page.title=='Logout' ){
      this.globalMethods.clear();
      this.globalMethods.clearStorage();
      this.nav.setRoot(LoginPage);
    }else if(page.title=='Manage' || page.title=='أداره'){
      for(var value of page.subMenu){
        value.showDetails = !value.showDetails;
      }
      let self = this; 
      setTimeout(() => {
        self._applicationRef.tick();
      }, 100);
    }else if(page.title=='Account' || page.title=='حسابي'){
      for(var index of page.subMenu){
        index.showDetails = !index.showDetails;
      }
      let self = this; 
      setTimeout(() => {
        self._applicationRef.tick();
      }, 100);
    }else if(page.title="Bookings" || page.title=='الحجوزات'){
      this.menuCtrl.close();
      this.nav.setRoot(page.component,{booking_type:'all'});
    }
    else{
      this.menuCtrl.close();
      this.nav.setRoot(page.component);
    }
  }
 


	changeLanguage(dir:string){
console.log(dir);
let element: HTMLElement = document.getElementById("lovelyMenu");

    if(dir=='English')
    {
      this.translate.use('ar');
      this.storage.set('Language', 'ar');
      this.data["Language"] = 'ar';
      this.data["Lang"] = 'العربيه';
      this.menuSide= 'right';
     
      element.setAttribute("side", this.menuSide);
			this.platform.setDir('rtl', true);
      this.platform.setDir('ltr', false);
      this.menuCtrl.close();

    }
else{
  console.log('aaaa');
      this.translate.use('en');
      this.storage.set('Language', 'en');
      this.data["Language"] = 'en';
      this.data["Lang"] = 'English';
      this.menuSide= 'left';
    
      element.setAttribute("side", this.menuSide);
			this.platform.setDir('ltr', true);
      this.platform.setDir('rtl', false);
      this.menuCtrl.close();
    

      
}

	
	}
}
