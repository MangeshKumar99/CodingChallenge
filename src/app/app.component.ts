import { Component } from '@angular/core';
import {User} from './user'
import {EnrollmentService} from './enrollment.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics=['VISA','Amex','Master Card']
  dates=['May 1-3','May 15-18','June 1-3','June 15-18','July 1-3','July 15-18']
  topicHasError=true
  userModel= new User('','','',7739760619,'','','',560037,'','','default','default','')
  
  constructor(private es:EnrollmentService){}
  validateTopic(value:any){
    if(value==='default'){
      this.topicHasError=true
    }
    else{
      this.topicHasError=false
    }
  }
  onSubmit(){
    this.es.enroll(this.userModel).subscribe(data=>{
      console.log(data)
    })
  }
}
