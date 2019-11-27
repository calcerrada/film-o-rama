import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';

import { Film } from '../../models/film.model';
import * as filmActions from '../../store/film.actions';
import * as fromFilm from '../../store/film.reducer';
import * as filmSelector from '../../store/film.selectors';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.component.html',
  styleUrls: ['./seeker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeekerComponent implements OnInit, OnDestroy {
  destroy$: Subject<void> = new Subject();
  fimls$: Observable<Film[]>;
  favoriteList: Film[];
  query = '';

  constructor(private store: Store<fromFilm.State>) {}

  ngOnInit() {
    this.fimls$ = this.store.pipe(select(filmSelector.getFilms));
    this.store.pipe(
      takeUntil(this.destroy$),
      select(filmSelector.getFavoriteFilms)
      ).subscribe(favoriteList => this.favoriteList = favoriteList);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearch() {
    this.store.dispatch(filmActions.searchFilms({ payload: this.query }));
  }

  addToFavorite(film: Film) {
    this.store.dispatch(filmActions.AddFavoriteFilm({payload: film}));
  }

  isFavorite(id: string): boolean {
    return !!this.favoriteList.find(favFilm => favFilm.imdbID === id);
  }
}
