import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'select-page-maker';

  show: any = {
    preview: false,
    characters: true,
    categories: false
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
