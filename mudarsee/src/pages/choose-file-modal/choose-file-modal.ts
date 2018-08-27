import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,ViewController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
	selector: 'page-choose-file-modal',
	templateUrl: 'choose-file-modal.html',
})
export class ChooseFileModalPage {
	selectedCertificate:any;
	constructor(public navCtrl: NavController, 
		public navParams: NavParams,
		private transfer: FileTransfer, 
		private file: File,
		private fileChooser: FileChooser,
		private filePath: FilePath,
		private camera: Camera,
		public modalCtrl: ModalController,
		public viewCtrl: ViewController,
		) {
		this.selectedCertificate = {};
	}

	ionViewDidLoad() {
		this.selectedCertificate = this.navParams.data.certificate;
	}
	openFile(){
		this.fileChooser.open().then(uri => {
			this.selectedCertificate.upload_file = uri;
			this.closeModal(this.selectedCertificate);
		}).catch(e => {
			
		});
	}
	closeModal(data){
		this.viewCtrl.dismiss(data);
	}
	openGallery(){
		this.camera.getPicture({
			quality: 50,
			destinationType: this.camera.DestinationType.FILE_URI,
			sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE,
			allowEdit: true,
			correctOrientation: true,
			saveToPhotoAlbum:true  
		}).then((imageData) => {
			let imageName = imageData.substring(0, imageData.indexOf("?"));
			this.selectedCertificate.upload_file = imageName;
			this.closeModal(this.selectedCertificate);
		}, (err) => {
			this.selectedCertificate.upload_file = '';
			this.closeModal(this.selectedCertificate);
		});
	}
	openCamera(){
		this.camera.getPicture({
			quality: 50,
			destinationType: this.camera.DestinationType.FILE_URI,
			sourceType: this.camera.PictureSourceType.CAMERA,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE,
			allowEdit: true,
			correctOrientation: true,
			saveToPhotoAlbum:true
		}).then((imageData) => {
			this.selectedCertificate.upload_file = imageData;
			this.closeModal(this.selectedCertificate);
		}, (err) => {
			this.selectedCertificate.upload_file = '';
			this.closeModal(this.selectedCertificate);
		});
	}

}
