import { TestBed } from '@angular/core/testing';

import { RingingService } from './ringing.service';

describe('RingingService', () => {
  let service: RingingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RingingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
