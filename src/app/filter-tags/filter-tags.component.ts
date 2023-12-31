import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

type Category = {
  title: string,
  tags: string[]
}

@Component({
  selector: 'app-filter-tags',
  templateUrl: './filter-tags.component.html',
  styleUrls: ['./filter-tags.component.scss']
})

export class FilterTagsComponent {

  constructor(
    private dataService: DataService
  ) {
    this.dataService.categoriesUpdate.subscribe((value: any) => {
      this.categories = value
    })
  }

  categories: Category[] = this.dataService.categories

  addCategory() {
    this.categories.push({
      title: 'new category',
      tags: []
    })
    this.dataService.updateCategories(this.categories)
  }

  removeTag(categoryIndex: number, tagIndex: number) {
    this.categories[categoryIndex].tags.splice(tagIndex, 1)
    this.dataService.updateCategories(this.categories)
  }

  newTag: string = ""

  addTag(categoryIndex: number, newTagEvent: any) {
    this.categories[categoryIndex].tags.push(newTagEvent.target.value)
    this.dataService.updateCategories(this.categories)
    this.newTag = ""
  }

  // TODO: tags should be unique
  // TODO: separate out into category components

}
