import { Component } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent {


  name="thaNESh iS a jaVA tRainer";
  amount=123456789;
  d= new Date();
  emp1 = [
    {
    id:100,
    uname:'Abi',
    email:"AbiABC@gnail.com"
    },
  ]





  // emp = ["Abi","Bindu","Chandu","Sindu","Pravin"];
  emp = [
    {
    id:100,
    uname:'Abi',
    email:"AbiABC@gnail.com"
    },
    {
      id:200,
      uname:'Ramesh',
      email:"RaMEAShabcAZY@gnail.com"
    },
    {
      id:300,
      uname:'Rajesh',
      email:"RaJEAShabcAZY@gnail.com"
    },
    {
      id:400,
      uname:'Rajesh',
      email:"RakEAShXYAAzzzY@gnail.com"
    },
    {
      id:500,
      uname:'mahesh',
      email:"MAHEbcAZY@gnail.com"
    },
  ];
}
