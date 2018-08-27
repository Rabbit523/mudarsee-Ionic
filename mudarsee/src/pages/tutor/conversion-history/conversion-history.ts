import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConversionRequestsDetailsPage } from '../conversion-requests-details/conversion-requests-details';

@Component({
	selector: 'page-conversion-history',
	templateUrl: 'conversion-history.html'
})
export class ConversionHistoryPage {
	constructor(public navCtrl: NavController, public navParams: NavParams) { }
	ionViewDidLoad() { }

	openConversionRequestsDetails() {
		this.navCtrl.push(ConversionRequestsDetailsPage);
	}

}
