import { Component, Input } from '@angular/core';
import { faDroplet, faQuestion, faCalendar, faCircle, faUser, faHouse, faEnvelope, faStar, faHeart, faComment, faPen, faGear, faCamera, faHand, faKey, faPalette, faShield } from '@fortawesome/free-solid-svg-icons';
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

  icons: any = {
    user: faUser,
    circle: faCircle,
    unknown: faQuestion,
    droplet: faDroplet,
    calendar: faCalendar,
    house: faHouse,
    envelope: faEnvelope,
    star: faStar,
    heart: faHeart,
    comment: faComment,
    pen: faPen,
    gear: faGear,
    camera: faCamera,
    hand: faHand,
    key: faKey,
    palette: faPalette,
    sheild: faShield
  }

  themeOptions: any = this.dataService.allThemesData[this.dataService.theme].options;

  getTagsAsArray(character: Character) {
    return character.tags.map(tag => { return tag.tag })
  }

  ngOnInit() {
    if (!this.character.themeData[this.dataService.theme]) {
      this.character.themeData[this.dataService.theme] = this.dataService.allThemesData[this.dataService.theme].characterData
    }
    console.log(this.themeOptions)
  }
}
