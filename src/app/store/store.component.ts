import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  constructor(private dataService: DataService) { }
  products: Object[];
  currentPage: Number;
  next: boolean;
  previous: boolean;

  ngOnInit() {
    const $scope = this;
    this.dataService.getAllProducts().then(data => {
      $scope.products = data.results;
      $scope.next = data.next;
      $scope.previous = data.previous;
      $scope.currentPage = data.currentPage;
      console.log($scope.products);
    })
  }
}
