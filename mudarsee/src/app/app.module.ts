import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule , Http} from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Toast } from '@ionic-native/toast';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

////transelet////
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
export function createTranslateLoader(http: Http) {
	return new TranslateStaticLoader(http, './assets/i18n', '.json');
}
//end
import { Device } from '@ionic-native/device';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileOpener } from '@ionic-native/file-opener';

import { ServiceName } from '../providers/service';
import { HttpService } from '../providers/http-service';
// import { AgeFilter } from '../pipes/age-filter/age-filter';
import { GlobalMethods } from '../providers/global-methods';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { SettingsPage } from '../pages/settings/settings';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { CertificatesPage } from "../pages/certificates/certificates";
import { BlogPage } from "../pages/blog/blog";
import { BlogDetailsPage } from "../pages/blog-details/blog-details";
import { ChooseFileModalPage } from '../pages/choose-file-modal/choose-file-modal';

// TUTORS PAGES
import { TutorsDasboardPage } from '../pages/tutor/tutors-dasboard/tutors-dasboard';
import { BookingPage } from '../pages/tutor/booking/booking';
import { BookingDetailsPage } from '../pages/tutor/booking-details/booking-details';
import { TutorCoursesPage } from '../pages/tutor/tutor-courses/tutor-courses';
import { TutorCourseDetailsPage } from '../pages/tutor/tutor-course-details/tutor-course-details';
import { TutorAddCoursePage } from '../pages/tutor/tutor-add-course/tutor-add-course';
import { TutorLocationsPage } from '../pages/tutor/tutor-locations/tutor-locations';
import { TutorTeachingTypesPage } from '../pages/tutor/tutor-teaching-types/tutor-teaching-types';
import { TutorPrivacySettingsPage } from '../pages/tutor/tutor-privacy-settings/tutor-privacy-settings';
import { TutorPersonalInformationPage } from '../pages/tutor/tutor-personal-information/tutor-personal-information';
import { TutorProfileInformationPage } from '../pages/tutor/tutor-profile-information/tutor-profile-information';
import { TutorExperiencePage } from '../pages/tutor/tutor-experience/tutor-experience';
import { AddTutorExperiencePage } from '../pages/tutor/add-tutor-experience/add-tutor-experience';
import { TutorContactInformationPage } from '../pages/tutor/tutor-contact-information/tutor-contact-information';
import { TutorContactDetailsPage } from '../pages/tutor/tutor-contact-details/tutor-contact-details';
import { LeadsPage } from '../pages/tutor/leads/leads';
import { LeadDetailsPage } from '../pages/tutor/lead-details/lead-details';
import { LeadsFilterPage } from '../pages/tutor/leads-filter/leads-filter';
import { SendMessagePage } from '../pages/tutor/send-message/send-message';
import { CoursesPage } from '../pages/tutor/courses/courses';
import { TutorsPage } from '../pages/tutor/tutors/tutors';
import { TutorProfilePage } from '../pages/tutor/tutor-profile/tutor-profile';
import { ReserveYourSpotPage } from '../pages/tutor/reserve-your-spot/reserve-your-spot';
import { FilterPage } from '../pages/tutor/filter/filter';
import { ReviewsPage } from '../pages/tutor/reviews/reviews';
import { CourseCategoriesPage } from '../pages/tutor/course-categories/course-categories';
import { SubCategoryPage } from '../pages/tutor/sub-category/sub-category';
import { ConversionRequestsPage } from '../pages/tutor/conversion-requests/conversion-requests';
import { ConversionRequestsDetailsPage } from '../pages/tutor/conversion-requests-details/conversion-requests-details';
import { ConversionHistoryPage } from '../pages/tutor/conversion-history/conversion-history';
import { ChatPage } from '../pages/tutor/chat/chat';
import { QuestionAnswerPage } from '../pages/tutor/question-answer/question-answer';
import { QuestionAnswerConversationPage } from "../pages/tutor/question-answer-conversation/question-answer-conversation";
import { TutorDashboardQuestionsPage } from "../pages/tutor/tutor-dashboard-questions/tutor-dashboard-questions";
import { TutorDashboardChatPage } from "../pages/tutor/tutor-dashboard-chat/tutor-dashboard-chat";

 
//STUDENT PAGES
import { StudentDashboardPage } from '../pages/student/student-dashboard/student-dashboard';
import { StudentProfilePage } from '../pages/student/student-profile/student-profile';
import { StudentBookingsPage } from '../pages/student/student-bookings/student-bookings';
import { StudentBookingDetailsPage } from '../pages/student/student-booking-details/student-booking-details';
import { StudentProfileInfoPage } from '../pages/student/student-profile-info/student-profile-info';
import { MyAddressPage } from '../pages/student/my-address/my-address';
import { ContactDetailsPage } from '../pages/student/contact-details/contact-details';
import { StudentPrivacyPage } from '../pages/student/student-privacy/student-privacy';
import { StudentTeachingTypesPage } from '../pages/student/student-teaching-types/student-teaching-types';
import { StudentLocationsPage } from '../pages/student/student-locations/student-locations';
import { StudentCoursesPage } from '../pages/student/student-courses/student-courses';
import { CreditTransHistoryPage } from '../pages/student/credit-trans-history/credit-trans-history';
import { MyCoursePurchasesPage } from '../pages/student/my-course-purchases/my-course-purchases';
import { StudentLeadsPage } from '../pages/student/student-leads/student-leads';
import { StudentLeadDetailsPage } from '../pages/student/student-lead-details/student-lead-details';
import { StudentPostLeadPage } from '../pages/student/student-post-lead/student-post-lead';
// import { CasePipe } from '../pipes/case/case';
import { TermsConditionsPage } from '../pages/terms-conditions/terms-conditions';
import { AboutUsPage } from '../pages/about-us/about-us';
import { FindTutorPage } from '../pages/student/find-tutor/find-tutor';
import { StuTutorProfilePage } from '../pages/student/stu-tutor-profile/stu-tutor-profile';
import { TutorFilterPage } from '../pages/student/tutor-filter/tutor-filter';
import { StuSendMessagePage } from '../pages/student/stu-send-message/stu-send-message';
import { TutorReviewsPage } from '../pages/student/tutor-reviews/tutor-reviews';
import { StuReserveYourSpotPage } from '../pages/student/stu-reserve-your-spot/stu-reserve-your-spot';
import { StuFavTutorsPage } from '../pages/student/stu-fav-tutors/stu-fav-tutors';
import { StuQuestionAnswerPage } from '../pages/student/stu-question-answer/stu-question-answer';
import { StuQuestionAnswerConversationPage } from '../pages/student/stu-question-answer-conversation/stu-question-answer-conversation';
import { StuChatPage } from '../pages/student/stu-chat/stu-chat';
import { StudentDashboardChatPage } from '../pages/student/student-dashboard-chat/student-dashboard-chat';
import { StudentDashboardQuestionsPage } from '../pages/student/student-dashboard-questions/student-dashboard-questions';
import { PipesModule } from '../pipes/pipes.module'
import { Ionic2RatingModule } from 'ionic2-rating';
import { CacheModule } from "ionic-cache";
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
import { OneSignal } from '@ionic-native/onesignal';
import { SocialSharing } from '@ionic-native/social-sharing';
import { EmailComposer } from '@ionic-native/email-composer';
import { CallNumber } from '@ionic-native/call-number';
import { CalendarModule } from "ion2-calendar";

@NgModule({
    declarations: [
        MyApp,
          LoginPage,
          RegisterPage,
         ChangePasswordPage,
         ForgotPasswordPage,
         SettingsPage,
        ContactUsPage,
        // AgeFilter,
         CertificatesPage,
         TutorsDasboardPage,
         BookingPage,
        BookingDetailsPage,
        TutorCoursesPage,
        TutorCourseDetailsPage,
        TutorAddCoursePage,
        TutorLocationsPage,
        TutorTeachingTypesPage,
        TutorPrivacySettingsPage,
        TutorPersonalInformationPage,
        TutorProfileInformationPage,
        TutorExperiencePage,
        AddTutorExperiencePage,
        TutorContactInformationPage,
       TutorContactDetailsPage,
        LeadsPage,
        LeadDetailsPage,
        LeadsFilterPage,
        SendMessagePage,
        CoursesPage,
        TutorsPage,
        ChooseFileModalPage,
        TutorProfilePage,
        ReserveYourSpotPage,
        FilterPage,
        ReviewsPage,
        CourseCategoriesPage,
        SubCategoryPage,
       ConversionRequestsPage,
       ConversionRequestsDetailsPage,
       ConversionHistoryPage,
        ChatPage,
       QuestionAnswerPage,
        QuestionAnswerConversationPage,
        StudentDashboardPage,
        StudentProfilePage,
        StudentBookingsPage,
        StudentBookingDetailsPage,
        StudentProfileInfoPage,
       MyAddressPage,
        ContactDetailsPage,
        StudentPrivacyPage,
        StudentTeachingTypesPage,
        StudentLocationsPage,
        StudentCoursesPage,
        CreditTransHistoryPage,
        MyCoursePurchasesPage,
        StudentLeadsPage,
        StudentLeadDetailsPage,
        StudentPostLeadPage,
      //  CasePipe,
        TermsConditionsPage,
        AboutUsPage,
        FindTutorPage,
        StuTutorProfilePage,
         TutorFilterPage,
         StuSendMessagePage,
         TutorReviewsPage,
         StuReserveYourSpotPage,
        StuFavTutorsPage,
        StuQuestionAnswerPage,
        StuQuestionAnswerConversationPage,
        StuChatPage,
        BlogPage,
        BlogDetailsPage,
         TutorDashboardQuestionsPage,
         TutorDashboardChatPage,
        StudentDashboardChatPage,
        StudentDashboardQuestionsPage,
   ],
    imports: [
         BrowserModule,
         HttpModule,
         TranslateModule.forRoot({
			provide: TranslateLoader,
			useFactory: (createTranslateLoader),
			deps: [Http]
        }),
        PipesModule,
         Ng2SearchPipeModule,
         CacheModule.forRoot(),
        IonicModule.forRoot(MyApp,{
              mode: 'md',
              backButtonText:'',
              iconMode: 'md',
              modalEnter: 'modal-slide-in',
              modalLeave: 'modal-slide-out',
              tabsPlacement: 'bottom',
              pageTransition: 'md-transition'}),
        Ionic2RatingModule, 
        CalendarModule,

    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        LoginPage,
        RegisterPage,
        ChangePasswordPage,
        ForgotPasswordPage,
        SettingsPage,
        ContactUsPage,
        TutorsDasboardPage,
         BookingPage,
        BookingDetailsPage,
        TutorCoursesPage,
        TutorCourseDetailsPage,
        TutorAddCoursePage,
        TutorLocationsPage,
        TutorTeachingTypesPage,
        TutorPrivacySettingsPage,
        TutorPersonalInformationPage,
        TutorProfileInformationPage,
        TutorExperiencePage,
        AddTutorExperiencePage,
        TutorContactInformationPage,
        CertificatesPage,
        LeadsPage,
        LeadDetailsPage,
        LeadsFilterPage,
        SendMessagePage,
        CoursesPage,
        TutorsPage,
         TutorContactDetailsPage,
        TutorProfilePage,
        ReserveYourSpotPage,
        FilterPage,
        ReviewsPage,
        CourseCategoriesPage,
        SubCategoryPage,
       ConversionRequestsPage,
       ConversionRequestsDetailsPage,
       ConversionHistoryPage,
 
        ChatPage,
        QuestionAnswerPage,
        QuestionAnswerConversationPage,
        StudentDashboardPage,
        StudentProfilePage,
        StudentBookingsPage,
        StudentBookingDetailsPage,
        StudentProfileInfoPage,
        MyAddressPage,
        ContactDetailsPage,
        StudentPrivacyPage,
        StudentTeachingTypesPage,
        StudentLocationsPage,
        StudentCoursesPage,
        CreditTransHistoryPage,
        MyCoursePurchasesPage,
        StudentLeadsPage,
        StudentLeadDetailsPage,
        StudentPostLeadPage,
        TermsConditionsPage,
        AboutUsPage,
        FindTutorPage,
        StuTutorProfilePage,
        TutorFilterPage,
         StuSendMessagePage,
         TutorReviewsPage,
         StuReserveYourSpotPage,
  
        StuFavTutorsPage,
        StuQuestionAnswerPage,
        StuQuestionAnswerConversationPage,
        StuChatPage,
        BlogPage,
        BlogDetailsPage,
         TutorDashboardQuestionsPage,
         TutorDashboardChatPage,
        StudentDashboardChatPage,
        StudentDashboardQuestionsPage,

    ],
    providers: [ 
        StatusBar,
        SplashScreen,
        Toast,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ServiceName,
        HttpService,
        GlobalMethods,
        Device,
        FileTransfer,
        File,
        FileChooser,
        FilePath,
        Camera,
        FileOpener,
        OneSignal,
        GooglePlus,
        Facebook,
        SocialSharing,
        EmailComposer,
        CallNumber
        ]
})
export class AppModule {}
