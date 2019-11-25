import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFilm from './film.reducer';

export const selectFilmState = createFeatureSelector<fromFilm.State>(
  fromFilm.filmFeatureKey
);
