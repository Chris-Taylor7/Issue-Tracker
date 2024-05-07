import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NbCardModule, NbIconModule, NbThemeModule } from '@nebular/theme';
import { NbTreeGridModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { IssuesComponent } from './issues/issues.component';
 @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    IssuesComponent,
    
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    NbThemeModule,
    NbTreeGridModule,
    NbCardModule,
    NbIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
