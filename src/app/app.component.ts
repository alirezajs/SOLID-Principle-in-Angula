import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SOLID-Principle-in-Angular';
  public onExport() {

    console.log('export on json file')

  }
}
