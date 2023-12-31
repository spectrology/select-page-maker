import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  theme: string = "card"
  themeChange: Subject<string> = new Subject<string>();

  characters: Character[] = [
    {
      basic: {
        name: 'Firstname Lastname',
        bio: 'Lorem ipsum dolor sit amet',
        imgUrl: 'img.png'
      }, tags: []
    }
  ]

  charactersUpdate: Subject<any> = new Subject<any>();

  categories: Category[] = [
    {
      title: 'caste',
      tags: [
        'rust',
        'bronze',
        'yellow',
        'lime',
        'olive',
        'jade',
        'teal',
        'cerulean',
        'indigo',
        'purple',
        'violet',
        'fuschia',
        'mutant',
        'anon'
      ]
    },
    {
      title: 'location',
      tags: ['alternia', 'fleet', 'other']
    }
  ]

  categoriesUpdate: Subject<any> = new Subject<any>();

  constructor() {
    this.themeChange.subscribe((value) => {
      this.theme = value
    });
  }

  // THEME

  setTheme(theme: string) {
    this.themeChange.next(theme);
  }

  // CHARACTERS

  updateCharacters(characters: any) {
    this.charactersUpdate.next(characters);
  }

  addCharacter() {
    this.characters.push({
      basic: {
        name: 'Firstname Lastname',
        bio: 'Lorem ipsum dolor sit amet',
        imgUrl: 'img.png'
      }, tags: []
    })
    this.charactersUpdate.next(this.characters);
  }

  removeCharacter(index: number) {
    this.characters.splice(index, 1)
    this.charactersUpdate.next(this.characters)
  }


  // CATEGORIES

  addCategory() {
    this.categories.push({
      title: 'new category',
      tags: []
    })
    this.categoriesUpdate.next(this.categories)
  }

  removeTag(categoryIndex: number, tagIndex: number) {
    this.categories[categoryIndex].tags.splice(tagIndex, 1)
    this.categoriesUpdate.next(this.categories)
  }

  addTag(categoryIndex: number, newTag: string) {
    this.categories[categoryIndex].tags.push(newTag)
    this.categoriesUpdate.next(this.categories)
  }

  updateCategories(categories: any) {
    this.categoriesUpdate.next(categories);
  }

  allTags() {
    return this.categories.map((A) => { return A.tags.map((tag: string) => { return { tag: tag, category: A.title } }); }).flat()
  }
}
