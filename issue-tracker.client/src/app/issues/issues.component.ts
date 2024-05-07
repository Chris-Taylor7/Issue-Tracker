import { Component } from '@angular/core';
import { IssueService } from '../services/issue-service';
import { Issue } from '../models/Issue';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrl: './issues.component.css'
})
export class IssuesComponent {

  constructor(private issueService: IssueService){}

  public getIssues(){
    this.issueService.getIssues().subscribe();
  }
}
