import { Component, OnInit } from '@angular/core';
import { ApiListProductService } from '../service/api-list-product.service';
import { Response } from '../Models/Response';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
 public lst:any[0];
  constructor(
  
    private apiProductos: ApiListProductService
  
  ) {
    
   }

  ngOnInit(): void {
    this.getProductos();
  }
  getProductos(){
    this.apiProductos.getProductos().subscribe(response=>{
        this.lst=response.data;
   
    })
  }

}
