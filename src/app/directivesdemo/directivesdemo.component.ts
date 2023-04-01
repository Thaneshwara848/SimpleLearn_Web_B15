import { Component } from '@angular/core';

@Component({
  selector: 'app-directivesdemo',
  templateUrl: './directivesdemo.component.html',
  styleUrls: ['./directivesdemo.component.css']
})
export class DirectivesdemoComponent {
  choice=false

  emp=["Abi","Bindu","Sindu","Chandu"];
  fruits=["Apple","banana","Chico","Dates"];
  
  fruitsname(fruit:any){
this.fruits.push(fruit);
  }
  
  day=0;
  options(opt:any){
    this.day=opt;
  }
}
