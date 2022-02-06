import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonExporterService {

constructor() { }


public exportJson(){
    console.log('export json')
}
}
