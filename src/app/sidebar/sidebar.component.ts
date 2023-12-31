import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(
    private dataService: DataService
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

}
