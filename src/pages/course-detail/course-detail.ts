import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoursesProvider } from '../../providers/courses/courses';

import { Subscription } from 'rxjs/Subscription';
import { ItemDetail } from '../../models/item-detail';

/**
 * Generated class for the CourseDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-course-detail',
  templateUrl: 'course-detail.html',
})
export class CourseDetailPage {
  
  courseDetail:ItemDetail[];
  errorMessage:string;

  subscription:Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, public coursesProvider:CoursesProvider) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad CourseDetailPage');
    let id = this.navParams.get('id');
    this.subscription =  this.getCourseDetail(id);

    console.log(this.courseDetail);
  }

  ionViewWillLeave(){
    this.subscription.unsubscribe();
  }

  getCourseDetail(id:any){
    return this.coursesProvider.getCourseDetail(id).subscribe(
                                                    (res) => this.courseDetail = res, 
                                                    (error) => this.errorMessage = <any>error, 
                                                    () => console.log('Load Completed!')
                                                  );
  }

}
