import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { GlobalMethods } from '../../providers/global-methods';
import { ServiceName } from '../../providers/service';
import { HttpService } from '../../providers/http-service';
import { BlogDetailsPage } from "../blog-details/blog-details";

@IonicPage()
@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
})
export class BlogPage {
	blogs:any;
	showLoadMore:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public globalMethods : GlobalMethods,
    public serviceName : ServiceName,
    public httpService : HttpService,
    ) {
    this.blogs = [];
    this.showLoadMore = false;
  }

  ionViewDidLoad() {
    this.getBlogs('');
  }

  getBlogs(infiniteScroll){
    let params = {
      from_limit : this.blogs.length,
      to_limit : ''
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.get_blogs,params).subscribe(data=>{
      this.globalMethods.loaderStop();
      if(data[0].data.length!=0){
        if(infiniteScroll!=''){
          infiniteScroll.enable(true);
          this.showLoadMore = true;
        }
        let i=0;
        for(let blog of data[0].data){
          i++;
          blog['author_image_full_url'] = this.serviceName.profileUrl + blog.author_photo;
          this.blogs.push(blog);
        }
      }else{
        if(infiniteScroll!=''){
          infiniteScroll.complete();
          this.showLoadMore = false;
          infiniteScroll.enable(false);
        }
      } 
    },error=>{
      this.globalMethods.loaderStop();
    });
  }
  
  openBlogDetails(blog){
    this.navCtrl.push(BlogDetailsPage,{blog:blog});
  }

}
