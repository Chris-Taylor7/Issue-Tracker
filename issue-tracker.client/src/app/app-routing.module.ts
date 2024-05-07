import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IssuesComponent } from './issues/issues.component';
import { NewIssueComponent } from './new-issue/new-issue.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route redirects to Home
  { path: 'home', component: HomeComponent }, // Route for Home component
  { path: 'issues', component: IssuesComponent }, // Route for Issues component
  { path: 'new-issue', component: NewIssueComponent }, // Route for Issues component

  // Add more routes here if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
