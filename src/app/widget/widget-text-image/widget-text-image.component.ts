import { Component, OnInit } from '@angular/core';
import { Reloadable, WidgetInterface } from '../widget-interface';

@Component({
  selector: 'app-widget-text-image',
  templateUrl: './widget-text-image.component.html',
  styleUrls: ['./widget-text-image.component.scss']
})
export class WidgetTextImageComponent implements WidgetInterface, Reloadable {

  id: string = ''
  reloading: boolean = false;
  constructor() { }
  reload(): void {
    throw new Error('Method not implemented.');
  }



}
