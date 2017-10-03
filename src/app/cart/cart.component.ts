import { Component, OnInit, Input, DoCheck, Output, EventEmitter } from '@angular/core';
import { Product } from '../products.class';
import { CartService } from '../services/cart.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'my-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, DoCheck {

  @Input() purchased: Product[];
  @Output() deleteEvent = new EventEmitter<Product>();

  price: number;

  private cartService: any;

  constructor(cartService: CartService) {
    this.cartService = cartService;
  }

  ngOnInit() {

  }

  ngDoCheck() {
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    let calculatedPrice = 0;
    this.purchased.forEach(function (product) {
      calculatedPrice += product.price * product.amount;
    });
    this.price = calculatedPrice;
  }

  removeItem(item: Product): void {
      this.deleteEvent.next(item);

  }

}
