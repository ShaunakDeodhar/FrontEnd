import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{
  productID = 0;
  productType = '';
  productDescription = '';
  productPrice = 0;
  productImageLink = '';

  constructor(private http : HttpClient, private route : ActivatedRoute, private router : Router) { }

  ngOnInit() : void {
    this.route.paramMap.subscribe(params => {
      const paramID = params.get('Id')
      if (paramID !== null) {
        this.productID =+ paramID
        this.getProduct()
      } else {
        console.error('Product Id is missing or null in route')
      }
    })
  }

  getProduct() {
    this.http.get('http://localhost:3000/getProduct/' + this.productID)
    .subscribe((response: any) => {
      console.log('Response for getProduct() in edit.ts:')
      console.log(response)
      const product = response[0]
      this.productType = product.Type
      this.productDescription = product.Description
      this.productPrice = product.Price
      this.productImageLink = product.ImageLink
    }, (error) => {
      console.error('Error in edit.ts for getting products', error)
    })
  }

  updateProduct() {
    const product = {
      Id: this.productID,
      Type: this.productType,
      Description: this.productDescription,
      Price: this.productPrice,
      ImageLink: this.productImageLink
    }

    this.http.put('http://localhost:3000/updateProduct', product)
    .subscribe((response : any) => {
      alert(response.message)
      this.router.navigate(['/cart'])
    }, (error) => {
      console.error('Error in updating product', error)
    })
  }
}
