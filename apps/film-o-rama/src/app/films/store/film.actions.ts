import { createAction, props } from '@ngrx/store';
import { Film } from '../models/film.model';

export const searchFilms = createAction(
  '[Film] Search Films',
  props<{ payload: string }>()
);

export const searchFilmsSuccess = createAction(
  '[Film] Search Films Success',
  props<{ payload: Film[] }>()
);

export const searchFilmsFailure = createAction(
  '[Film] Search Films Failure',
  props<{ payload: any }>()
);

export const loadFavoriteFilms = createAction(
  '[Film] Load Favorite Films'
);

export const loadFavoriteFilmSuccess = createAction(
  '[Film] Load Favorite Films Success',
  props<{ payload: Film[] }>()
);

export const AddFavoriteFilm = createAction(
  '[Film] Add Favorite Film',
  props<{ payload: Film }>()
);
