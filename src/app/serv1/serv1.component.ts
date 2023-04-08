import { Component } from '@angular/core';
import { MycommonserviceService } from '../mycommonservice.service';

@Component({
  selector: 'app-serv1',
  templateUrl: './serv1.component.html',
  styleUrls: ['./serv1.component.css']
})
export class Serv1Component {

  constructor(private dbl:MycommonserviceService){

  }

  component1(){
   // console.log("Hi Component 1 with DB logic 100 lines of code  ")
   this.dbl.commondblogic();
  }

}
