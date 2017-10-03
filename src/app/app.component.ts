import { Component, OnInit, DoCheck } from '@angular/core';
import { Product } from './products.class';
import { ProductsService } from './products.service';
import { CartService } from './services/cart.service';
import { Categories } from './categories.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, DoCheck {
  name: string;
  description: string;
  price: number;
  category: Categories;
  isAvailable: boolean;
  products: Product[];
  value = '';

  ingredients: string[] = [
    'Beurre manié',
    'brandy Brandy',
    'Chilli sauce',
    'Coconut milk',
    'Courgette'
  ];
  equivalents: string[] = [
    'Mayonese',
    'Whisky',
    'Curry sauce',
    'Cow milk',
    'Soup'
  ];
  purchased: Product[];

  private productService: any;
  private cartService: any;

  constructor(productService: ProductsService, cartService: CartService) {
    this.name = 'First item';
    this.description = 'test';
    this.price = 300;
    this.category = Categories.furniture;
    this.isAvailable = false;
    this.productService = productService;
    this.cartService = cartService;
  }

  ngOnInit(): void {
    this.products = this.getProducts();
  }

  ngDoCheck() {
  }

  onBuy(item: Product, amount: number): void {
    console.log(`You bought ${item.name}`);
    if (!amount) {
      amount = 1;
    }
    for (let i = 0; i < amount; i++) {
      this.cartService.addProductToCart(item);
    }
    this.getPurchased();
  }

  getProducts(): Product[] {
    return this.productService.getProducts();
  }

  getPurchased(): void {
    this.purchased = this.cartService.getPurchasedProducts();
  }

  removeItem(item: Product): void {
    this.cartService.removeFromCart(item);

  }

  update(value: string) { this.value = value; }
}
