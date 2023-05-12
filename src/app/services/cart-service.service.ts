import { Injectable } from '@angular/core';
import { CartModel } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
cart:CartModel;
  constructor() {
    this.cart=new CartModel();
   }

   
}
