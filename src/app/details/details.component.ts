import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../models/product';
import { ProductList } from '../data/productList';
import { CartServiceService } from '../services/cart-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  id: number = 0;
  product: ProductModel = new ProductModel();
  productList: ProductList = new ProductList();
  constructor(private route: ActivatedRoute,
    private cartService:CartServiceService,private toastr: ToastrService) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.productList.productList.forEach(p => {
      if (this.id == p.id) {
        this.product = p;
      }
    }
    );
  }

  addTocart() {
    let res=this.cartService.cart.addProduct(this.product);
    if(res)
    this.toastr.success('Product : "'+this.product.productName+'" added to cart', 'Add to cart result');
    else
    this.toastr.warning('Product : "'+this.product.productName+'" already in cart', 'Add to cart result');


  }


}
