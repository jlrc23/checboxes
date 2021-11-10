import { TestBed } from '@angular/core/testing';

import { CharValidatorService } from './char-validator.service';

describe('CharValidatorService', () => {
  let service: CharValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
