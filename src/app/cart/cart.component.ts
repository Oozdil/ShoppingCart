import { Component } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';
import { CartModel } from '../models/cart';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart!: CartModel;
  totalSum: number = 0;
  sum: number = 0;
  delivery: number = 5;
  summaryDisabled:boolean=true;
  jobForm = this.fb.group({
    fullname: '',
    address: '',
  })
  save() {
    
    this.cartService.cart.ownerName = this.jobForm.value.fullname;
    this.cartService.cart.ownerAddress = this.jobForm.value.address;

    if(this.cart.sum>0)
    this.summaryDisabled=false;

  }
  constructor(private cartService: CartServiceService,private fb: FormBuilder) {
    this.cart = this.cartService.cart;
  }

  ngOnInit() {
    this.calculateSum();
    this.cartService.cart.delivery=this.delivery;
  }

  changeDelivery(_delivery: any) {
    if (_delivery)
    {
      this.delivery = parseInt(_delivery);
      this.cartService.cart.delivery=this.delivery;
    }
    this.calculateSum();
  }



  delteItem(cartItem: any) {
    let index = this.cartService.cart.list.indexOf(cartItem);
    this.cartService.cart.list.splice(index, 1);
    this.calculateSum();

  }
  dec(cartItem: any) {
    let index = this.cartService.cart.list.indexOf(cartItem);
    this.cartService.cart.list[index].dec();
    this.calculateSum();

  }
  inc(cartItem: any) {
    let index = this.cartService.cart.list.indexOf(cartItem);
    this.cartService.cart.list[index].inc();
    this.calculateSum();
  }

  calculateSum() {
    this.sum = this.cartService.cart.getSum();
    this.totalSum = this.cartService.cart.getSum();

    if (this.totalSum > 0) {      
      this.totalSum += this.delivery;
      if(this.cart.ownerAddress!="")
      this.summaryDisabled=false;
    }
  }
}
