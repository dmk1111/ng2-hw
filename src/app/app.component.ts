import { Component, OnInit, DoCheck } from '@angular/core';
import { Product } from './products.class';
import { ProductsService } from './products.service';
import { CartService } from './cart.service';
import { Categories } from './categories.enum';

@Component({
  providers: [ProductsService, CartService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, DoCheck{
  name: string;
  description: string;
  price: number;
  category: Categories;
  isAvailable: boolean;
  products: Product[];
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

  onBuy(item): void {
    console.log(`You bought ${item.name}`);
    this.cartService.addProductToCart(item);
    this.getPurchased();
  }

  getProducts(): Product[] {
    return this.productService.getProducts();
  }

  getPurchased(): void {
    this.purchased = this.cartService.getPurchasedProducts();
  }

  removeItem(index): void {
    this.cartService.removeFromCart(index);

  }
}
