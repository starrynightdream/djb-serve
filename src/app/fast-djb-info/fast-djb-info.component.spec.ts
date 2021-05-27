import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastDjbInfoComponent } from './fast-djb-info.component';

describe('FastDjbInfoComponent', () => {
  let component: FastDjbInfoComponent;
  let fixture: ComponentFixture<FastDjbInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastDjbInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastDjbInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
