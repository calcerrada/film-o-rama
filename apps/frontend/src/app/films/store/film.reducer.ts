import { Action, createReducer, on } from '@ngrx/store';
import * as FilmActions from './film.actions';
import { Film } from '../models/film.model';

export const filmFeatureKey = 'film';

export interface State {
  films: Film[];
  favoriteFilms: Film[];
}

export const initialState: State = {
  films : [],
  favoriteFilms: []
};

const filmReducer = createReducer(
  initialState,

  // on(FilmActions.searchFilms, state => state),
  on(FilmActions.searchFilmsSuccess, (state, action) => ({...state, films: [...action.payload]})),
  on(FilmActions.searchFilmsFailure, (state, action) => state),
  on(FilmActions.loadFavoriteFilmSuccess, (state, action) => ({...state, favoriteFilms: [...action.payload]})),

);

export function reducer(state: State | undefined, action: Action) {
  return filmReducer(state, action);
}
