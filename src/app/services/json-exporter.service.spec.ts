/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JsonExporterService } from './json-exporter.service';

describe('Service: JsonExporter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonExporterService]
    });
  });

  it('should ...', inject([JsonExporterService], (service: JsonExporterService) => {
    expect(service).toBeTruthy();
  }));
});
