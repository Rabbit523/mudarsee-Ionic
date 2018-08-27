import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-conversion-requests-details',
	templateUrl: 'conversion-requests-details.html'
})
export class ConversionRequestsDetailsPage {
	conversionDetails: any;
	constructor(public navCtrl: NavController,
		public navParams: NavParams) {
		this.conversionDetails = this.navParams.data.conversion;
	}

	ionViewDidLoad() {

	}

}
