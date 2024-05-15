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
import { NewIssueComponent } from './new-issue/new-issue.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
 @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    IssuesComponent,
    NewIssueComponent,
    
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    NbThemeModule,
    NbTreeGridModule,
    NbCardModule,
    NbIconModule,
    TableModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    MultiSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
