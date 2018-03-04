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
        var that = this;
        var products = JSON.parse(localStorage.getItem('products'));
        if (products !== null || typeof products !== 'undefined') {
            var slug = this.route.params.value.id;
            var item = products.find(x => { return x.slug === slug });
            this.product = item;
        } else {
            let id = this.route.params['value']['id'];
            this.dataService.getProduct(id).subscribe((prod: any) => {
                that.product = prod.data.product;
            })
        }
    }

    AddProductToCart(product: Object) {
        this.cartService.addItemToCart(product);
        var test = JSON.parse(localStorage.getItem("ShoppingCartKey"));
    }

    //  TODO: check  if product is in cart

}
