import { TestBed } from '@angular/core/testing';

import { DjbService } from './djb.service';

describe('DjbService', () => {
  let service: DjbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DjbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
