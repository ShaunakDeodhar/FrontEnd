import { Injectable } from '@angular/core';
import productsJSON from '../assets/json/products.json';
interface Product {
  productImage: string;
  productID: string;
  productType: string;
  productDescription: string;
  productPrice: number;
  productAction: string;
}
@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor() { }
  products: Product[] = productsJSON
  ngOnInit(): void {
  }

}
