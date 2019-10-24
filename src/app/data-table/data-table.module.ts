import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { TableMaterial } from './table-material';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DataTableComponent],
  imports: [
    CommonModule,
    TableMaterial,
    FormsModule
  ],
  exports: [DataTableComponent]
})
export class DataTableModule { }
