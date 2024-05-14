import { Product} from './../models/product.model'; 
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'Application/json'})
  };
  apiUrl= 'https://60a89f4820a6410017305f6b.mockapi.io/product';
  constructor(private http:HttpClient) { }

  getAllProduct(): Observable<Product[]>  {
  return this.http.get<Product[]>(this.apiUrl).pipe();
  }
  searchProduct(maMH:number):Observable<Product>{
    return this.http.get<Product>(`${this.apiUrl}/${maMH}`).pipe()
  }
}


