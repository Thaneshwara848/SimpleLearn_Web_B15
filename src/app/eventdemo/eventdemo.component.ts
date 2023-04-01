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
  mytotal=0;
  myemi=0;
  roi=0;

   cal(p:any,t:any,r:any){
   
    this.mytotal=(p*t*r)/100;
    this.myemi=this.mytotal/t;
 
  }

   loan(event:any){
    // console.log(event.target.value)
    if(event.target.value=='car'){
            this.roi=8;
    }
    else   if(event.target.value=='home'){
            this.roi=10;
    }
    else   if(event.target.value=='personal'){
            this.roi=13;
    }
    else   if(event.target.value=='eduation'){
           this.roi=11;
    }
 }
}