import { CartItem } from "./cartItem";
import { ProductModel } from "./product";

export class CartModel {
  list: CartItem[] = [];
  delivery: number = 0;
  sum: number = 0;
  cartItem!: CartItem;
  date: Date;
  ownerName: string = "";
  ownerAddress: string = "";
  constructor() {
    this.date = new Date();
  }


  addProduct(product: ProductModel): boolean {
    var p = new ProductModel();
    let isAdded = true;
    if (this.list.length == 0)
      this.date = new Date();



    this.list.forEach(c => {
      if (c.product.id == product.id) {
        p = c.product;
        isAdded = false;
      }
    });
    if (p.id == 0) {
      this.cartItem = new CartItem(product);
      this.list.push(this.cartItem);
      isAdded = true;
    }
    return isAdded;
  }

  getSum(): number {
    this.sum = 0;
    this.list.forEach(c => {
      this.sum += c.sum;
    });

    return this.sum;
  }

}

