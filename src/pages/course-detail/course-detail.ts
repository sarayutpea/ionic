import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
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
  loading:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public coursesProvider:CoursesProvider, 
    private loadingController:LoadingController
    ) {
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
    this.loading = this.loadingController.create({
      spinner: 'bubbles',
      content:'please wait'
    });

    this.loading.present();
    return this.coursesProvider.getCourseDetail(id).subscribe(
                                                    (res) => this.courseDetail = res, 
                                                    (error) => this.errorMessage = <any>error, 
                                                    () => this.loading.dismiss()
                                                  );
  }

}
