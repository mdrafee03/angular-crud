import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnChanges {
  @Input() data: Data[];
  @Input() cols;
  @Input() showAdd: boolean;
  @Input() showAction: boolean;
  @Input() pagination: boolean;

  @Output() add = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  filteredData: Data[];
  pageSize = 10;
  currentpage = 0;
  start: number;
  end: number;
  pageOptions = [5, 10, 15, 20, 25, 30];
  constructor() { }

  ngOnInit() {
    // console.log(this.data, this.cols);
  }

  ngOnChanges(changes) {
    this.changeData();
  }

  changeData() {
    if (this.data) {
      this.start = this.currentpage * this.pageSize + 1;
      this.end = this.start + this.pageSize - 1;
      if (this.end > this.data.length) {
        this.end = this.data.length;
      }
      this.filteredData = this.data.slice(this.start - 1, this.end);
    }
  }

  onAdd() {
    this.add.emit(null);
  }

  onEdit(data: Data) {
    this.edit.emit(data);
  }

  onDelete(data: Data) {
    this.delete.emit(data);
  }

  selectionChange(value) {
    this.pageSize = value;
    this.changeData();
  }

  previous() {
    if (this.currentpage !== 0) {
      this.currentpage -= 1;
    }
    this.changeData();
  }

  next() {
    if (this.end !== this.data.length) {
      this.currentpage += 1;
      this.changeData();
    }
  }
}
