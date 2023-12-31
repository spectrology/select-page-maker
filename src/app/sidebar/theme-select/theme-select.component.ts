import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

type Link = {
  label: string,
  url: string
}

type CardTheme = {
  name: string,
  subtitle: string[],
  infos: any,
  bio: string,
  links: Link[]
}

@Component({
  selector: 'app-theme-select',
  templateUrl: './theme-select.component.html',
  styleUrls: ['./theme-select.component.scss']
})
export class ThemeSelectComponent {

  constructor(
    private dataService: DataService,
  ) {
    this.selectedTheme = this.dataService.theme
  }

  ngOnInit() {
    console.log(this.dataService.theme)
  }

  @Output() themeChange = new EventEmitter<any>();

  keys(obj: any) {
    return Object.keys(obj)
  }

  themes: any = {
    card: {
      name: 'Card',
      img: 'whatever.png',
      dataModel: 'CardTheme'
    },
    stats: {
      name: 'Stats',
      img: 'whatever2.png',
      dataModel: 'StatsTheme'
    }
  }

  selectedTheme;

  selectTheme(theme: any) {
    this.selectedTheme = theme
    this.themeChange.emit(this.themes[theme])
    this.dataService.setTheme(theme)
  }

}
