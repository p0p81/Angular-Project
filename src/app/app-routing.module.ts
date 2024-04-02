import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchPlayersComponent } from './search/search-players/search-players.component';
import { ErrorComponent } from './core/error/error.component';
import { CreateMatchComponent } from './matches/create-match/create-match.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',

    component: HomeComponent,
  },
  {
    path: 'team',
    loadChildren: () => import('./team/team.module').then((m) => m.TeamModule),
  },
  {
    path: 'create-match', component:CreateMatchComponent
    // loadChildren: () => import('./matches/create-match/create-match.component').then((m) => m.CreateMatchComponent),
  },
  {
    path: 'search',
  
    component: SearchPlayersComponent,
  },
  { path: 'error', component: ErrorComponent },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
