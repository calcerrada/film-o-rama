import { Action, createReducer, on } from '@ngrx/store';
import * as FilmActions from './film.actions';
import { Film, FavoriteFilm } from '../models/film.model';

export const filmFeatureKey = 'film';

export interface State {
  films: Film[];
  favorites: FavoriteFilm[];
}

export const initialState: State = {
  films : null,
  favorites: []
};

const filmReducer = createReducer(
  initialState,

  // on(FilmActions.searchFilms, state => state),
  on(FilmActions.searchFilmsSuccess, (state, action) => ({...state, films: [...action.payload]})),
  on(FilmActions.searchFilmsFailure, (state, action) => state),
  on(FilmActions.loadFavoritesSuccess, (state, action) => ({...state, favorites: [...action.payload]})),

);

export function reducer(state: State | undefined, action: Action) {
  return filmReducer(state, action);
}
