import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './main/main.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PlayersComponent } from './players/players.component';
import { UserModule } from './user/user.module';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchPlayersComponent } from './search/search-players/search-players.component';
import { AppInterceptor } from './app.interceptor';
import { SpinnerComponent } from './spinner/loader/loader.component';





@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PlayersComponent,
    NotFoundComponent,
    SearchPlayersComponent,
    
  
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule,
    SpinnerComponent,
    HomeModule,
  ],
  providers: [  { provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: AppInterceptor },],
  bootstrap: [AppComponent],
})
export class AppModule {}
