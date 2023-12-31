import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Character } from 'src/app/models/data-models';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  @Input({ required: true }) character!: Character;
  @Output() characterChanged: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
  }

  editMode: boolean = false;
  setEditMode(mode: boolean) {
    if (!mode && this.characterForm.valid) {
      this.characterChanged.emit({
        ...this.character,
        basic: this.characterForm.value
      })
    }
    this.editMode = mode
    if (this.editMode) {
      this.characterForm.setValue(this.character.basic)
    }
  }

  characterForm = this.formBuilder.group({
    name: ['', Validators.required],
    bio: ['', Validators.required],
    imgUrl: ['', Validators.required]
  })

}
