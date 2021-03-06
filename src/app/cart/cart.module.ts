import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
  ],
  declarations: [CartComponent, CartItemComponent, CheckoutComponent, CartItemComponent]
})
export class CartModule { }
