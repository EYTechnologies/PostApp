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

  constructor(public navCtrl: NavController, public navParams: NavParams, public global:GlobalProvider) {
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
