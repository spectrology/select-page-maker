import { Component, Input } from '@angular/core';
import { faCircle, faUser } from '@fortawesome/free-regular-svg-icons';
import { Character } from 'src/app/models/data-models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-card-chara',
  templateUrl: './card-chara.component.html',
  styleUrls: ['./card-chara.component.scss']
})
export class CardCharaComponent {
  @Input() character!: Character;

  constructor(
    private dataService: DataService
  ){
    this.dataService.themeOptionsUpdate.subscribe((value: any) => {
      this.themeOptions = value
    })
  }

  faUser = faUser;
  faCircle = faCircle;

  icons: any = {
    user: faUser,
    circle: faCircle
  }

  themeOptions: any = this.dataService.allThemesData[this.dataService.theme].options;

  ngOnInit() {
    if (!this.character.themeData[this.dataService.theme]) {
      this.character.themeData[this.dataService.theme] = this.dataService.allThemesData[this.dataService.theme].characterData
    }
    console.log(this.themeOptions)
  }
}
