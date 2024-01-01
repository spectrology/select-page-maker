import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Character, Category } from 'src/app/models/data-models'
import { CardTheme, CardThemeOptions } from '../themes/card/card-chara/card-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  theme: string = "card"
  themeChange: Subject<string> = new Subject<string>();

  characters: Character[] = [{
    basic: {
      name: 'Firsty Lastes',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quam orci, malesuada nec velit cursus, aliquam blandit diam. Sed rutrum tellus erat, eu suscipit tellus aliquet quis.',
      imgUrl: 'https://64.media.tumblr.com/ec1319e2774236e79f69649f7d95ecb3/7fe09b0c24a6e82b-c6/s400x600/c343b64ebe88c41dde840cfb9c14e2e528b53b3e.pnj'
    }, tags: [], themeData: {}
  }]

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
  allThemesData: any = {
    card: {
      characterData: new CardTheme(),
      options: new CardThemeOptions()
    }
  }

  themeOptionsUpdate: Subject<any> = new Subject<any>();

  setTheme(theme: string) {
    this.themeChange.next(theme);
  }

  setThemeOptions(themeOptions: any, theme: string) {
    this.allThemesData[theme].options = themeOptions
    this.themeOptionsUpdate.next(this.allThemesData[theme].options)
  }

  // CHARACTERS

  updateCharacters(characters: any) {
    this.characters = characters
    this.charactersUpdate.next(characters);
  }

  updateCharacter(index: number, value: Character) {
    let updatedCharacters: Character[] = [...this.characters]
    updatedCharacters[index] = value
    console.log(updatedCharacters)
    this.updateCharacters(updatedCharacters)
  }

  addCharacter() {
    this.characters.push({
      basic: {
        name: 'Firstname Lastname',
        bio: 'Lorem ipsum dolor sit amet',
        imgUrl: 'img.png'
      }, tags: [], themeData: {}
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

  removeCategory(categoryIndex: number) {
    // REMOVE ALL TAGS FROM CHARACTERS AS WELL
    let removedCategoryName = this.categories[categoryIndex].title
    for (let character in this.characters) {
      this.characters[character].tags = this.characters[character].tags.filter(tag => {
        if (tag.category = removedCategoryName) {
          return false
        } else {
          return true
        }
      })
    }

    this.categories.splice(categoryIndex, 1)
    this.categoriesUpdate.next(this.categories)
  }

  handleCategoryNameChange(categoryIndex: number, newCategories: Category[]) {
    // Update across all characters
    let oldTitle = this.categories[categoryIndex].title
    let newTitle = newCategories[categoryIndex].title

    for (let character in this.characters) {
      this.characters[character].tags = this.characters[character].tags.map(tag => {
        if (tag.category = oldTitle) {
          return {
            ...tag,
            category: newTitle
          }
        } else {
          return tag
        }
      })
    }
    this.updateCharacters(this.characters)
    this.updateCategories(newCategories)
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
    this.categories = categories
    this.categoriesUpdate.next(categories);
  }

  allTags() {
    return this.categories.map((A) => { return A.tags.map((tag: string) => { return { tag: tag, category: A.title } }); }).flat()
  }
}
