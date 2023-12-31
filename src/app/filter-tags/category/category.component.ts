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

  removeTag(tagIndex: number) {
    this.category.tags.splice(tagIndex, 1)
    this.categoryChanged.emit(this.category)
  }

  newTag: string = ""
  newCategoryTitle: string = ""

  addTag(newTagEvent: any) {
    this.category.tags.push(newTagEvent.target.value)
    this.categoryChanged.emit(this.category)
    this.newTag = ""
  }

  isEditMode: boolean = false;
  setEditMode(mode: boolean) {
    this.isEditMode = mode
  }

  saveChanges() {
    this.category.title = this.newCategoryTitle
    this.categoryChanged.emit(this.category)
    this.newCategoryTitle = ""
    this.setEditMode(false)
  }

  ngOnInit() {
    this.newCategoryTitle = this.category.title
  }
}
