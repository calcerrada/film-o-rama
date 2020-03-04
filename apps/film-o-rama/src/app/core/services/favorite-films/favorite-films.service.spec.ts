import { TestBed } from '@angular/core/testing';

import { FavoriteFilmsService } from './favorite-films.service';

describe('FavoritesFilmsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavoriteFilmsService = TestBed.get(FavoriteFilmsService);
    expect(service).toBeTruthy();
  });
});
