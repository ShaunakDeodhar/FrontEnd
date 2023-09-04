import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productID = 0;
  productType = '';
  productDescription = '';
  productPrice = 0;
  productImageLink = '';

  constructor(private http : HttpClient) {}

  addProduct() {
    const product = {
      Id : this.productID,
      Type : this.productType,
      Description : this.productDescription,
      ImageLink : this.productImageLink,
      Price : this.productPrice
    }

    this.http.post('http://localhost:3000/addProduct', product)
    .subscribe((response:any) => {
      alert(response.message)
      this.productID = 0;
      this.productType = '';
      this.productDescription = '';
      this.productPrice = 0;
      this.productImageLink = '';
    }, (error) => {
      console.error('Error in TS for adding product', error)
    })
  }
}
