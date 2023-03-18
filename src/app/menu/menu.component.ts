import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  categories?: Category[]

  public menuFiltered: string = "";

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    /* FUNZIONE RICHIAMO DATI DA SERVICE CLASS */
    this.categories = this.postService.getCategoriesList();
  }

  @Output() // Emetto un output con il filtro desiderato per rigenerare la lista in post-list component
  onFilterSelected = new EventEmitter<string>();

  /* FUNZIONE EMETTI OUTPèUT CON FILTRO */
  postFilter(filter: string) {
    this.onFilterSelected.emit(filter);
    this.menuFiltered = filter;
  }

}
