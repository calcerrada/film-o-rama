import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as FilmActions from './film.actions';
import { FilmService } from '@core/services/film/film.service';
import { FilmAPIResponse } from '../models/film.model';

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

  constructor(private actions$: Actions, private filmService: FilmService) {}
}
