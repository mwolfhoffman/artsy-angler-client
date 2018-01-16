import { Injectable } from '@angular/core'
import { Subject, Observable } from 'rxjs/RX'
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

@Injectable()
export class CartService {
    key: string = "ShoppingCartKey";
    items: Object[];

    constructor() {
        if (localStorage.getItem(this.key)) {
            this.items = JSON.parse(localStorage.getItem(this.key));
        } else {
            this.items = [];
        }
    }

    getItems() {
        return this.items = JSON.parse(localStorage.getItem(this.key));
    }

    addItemToCart(product: Object) {
        //  check if it was already added
        let items = this.items.filter(i=> i===product);
        if(items){
            //  TODO: change to toast
           return console.log('item already added to cart');
        }
        //  if it wasn't, add it
        this.items.push(product);
        this.saveCart(this.items);
    }

    removeItemFromCart(id: string) {
        let items = this.getItems();
        items = items.filter(i => i.id !== id);
        return this.saveCart(items);
    }

    saveCart(cartObj: Object) {
        let itemString = JSON.stringify(cartObj);
        localStorage.setItem(this.key, itemString);
    }

    clearAll() {
        localStorage.clear();
    }


}