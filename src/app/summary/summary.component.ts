import { Component } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';
import { CartModel } from '../models/cart';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {

  cart: CartModel;
  constructor(private cartService: CartServiceService) {
    this.cart = this.cartService.cart;
  }

}
