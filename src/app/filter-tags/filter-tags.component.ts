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

  categoryChanged(index: number, data: Category) {
    // update single at index
    // TODO: wait this is working? does the input bind it?
    this.dataService.updateCategories(this.categories)
  }

  // TODO: tags should be unique
  // TODO: separate out into category components

}
