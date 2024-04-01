import { NgModule } from '@angular/core';
import { CommonModule, SlicePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPlayerComponent } from './add-player/add-player.component';
import { TeamRoutingModule } from './team-routing.module';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';



@NgModule({
  declarations: [

    AddPlayerComponent,
     PlayerDetailsComponent,
     EditPlayerComponent,

  ],


  imports: [
    CommonModule,
    ReactiveFormsModule,
    TeamRoutingModule,
    FormsModule,
    SlicePipe
  ]
})
export class TeamModule { }
