import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  constructor(private dataService: DataService) { }

  events: any[];
  currentPage: Number;
  next: boolean;
  previous: boolean;

  ngOnInit() {
    this.getEvents();
  };

  getEvents() {
    var events = localStorage.getItem('events');
    return localStorage.getItem('events') ? this.getEventsFromLocalStorage() : this.getEventsFromServer();
  };

  getEventsFromServer() {
    var events = localStorage.getItem('events');
    var that = this;
    that.events = null;
    this.dataService.getAllEvents().subscribe((data: any) => {
      localStorage.setItem('events', JSON.stringify(data.data.events));
      that.getEventsFromLocalStorage();
    })
  };

  getEventsFromLocalStorage() {
    var events = localStorage.getItem('events');
    this.events = JSON.parse(localStorage.getItem('events'));
  }

}
