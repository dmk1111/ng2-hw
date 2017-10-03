import { Injectable } from '@angular/core';
import { Product } from '../products.class';

@Injectable()
export class LocalStorageService {

  constructor() { }

  setItem(item: Product) {
    localStorage.setItem(item.name, JSON.stringify(item));
  }

  getItem(item: Product): Product {
    return JSON.parse(localStorage.getItem(item.name));
  }
  removeItem(item: Product) {
    localStorage.removeItem(item.name);
  }
}
