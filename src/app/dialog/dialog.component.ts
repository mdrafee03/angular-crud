import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() title: string;
  @Input() body: TemplateRef<any>;
  @Input() width: string;
  constructor() { }

  ngOnInit() {
  }

}
