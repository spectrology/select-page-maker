import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsCharaComponent } from './stats-chara.component';

describe('StatsCharaComponent', () => {
  let component: StatsCharaComponent;
  let fixture: ComponentFixture<StatsCharaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatsCharaComponent]
    });
    fixture = TestBed.createComponent(StatsCharaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
