import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router'



@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {
    constructor(private dataService: DataService, private cartService: CartService, private route: ActivatedRoute) {

    }
    product: Object;
    
    ngOnInit() {
        let id = this.route.params['value']['id'];
        this.dataService.getProduct(id)
        .then(data=> this.product=data)
    }

    AddProductToCart(product: Object) {
        this.cartService.addItemToCart(product);
        var test = JSON.parse(localStorage.getItem("ShoppingCartKey"));
        console.log('testing cart... ', test);
      }

      //  TODO: check  if product is in cart

}
