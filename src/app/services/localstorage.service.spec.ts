import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './localstorage.service';
import { MatDialog } from '@angular/material/dialog';
import {
  dialogOpen,
  dialogOpenReturnMultipleValues,
  DialogOpenSpy
} from '../../tests/mocks/dialog-ref';
type MockData = { character: string };

const openSpy: DialogOpenSpy = dialogOpen('testName');
const mockData: MockData = { character: 'character' };
const anotherMockData: MockData = {
  character: 'otherCharacter'
};

describe('LocalstorageService', () => {
  let service: LocalStorageService;

  /**
   * Save multiple character mock to service
   * @param saveNames array of keys to use as names
   * @param data array of chracter data to use. If data index is empty {@link mockData} will be used.
   */
  function saveBulk(saveNames: string[], data?: MockData[]) {
    saveNames.forEach((name, index) => {
      service
        .saveCharacterToLocalStorage(data?.[index] ?? mockData, 'dhii')
        .subscribe(v => expect(v).toEqual(name));
    });
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MatDialog,
          useValue: openSpy
        }
      ]
    });
  });

  afterEach(() => {
    localStorage.clear();
  });
  describe('#saveCharacterToLocalStorage', () => {
    const saveNames: string[] = ['Zorro', 'Andrzej', 'Vulkan', 'Angron', 'Magnus', 'Alpharius'];

    beforeEach(() => {
      TestBed.overrideProvider(MatDialog, {
        useValue: dialogOpenReturnMultipleValues(saveNames)
      });
      service = TestBed.inject(LocalStorageService);
    });

    it('should save characters', done => {
      saveBulk(saveNames);

      service.DHII_CharacterKeys$.subscribe(v => {
        expect(v).toEqual(saveNames.sort());
      });
      done();
    });
  });

  describe('#loadCurrentCharacter', () => {
    const saveNames: string[] = ['Angron', 'Alpharius', 'Angron'];

    beforeEach(() => {
      TestBed.overrideProvider(MatDialog, {
        useValue: dialogOpenReturnMultipleValues(saveNames)
      });

      service = TestBed.inject(LocalStorageService);
    });

    it('should load last saved character', () => {
      saveBulk(saveNames, [anotherMockData, anotherMockData, mockData]);

      const character: MockData = service.loadCurrentCharacter<MockData>();
      expect(character).toEqual(mockData);
    });

    const throwMsg: string = 'There is no currentSave to load';
    it(`should throw "${throwMsg}" while loading from empty value`, () => {
      expect(() => service.loadCurrentCharacter<MockData>()).toThrowError(throwMsg);
    });
  });

  describe('#deleteCurrentCharacter', () => {
    const saveNames: string[] = ['Mortimer', 'Alparhius', 'Angron'];
    beforeEach(() => {
      TestBed.overrideProvider(MatDialog, {
        useValue: dialogOpenReturnMultipleValues([
          ...saveNames,
          true // deleteCurrentCharacter response
        ])
      });

      service = TestBed.inject(LocalStorageService);
    });
    it('should succesfully delete character', done => {
      saveBulk(saveNames, [anotherMockData, anotherMockData, mockData]);

      service.deleteCurrentCharacter().subscribe(isDeleted => {
        expect(isDeleted).toBeTrue();
      });

      expect(() => service.loadCharacterFromLocalStorage('Angron', 'dhii')).toThrowError(
        `There is no key dhii+Angron in localStorage`
      );
      done();
    });

    const throwMsg: string = 'There is no currentSave to delete';
    it(`should throw "${throwMsg}" while trying to delete from empty value`, () => {
      expect(() => service.deleteCurrentCharacter()).toThrowError(throwMsg);
    });

    it(`should throw "${throwMsg}" while trying to delete twice`, done => {
      saveBulk(saveNames, [anotherMockData, anotherMockData, mockData]);

      service.deleteCurrentCharacter().subscribe(isDeletionComplete => {
        expect(isDeletionComplete).toBeTrue();
      });

      expect(() => service.deleteCurrentCharacter()).toThrowError(throwMsg);
      done();
    });
  });

  describe('#loadCharacterFromLocalStorage', () => {
    const saveNames: string[] = ['Mortimer', 'Alparhius', 'Angron', 'Angron'];
    const nameToTestAgainst: string = saveNames[2];
    const throwMsg: string = `There is no key dhii+${nameToTestAgainst} in localStorage`;

    beforeEach(() => {
      TestBed.overrideProvider(MatDialog, {
        useValue: dialogOpenReturnMultipleValues([...saveNames, true])
      });

      service = TestBed.inject(LocalStorageService);
    });

    it(`should throw "${throwMsg}" while trying to load from empty value`, () => {
      expect(() => service.loadCharacterFromLocalStorage(nameToTestAgainst, 'dhii')).toThrowError(
        throwMsg
      );
    });
    it(`should throw "${throwMsg}" while trying to load from deleted record`, done => {
      saveBulk(saveNames);
      service.deleteCharacterFromLocalStorage(nameToTestAgainst, 'dhii').subscribe(() => {
        expect(() => service.loadCharacterFromLocalStorage(nameToTestAgainst, 'dhii')).toThrowError(
          throwMsg
        );
      });
      done();
    });
  });
});
