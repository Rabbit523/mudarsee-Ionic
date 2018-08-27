import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ChooseFileModalPage } from '../../choose-file-modal/choose-file-modal';
import { GlobalMethods } from '../../../providers/global-methods';
import { HttpService } from '../../../providers/http-service';
import { ServiceName } from '../../../providers/service';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../../providers/validation-service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Toast } from '@ionic-native/toast';
import { FileOpener } from '@ionic-native/file-opener';

@IonicPage()
@Component({
  selector: 'page-student-profile-info',
  templateUrl: 'student-profile-info.html',
  providers: [HttpService, GlobalMethods, ServiceName, ValidationService]
})
export class StudentProfileInfoPage {
  profileDetailsForm: any;
  userData: any;
  currency_symbol: any;
  per_credit_value: any;
  user: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public globalMethods: GlobalMethods,
    public httpService: HttpService,
    public serviceName: ServiceName,
    public validationService: ValidationService,
    public formBuilder: FormBuilder,
    public modalCtrl: ModalController,
    public toast: Toast,
    private transfer: FileTransfer,
    private file: File) {
    this.profileDetailsForm = formBuilder.group({
      profile: ['', Validators.compose([Validators.required])],
      seoKeywords: [''],
      metaDescription: [''],
      profilePageTitle: [''],
      qualification: [''],
      willingToTravel: ['', Validators.compose([Validators.required])],
      ownVehicle: ['']
    });
    this.user = {
      photo: this.globalMethods.userType('photo')
    };
    this.userData = JSON.parse(this.globalMethods.getter(this.serviceName.userProfile));
    this.currency_symbol = this.globalMethods.siteValue('currency_symbol');
    this.per_credit_value = this.globalMethods.siteValue('per_credit_value');
  }
  ionViewDidLoad() {

  }
  presentProfileModal() {
    let profileModal = this.modalCtrl.create(ChooseFileModalPage, { certificate: { upload_file: '' } });
    profileModal.onDidDismiss(data => {
      if (data.upload_file != '') {
        this.uploadFile(data);
      }
    });
    profileModal.present();
  }
  uploadFile(param) {
    let params = {
      user_id: this.globalMethods.userType('id')
    }
    let options: FileUploadOptions = {
      fileKey: 'userfile',
      mimeType: "image/jpeg",
      fileName: param.upload_file,
      headers: {},
      params: params,
      chunkedMode: false
    }
    const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer.onProgress(data => {
      if (data.lengthComputable) {
        let percentage = ((data.loaded / data.total) * 100).toFixed(0);
        this.toast.show(percentage + "% uploading...", '8000', 'bottom').subscribe(toast => { }
        );
      }
    });
    fileTransfer.upload(param.upload_file, this.serviceName.profile_upload, options).then((data) => {
      let result: any = JSON.parse(data.response);
      if (result[0].data[0].id && result[0].data[0].id != null) {
        this.globalMethods.setter(this.serviceName.userProfile, JSON.stringify(result[0].data[0]));
        this.user.photo = this.globalMethods.userType('photo');
        console.log("profile Photo " + this.user.photo);
        this.globalMethods.hideToast();
        this.globalMethods.showToast(result[1].response.message);
      }
    }, (error) => {
      this.globalMethods.showToast("Upload failed");
    }).catch(cat => {
      this.globalMethods.showToast("Upload failed");
    });
  }
  updateStudentProfileDetails() {
    let params = {
      user_id: this.userData.id,
      profile: this.userData.profile,
      seo_keywords: this.userData.seo_keywords,
      meta_desc: this.userData.meta_desc,
      profile_page_title: this.userData.profile_page_title,
      qualification: this.userData.qualification,
      willing_to_travel: this.userData.willing_to_travel,
      own_vehicle: this.userData.own_vehicle
    }
    this.globalMethods.loaderStart();
    this.httpService.httpServicePost(this.serviceName.updateStudentProfileDetails, params).subscribe(
      data => {
        this.globalMethods.loaderStop();

        if (data[1].response.status == 1) {
          this.globalMethods.setter(this.serviceName.userProfile, JSON.stringify(data[0].data));
          this.globalMethods.showToast(data[1].response.message);
        }
        else {
          this.globalMethods.showToast(data[1].response.message);
        }
      },
      error => {
        this.globalMethods.loaderStop();
        this.globalMethods.showToast(JSON.stringify(error));
      },
      () => {

      }
    );

  }

}
