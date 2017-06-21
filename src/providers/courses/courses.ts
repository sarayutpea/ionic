import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx'; // import ทุกอย่างของ Rxjs
import { Item } from '../../models/item';

/*
  Generated class for the CoursesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CoursesProvider {

  constructor(private http: Http) {
    // console.log('Hello CoursesProvider Provider');
    
  }

  public getCourses():Observable<Item[]>{
    let data:any = this.http.get('https://codingthailand.com/api/get_courses.php')
          .map((res:Response) => <Item[]>res.json());

    return data;
  }
}
