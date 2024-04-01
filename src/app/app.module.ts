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
import { appInterceptorProvider } from './app.interceptor';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home/home.component';
import { TeamModule } from './team/team.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchPlayersComponent } from './search/search-players/search-players.component';
import { AuthGuard } from './auth/auth.component';
import { AppInterceptor } from './app.interceptor';
// import { AuthComponent } from './auth/auth.component';
// import { LoaderComponent } from './spinner/loader/loader.component';





@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PlayersComponent,
    NotFoundComponent,
    SearchPlayersComponent,
   
  
  
    // LoaderComponent,
 
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
   
    

    HomeModule
  ],
  providers: [  { provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: AppInterceptor },],
  bootstrap: [AppComponent],
})
export class AppModule {}
