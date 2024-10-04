import { TestBed } from '@angular/core/testing';

import { DHII_SheetService } from './dhii-sheet.service';

describe('SheetService', () => {
  let service: DHII_SheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DHII_SheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
