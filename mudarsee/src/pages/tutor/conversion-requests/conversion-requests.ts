import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../../providers/http-service';
import { GlobalMethods } from '../../../providers/global-methods';
import { ServiceName } from '../../../providers/service';
import { ConversionRequestsDetailsPage } from '../conversion-requests-details/conversion-requests-details';
import { ConversionHistoryPage } from '../conversion-history/conversion-history';

@Component({
  selector: 'page-conversion-requests',
  templateUrl: 'conversion-requests.html',
  providers: [HttpService, GlobalMethods, ServiceName]
})
export class ConversionRequestsPage {
	ConversionFilter: string = "";
  conversion_history = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService,
    public globalMethods: GlobalMethods,
    public serviceName: ServiceName) { }

  openConversionRequestsDetails(conversion) {
    this.navCtrl.push(ConversionRequestsDetailsPage, { conversion: conversion });
  }
  openConversionHistory() {
    this.navCtrl.push(ConversionHistoryPage);
  }

  ionViewDidLoad() {
    let params = {
      user_id: this.globalMethods.userType('id')
    }
    this.httpService.httpServicePost(this.serviceName.creditConversionRequest, params).subscribe(
      data => {
        this.conversion_history = data[0].data;
      },
      error => {
        this.globalMethods.showToast(JSON.stringify(error));
      },
      () => {

      }
    );

  }

}
