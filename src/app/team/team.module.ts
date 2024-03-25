import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPlayerComponent } from './add-player/add-player.component';
import { TeamRoutingModule } from './team-routing.module';



@NgModule({
  declarations: [

    AddPlayerComponent,

  ],


  imports: [
    CommonModule,
    ReactiveFormsModule,
    TeamRoutingModule,
  ]
})
export class TeamModule { }
