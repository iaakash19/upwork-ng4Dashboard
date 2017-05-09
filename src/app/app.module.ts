import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';


/** Importing Custom Modules **/
 
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { AppComponent } from './app.component';


const routesConfig = [
  {
    path: '', redirectTo: 'login',pathMatch: 'full'
  }
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule,
    
    RouterModule.forRoot(routesConfig),
    SlimLoadingBarModule.forRoot(),
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
