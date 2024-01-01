import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/models/data-models';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  @Input({required: true}) category!: Category;
  @Output() categoryChanged: EventEmitter<any> = new EventEmitter();
  @Output() changeCategoryTitle: EventEmitter<any> = new EventEmitter();

  removeTag(tagIndex: number) {
    this.category.tags.splice(tagIndex, 1)
    this.categoryChanged.emit(this.category)
  }

  newTag: string = ""
  newCategoryTitle: string = ""

  addTag(newTagEvent: any) {
    // Prevent duplicates
    if (!this.category.tags.includes(newTagEvent.target.value)) {
      this.category.tags.push(newTagEvent.target.value)
      this.categoryChanged.emit(this.category)
      this.newTag = ""
    } else {
      console.log("Tag exists in this category already")
    }
    
  }

  isEditMode: boolean = false;
  setEditMode(mode: boolean) {
    this.isEditMode = mode
  }

  saveChanges() {
    this.changeCategoryTitle.emit(this.newCategoryTitle)
    this.newCategoryTitle = this.category.title
    this.setEditMode(false)
  }

  ngOnInit() {
    this.newCategoryTitle = this.category.title
  }
}
