import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output, signal, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { OrderCardComponent } from '../order-card/order-card.component';
import { totalPrice } from '../../../../utils/price-utils';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout-side-menu',
  standalone: true,
  imports: [CommonModule, OrderCardComponent],
  templateUrl: './checkout-side-menu.component.html',
  styleUrl: './checkout-side-menu.component.css'
})
export class CheckoutSideMenuComponent {
  private cartService = inject(CartService);
  totalPrice = this.cartService.totalPrice;
  cart = this.cartService.cart;

  @Input() hideSideMenu: boolean = true;
  @Output() closeCart = new EventEmitter();

  onCloseCart() {
    this.closeCart.emit();
  }
}
