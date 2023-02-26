import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-nextpage',
  templateUrl: './nextpage.component.html',
  styleUrls: ['./nextpage.component.css']
})
export class NextpageComponent implements OnInit {
  arrayLength: number = 0;
  startIndex: number =0;
  endIndex: number =0;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // Get the initial values of startIndex and endIndex from the ProductService
    this.productService.getStartIndex().subscribe(startIndexValue => {
      this.startIndex = startIndexValue;
    });

    this.productService.getEndIndex().subscribe(endIndexValue => {
      this.endIndex = endIndexValue;
    });

    this.arrayLength = this.productService.arrayLength;
  }
  
  loadMore() {
    // Increment startIndex and endIndex by 2
    
      if (this.endIndex <= this.arrayLength-2)  {
    const newStartIndex = this.startIndex + 2;
    const newEndIndex = this.endIndex + 2;

    // Update the values in the ProductService
    this.productService.updateStartIndex(newStartIndex);
    this.productService.updateEndIndex(newEndIndex);
    }
  }
  loadLess() {
    // Decrement startIndex and endIndex by 2
    if (this.startIndex >= 2) {
    const newStartIndex = this.startIndex -2;
    const newEndIndex = this.endIndex -2;

    // Update the values in the ProductService
    this.productService.updateStartIndex(newStartIndex);
    this.productService.updateEndIndex(newEndIndex);
    }
  }
  /*loadMore() {
    this.productService.loadMore();
    console.log("loadMore button has been clicked");
  }

  
  loadLess(){
    this.productService.loadLess();
    console.log("loadLess button has been clicked");
  }
*/

}
