import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { totalPrice } from '../../../utils/price-utils';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cart = signal<Product[]>([]);

  totalPrice = computed(() => {
    const cart = this.cart();
    return totalPrice(cart)
  })

  constructor() { }

  addToCart(product:Product){
    this.cart.update((state) => [...state, product]);
  }
}
