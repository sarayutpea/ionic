import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  companyName:string = '';
  companyWebsite:string = '';

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.companyName = this.navParams.get('companyName');
    this.companyWebsite = this.navParams.get('companyWebsite');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
    console.log(this.companyName);
    console.log(this.companyWebsite);
  }

}
