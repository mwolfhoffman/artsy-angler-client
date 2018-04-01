import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CartService } from '../../services/cart.service';
import { CartComponent } from '../cart.component';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItem;
  @Output() refreshCart = new EventEmitter<string>();

  constructor(private cart:CartService) { }

  ngOnInit() {
console.log(this.item)
  }

  removeItemFromCart(id){
    this.cart.removeItemFromCart(id);
    debugger;
    this.refreshCart.emit('refresh cart items');
  }

}
