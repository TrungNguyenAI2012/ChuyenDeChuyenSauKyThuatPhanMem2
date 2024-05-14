
import { Product } from 'src/app/models/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product = new Product;
  constructor(private route:ActivatedRoute, private productServive:ProductService) { }

  ngOnInit(): void {
    this.getRoutePro(this.route.snapshot.params['maMH']);
  }

  getRoutePro(id:any){
    this.productServive.searchProduct(id).subscribe((data:any)=>{
      this.product=data;
    });
  }
}


