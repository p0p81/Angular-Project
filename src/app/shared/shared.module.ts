import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailDirective } from './validators/email.directive';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EmailDirective,

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    EmailDirective,
  ]
})
export class SharedModule { }
