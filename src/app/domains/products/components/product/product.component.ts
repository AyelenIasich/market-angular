import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) product: Product = {id: '', title: '', price: 0, image: '', creationAt: ''};


  @Output() addToCart = new EventEmitter();

  addToCartHandler(){
    console.log('Mensaje desde el hijo ');
    this.addToCart.emit("hola esto es un mensaje desde el hijo" + this.product.title);
  }

}
