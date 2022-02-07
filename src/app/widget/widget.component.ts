import { Component, Input, OnInit } from '@angular/core';
import { JsonExporterService } from '../services/json-exporter.service';
import { WidgetBase } from './widget-base';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent extends WidgetBase implements OnInit {

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

}
