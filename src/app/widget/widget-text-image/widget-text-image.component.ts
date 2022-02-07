import { Component, OnInit } from '@angular/core';
import { RELOADABLE_CONTENT } from '../widget-content-token';
import { Reloadable, WidgetInterface } from '../widget-interface';

@Component({
  selector: 'app-widget-text-image',
  templateUrl: './widget-text-image.component.html',
  styleUrls: ['./widget-text-image.component.scss'],
  providers: [
    { provide: RELOADABLE_CONTENT, useExisting: WidgetTextImageComponent }
  ]
})
export class WidgetTextImageComponent implements WidgetInterface, Reloadable {

  id: string = ''
  reloading: boolean = false;
  constructor() { }
  reload(): void {
    console.log('...reloading is happening')
  }
}
