import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Columns } from '../data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() dialogTitle: string;
  showDialog =  true;
  formGroup: FormGroup;
  @Input() cols: Columns[];
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.formGroup = this.fb.group({});
    this.addControls();
  }
  addControls() {
    this.cols.map(res => this.formGroup.addControl(res.field, this.fb.control(res.value, Validators.required)));
  }
}
