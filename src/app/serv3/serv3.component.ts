import { Component } from '@angular/core';
import { MycommonserviceService } from '../mycommonservice.service';

@Component({
  selector: 'app-serv3',
  templateUrl: './serv3.component.html',
  styleUrls: ['./serv3.component.css']
})
export class Serv3Component {


  constructor(private dbl:MycommonserviceService){

  }

  component3(){
   // console.log("Hi COmponent 3 DB logic with 100 lines of code ")
   this.dbl.commondblogic();
  }

}
