import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PreviewComponent } from './preview/preview.component';
import { CharacterEditorComponent } from './character-editor/character-editor.component';
import { CharacterComponent } from './character-editor/character/character.component';
import { CardCharaComponent } from './themes/card/card-chara/card-chara.component';
import { StatsCharaComponent } from './themes/stats/stats-chara/stats-chara.component';
import { ThemeSelectComponent } from './sidebar/theme-select/theme-select.component';
import { FilterTagsComponent } from './filter-tags/filter-tags.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { CategoryComponent } from './filter-tags/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PreviewComponent,
    CharacterEditorComponent,
    CharacterComponent,
    CardCharaComponent,
    StatsCharaComponent,
    ThemeSelectComponent,
    FilterTagsComponent,
    CategoryComponent],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    NgbTypeaheadModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
