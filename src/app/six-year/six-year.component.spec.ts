import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixYearComponent } from './six-year.component';

describe('SixYearComponent', () => {
  let component: SixYearComponent;
  let fixture: ComponentFixture<SixYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
