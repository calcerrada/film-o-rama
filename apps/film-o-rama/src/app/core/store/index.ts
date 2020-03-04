import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromFilm from '../../films/store/film.reducer';

export interface State {
  [fromFilm.filmFeatureKey]: fromFilm.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromFilm.filmFeatureKey]: fromFilm.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
