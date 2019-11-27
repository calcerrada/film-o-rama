import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFilm from './film.reducer';

export const selectFilmState = createFeatureSelector<fromFilm.State>(
  fromFilm.filmFeatureKey
);

export const getFilms = createSelector(
  selectFilmState,
  (state) => state.films
);

export const getFavoriteFilms = createSelector(
  selectFilmState,
  (state) => state.favoriteFilms
);

