import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/data-models';

@Component({
  selector: 'app-card-chara',
  templateUrl: './card-chara.component.html',
  styleUrls: ['./card-chara.component.scss']
})
export class CardCharaComponent {
  @Input() character!: Character;

  ngOnInit() {
    console.log(this.character)
  }
}
