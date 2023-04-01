import { Component } from '@angular/core';

@Component({
  selector: 'app-eventdemo',
  templateUrl: './eventdemo.component.html',
  styleUrls: ['./eventdemo.component.css']
})
export class EventdemoComponent {

  abc(){
   // alert("Hi i clicked the button");
   console.log("Hi Abc Function ...!")
  }


  getName(name:string){
  //  alert("Hi My Name is : "+name)
    console.log("Hi My name is :"+name)
  }

  mychoice=false;

  name="prakash";
}