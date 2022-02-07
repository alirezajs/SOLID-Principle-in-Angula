import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { JsonExporterService } from '../services/json-exporter.service';
import { WidgetBase } from './widget-base';
import { RELOADABLE_CONTENT } from './widget-content-token';
import { WidgetTextImageComponent } from './widget-text-image/widget-text-image.component';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent extends WidgetBase implements OnInit {
  @ContentChild(RELOADABLE_CONTENT)
  content?: WidgetTextImageComponent;

  constructor(JsonExporter: JsonExporterService) {
    super(JsonExporter)
  }

  override onExport(): void {
    // For Considering Liskov substitution we have to first do what ever the parent does. 
    super.onExport();
    //... what whatever you want to add
    console.log("test")
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    if (this.content) {
      this.content.reload();
    }
  }

}
