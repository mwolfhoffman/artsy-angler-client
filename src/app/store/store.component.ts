import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  constructor(private dataService: DataService) { }
  products;

  ngOnInit() {
    const $scope = this;
    this.dataService.getAllProducts().then(data => {
      $scope.products = data;
    })
  }
}
