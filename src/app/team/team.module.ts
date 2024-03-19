import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewSigningsComponent } from './new-signings/new-signings.component';
import { PlayersComponent } from './players/players.component';



@NgModule({
  declarations: [
    NewSigningsComponent,
    PlayersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TeamModule { }
