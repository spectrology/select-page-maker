import { Component, EventEmitter, Inject, Output, Renderer2 } from '@angular/core';
import { DataService } from '../services/data.service';
import { Category, Character } from '../models/data-models';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {

  constructor(
    private dataService: DataService,
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: any,
  ) {
    this.theme = this.dataService.theme
    this.dataService.themeChange.subscribe((value: string) => {
      this.theme = value
    })

    this.characters = this.dataService.characters
    this.dataService.charactersUpdate.subscribe((value: any[]) => {
      this.characters = value
    })

    this.categories = this.dataService.categories
    this.dataService.categoriesUpdate.subscribe((value: any[]) => {
      this.categories = value
    })
  }

  @Output() toggleMenu: EventEmitter<any> = new EventEmitter();

  toggleMenus() {
    this.toggleMenu.emit()
  }

  ngOnInit() {
    // Inject dependencies
    let dependencies = [
      'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js',
      'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js',
      'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js',
      'https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js',
      'https://static.tumblr.com/p0knose/FpAp5c11c/magnusthemes.combofilters.js'
    ]
    for (let dependency of dependencies) {
      const s = this.renderer2.createElement('script');
      // s.type = 'text/query';
      s.src = dependency;
      s.text = ``;
      this.renderer2.appendChild(this._document.body, s);
    }

    // Filter script
    const s = this.renderer2.createElement('script');
    // s.type = 'text/query';
    s.text = `$(document).ready(function () {
      console.log("Ready!")
      var $container = $(".filter-container") // the container with all the elements to filter inside
      var filters = {}; //should be outside the scope of the filtering function
      /* --- read the documentation on isotope.metafizzy.co for more options --- */
      var $grid = $container.isotope({
          itemSelector: ".filter-item", // the elements to filter
          percentPosition: true // put true if you use percentage widths, otherwise put false
      });
      $(".option-set a").click(function (e) {
          console.log("clicked!")
          var $this = $(this); // cache the clicked link
          var filterAttr = "data-filter-value";
          var filterValue = $this.attr(filterAttr); // cache the filter
          var $optionSet = $this.parents(".option-set"); // cache the parent element
          var group = $optionSet.attr("data-filter-group"); // cache the parent filter group
          var filterGroup = filters[group];
          if (!filterGroup) {
              filterGroup = filters[group] = [];
          }
          var $selectAll = $optionSet.find('a[' + filterAttr + '=""]'); // the 'select all' button in the current group
          var activeClass = "active", // the class for active links
              exclClass = "exclusive"; // the class for exclusive groups
          comboFiltering($this, filters, filterAttr, filterValue, $optionSet, group, $selectAll, activeClass, exclClass);
          var comboFilter = getComboFilter(filters);
          $grid.isotope({
              filter: comboFilter
          });
          $this.toggleClass(activeClass);
          e.preventDefault();
          console.log(filterGroup)
      });
    });`;
    this.renderer2.appendChild(this._document.body, s);
  }

  getTagsAsArray(character: Character) {
    return character.tags.map(tag => { return tag.tag })
  }

  categories: Category[] = []
  theme: string = ""
  characters: Character[] = []

}
