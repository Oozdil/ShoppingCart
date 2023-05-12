import { ProductModel } from "../models/product";

export class ProductList {
    productList: ProductModel[] = [];
    product: ProductModel;
    categoryList: string[] = [];


    constructor() {
        const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat excepturi odio recusandae aliquid ad impedit autem commodi earum voluptatem laboriosam?";


        this.product = new ProductModel();
        this.product.id = 1;
        this.product.productName = "Asus Laptop with 500GB HDD 8GB RAM";
        this.product.category = "Asus";
        this.addToCategory(this.product.category);
        this.product.price = 499;
        this.product.description = this.product.productName+" : "+desc;
        this.product.imageUrl = "https://res.cloudinary.com/dxfq3iotg/image/upload/v1571750967/Ecommerce/ef192a21ec96.jpg";
        this.productList.push(this.product);

        this.product = new ProductModel();
        this.product.id = 2;
        this.product.productName = "DELL Laptop with 500GB HDD 8GB RAM";
        this.product.category = "Dell";
        this.addToCategory(this.product.category);
        this.product.price = 599;
        this.product.description = this.product.productName+" : "+desc;
        this.product.imageUrl = "https://res.cloudinary.com/dxfq3iotg/image/upload/v1571751108/Ecommerce/laptop-dell-xps-15-computer-monitors-laptops.jpg";
        this.productList.push(this.product);

        this.product = new ProductModel();
        this.product.id = 3;
        this.product.productName = "Asus Laptop with 1TB HDD 8GB RAM";
        this.product.category = "Asus";
        this.addToCategory(this.product.category);
        this.product.price = 699;
        this.product.description = this.product.productName+" : "+desc;
        this.product.imageUrl = "https://res.cloudinary.com/dxfq3iotg/image/upload/v1571750722/Ecommerce/acer-v-17-nitro-realsense.jpg";
        this.productList.push(this.product);

        this.product = new ProductModel();
        this.product.id = 4;
        this.product.productName = "HP Laptop with 250GB HDD 4GB RAM";
        this.product.category = "HP";
        this.addToCategory(this.product.category);
        this.product.price = 399;
        this.product.description = this.product.productName+" : "+desc;
        this.product.imageUrl = "https://res.cloudinary.com/dxfq3iotg/image/upload/v1571750391/Ecommerce/hp-17-x061nr-white-background.jpg";
        this.productList.push(this.product);

        this.product = new ProductModel();
        this.product.id = 5;
        this.product.productName = "Asus Laptop with 500GB HDD 16GB RAM";
        this.product.category = "Asus";
        this.addToCategory(this.product.category);
        this.product.price = 699;
        this.product.description = this.product.productName+" : "+desc;
        this.product.imageUrl = "https://res.cloudinary.com/dxfq3iotg/image/upload/v1571750338/Ecommerce/Laptop-3.jpg";
        this.productList.push(this.product);

        this.product = new ProductModel();
        this.product.id = 6;
        this.product.productName = "DELL XPS with 500GB HDD 8GB RAM";
        this.product.category = "Dell";
        this.addToCategory(this.product.category);
        this.product.price = 799;
        this.product.description = this.product.productName+" : "+desc;
        this.product.imageUrl = "https://res.cloudinary.com/dxfq3iotg/image/upload/v1571751108/Ecommerce/laptop-dell-xps-15-computer-monitors-laptops.jpg";
        this.productList.push(this.product);
    }


    addToCategory(category: string) {

        var index = this.categoryList.indexOf(category);
        if (index == -1)
            this.categoryList.push(category);
    }
}