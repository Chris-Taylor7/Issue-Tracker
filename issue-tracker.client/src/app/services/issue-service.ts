import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Issue } from '../models/Issue';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private baseUrl = '/api/issue'; 

  constructor(private http: HttpClient) { }

  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(`${this.baseUrl}`);
  }

  createOrUpdateIssue(issueId: number, active: boolean, dateWorking: Date, description: string,
    department: string, name: string): Observable<any> {
    const body = {
      issueId,
      active,
      dateWorking,
      description,
      department,
      name,
      status
    };
    return this.http.post<any>(`${this.baseUrl}`, body);
  }

  deleteIssue(issueId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${issueId}`);
  }
}
