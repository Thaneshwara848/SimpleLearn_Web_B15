import { Component } from '@angular/core';
import { MycommonserviceService } from '../mycommonservice.service';

@Component({
  selector: 'app-serv2',
  templateUrl: './serv2.component.html',
  styleUrls: ['./serv2.component.css']
})
export class Serv2Component {

 constructor(private dbl:MycommonserviceService){
  
 }

  component2(){
    //console.log("Hi compont 2 DB logic with 100 lines of code ")
    this.dbl.commondblogic();
  }

}
