import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
    selector: 'event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

    constructor(private dataService: DataService, private route: ActivatedRoute) { }
    event: Object;

    ngOnInit() {
        var that = this;
        var events = JSON.parse(localStorage.getItem('events'));
        if (events !== null || typeof events !== 'undefined') {
            let slug;
            this.route.params.subscribe(params => {
                slug = params['id']
            });
            var item = events.find(x => { return x.slug === slug });
            this.event = item;
        } else {
            let id = this.route.params['value']['id'];
            this.dataService.getProduct(id).subscribe((prod: any) => {
                that.event = prod.data.event;
            })
        }
    }
}
