import { Injectable } from '@angular/core';
import { Product } from '../products.class';

@Injectable()
export class CartService {

  private purchased: Product[] = [];

  constructor() { }

  addProductToCart(product: Product): void {
    const index = this.purchased.findIndex(item => item.name === product.name);
    if (index === -1) {
      product.amount = 1;
      this.purchased.push(product);
    } else {
      this.purchased[index].amount += 1;
    }
  }

  getPurchasedProducts(): Product[] {
    return this.purchased;
  }

  removeFromCart(product): Product[] {
    const index = this.purchased.findIndex(item => item.name === product.name);
    if (this.purchased[index].amount === 1) {
      return this.purchased.splice(index, 1);
    }
    this.purchased[index].amount -= 1;
    return this.purchased;
  }
}
