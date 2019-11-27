import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Film } from '../../models/film.model';
import * as filmActions from '../../store/film.actions';
import * as fromFilm from '../../store/film.reducer';
import { getFilms } from '../../store/film.selectors';

@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.component.html',
  styleUrls: ['./seeker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeekerComponent implements OnInit {
  fimls$: Observable<Film[]>;
  query = '';

  constructor(private store: Store<fromFilm.State>) {}

  ngOnInit() {
    this.fimls$ = this.store.pipe(select(getFilms));
  }

  onSearch() {
    this.store.dispatch(filmActions.searchFilms({ payload: this.query }));
  }
}
