import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User} from './user'

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  _url='http://localhost:7700/api/forms'


  constructor(private http:HttpClient) { }
  enroll(user:User){
    return this.http.post<any>(this._url,user)
  }
}
