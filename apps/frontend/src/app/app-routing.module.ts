import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@core/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/films/seeker',
    pathMatch: 'full'
  },
  {
    path: 'films',
    canActivate: [AuthGuard],
    loadChildren: () => import('./films/films.module').then(m => m.FilmsModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
