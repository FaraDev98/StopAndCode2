import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts?: Post[];

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    /* --- RICHIAMO DATI DA SERVICE CLASS --- */
    this.posts = this.postService.getPostList("");
  }

  /* --- RICHIAMO DATI FILTRATI DA SERVICE CLASS --- */
  getFilteredResults(filter: string) {
    this.posts = this.postService.getPostList(filter)
  }
}
