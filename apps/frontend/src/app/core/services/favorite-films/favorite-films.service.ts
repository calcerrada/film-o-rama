import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { Film } from '../../../films/models/film.model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteFilmsService {
  constructor() {}

  getFavoriteFilms(): Observable<object> {
    return of(JSON.parse(localStorage.getItem('favoriteFilms')) || []);
  }

   uploadFavoriteFilms(favorites: Film[]) {
    localStorage.setItem('favoriteFilms', JSON.stringify(favorites));
   }
}
