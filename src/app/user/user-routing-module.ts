import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthRevert } from "../auth-revert/auth-revert.component";

const routes : Routes = [
    { path: 'login', component: LoginComponent,canActivate:[AuthRevert] },
    { path: 'register', component: RegisterComponent, canActivate:[AuthRevert]}
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class UserRoutingModule {}