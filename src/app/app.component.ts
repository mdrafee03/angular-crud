import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Data, Columns } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  add = true;
  action = true;
  pagination = true;
  pageSize = 10;
  data: Data[];
  showForm: boolean;
  dialogTitle: string;

  cols: Columns[] = [
    {field: 'name', header: 'Name', value: null},
    {field: 'email', header: 'Email', value: null},
    {field: 'location', header: 'Location', value: null}
  ];

  constructor(
    private service: DataService
  ) {}

  ngOnInit() {
    this.getAll();
  }

  changeStatus(event, type: string) {
    if (type === 'add') {
      this.add = event.checked;
    } else if (type === 'action') {
      this.action = event.checked;
    } else if (type === 'pagination') {
      this.pagination = event.checked;
    }
  }
  getAll() {
    this.service.getAll().subscribe(res => this.data = res);
  }

  addFun() {
    this.dialogTitle = 'Add User';
    this.showForm = true;
  }

  editFun() {
    this.dialogTitle = 'Update User';
    this.showForm = true;
  }

  deleteFun() {

  }
}
