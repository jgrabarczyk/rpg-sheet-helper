import { MatButtonHarness } from '@angular/material/button/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadCharacterComponent } from './load-character.component';

import { DHII_SheetService } from 'dark-heresy-ii/service/dhii-sheet.service';
import { Observable, of } from 'rxjs';
import { getButtonHarnessWithSelector } from '../../tests/harness-selector-helpers';

interface SheetServiceMock {
  dhiiLocalStorageSaveNames$: Observable<string[]>;
  loadCharacterFromLocalStorage: jasmine.Spy<jasmine.Func>;
  deleteCharacterFromLocalStorage: jasmine.Spy<jasmine.Func>;
}

describe('LoadCharacterComponent', () => {
  const names: string[] = ['first value', 'second value', 'third valu'];
  const sheetService: SheetServiceMock = {
    dhiiLocalStorageSaveNames$: of(names),
    loadCharacterFromLocalStorage: jasmine.createSpy(
      'loadCharacterFromLocalStorage'
    ),
    deleteCharacterFromLocalStorage: jasmine.createSpy(
      'deleteCharacterFromLocalStorage'
    ),
  };

  let fixture: ComponentFixture<LoadCharacterComponent>;
  let listHarness: HarnessLoader;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadCharacterComponent],
      providers: [{ provide: DHII_SheetService, useValue: sheetService }],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadCharacterComponent);
    fixture.detectChanges();

    loader = TestbedHarnessEnvironment.loader(fixture);
    listHarness = await loader.getChildLoader('mat-list-item');
  });

  it('should create correct number of items in load list', async () => {
    const listItemsHarnesses: HarnessLoader[] =
      await loader.getAllChildLoaders('mat-list-item');
    expect(listItemsHarnesses.length).toEqual(names.length);
  });

  it('should load first  character', async () => {
    const loadItemButton: MatButtonHarness = await getButtonHarnessWithSelector(
      listHarness,
      'loadCharacter'
    );

    await loadItemButton.click();
    expect(sheetService.loadCharacterFromLocalStorage).toHaveBeenCalledWith(
      names[0]
    );
  });

  it('should delete first  character', async () => {
    const deleteItemButton: MatButtonHarness =
      await getButtonHarnessWithSelector(listHarness, 'deleteCharacter');

    await deleteItemButton.click();
    expect(sheetService.deleteCharacterFromLocalStorage).toHaveBeenCalledWith(
      names[0]
    );
  });
});
