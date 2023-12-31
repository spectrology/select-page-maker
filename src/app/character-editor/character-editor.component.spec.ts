import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterEditorComponent } from './character-editor.component';

describe('CharacterEditorComponent', () => {
  let component: CharacterEditorComponent;
  let fixture: ComponentFixture<CharacterEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterEditorComponent]
    });
    fixture = TestBed.createComponent(CharacterEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
