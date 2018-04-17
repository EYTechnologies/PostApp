import { GlobalProvider } from './../../providers/global/global';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  username:string;
  email:string;
  age:number;
  occupation:string;

  imagedata:any;
  logoimagedata:any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public global:GlobalProvider) {
    this.username=global.userNAME;
    this.email=this.global.Email;
    this.age=this.global.Age;
    this.occupation=this.global.Occupation;

    console.log(this.global.Email);

    this.imagedata=this.global.imageDATA;
    this.logoimagedata=this.global.logoIMAGEDATA;
    console.log(this.imagedata);
    console.log(this.logoimagedata);

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    
  }

  

}


// uploadProfile(data, picType) {
//   var storageLocation = "";
//   if (picType == "logo") {
//     storageLocation = '/photos/logo/';
//     this.fireData.uploadProfile(data, storageLocation).then((url) => {
//       console.log("url imageUpload", url)
//       this.logoImageData = url;
//       this.showSuccesfulUploadAlert();
//     })
//   } else if (picType == "backgroundImage") {
//     storageLocation = '/photos/background/';
//     this.fireData.uploadProfile(data, storageLocation).then((url) => {
//       console.log("url back", url)
//       this.backgroundImage = url;
//       this.showSuccesfulUploadAlert();
//     })
//   }
// }