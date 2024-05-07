import { Component } from '@angular/core';
import { NbTreeGridDataSource } from '@nebular/theme';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrl: './issues.component.scss'
})
export class IssuesComponent {
allColumns: Iterable<string> | undefined;
  dataSource!: any[] | NbTreeGridDataSource<any>;
getSortDirection(arg0: any): import("@nebular/theme").NbSortDirectionValues {
throw new Error('Method not implemented.');
}
defaultColumns: any;
customColumn: any;

}
