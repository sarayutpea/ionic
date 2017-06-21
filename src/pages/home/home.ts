import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../../pages/contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController) {

  }
  
  tryClick():void{
    this.navCtrl.push(ContactPage,{
      companyName: 'Pea company',
      companyWebsite: 'sarayut.com'
    });
    console.log('Click!');
  }

}
