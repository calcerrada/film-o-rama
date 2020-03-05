import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromFilm from './store/film.reducer';
import * as filmActions from './store/film.actions';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  constructor(private store: Store<fromFilm.State>) { }

  ngOnInit() {
    this.store.dispatch(filmActions.loadFavoriteFilms());
  }

}
