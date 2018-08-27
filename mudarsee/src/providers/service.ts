import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
const SERVER_URL = 'http://mudarsee.com';

@Injectable()
export class ServiceName {
  data: any;
  constructor() { }

  /* Service locations*/
  public serviceUrl = SERVER_URL + '/service/';
  public serviceLogin = SERVER_URL + '/service_login/';

  public login = this.serviceLogin + 'login';
  public register = this.serviceLogin + 'register';
  public site_settings_get = this.serviceUrl + 'get_site_settings';
  public get_phone_codes = this.serviceUrl + 'get_phone_codes ';
  public forgot_password = this.serviceLogin + 'forgot_password';
  public editPersonalInformation = this.serviceUrl + 'editPersonalInformation';

  //Social logins
  public social_login = this.serviceLogin + 'social_login';
  //tutor
  public tutorDashboard = this.serviceUrl + 'tutor_dashboard';
  public getBookings = this.serviceUrl + 'get_tutor_bookings';
  public getBookingStatus = this.serviceUrl + 'booking_status';
  public updateBookingStatus = this.serviceUrl + 'update_booking_status';
  public tutorCourses = this.serviceUrl + 'get_tutor_courses';
  public deleteTutorCourse = this.serviceUrl + 'delete_tutor_course';
  public addTutorCourse = this.serviceUrl + 'add_tutor_course';
  public getTutorLocations = this.serviceUrl + 'get_tutor_locations';
  public updateTutorLocations = this.serviceUrl + 'update_tutor_locations';
  public getTutorTeachingTypes = this.serviceUrl + 'get_tutors_teaching_types';
  public updateTutorTeachingTypes = this.serviceUrl + 'update_tutor_teaching_types';
  public setTutorPrivacySettings = this.serviceUrl + 'update_privacy_settings';
  public tutorExperiences = this.serviceUrl + 'tutor_experience';
  public addExperience = this.serviceUrl + 'add_experience';
  public get_leads = this.serviceUrl + 'search_student_leads';
  public checkViewedLead = this.serviceUrl + 'check_viewed_lead';
  public tutorViewLead = this.serviceUrl + 'tutor_view_lead';
  public get_lead_details = this.serviceUrl + 'lead_details';
  public leads_filter_data = this.serviceUrl + 'leads_filter_data';
  public sendLeadMessage = this.serviceUrl + 'send_lead_message';
  public get_all_courses = this.serviceUrl + 'get_all_courses';
  public getTutors = this.serviceUrl + 'get_course_tutors';
  public tutorProfile = this.serviceUrl + 'get_tutor_profile';
  public bookTutorTutor = this.serviceUrl + 'book_tutor';
  public reviews = this.serviceUrl + 'reviews';
  public get_categories = this.serviceUrl + 'get_categories';
  public get_courses = this.serviceUrl + 'get_courses';
  public creditConversionRequest = this.serviceUrl + 'credit_conversion_request';
  public tutor_chat_students_list_get = this.serviceUrl + 'get_tutor_chat_students_list';
  public update_chat_status = this.serviceUrl + 'update_chat_status';
  public tutor_questions_students_list_get = this.serviceUrl + 'get_tutor_questions_students_list';

  //peter Services
  public certificates_tutors_get = this.serviceUrl + 'get_certificates_tutors';
  public certificates_upload = this.serviceUrl + 'certificates_upload';
  public profile_upload = this.serviceUrl + 'profile_upload';

  //student
  public studentDashboard = this.serviceUrl + 'student_dashboard';
  public getStudentBookings = this.serviceUrl + 'get_student_bookings';
  public getStudentBookingStatus = this.serviceUrl + 'get_student_booking_status';
  public getKnownLanguages = this.serviceUrl + 'get_known_languages';
  public updateStudentPersonalDetails = this.serviceUrl + 'update_stpersonal_details';
  public updateStudentProfileDetails = this.serviceUrl + 'update_stprofile_details';
  public getCountries = this.serviceUrl + 'countries';
  public updateStudentContactDetails = this.serviceUrl + 'update_stcontact_details';
  public updatePrivacySettings = this.serviceUrl + 'update_privacy_settings';
  public getStudentTeachingTypes = this.serviceUrl + 'get_student_teaching_types';
  public updateStudentTeachingTypes = this.serviceUrl + 'update_stteaching_types';
  public getStudentLocations = this.serviceUrl + 'get_student_locations';
  public updateStudentLocations = this.serviceUrl + 'update_student_locations';
  public getStudentCourses = this.serviceUrl + 'get_student_courses';
  public updateStudentCourses = this.serviceUrl + 'update_student_courses';
  public getStudentCreditTransHistory = this.serviceUrl + 'get_stcredit_trans_history';
  public getStudentCoursePurchases = this.serviceUrl + 'get_stcourse_purchases';
  public getStudentLeads = this.serviceUrl + 'get_student_leads';
  public updateStudentLeadStatus = this.serviceUrl + 'update_student_lead_status';
  public getLeadData = this.serviceUrl + 'get_post_lead_data';
  public postLead = this.serviceUrl + 'post_lead';
  public changePassword = this.serviceUrl + 'change_password';
  public getTermsConditions = this.serviceLogin + 'get_terms_conditions';
  public getAboutUs = this.serviceLogin + 'get_about_us';
  public contact = this.serviceLogin + 'contact';
  public getSearchTutors = this.serviceUrl + 'get_tutors';
  public getStuTutorProfile = this.serviceUrl + 'get_tutor_profile';
  public getFilterData = this.serviceUrl + 'get_filter_data';
  public getTutorCourses = this.serviceUrl + 'get_tutor_courses';
  public studentSendMessage = this.serviceUrl + 'stu_send_message';
  public getTutorReviews = this.serviceUrl + 'get_tutor_reviews';
  public bookTutor = this.serviceUrl + 'book_tutor';
  public addFavTutor = this.serviceUrl + 'add_fav_tutor';
  public getStudentFavTutors = this.serviceUrl + 'get_student_fav_tutors';
  public removeFavTutor = this.serviceUrl + 'remove_fav_tutor';
  public booking_questions_get = this.serviceUrl + 'get_booking_questions';
  public question_add = this.serviceUrl + 'add_question';
  public question_conversation_get = this.serviceUrl + 'get_question_conversation';
  public answer_to_question = this.serviceUrl + 'answer_to_question';
  public update_answer_status = this.serviceUrl + 'update_answer_status';

  public chat_history_get = this.serviceUrl + 'get_chat_history';
  public message_send = this.serviceUrl + 'send_message';
  public get_blogs = this.serviceUrl + 'get_tutor_blogs';
  public get_student_questions_tutors_list = this.serviceUrl + 'get_student_questions_tutors_list';
  // public


  /* Courses Image */

  public coursesImage = SERVER_URL + '/assets/uploads/courses/';
  public profileImages = SERVER_URL + '/assets/uploads/profiles/';
  public profileUrl = SERVER_URL + '/assets/uploads/profiles/';
  public defaultImage = "assets/img/logo.svg";
  public default_pictureImage = "http://www.freeiconspng.com/uploads/no-image-icon-13.png";

  /* Local Storage Keys */

  public userProfile = 'userProfile';
  public pageName = 'pageName';
  public site_settings_key = 'site_settings';
  public oneSignalId = "oneSignalId";


  // User types

  public student = 2;
  public tutor = 3;

}







