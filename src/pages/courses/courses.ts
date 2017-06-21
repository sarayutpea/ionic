import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { CoursesProvider } from '../../providers/courses/courses';

/**
 * Generated class for the CoursesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
})
export class CoursesPage {
  courses:Item[];

  constructor(private navCtrl: NavController, public navParams: NavParams, private coursesProvider:CoursesProvider) {
    
  }

  ionViewWillEnter() {
    this.coursesProvider.getCourses().subscribe((res) => this.courses = res);
  }

}
