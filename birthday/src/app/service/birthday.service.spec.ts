import { TestBed } from '@angular/core/testing';

import { BirthdayService } from './birthday.service';

describe('BirthdayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BirthdayService = TestBed.get(BirthdayService);
    expect(service).toBeTruthy();
  });
});
