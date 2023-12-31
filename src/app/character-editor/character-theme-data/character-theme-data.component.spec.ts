import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterThemeDataComponent } from './character-theme-data.component';

describe('CharacterThemeDataComponent', () => {
  let component: CharacterThemeDataComponent;
  let fixture: ComponentFixture<CharacterThemeDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterThemeDataComponent]
    });
    fixture = TestBed.createComponent(CharacterThemeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
