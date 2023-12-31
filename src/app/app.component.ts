import { Component } from '@angular/core';
import packageJson from '../../package.json';
import { AlertService } from './services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'select-page-maker';
  public version: string = packageJson.version;

  constructor(
    private alertService: AlertService
  ) {}

  show: any = {
    preview: true,
    characters: false,
    categories: false
  }

  displayMenus: boolean = true;

  toggleMenus() {
    this.displayMenus = !this.displayMenus
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
