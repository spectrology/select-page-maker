import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {
  
  constructor(
    private dataService: DataService
  ) {
    this.theme = this.dataService.theme
    this.dataService.themeChange.subscribe((value: string) => {
      this.theme = value
    })

    this.characters = this.dataService.characters
    this.dataService.charactersUpdate.subscribe((value: any[]) => {
      this.characters = value
    })
  }

  theme: string = ""
  characters: any[] = []

}
