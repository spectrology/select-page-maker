import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable, OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category, Character, Tag } from '../models/data-models';

@Component({
  selector: 'app-character-editor',
  templateUrl: './character-editor.component.html',
  styleUrls: ['./character-editor.component.scss']
})
export class CharacterEditorComponent {

  constructor(
    private dataService: DataService
  ){
    this.dataService.charactersUpdate.subscribe((value: Character[]) => {
      this.characters = value
    })
    this.dataService.categoriesUpdate.subscribe((value: Category[]) => {
      this.allTags = this.dataService.allTags()
    })
  }

  autofill: string = "";

  ngOnInit() {
    this.characters = this.dataService.characters
    console.log(this.characters)
    this.allTags = this.dataService.allTags()
  }

  characters: Character[] = []
  allTags: Tag[] = []

  addCharacter() {
    this.dataService.addCharacter()
  }

  removeCharacter(index: number) {
    this.dataService.removeCharacter(index)
  }

  updateCharacter(character: Character, index: number) {
    this.dataService.updateCharacter(index, character)
  }

  addTagToCharacter(characterIndex: number, tagEvent: any) {
    tagEvent.preventDefault()
    this.characters[characterIndex].tags.push(tagEvent.item)
    this.dataService.updateCharacters(this.characters)
    this.autofill = ""
  }

  removeTagFromCharacter(characterIndex: number, tagIndex: number) {
    this.characters[characterIndex].tags.splice(tagIndex, 1)
    this.dataService.updateCharacters(this.characters)
  }

  formatter = (tag: Tag) => tag.tag;

  search: OperatorFunction<string, readonly {tag: string, category: string}[]> = (text$: Observable<string>) =>
		text$.pipe(
			map((term) => this.allTags.filter((tag) => new RegExp(term, 'mi').test(tag.tag)).slice(0, 10)),
		);
    // TODO: dont show tags that are already present on character
    // TODO: separate out into character component bcoz the... it breaking...

}
