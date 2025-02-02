import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, HeaderComponent ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  products = signal<Product[]>([]);

  cart = signal<Product[]>([]);

  constructor() {
    const initProducts: Product[] = [
      {
        id: crypto.randomUUID(),
        title: 'Producto 1',
        price: 100,
        image: 'https://picsum.photos/250/250?r=22',
        creationAt: new Date().toISOString()
      },
      {
        id: crypto.randomUUID(),
        title: 'Producto 2',
        price: 200,
        image: 'https://picsum.photos/250/250?r=23',
        creationAt: new Date().toISOString()

      },
      {
        id: crypto.randomUUID(),
        title: 'Producto 3',
        price: 300,
        image: 'https://picsum.photos/250/250?r=24',
        creationAt: new Date().toISOString()

      },
      {
        id: crypto.randomUUID(),
        title: 'Producto 4',
        price: 500,
        image: 'https://picsum.photos/250/250?r=26',
        creationAt: new Date().toISOString()
      }, 
      {
        id: crypto.randomUUID(),
        title: 'Producto 5',
        price: 600,
        image: 'https://picsum.photos/250/250?r=27',
        creationAt: new Date().toISOString()
      },
      {
        id: crypto.randomUUID(),
        title: 'Producto 6',
        price: 700,
        image: 'https://picsum.photos/250/250?r=28',
        creationAt: new Date().toISOString()
      },
    ];

    this.products.set(initProducts);
  }

  addToCart(product: Product) {
    this.cart.update(prevState => [...prevState, product]);
  }
}
