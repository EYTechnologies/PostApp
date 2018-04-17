import { GlobalProvider } from './../../providers/global/global';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';

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

  

  constructor(public navCtrl: NavController, public navParams: NavParams, public global:GlobalProvider,
  public fireData:FirebaseProvider, public alertCtrl:AlertController) {
    this.username=global.userNAME;
    this.email=this.global.Email;
    this.age=this.global.Age;
    this.occupation=this.global.Occupation;

    console.log(this.global.Email);
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