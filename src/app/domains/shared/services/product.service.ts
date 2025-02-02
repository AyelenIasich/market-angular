import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  constructor() { }

  API_URL = 'https://api.escuelajs.co/api/v1';

  getProducts() {
    return this.http.get<Product[]>(this.API_URL + '/products');
  }
}
