import { Component, Input } from '@angular/core';
import { Favourites, Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {


  @Input()
  post?: Post;

  constructor(private postService: PostsService) { }

  /* FUNZIONE AGGIUNGI A PREFERITI */
  addToFavourites(p: Post) {
    this.postService.addToFavourites(this.getFavouriteObj(p));
  }

  /* FUNZIONE CONVERSIONE DATI DI TIPO "Post" IN "Favourites" */
  getFavouriteObj(post: Post): Favourites {
    return {
      title: post.title,
      date: post.date
    }
  }

}
