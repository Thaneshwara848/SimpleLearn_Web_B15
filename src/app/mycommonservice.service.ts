import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MycommonserviceService {

  constructor() { }

  commondblogic(){
    console.log("hi DB logic 100 lines of code ....! in services ")
  }
}
