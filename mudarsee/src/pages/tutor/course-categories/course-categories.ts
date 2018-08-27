import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SubCategoryPage } from '../sub-category/sub-category';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';
import { GlobalMethods } from '../../../providers/global-methods';


@Component({
  selector: 'page-course-categories',
  templateUrl: 'course-categories.html',
  providers: [HttpService, ServiceName]
})
export class CourseCategoriesPage {
  categories: any;
  showLoadMore: boolean;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService,
    public serviceName: ServiceName,
    public globalMethods: GlobalMethods) {
    this.categories = [];
    this.showLoadMore = true;
  }

  itemSelected(categorie) {
    this.navCtrl.push(SubCategoryPage, { category: categorie });
  }
  ionViewDidLoad() {
    this.getCourseCategories('');

  }
  getCourseCategories(infiniteScroll) {
    let params = {
      from_limit: this.categories.length
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.get_categories, params).subscribe(
      data => {
        this.globalMethods.loaderStop();
        if (data[0].data.length != 0) {
          if (infiniteScroll != '') {
            infiniteScroll.enable(true);
            this.showLoadMore = true;
          }
          for (let value of data[0].data) {
            this.categories.push(value);
          }
        } else {
          if (infiniteScroll != '') {
            infiniteScroll.complete();
            this.showLoadMore = false;
            infiniteScroll.enable(false);
          }
        }
      },
      error => {
        this.globalMethods.loaderStop();
        this.globalMethods.showToast("Data loading error");
      });
  }

}
