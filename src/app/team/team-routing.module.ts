import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayerComponent } from './add-player/add-player.component';
import { PlayersComponent } from '../players/players.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { AuthGuard } from '../auth/auth.component';
import { AdminGuard } from '../auth/adminGuard.component';

const routes: Routes = [
  { path: 'create-player', component: AddPlayerComponent, canActivate:[AdminGuard]},
  { path: 'catalog', component: PlayersComponent },
  { path: 'catalog/edit/:playerId', component: EditPlayerComponent,canActivate:[AdminGuard] },
  { path: 'catalog/details/:playerId', component: PlayerDetailsComponent, canActivate:[AuthGuard]},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRoutingModule {}
