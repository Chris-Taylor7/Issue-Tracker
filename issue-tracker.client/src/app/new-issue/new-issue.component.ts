import { Component } from '@angular/core';
import { Priority } from '../models/enums/Priority';
import { OnInit } from '@angular/core';
import { Issue } from '../models/Issue';
import { Status } from '../models/enums/Status';

@Component({
  selector: 'app-new-issue',
  templateUrl: './new-issue.component.html',
  styleUrl: './new-issue.component.css'
})
export class NewIssueComponent implements OnInit {
  status: any[] = [];
  priority: any[] = [];
  selectedStatus!: Status;
  selectedPriority!: Priority;
  department: string[] = [];
  name!: string;
  description!: string;
  newIssue!: Issue;
  dateWorking!: Date;
  selectedDepartment: string = '';

  ngOnInit() {
    this.GetDepartments();
    this.status = Object.keys(Status).map(key => ({
      label: Status[key as keyof typeof Status],
      value: Status[key as keyof typeof Status]
    }));
    this.priority = Object.keys(Priority).map(key => ({
      label: Priority[key as keyof typeof Priority],
      value: Priority[key as keyof typeof Priority]
    }));
  }

  GetDepartments() {
    this.department = ['IT', 'HR', 'Finance', 'Marketing', 'Sales'];
  }

  MapIssue() {
    this.newIssue = {
      status: this.selectedStatus,
      department: this.selectedDepartment,
      dateWorking: this.dateWorking,
      issueName: this.name,
      description: this.description,
      priority: this.selectedPriority,
      active: true,
      issueId: 0
    };
  }
}