import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer
  ) {
    this.theme = this.dataService.theme
  }

  ngOnInit() {
    this.theme = this.dataService.theme
  }

  theme: string;

  setTheme(theme: any) { // TODO: typeset
    this.theme = theme.name
  }

  jsonDownloadHref: SafeUrl = "";

  downloadCharaData() {
    let assembledData = {
      characters: this.dataService.characters,
      categories: this.dataService.categories
    }

    var sJson = JSON.stringify(assembledData);
    var element = document.createElement('a');
    element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(sJson));
    element.setAttribute('download', "my-character-data.json");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click(); // simulate click
    document.body.removeChild(element);
  }

}
