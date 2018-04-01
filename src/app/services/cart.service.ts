import { Injectable } from '@angular/core'
import { Subject, Observable } from 'rxjs/RX'
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { CartItem } from '../models/cartItem'

@Injectable()
export class CartService {
    key: string = "ShoppingCartKey";
    items: Object;

    constructor() {
        if (localStorage.getItem(this.key)) {
            this.items = JSON.parse(localStorage.getItem(this.key));
        } else {
            this.items = {};
        }
    }

    getItems() {
        return JSON.parse(localStorage.getItem(this.key)) || {};
    }

    addItemToCart(product: any) {
        let cartItem = new CartItem(product);
        this.items[product._id] = cartItem;
        this.saveCart(this.items);
    }

    removeItemFromCart(id: string) {
        let items = this.getItems();
        delete items[id]
        return this.saveCart(items);
    }

    saveCart(cartObj: any) {
        let itemString = JSON.stringify(cartObj);
        localStorage.setItem(this.key, itemString);
    }

    clearAll() {
        localStorage.clear();
    }

    updateQty(id) {
        this.items[id].qty++;
        return this.saveCart(this.items[id]);
    }

}