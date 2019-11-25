import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from './films.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromFilm from './store/film.reducer';
import { FilmEffects } from './store/film.effects';
import { SeekerComponent } from './containers/seeker/seeker.component';



@NgModule({
  declarations: [FilmsComponent, SeekerComponent],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    StoreModule.forFeature(fromFilm.filmFeatureKey, fromFilm.reducer),
    EffectsModule.forFeature([FilmEffects]),
  ]
})
export class FilmsModule { }
