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
  constructor(private cart: CartService) {

  }

  ngOnInit() {
    this.setItems();
  }

  setItems(event=null) {
    debugger;
    this.items = Object.values(this.cart.getItems());

  }

}
