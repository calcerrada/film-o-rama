import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as FilmActions from './film.actions';



@Injectable()
export class FilmEffects {

  loadFilms$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(FilmActions.searchFilms),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => FilmActions.searchFilmsSuccess({ data })),
          catchError(error => of(FilmActions.searchFilmsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
