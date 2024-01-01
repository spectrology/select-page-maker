import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { AlertService } from '../services/alert.service';

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
    private dataService: DataService,
    private alertService: AlertService
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

  removeCategory(categoryIndex: number) {
    this.dataService.removeCategory(categoryIndex)
  }

  categoryChanged(index: number, data: Category) {
    // update single at index
    // TODO: wait this is working? does the input bind it?
    this.dataService.updateCategories(this.categories)
  }

  changeCategoryTitle(index: number, newTitle: string) {
    if (!this.categories.map((cat, i) => {
      if (i !== index) {
        return cat.title
      } else {
        return null
      }
    }).includes(newTitle)) {
      this.categories[index].title = newTitle
      this.dataService.handleCategoryNameChange(index, this.categories)
    } else {
      this.alertService.alert('warning', `alert: a category with the title ${newTitle} already exists.`)
    }
  }

  // TODO: tags should be unique
  // TODO: separate out into category components

}
