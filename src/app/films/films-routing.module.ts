import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeekerComponent } from './containers/seeker/seeker.component';

const routes: Routes = [
  { path: '', redirectTo: 'seeker' },
  { path: 'seeker', component: SeekerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule {}
