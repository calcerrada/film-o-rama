import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeekerComponent } from './containers/seeker/seeker.component';
import { FilmsComponent } from './films.component';

const routes: Routes = [
  {
    path: '',
    component: FilmsComponent,
    children: [
      { path: '', redirectTo: 'films/seeker' },
      { path: 'seeker', component: SeekerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule {}
