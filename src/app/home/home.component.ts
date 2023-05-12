import { Component } from '@angular/core';
import { ProductList } from '../data/productList';
import { CartServiceService } from '../services/cart-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  productList: ProductList;
  classList:string="btn btn-light rounded-pill m-2";

  constructor(private cartService: CartServiceService, private toastr: ToastrService) {
    this.productList = new ProductList();
  }

  addTocart(product: any) {
    let res = this.cartService.cart.addProduct(product);
    if (res)
      this.toastr.success('Product : "' + product.productName + '" added to cart', 'Add to cart result');
    else
      this.toastr.warning('Product : "' + product.productName + '" already in cart', 'Add to cart result');

  }

  onButtonGroupClick($event) {
    let clickedElement = $event.target || $event.srcElement;
    if (clickedElement.nodeName === "BUTTON") {
      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
      // if a Button already has Class: .active
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove("active");
      }
      clickedElement.className += " active";
      this.filterProducts(clickedElement.value);
    }
  }
  filterProducts(className: string) {
    //alert(className);
    let productItems = document.querySelectorAll(".productItem");
    productItems.forEach(p => {
      p.classList.add("hidden");


      if (p.classList.contains(className) || className == "*")
        p.classList.remove("hidden");
    });
  }

}
