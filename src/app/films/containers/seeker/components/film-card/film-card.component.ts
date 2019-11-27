import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { Film } from 'src/app/films/models/film.model';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss'],
  animations: [
    trigger('animate', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-10px)' }),
        animate('300ms', style({ opacity: 1, transform: 'translateX(0px)' }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('250ms', style({ opacity: 0, transform: 'translateX(10px)' }))
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmCardComponent {
  @Input() film: Film;
  @Input() favorite: boolean;
  @Output() addToFavorite: EventEmitter<Film> = new EventEmitter();
  @Output() viewDetial: EventEmitter<Film> = new EventEmitter();
  @HostBinding('@animate') animate = true;

  addFavoriteFilm() {
    console.log('addToFavorite from card', this.film);

    this.addToFavorite.emit(this.film);
  }
}
