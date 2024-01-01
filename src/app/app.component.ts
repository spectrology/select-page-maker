import { Component } from '@angular/core';
import packageJson from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'select-page-maker';
  public version: string = packageJson.version;

  show: any = {
    preview: false,
    characters: false,
    categories: true
  }

  keys(obj: any) {
    return Object.keys(obj)
  }

  toggleView(value: any, field: string) {
    console.log(value)
    this.show[field] = !this.show[field]
  }

  allfalse(obj: any) {
    return Object.keys(obj).every(k => !obj[k])
  }
}
