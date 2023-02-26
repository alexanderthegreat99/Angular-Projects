import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  arrayLength: number = 0;
  startIndex: number =0;
  endIndex: number =0;
  subscriptionStartIndex: Subscription = Subscription.EMPTY;
  subscriptionEndIndex: Subscription = Subscription.EMPTY;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.products;
    //this.arrayLength= this.products.length;
    this.arrayLength = this.productService.arrayLength;
    console.log( "array length: " + this.arrayLength);
    this.subscriptionStartIndex = this.productService.getStartIndex().subscribe(value => {
      this.startIndex = value;
    });
    //this.startIndex = this.productService.startIndex;
    console.log( "startIndex: " + this.startIndex);
    this.subscriptionEndIndex = this.productService.getEndIndex().subscribe(value => {
      this.endIndex = value;
    });
    //this.endIndex = this.productService.endIndex;
    console.log( "endIndex: " + this.endIndex);

   
  }
  ngOnDestroy() {
    this.subscriptionStartIndex.unsubscribe();
    this.subscriptionEndIndex.unsubscribe();
  }
  // products = [
  //   {id:1, name: 'Minimalists Analog Watch', price: '109', color: 'Black', available: 'Available', image: '/assets/products/product-image-1.jpeg'},
  //   {id:2, name: 'Hisense Ultra HD Smart TV', price: '3339', color: 'Black', available: 'Available', image: '/assets/products/product-image-2.jpeg'},
  //   {id:3, name: 'APPLE iPhone 12', price: '1855', color: 'Black', available: 'Not Available', image: '/assets/products/product-image-3.jpeg'},
  //   {id:4, name: 'LG Fully Automatic Washing Machine', price: '1765', color: 'White', available: 'Available', image: '/assets/products/product-image-4.jpeg'},
  //   {id:5, name: 'LG Refrigerator with Door Cooling', price: '2815', color: 'White', available: 'Not Available', image: '/assets/products/product-image-5.jpeg'},
  //   {id:6, name: 'DELL Inspiron One 27 Ryzen 7', price: '2145', color: 'White', available: 'Available', image: '/assets/products/product-image-6.jpeg'}
  // ];
}
