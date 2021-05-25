import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjbsComponent } from './djbs.component';

describe('DjbsComponent', () => {
  let component: DjbsComponent;
  let fixture: ComponentFixture<DjbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjbsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DjbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
