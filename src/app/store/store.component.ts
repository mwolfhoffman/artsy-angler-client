import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  constructor(private dataService: DataService, private cartService: CartService) { }
  products: any[];
  currentPage: Number;
  next: boolean;
  previous: boolean;

  ngOnInit() {
    this.getProducts();
  };

  getProducts() {
    var prods = localStorage.getItem('products');
    return localStorage.getItem('products') ? this.getProductsFromLocalStorage() : this.getProductsFromServer();
  };

  getProductsFromServer() {
    var prods = localStorage.getItem('products');
    var that = this;
    that.products = null;
    this.dataService.getAllProducts().subscribe((products: any[]) => {
      localStorage.setItem('products', JSON.stringify(products.products.results));
      that.getProductsFromLocalStorage();
    })
  };

  getProductsFromLocalStorage() {
    var prods = localStorage.getItem('products');
    this.products = JSON.parse(localStorage.getItem('products'));
    console.log('products ', this.products)
  }

  AddProductToCart(product: Object) {
    this.cartService.addItemToCart(product);
  }
}
