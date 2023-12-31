import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(
    private dataService: DataService,
    private formsService: FormService
  ) {
    this.theme = this.dataService.theme
  }

  ngOnInit() {
    this.theme = this.dataService.theme
    this.themeOptions = this.dataService.allThemesData[this.dataService.theme].options
  }

  saveChanges(event: any) {
    console.log(event)
    this.themeOptions = event
    this.dataService.setThemeOptions(event, this.theme)
  }

  themeOptions: any;
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

  onFileChanged(event: any) {
    let selectedFile = event.target.files[0];
    const fileReader: any = new FileReader();
    fileReader.readAsText(selectedFile, "UTF-8");
    fileReader.onload = () => {
     console.log(JSON.parse(fileReader.result));
     let data = JSON.parse(fileReader.result)
     this.dataService.updateCharacters(data.characters)
     this.dataService.updateCategories(data.categories)
    }
    fileReader.onerror = (error: any) => {
      console.log(error);
    }

    // TODO add warning if theres data present

    
  }

}
