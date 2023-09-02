import { Component } from '@angular/core';
import { __runInitializers } from 'tslib';
import { AddProductService } from '../add-product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  
  constructor (private addProductObject : AddProductService) {  }
  products = this.addProductObject.products
  cartTotal = 0

  calculateCartTotal() {
    this.products = this.addProductObject.products
    let productPrices: number[] = []
    let temp = this.products.forEach(product => {
      productPrices.push(product.productPrice)
    });
    this.cartTotal = productPrices.reduce(function (a, b) {return a + b})
  }

  addProduct() {
    this.addProductObject.products.push({productImage: 'https://assets.ajio.com/medias/sys_master/root/20210312/vWMe/604ae3e9f997dd5c400d64ea/-473Wx593H-462135105-cream-MODEL.jpg', productID: '54304', productType: 'Shoes', productDescription: 'Low-Top Lace-Up Sneakers', productPrice: 2999, productAction: 'Buy'})
    this.calculateCartTotal()
  }

  ngOnInit(): void {
    this.calculateCartTotal();
  }
}
