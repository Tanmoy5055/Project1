import { TestBed } from '@angular/core/testing';

import { ConctService } from './conct.service';

describe('ConctService', () => {
  let service: ConctService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConctService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
