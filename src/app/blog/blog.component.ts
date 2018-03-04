import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts: any[]

  constructor( private dataService: DataService) { }

  ngOnInit(){
    this.getPosts()
  }

  getPosts() {
    var prods = localStorage.getItem('posts');
    return localStorage.getItem('posts') ? this.getPostsFromLocalStorage() : this.getPostsFromServer();
  };

  getPostsFromServer() {
    var prods = localStorage.getItem('posts');
    var that = this;
    that.posts = null;
    this.dataService.getAllPosts().subscribe((posts: any[]) => {
      console.log(posts);
      localStorage.setItem('posts', JSON.stringify(posts.data.posts.results));
      that.getPostsFromLocalStorage();
    })
  };

  getPostsFromLocalStorage() {
    var prods = localStorage.getItem('posts');
    this.posts = JSON.parse(localStorage.getItem('posts'));
    console.log('posts', this.posts)
  }


}
