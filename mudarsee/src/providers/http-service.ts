import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { ServiceName } from '../providers/service';
import { GlobalMethods } from '../providers/global-methods';
import { CacheService } from "ionic-cache";

@Injectable()
export class HttpService {
  options: any;
  constructor(public http: Http,
    public serviceName: ServiceName,
    public globalMethods: GlobalMethods,
    public cache: CacheService) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.options = new RequestOptions({ headers: headers });
  }
  /** Post service call, to all database calls */
  httpServicePost(service_name, param) {


    if (this.globalMethods.checkNetwork()) {
      return this.http.post(service_name, param, this.options).map(res => res.json()).catch(this.handleError).timeout(60000).do(data => {

      }, error => {

      });
    } else {
      this.globalMethods.showToast("Check Network Connection");
    }
  }

  /** GET service call, to all database calls */
  httpServiceGet(service_name) {
    if (this.globalMethods.checkNetwork()) {
      return this.http.get(this.serviceName.serviceLogin + service_name).map(res => res.json()).catch(this.handleError);
    } else {
      this.globalMethods.showToast("Check Network Connection");
    }
  }
  httpSocialLoginsGet(url) {
    if (this.globalMethods.checkNetwork()) {
      return this.http.get(url).map(res => res.json()).catch(this.handleError);
    } else {
      this.globalMethods.showToast("Check Network Connection");
    }
  }
  cacheClearKey(service_name) {
    this.cache.removeItem(service_name);
  }
  cacheGetKey(service_name) {
    this.cache.getItem(service_name).catch((data) => {
    }).then((data) => {
      return data;
    });
  }
  cacheClearAll() {
    this.cache.clearAll();
  }
  cacheSaveKey(service_name, result) {
    this.cache.saveItem(service_name, result);
  }
  /** Error handler to all service calls */
  private handleError(error) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
