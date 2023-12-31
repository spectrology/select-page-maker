import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/data-models';

@Component({
  selector: 'app-stats-chara',
  templateUrl: './stats-chara.component.html',
  styleUrls: ['./stats-chara.component.scss'],
})
export class StatsCharaComponent {

  @Input() character!: Character;
}
