import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';
import { SeekerComponent } from './containers/seeker/seeker.component';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from './films.component';
import { FilmEffects } from './store/film.effects';
import * as fromFilm from './store/film.reducer';
import { FilmCardComponent } from './containers/seeker/components/film-card/film-card.component';





@NgModule({
  declarations: [FilmsComponent, SeekerComponent, FilmCardComponent],
  imports: [
    SharedModule,
    FilmsRoutingModule,
    FormsModule,
    StoreModule.forFeature(fromFilm.filmFeatureKey, fromFilm.reducer),
    EffectsModule.forFeature([FilmEffects]),
  ]
})
export class FilmsModule { }
