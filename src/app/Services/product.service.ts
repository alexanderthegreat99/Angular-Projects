import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  products = [
    {id:1, name: 'Minimalists Analog Watch', price: '109', color: 'Black', available: 'Available', image: '/assets/products/product-image-1.jpeg'},
    {id:2, name: 'Hisense Ultra HD Smart TV', price: '3339', color: 'Black', available: 'Available', image: '/assets/products/product-image-2.jpeg'},
    {id:3, name: 'APPLE iPhone 12', price: '1855', color: 'Black', available: 'Not Available', image: '/assets/products/product-image-3.jpeg'},
    {id:4, name: 'LG Fully Automatic Washing Machine', price: '1765', color: 'White', available: 'Available', image: '/assets/products/product-image-4.jpeg'},
    {id:5, name: 'LG Refrigerator with Door Cooling', price: '2815', color: 'White', available: 'Not Available', image: '/assets/products/product-image-5.jpeg'},
    {id:6, name: 'DELL Inspiron One 27 Ryzen 7', price: '2145', color: 'White', available: 'Available', image: '/assets/products/product-image-6.jpeg'}
  ];
  arrayLength: number = this.products.length;
  private startIndex = new BehaviorSubject<number>(0);
  //startIndex: number =0;
  private endIndex = new BehaviorSubject<number>(2);
 // endIndex: number =2;
 getStartIndex(){
  return this.startIndex.asObservable();
 }
 getEndIndex(){
  return this.endIndex.asObservable();
 }
 updateStartIndex(newValue: number) {
  this.startIndex.next(newValue);
}// use this method in the button click
updateEndIndex(newValue: number) {
  this.endIndex.next(newValue);
}// use this method in the button click
/*loadMore() {
  if (this.endIndex <= this.arrayLength) {
  this.startIndex = this.endIndex;
  this.endIndex += 2;
  
  this.startIndexChange.emit(this.startIndex);
  this.endIndexChange.emit(this.endIndex);
}
}
loadLess() {
  if (this.startIndex >= 2) {
    this.startIndex = this.endIndex - 2;
    this.endIndex -= 2;
    this.startIndex-=2;
    this.startIndexChange.emit(this.startIndex);
    this.endIndexChange.emit(this.endIndex);
  }
}
loadMore() {
  this.endIndex.subscribe(endIndexValue => {
    if (endIndexValue <= this.arrayLength) {
      this.startIndex.subscribe(startIndexValue => {
        
        const newStartIndex = startIndexValue + 2;
        const newEndIndex = endIndexValue + 2;
        this.startIndex.next(newStartIndex);
        this.endIndex.next(newEndIndex);
        
      }).unsubscribe();
    }
  }).unsubscribe();
}


loadLess() {
  this.startIndex.subscribe(startIndexValue => {
    if (startIndexValue >= 2) {
      this.endIndex.subscribe(endIndexValue => {
        const newStartIndex = startIndexValue - 2;
        const newEndIndex = endIndexValue - 2;
        this.startIndex.next(newStartIndex);
        this.endIndex.next(newEndIndex);
      }).unsubscribe();
    }
  }).unsubscribe();
}
*/
  constructor() { }
}