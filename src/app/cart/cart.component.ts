import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cartItem';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit {
  items: Object;
  cartTotal: number;

  constructor(private cart: CartService) {

  }

  ngOnInit() {
    this.setItems();
  }

  setItems(event = null) {
    this.items = Object.values(this.cart.getItems());
    this.calculateTotal();
  }

  calculateTotal() {
    var total = 0;
    var itemsArr = Object.values(this.cart.getItems());
    itemsArr.forEach((i: CartItem) => {
      total += <number>i.price;
    });
    this.cartTotal = total;
    return
  }

}
