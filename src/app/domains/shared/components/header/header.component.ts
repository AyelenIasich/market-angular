import { Component, inject, signal } from '@angular/core';
import { CheckoutSideMenuComponent } from '../checkout-side-menu/checkout-side-menu.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CheckoutSideMenuComponent,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  hideSideMenu = signal(true);

  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }

}
