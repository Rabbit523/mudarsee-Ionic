import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-blog-details',
  templateUrl: 'blog-details.html',
})
export class BlogDetailsPage {
	blog_details:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.blog_details = {};
  }
  ionViewDidLoad() {
    	this.blog_details = this.navParams.data.blog;
  }

}
