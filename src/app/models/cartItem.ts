import { ProductModel } from "./product";

export class CartItem {
    product: ProductModel = new ProductModel();
    count: number = 0;
    sum: number = 0;

    constructor(_product: ProductModel) {
        this.product = _product;
        this.count = 1;
        this.sum = this.count * this.product.price;

    }

    dec() {
        //alert("dec");

        if (this.count > 1) {
            this.count--;
            this.sum = this.count * this.product.price;
        }
    }
    inc() {
        this.count++;
        this.sum = this.count * this.product.price;
    }
}

