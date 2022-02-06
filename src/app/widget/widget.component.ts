import { Component, OnInit } from '@angular/core';
import { JsonExporterService } from '../services/json-exporter.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  constructor(private JsonExporter: JsonExporterService) { }

  ngOnInit() {
  }
  public onExport() {
    this.JsonExporter.exportJson();
  }
}
