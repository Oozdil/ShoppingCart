import { Component } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private cartService: CartServiceService) {

  }


  get count(): number {
    return this.cartService.cart.list.length;
  }
}
