import { Component, signal } from '@angular/core';
import { CheckoutSideMenuComponent } from '../checkout-side-menu/checkout-side-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CheckoutSideMenuComponent, ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 hideSideMenu = signal(true);

 toogleSideMenu() {
   this.hideSideMenu.update(prevState => !prevState);
 }

}
