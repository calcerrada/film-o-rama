import * as fromFilm from './film.reducer';
import { selectFilmState } from './film.selectors';

describe('Film Selectors', () => {
  it('should select the feature state', () => {
    const result = selectFilmState({
      [fromFilm.filmFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
