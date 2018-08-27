import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';
import { GlobalMethods } from '../../../providers/global-methods';
import { StudentBookingDetailsPage } from '../student-booking-details/student-booking-details';
import { CasePipe } from '../../../pipes/case/case';

@IonicPage()
@Component({
  selector: 'page-student-bookings',
  templateUrl: 'student-bookings.html',
  providers:[HttpService,GlobalMethods,ServiceName],
})
export class StudentBookingsPage {
  userDetails:any;
  bookings=[];
  filteredBookings=[];
  bookingFilter: string;
  showLoadMore:boolean;
  bookings_type:any;
  bookings_temp:any; 
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public httpService: HttpService,
    public serviceName: ServiceName,
    public globalMethods: GlobalMethods) {
    this.userDetails = JSON.parse(this.globalMethods.getter(this.serviceName.userProfile));
    this.bookings =[];
    this.bookings_temp = [];
    this.showLoadMore = true;
    this.bookings_type = this.navParams.data.booking_type;
    this.bookingFilter = this.navParams.data.booking_type;
  }

  ionViewDidLoad() {
    this.getBookings('');

  }

  getBookings(infiniteScroll){
    let params = {
      user_id: this.userDetails.id,
      from_limit: this.bookings.length,
      type: this.bookings_type
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.getStudentBookings,params).subscribe(
      data=> {
        this.globalMethods.loaderStop();
        if(data[0].data.length!=0){
               if(infiniteScroll!=''){
                 infiniteScroll.enable(true);
                 this.showLoadMore = true;
               }
        for(let value of data[0].data){
          this.bookings.push(value);
          this.filteredBookings.push(value);
        }
        }else{
              if(infiniteScroll!=''){
                infiniteScroll.complete();
                this.showLoadMore = false;
                infiniteScroll.enable(false);
              }
            }
      },
      error=>{
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      });
  }
  openBookingDetails(booking) {
    this.navCtrl.push(StudentBookingDetailsPage,{selectedBooking:booking});
  }
  filterByStatus() {
    this.filteredBookings = [];
    if(this.bookingFilter!='all') {
       this.bookings_type = this.bookingFilter;
       this.bookings_temp = this.bookings.slice();
       this.bookings = [];
       this.getBookings('');
    }else{
      this.bookings = this.bookings_temp;
      this.filteredBookings = this.bookings;
    }
  }

}


