import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  exports: [
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatIconModule
  ]
})
export class TableMaterial {}
