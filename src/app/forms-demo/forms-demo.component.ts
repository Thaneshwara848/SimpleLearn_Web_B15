import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.css']
})
export class FormsDemoComponent {

  userlogin(userForm:any){
    console.log(userForm)
  }
}
