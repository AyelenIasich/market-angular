import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) imgPhoto: string = '';
  @Input({required:true}) title: string = '';
  @Input({required:true}) price: number = 0;

  @Output() addToCart = new EventEmitter();

  addToCartHandler(){
    console.log('Mensaje desde el hijo ');
    this.addToCart.emit("hola esto es un mensaje desde el hijo" + this.title);
  }

}
