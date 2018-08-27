import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalMethods } from '../../../providers/global-methods';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';

@IonicPage()
@Component({
  selector: 'page-student-locations',
  templateUrl: 'student-locations.html',
  providers:[HttpService,GlobalMethods,ServiceName]
})
export class StudentLocationsPage {
  locations=[];
  selected_locations=[];
  shownGroup = null;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public globalMethods: GlobalMethods,
    public httpService: HttpService,
    public serviceName: ServiceName) {

  }
  ionViewDidLoad() {  
    let params = {
      user_id: this.globalMethods.userType('id')
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.getStudentLocations,params).subscribe(
      data=>{
        this.globalMethods.loaderStop();
        if(data[0].data.length!=0) {
          for(let val of data[0].data) {
            var element = {
              parentLocation_name : val.parentLocation_name,
              sub_location:[]
            }
            for(let sub of val.sub_locations){
              var checked = false;
              if(sub.id==sub.checked_id){
                var checked = true;
              }
              var temp = {
                id:sub.id,
                sub_location_name:sub.location_name,
                checked:checked
              }
              element.sub_location.push(temp);
            }
            this.locations.push(element);
          }
        }
      },
      error=>{
        this.globalMethods.loaderStop(); 
        this.globalMethods.showToast(JSON.stringify(error));
      },
      ()=>{});
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  };

  isGroupShown(group) {
    return this.shownGroup === group;
  };

  updateLocations() {
    this.selected_locations=[];
    for(let val of this.locations){
      for(let sub of val.sub_location){
        if(sub.checked==true){
          var select_location = {
            location_id:sub.id
          }
          this.selected_locations.push(select_location);
        }
      }
    }
    let params = {
      user_id:this.globalMethods.userType('id'),
      locations:this.selected_locations
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.updateStudentLocations,params).subscribe(
      data=>{
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(data[1].response.message);
      },
      error=>{
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      },()=>{});
  }
}
