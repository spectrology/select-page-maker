import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCharaComponent } from './card-chara.component';

describe('CardCharaComponent', () => {
  let component: CardCharaComponent;
  let fixture: ComponentFixture<CardCharaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCharaComponent]
    });
    fixture = TestBed.createComponent(CardCharaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
