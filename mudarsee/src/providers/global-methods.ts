import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { LoadingController, Loading } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
import { ServiceName } from "../providers/service";

@Injectable()
export class GlobalMethods {
  user_id: any;
  loading: Loading;
  constructor(
    public serviceName: ServiceName,
    public loadingCtrl: LoadingController,
    public toast: Toast) {
  }

  setter(key, data) {
    localStorage.setItem(key, data);
  }

  getter(key) {
    return localStorage.getItem(key);
  }

  loaderStart() {
    this.loading = this.loadingCtrl.create({
      content: "Loading..."
    });
    this.loading.present();
  }

  loaderStop() {
    if (this.loading) {
      this.loading.dismissAll();
    }
  }

  showToast(msg) {
    this.toast.show(msg, '5000', 'bottom').subscribe(toast => { }
    );
  }
  hideToast() {
    this.toast.hide();
  }

  userType(property) {
    let userDetails = JSON.parse(this.getter(this.serviceName.userProfile));
    if (!userDetails) {
      userDetails = {
        "id": "0",
        "ip_address": "",
        "username": "Convidado",
        "slug": "",
        "password": "",
        "salt": "",
        "email": "Convidado",
        "activation_code": "",
        "forgotten_password_code": "",
        "forgotten_password_time": "",
        "remember_code": "",
        "created_on": "",
        "last_login": "",
        "active": "",
        "first_name": "Usuário",
        "last_name": "Convidado",
        "gender": "Masculino",
        "phone_code": "",
        "phone": "",
        "land_mark": "",
        "profile_page_title": "",
        "photo": "",
        "profile": "",
        "is_online": "",
        "is_social_login": "",
        "user_belongs_group": "",
        "device_id": "",
        "platform": "",
        "registered_by": "",
        "net_credits": "",
        "last_updated": "",
        "parent_id": ""
      };
      if (property == "photo") {
        let pic = userDetails["" + property + ""];
        let image_url = userDetails.photo;
        if (pic != null && pic != '') {

          return this.serviceName.profileUrl + pic;
        } else if (image_url != null && image_url != '') {

          return image_url;
        } else {
          return this.serviceName.defaultImage;
        }
      } else {
        this.user_id = userDetails["" + property + ""];
        if (this.user_id) {
          return this.user_id;
        } else {
          return "";
        }
      }
    } else {

      if (property == "photo") {
        let pic = userDetails["" + property + ""];
        let image_url = userDetails.photo;
        if (pic != null && pic != '') {

          return this.serviceName.profileUrl + pic;
        } else if (image_url != null && image_url != '') {
          return image_url;
        } else {
          return this.serviceName.defaultImage;
        }
      } else {
        this.user_id = userDetails["" + property + ""];
        if (this.user_id) {
          return this.user_id;
        } else {
          return "";
        }
      }
    }
  }


  // COMMON METHOD FOR GETTING SITE VALUES
  siteValue(property) {
    let siteDetails = JSON.parse(this.getter(this.serviceName.site_settings_key));
    if (siteDetails) {
      let site_value = siteDetails["" + property + ""];
      if (site_value) {
        return site_value;
      } else {
        return "";
      }
    } else {
      return "";
    }
  }

  clear() {
    localStorage.clear();
  }
  clearStorage() {
    localStorage.setItem(this.serviceName.userProfile, '{}');
    localStorage.setItem(this.serviceName.pageName, '');
    localStorage.setItem(this.serviceName.oneSignalId, '');
  }

  checkNetwork() {
    return true;
    /*if (navigator.connection.type != '') {
      return true;
    } else {
      return false;
    }*/
  }

}
