import { TestBed } from '@angular/core/testing';

import { LoggerDiceRoll, RollService } from './roll.service';

describe('Unit RollService', () => {
  let service: RollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('check variuos different rolls', () => {
    it('should roll correct value for XdX', () => {
      const r: LoggerDiceRoll = {
        roll: '8d12',
        type: 'skipLog',
      };
      expect(service.rollDices(r)).toBeGreaterThanOrEqual(8);
      expect(service.rollDices(r)).toBeLessThanOrEqual(8 * 12);
    });
    it('should roll correct value for 1dX', () => {
      const r: LoggerDiceRoll = {
        roll: '1d12',
        type: 'skipLog',
      };
      expect(service.rollDices(r)).toBeGreaterThanOrEqual(1);
      expect(service.rollDices(r)).toBeLessThanOrEqual(12);
    });
    it('should roll 0 for 0dX', () => {
      const r: LoggerDiceRoll = {
        roll: '0d12',
        type: 'skipLog',
      };
      expect(service.rollDices(r)).toBe(0);
    });
    it('should roll 0 for Xd0', () => {
      const r: LoggerDiceRoll = {
        roll: '12d0',
        type: 'skipLog',
      };
      expect(service.rollDices(r)).toBe(0);
    });
  });
});
