import { NgModule } from '@angular/core';
import { CommonModule, SlicePipe } from '@angular/common';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SlicePipe
  ],
  exports:[HomeComponent]

})
export class HomeModule { }
