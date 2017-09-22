import { Injectable } from '@angular/core';
import { Product } from './products.class';
import { Categories } from './categories.enum';

@Injectable()
export class ProductsService {

  private products: Product[];

  constructor() {
    this.products = [
      {
        name: 'Water',
        description: 'You can drink it!',
        price: 20,
        category: Categories.food,
        isAvailable: true
      },
      {
        name: 'Watermelon',
        description: 'Very tasty fruit.',
        price: 80,
        category: Categories.food,
        isAvailable: false
      },
      {
        name: 'Cookies',
        description: 'You can eat it!',
        price: 18,
        category: Categories.food,
        isAvailable: true
      },
      {
        name: 'Cola',
        description: 'Sweet drink.',
        price: 40,
        category: Categories.food,
        isAvailable: true
      },
      {
        name: 'Soda',
        description: 'Water with bulbs.',
        price: 25,
        category: Categories.food,
        isAvailable: false
      },
      {
        name: 'Candies',
        description: 'Better than cookies ;)',
        price: 30,
        category: Categories.food,
        isAvailable: true
      }
    ];
  }

  getProducts(): Product[] {
    return this.products;
  }
}
