import { Component, OnInit } from '@angular/core';
import { Favourites } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.css']
})
export class PreferitiComponent implements OnInit {

  favourites: Favourites[] = [];

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    /* --- RICHIAMO DATI DA SERVICE CLASS --- */
    this.favourites = this.postService.getFavouriteList();
  }

  /* --- FUNZIONE RIMUOVI DA LISTA PREFERITI --- */
  removeItem(f: Favourites) {
    this.postService.removeItemFromFavourites(f);
    this.favourites = this.postService.getFavouriteList();
  }

  /* --- FUNZIONE PULISCI LISTA PREFERITI --- */
  removeAll() {
    this.postService.cleanFavouritesList();
    this.favourites = this.postService.getFavouriteList();
  }

}
