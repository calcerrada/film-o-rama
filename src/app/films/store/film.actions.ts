import { createAction, props } from '@ngrx/store';

export const searchFilms = createAction(
  '[Film] Load Films'
);

export const searchFilmsSuccess = createAction(
  '[Film] Load Films Success',
  props<{ data: any }>()
);

export const searchFilmsFailure = createAction(
  '[Film] Load Films Failure',
  props<{ error: any }>()
);
