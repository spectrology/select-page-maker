import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { FormService } from 'src/app/services/form.service';
import { CardTheme } from 'src/app/themes/card/card-chara/card-model';

@Component({
  selector: 'app-character-theme-data',
  templateUrl: './character-theme-data.component.html',
  styleUrls: ['./character-theme-data.component.scss']
})
export class CharacterThemeDataComponent {

  constructor(
    public formsService: FormService,
    public dataService: DataService
  ) { }

  @Input() characterThemeData: any = {};
  @Input() theme!: string;
  @Output() characterThemeDataChanged: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.characterThemeData = this.dataService.allThemesData[this.dataService.theme].characterData
    this.formStructure = this.dataService.allThemesData[this.dataService.theme].characterData
  }

  formStructure: any;
  editMode: boolean = false;
  setEditMode(mode: boolean) {
    this.editMode = mode
  }

  saveChanges(value: any) {
    this.editMode = false,
      this.characterThemeData = value
    this.characterThemeDataChanged.emit({
      theme: this.dataService.theme,
      data: this.characterThemeData
    })
  }

}
