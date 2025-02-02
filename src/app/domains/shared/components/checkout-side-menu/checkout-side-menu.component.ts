import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { OrderCardComponent } from '../order-card/order-card.component';
import { totalPrice } from '../../../../utils/price-utils';

@Component({
  selector: 'app-checkout-side-menu',
  standalone: true,
  imports: [CommonModule, OrderCardComponent],
  templateUrl: './checkout-side-menu.component.html',
  styleUrl: './checkout-side-menu.component.css'
})
export class CheckoutSideMenuComponent {
  @Input() cart: Product[]  = [];
  @Input() hideSideMenu: boolean = true;
  @Output() closeCart = new EventEmitter();

  onCloseCart() {
    this.closeCart.emit();
  }

  totalPrice = signal<number>(0);

  ngOnChanges(changes: SimpleChanges) {
    if(changes['cart']){
      this.totalPrice.set(totalPrice(this.cart));
    }
  }
}
