import { Injectable } from '@angular/core';
import { FavoriteFilmsService } from '@core/services/favorite-films/favorite-films.service';
import { FilmService } from '@core/services/film/film.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { catchError, concatMap, map, withLatestFrom } from 'rxjs/operators';
import { Film, FilmAPIResponse } from '../models/film.model';
import * as FilmActions from './film.actions';
import * as fromFilm from '../store/film.reducer';
import * as filmSelector from '../store/film.selectors';

@Injectable()
export class FilmEffects {
  loadFilms$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FilmActions.searchFilms),
      concatMap(action =>
        this.filmService.searchByTittle(action.payload).pipe(
          map((response: FilmAPIResponse) => {
            if (response.Response === 'True') {
              return FilmActions.searchFilmsSuccess({ payload: response.Search });
            }
            return FilmActions.searchFilmsFailure({ payload: response.Error });
          }),
          catchError(error => of(FilmActions.searchFilmsFailure({ payload: error })))
        )
      )
    );
  });

  loadFavoritesFilms$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FilmActions.loadFavoriteFilms),
      concatMap(action =>
        this.favFilmsService.getFavoriteFilms().pipe(
          map((response: Film[]) => {
            return FilmActions.loadFavoriteFilmSuccess({ payload: response });
          })
        )
      )
    );
  });

  addFavoritesFilms$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FilmActions.AddFavoriteFilm),
      withLatestFrom(this.store.select(filmSelector.getFavoriteFilms)),
      map(([action, favoriteFilms]) => {
        const cloneFav = [...favoriteFilms];
        if (!favoriteFilms.some(film => film.imdbID === action.payload.imdbID)) {
          cloneFav.push(action.payload);
          this.favFilmsService.uploadFavoriteFilms(cloneFav);
        }
        return FilmActions.loadFavoriteFilmSuccess({ payload: cloneFav });
      })
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store<fromFilm.State>,
    private filmService: FilmService,
    private favFilmsService: FavoriteFilmsService
  ) {}
}
