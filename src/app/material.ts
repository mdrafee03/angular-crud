import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  exports: [
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ]
})
export class Material {}
