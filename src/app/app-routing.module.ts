import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { PlayerDetailsComponent } from './team/player-details/player-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: '/home',
},
{
    path: 'home',

    component: HomeComponent,
    
},
{
  path: 'catalog/details/:playerId',

  component: PlayerDetailsComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
