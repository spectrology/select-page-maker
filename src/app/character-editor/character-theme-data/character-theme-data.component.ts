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

  @Input() characterThemeData: any;
  @Input() theme!: string;
  @Output() characterThemeDataChanged: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.themeForm = this.formsService.formGenerator(this.themeStructureData[this.dataService.theme], this.characterThemeData)
  }

  themeForm: FormGroup = new FormGroup({});
  editMode: boolean = false;

  card: CardTheme = {
    descriptors: {
      desc1: "string",
      desc2: "string",
      desc3: "string"
    },
    info: {
      info1: "14 sweeps",
      info2: "Purple",
      info3: "he/him"
    }
  }

  themeStructureData: any = {
    card: this.card
  }

  keys(obj: any) {
    return Object.keys(obj)
  }

  typeof(obj: any) {
    return typeof obj
  }

  setEditMode(mode: boolean) {
    this.editMode = mode
  }

  saveChanges(value: any) {
    this.editMode = false,
      this.characterThemeData = this.themeForm.value
    this.characterThemeDataChanged.emit({
      theme: this.dataService.theme,
      data: this.characterThemeData
    })
  }

}
