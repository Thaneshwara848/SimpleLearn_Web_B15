import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-httpintegration',
  templateUrl: './httpintegration.component.html',
  styleUrls: ['./httpintegration.component.css']
})
export class HttpintegrationComponent implements OnInit{

  constructor(private records:ProductService){

  }
  product:any=[];
  ngOnInit() {
    return this.records.getAllProducts().subscribe(
       data=>{
         console.log("responce recived ",data)
         this.product=data;
     },
       error=>console.log("exception recoved ")
     )
   }

}
