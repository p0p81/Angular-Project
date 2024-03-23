import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing-module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
   
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
    RouterModule, 
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class UserModule { }
