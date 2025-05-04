import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTabHarness } from '@angular/material/tabs/testing';
import { MatInputHarness } from '@angular/material/input/testing';
import { MatCheckboxHarness } from '@angular/material/checkbox/testing';
import {
  MatChipHarness,
  MatChipSetHarness,
} from '@angular/material/chips/testing';

import { EquipmentDialogComponent } from './equipment-dialog.component';
import { MatButtonHarness } from '@angular/material/button/testing';
import {
  dialogClose,
  DialogCloseSpy,
} from '../../../../tests/mocks/dialog-ref';
import { getButtonHarnessWithSelector } from '../../../../tests/harness-selector-helpers';
import { EQ_DIALOG_CLOSE_DATA } from '../../../../tests/eqiupment-dialog';

describe('EquipmentDialogComponent', () => {
  let fixture: ComponentFixture<EquipmentDialogComponent>;
  let loader: HarnessLoader;
  const dialogRefMock: DialogCloseSpy = dialogClose();
  beforeAll(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentDialogComponent, NoopAnimationsModule],
      providers: [{ provide: MatDialogRef, useValue: dialogRefMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentDialogComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('select all weaopns with "Laspistol" in name and save', async () => {
    //select weapon tab
    const tabLabel: string = 'Weapons';
    const tab: MatTabHarness = await loader.getHarness(
      MatTabHarness.with({ label: tabLabel })
    );
    await tab.select();
    expect(await tab.isSelected()).toBe(true);
    expect(await tab.getLabel()).toBe(tabLabel);

    //insert 'Lasgun' as filter query
    const searchQuery: string = 'Lasgun';
    const input: MatInputHarness = await tab.getHarness(MatInputHarness);
    await input.setValue(searchQuery);
    expect(await input.getName()).toBe('weapons');
    expect(await input.getValue()).toBe(searchQuery);

    //mark all filtered result as checked
    const [first, second] = await tab.getAllHarnesses(MatCheckboxHarness);

    await first.check(); //add item
    await first.uncheck(); //remove item
    await first.check(); //add item
    await second.check();

    expect(await first.isChecked()).toBe(true);
    expect(await second.isChecked()).toBe(true);

    //check if chip-set includes all checked item
    const selectedWeaponsNames: string[] = ['Lasgun', 'Hot-shot Lasgun'];
    const chipSet: MatChipSetHarness = await loader.getHarness(
      MatChipSetHarness.with({ selector: 'mat-chip-set[role=weapons]' })
    );
    const chips: MatChipHarness[] = await chipSet.getChips();

    expect(chips.length).toBe(2);
    chips.forEach(async chip => {
      expect(selectedWeaponsNames.includes(await chip.getText())).toBe(true);
    });

    //save data
    const saveButton: MatButtonHarness = await getButtonHarnessWithSelector(
      loader,
      'addItemsDialog'
    );
    await saveButton.click();

    expect(dialogRefMock.close).toHaveBeenCalledWith(EQ_DIALOG_CLOSE_DATA);
  });
});
