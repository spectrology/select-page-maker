import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Character } from 'src/app/models/data-models';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  constructor(private formsService: FormService) {}

  @Input() character!: Character;
  @Output() characterChanged: EventEmitter<any> = new EventEmitter();

  editMode: boolean = false;
  setEditMode(mode: boolean) {
    this.editMode = mode
  }

  saveChanges(data: any) {
    this.characterChanged.emit({
      ...this.character,
      basic: this.characterForm.value
    })
    this.setEditMode(false)
  }

  characterForm: FormGroup = new FormGroup({});

  ngOnInit() {
    this.characterForm = this.formsService.formGenerator(this.character.basic, this.character.basic)
  }

}
