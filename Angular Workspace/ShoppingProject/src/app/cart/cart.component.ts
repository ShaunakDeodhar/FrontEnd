import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { __runInitializers } from 'tslib';
import { AddProductService } from '../add-product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  
  constructor (private http : HttpClient) {  }
  products: any[] = []
  numberOfProducts = "0 items"
  responseMessage: string = ''
  cartTotal = 0

  getProducts() {
    this.http.get('http://localhost:3000/getProducts')
    .subscribe((response: any) => {
      console.log(response)
      this.products = response
      if (this.products.length === 1) {
        this.numberOfProducts = "1 item"
      } else {
        this.numberOfProducts = this.products.length + " items"
      }
      this.calculateCartTotal();
    }, (error) => {
      console.error('Error in cart.ts for getting products', error)
    })
  }

  deleteProduct(Id: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.http.delete('http://localhost:3000/deleteProduct/' + Id)
      .subscribe((response: any) => {
        this.responseMessage = response.message
        this.getProducts()
      }, (error) => {
        console.error('Error in cart.ts for deleting product', error)
      })
    }
  }

  calculateCartTotal() {
    let productPrices: number[] = []
    let temp = this.products.forEach(product => {
      productPrices.push(product.Price)
    });
    if (productPrices.length > 0) {
      this.cartTotal = productPrices.reduce(function (a, b) {return a + b})
    } else {
      this.cartTotal = 0
    }
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
