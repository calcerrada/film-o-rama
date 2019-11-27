import { createAction, props } from '@ngrx/store';
import { Film, FavoriteFilm } from '../models/film.model';

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

export const loadFavorites = createAction(
  '[Film] Search Films'
);

export const loadFavoritesSuccess = createAction(
  '[Film] Search Films Success',
  props<{ payload: FavoriteFilm[] }>()
);

export const AddFavorites = createAction(
  '[Film] Search Films Success',
  props<{ payload: FavoriteFilm }>()
);
