import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ChooseFileModalPage } from '../choose-file-modal/choose-file-modal';
import { GlobalMethods } from '../../providers/global-methods';
import { ServiceName } from '../../providers/service';
import { HttpService } from '../../providers/http-service';
import { Toast } from '@ionic-native/toast';
import { FileOpener } from '@ionic-native/file-opener';

@IonicPage() 
@Component({
  selector: 'page-certificates',
  templateUrl: 'certificates.html',
})
export class CertificatesPage {
	selectedFileName:any;
  certificates:any;
  upload_certificates:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private transfer: FileTransfer, 
    private file: File,
    private fileChooser: FileChooser,
    private filePath: FilePath,
    private camera: Camera,
    public modalCtrl: ModalController,
    public globalMethods: GlobalMethods,
    public httpService: HttpService,
    public serviceName: ServiceName,
    public toast:Toast,
    private fileOpener: FileOpener
  ) {

    this.selectedFileName = '';
    this.certificates = [];
    this.upload_certificates = [];
        
  }
  ionViewDidLoad() {
      let params = {
        user_id: this.globalMethods.userType('id')
      }
      this.httpService.httpServicePost(this.serviceName.certificates_tutors_get,params).subscribe(data=>{
        let i=0;
        for(let certificate of data[0].data.certificates){
          i++;
          let file = data[0].data.user_uploads_arr[""+certificate.certificate_id+""] ? data[0].data.user_uploads_arr[""+certificate.certificate_id+""] : this.serviceName.default_pictureImage ;
          certificate['file'] = file;
          certificate['user_id'] = this.globalMethods.userType('id');
          certificate['upload_file'] = '';
          if(certificate.file==''){
              certificate['upload_status'] ='Select File';  
              certificate['upload_fileTypeImage'] = this.serviceName.default_pictureImage;
          }else{
             certificate['upload_status'] ='Download File';
             certificate['upload_fileTypeImage'] = certificate.file;
          }
          this.certificates.push(certificate);
          if(i == data[0].data.certificates.length){
            let upload_status='';
            let upload_fileTypeImage='';
            let file = data[0].data.user_uploads_arr["0"] ? data[0].data.user_uploads_arr["0"] : this.serviceName.default_pictureImage;
            if(file==''){
              upload_status='Select File'; 
              upload_fileTypeImage = this.serviceName.default_pictureImage;
            }else{
              upload_status ='Download File';     
              upload_fileTypeImage = file;
            }
            let params = {
              "user_id" : this.globalMethods.userType('id'),
              "certificate_id": "0",
              "title": "Other",
              "description": "<p>\r\n\ Other</p>\r\n",
              "required": "",
              "allowed_formats": "",
              "certificate_for": "",
              "status": "",
              "created": "",
              "updated": '',
              "file": "",
              upload_file: '',
              upload_fileTypeImage: upload_fileTypeImage,
              upload_status: upload_status 
            }
            this.certificates.push(params);
          }
        }
      },error=>{});
    }
    downloadFile(certificate){
        let name = ""+certificate.title+".jpg";      
        const url = certificate.file;
        const fileTransfer: FileTransferObject = this.transfer.create();

        fileTransfer.onProgress(data=>{
        if(data.lengthComputable){
          let percentage = ((data.loaded / data.total)*100).toFixed(0);
          this.toast.show(percentage+"% downloading...", '1000', 'bottom').subscribe(toast => {}
            );
        }   
      });
        if(url!=''){
          fileTransfer.download(url, this.file.dataDirectory + name).then((entry) => {
          this.toast.show("Download completed, file stored in "+ entry.toURL(), '8000', 'bottom').subscribe(toast => {}
            );
        }, (error) => {
          // handle error
        });
        }
        
    }
    presentProfileModal(certificate) {
      let profileModal = this.modalCtrl.create(ChooseFileModalPage,{certificate : certificate});
      profileModal.onDidDismiss(certificate_back => {
        for(let cert of this.certificates){
          if(cert.certificate_id == certificate_back.certificate_id){
            cert.upload_file = certificate_back.upload_file;
            cert.upload_status = 'Upload Pending';
            if(cert.upload_file != cert.file){
              this.upload_certificates.push(cert);
            }
          }
        } 
      });
      profileModal.present();
    }
   callUploadRecursive(array:any){
      if(array.length>0){
        this.uploadFile(array,array[0]);
      }
    }
    uploadFile(array,params){
      let options: FileUploadOptions = {
        fileKey: 'userfile',
        fileName: params.upload_file,
        headers: {},
        params: params,
        chunkedMode : false
      }
      const fileTransfer: FileTransferObject = this.transfer.create();
      fileTransfer.onProgress(data=>{
        if(data.lengthComputable){
          let percentage = ((data.loaded / data.total)*100).toFixed(0);
          this.toast.show(percentage+"% uploading...", '8000', 'bottom').subscribe(toast => {}
            );
        }   
      });

      fileTransfer.upload(params.upload_file, this.serviceName.certificates_upload, options).then((data) => {
        let response:any = JSON.parse(data.response);
        for(let cert of this.certificates){
          if(cert.certificate_id == options.params.certificate_id){
            cert.file = response[0].data.path;
            cert.upload_status = 'Upload completed';
          }
        } 
        array.splice(0, 1);
        this.callUploadRecursive(array);
      }, (err) => {
        for(let cert of this.certificates){
          if(cert.certificate_id == options.params.certificate_id){
            cert.upload_status = 'Upload Error';
          }
        } 
        array.splice(0, 1);
        this.callUploadRecursive(array);
      }).catch(cat => {
      });
    }
    
  }
