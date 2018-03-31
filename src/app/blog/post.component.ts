import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: any

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    var that = this;
    var posts = JSON.parse(localStorage.getItem('posts'));
    if (posts !== null || typeof posts !== 'undefined') {
      let slug;
      this.route.params.subscribe(params => {
        slug = params['id']
      });
      var item = posts.find(x => { return x.slug === slug });
      this.post = item;
    } else {
      let id = this.route.params['value']['id'];
      this.dataService.getPost(id).subscribe((post: any) => {
        debugger;
        that.post = post.data.post;
      })
    }
  }




}
