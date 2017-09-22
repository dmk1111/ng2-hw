import { Injectable } from '@angular/core';
import { Product } from './products.class';

@Injectable()
export class CartService {

  private purchased: Product[] = [];

  constructor() { }

  addProductToCart(product): void {
    this.purchased.push(product);
  }

  getPurchasedProducts(): Product[] {
    return this.purchased;
  }

  removeFromCart(index): Product[] {
    return this.purchased.splice(index, 1);
  }
}
