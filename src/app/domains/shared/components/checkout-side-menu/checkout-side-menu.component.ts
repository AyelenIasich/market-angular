import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkout-side-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout-side-menu.component.html',
  styleUrl: './checkout-side-menu.component.css'
})
export class CheckoutSideMenuComponent {
  @Input() hideSideMenu: boolean = true;
  @Output() closeCart = new EventEmitter();

  onCloseCart() {
    this.closeCart.emit();
  }
}
