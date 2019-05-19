import { TestBed } from '@angular/core/testing';

import { BankHolidaysService } from './bank-holidays.service';

describe('BankHolidaysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BankHolidaysService = TestBed.get(BankHolidaysService);
    expect(service).toBeTruthy();
  });
});
