import { Component, OnInit, Input, DoCheck, Output, EventEmitter } from '@angular/core';
import { Product } from '../products.class';
import { CartService } from '../cart.service';
import { AppComponent } from '../app.component';

@Component({
  providers: [CartService],
  selector: 'my-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, DoCheck {

  @Input() purchased: Product[];
  @Output() deleteEvent = new EventEmitter<string>();

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
      calculatedPrice += product.price;
    });
    this.price = calculatedPrice;
  }

  removeItem(index): void {
      this.deleteEvent.next(index);

  }

}
