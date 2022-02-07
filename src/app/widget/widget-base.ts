import { Directive, Input } from "@angular/core";
import { JsonExporterService } from "../services/json-exporter.service";

@Directive()
export class WidgetBase {

    @Input()
    title: string = ''

    constructor(private JsonExporter: JsonExporterService) {
    }

    public onExport(): void {
      this.JsonExporter.exportJson();
    }
}
