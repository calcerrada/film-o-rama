import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { Film } from 'src/app/films/models/film.model';
import { trigger, transition, style, animate } from '@angular/animations';

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
export class FilmCardComponent implements OnInit {
  @Input() film: Film;
  @Output() addFavotite: EventEmitter<string> = new EventEmitter();
  @Output() viewDetial: EventEmitter<string> = new EventEmitter();
  @HostBinding('@animate') animate = true;

  constructor() { }

  ngOnInit() {

  }

}
