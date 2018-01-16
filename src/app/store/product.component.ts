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
    constructor(private dataService: DataService, private route: ActivatedRoute) {

    }
    product: Object;

    ngOnInit() {
        let id = this.route.params.value['id'];
        this.dataService.getProduct(id)
        .then(data=> this.product=data)
        
    }

}
