import { Component, OnInit } from '@angular/core';
import { WidgetInterface } from '../widget-interface';

@Component({
  selector: 'app-widget-only-context',
  templateUrl: './widget-only-context.component.html',
  styleUrls: ['./widget-only-context.component.scss']
})
export class WidgetOnlyContextComponent implements WidgetInterface {

  constructor() { }
  id: string = '';

  ngOnInit() {
  }

}
