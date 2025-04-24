import { TestBed } from '@angular/core/testing';

import { LocalStorageService, StoragePrefixes } from './localstorage.service';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { DHII_Character } from '@dhii/types/dark-heresy-ii';

const name: string = 'testName';
const dialog: {
  open: jasmine.Spy<jasmine.Func>;
} = {
  open: jasmine.createSpy().and.returnValue({
    afterClosed: () => of(name)
  })
};

describe('LocalstorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MatDialog,
          useValue: dialog
        }
      ]
    });
    service = TestBed.inject(LocalStorageService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('#saveCharacterToLocalStorage should save character', done => {
    service.saveCharacterToLocalStorage({ character: 'character' }, 'dhii').subscribe(v => {
      expect(v).toEqual(name);
    });

    service.DHII_CharacterKeys$.subscribe(v => {
      expect(v).toEqual([name]);
    });
    done();
  });

  describe('#loadCurrentCharacter', () => {
    it('should load character', () => {
      //save character
      const mockData: DHII_Character = { character: 'character' } as unknown as DHII_Character;
      const anotherMockData: DHII_Character = {
        character: 'otherCharacter'
      } as unknown as DHII_Character;
      service.saveCharacterToLocalStorage(mockData, 'dhii').subscribe();
      service.saveCharacterToLocalStorage(anotherMockData, 'dhii').subscribe();

      const character: DHII_Character = service.loadCurrentCharacter();
      expect(character).toEqual(anotherMockData);
    });
    const throwMsg: string = 'There is no currentSave to load';
    it(`should throw "${throwMsg}"`, () => {
      expect(() => service.loadCurrentCharacter()).toThrowError(throwMsg);
    });
  });

  describe('#deleteCurrentCharacter', () => {
    it('should succesfully delete character', done => {
      const mockData: DHII_Character = { character: 'character' } as unknown as DHII_Character;
      const anotherMockData: DHII_Character = {
        character: 'otherCharacter'
      } as unknown as DHII_Character;
      service.saveCharacterToLocalStorage(mockData, 'dhii').subscribe();
      service.saveCharacterToLocalStorage(anotherMockData, 'dhii').subscribe();

      service.deleteCurrentCharacter().subscribe(isDeleted => {
        expect(!!isDeleted).toBeTrue();
        done();
      });
    });

    const throwMsg: string = 'There is no currentSave to delete';
    it(`should throw "${throwMsg}"`, () => {
      expect(() => service.deleteCurrentCharacter()).toThrowError(throwMsg);
    });
  });

  const prefix: StoragePrefixes = 'dhii'
  const key: string = 'someInvalidKey';
  const throwMsg: string = `There is no key ${prefix}+${key} in localStorage`;
  it('#loadCharacterFromLocalStorage', () => {
    expect(() => service.loadCharacterFromLocalStorage(key, prefix)).toThrowError(throwMsg);
  });
});
