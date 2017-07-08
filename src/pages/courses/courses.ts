import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { Item } from '../../models/item';
import { CoursesProvider } from '../../providers/courses/courses';

import { Subscription } from 'rxjs/Subscription';

import { CourseDetailPage } from '../../pages/course-detail/course-detail';
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
  subscription:Subscription;
  errorMessage:string;
  loading:any;

  constructor(
    private navCtrl: NavController, 
    public navParams: NavParams, 
    private coursesProvider:CoursesProvider, 
    private loadingController:LoadingController
    ) {
    
  }

  // private presentLoadingDefault(){
  //   let loading = this.loadingController.create({
  //     content: 'Please wait...'
  //   });

  //   loading.present();

  //   // setTimeout(() => {
  //   //   this.loading.dismiss();
  //   // }, 5000);

  // }

  private getCourses(){
    this.loading = this.loadingController.create({
      content: 'Please wait...'
    });
    this.loading.present();
    return this.coursesProvider.getCourses().subscribe(
                                              (res) => this.courses = res, 
                                              (error) => this.errorMessage = <any>error,
                                              () => this.loading.dismiss()
                                            );
  }

  private getCourseDetail(id:any):void{
    this.navCtrl.push(CourseDetailPage,{id:id});
  }

  ionViewWillEnter() {
    this.subscription = this.getCourses(); 
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

}
