import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayersComponent } from './players/players.component';
import { UserModule } from './user/user.module';
import { FormsModule } from '@angular/forms';
import { appInterceptorProvider } from './app.interceptor';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home/home.component';
import { TeamModule } from './team/team.module';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PlayersComponent,
//  HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule,
    TeamModule,

    HomeModule
  ],
  providers: [appInterceptorProvider,],
  bootstrap: [AppComponent],
})
export class AppModule {}
