import { TestBed } from '@angular/core/testing';

import { CharsService } from './chars.service';

describe('CharsService', () => {
  let service: CharsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
