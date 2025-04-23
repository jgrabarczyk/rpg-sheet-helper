import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTabHarness } from '@angular/material/tabs/testing';
import { MatInputHarness } from '@angular/material/input/testing';
import { MatCheckboxHarness } from '@angular/material/checkbox/testing';
import { MatChipHarness, MatChipSetHarness } from '@angular/material/chips/testing';

import { EquipmentDialogComponent } from './equipment-dialog.component';
import { MatButtonHarness } from '@angular/material/button/testing';
import { DHII_Equipment } from '@dhii/types/items/generic-item';

const CLOSE_DATA: DHII_Equipment = {
  armours: [],
  backpack: [],
  weapons: [
    {
      name: 'Laspistol',
      family: 'Las',
      class: 'Pistol',
      rangeInMeters: 30,
      isRanged: true,
      weaponJamOn: 100,
      rateOfFire: {
        single: true,
        semi: 2
      },
      damage: '1d10+2',
      damageType: 'Energy',
      armourPenetration: 0,
      clipSize: 30,
      reloadInActions: 1,
      weightInKilos: 1.5,
      availability: 10,
      notes:
        'Las Weapon Variable Setting: Overcharge: +1 Dam, 2 ammo. Overload: +2 Dam and Pen but uses 4 ammo, loses Reliable, and gains Unreliable'
    },
    {
      name: 'Hot-shot Laspistol',
      family: 'Las',
      class: 'Pistol',
      rangeInMeters: 20,
      isRanged: true,
      weaponJamOn: 96,
      rateOfFire: {
        single: true,
        semi: 2
      },
      damage: '1d10+4',
      damageType: 'Energy',
      armourPenetration: 7,
      clipSize: 40,
      reloadInActions: 4,
      weightInKilos: 4,
      availability: -20,
      notes: 'Do not benefit from the Las Weapon Variable Setting rules.'
    }
  ]
};

const dialogRefMock: { close: unknown } = {
  close: jasmine.createSpy('close')
};

describe('EquipmentDialogComponent', () => {
  let fixture: ComponentFixture<EquipmentDialogComponent>;
  let loader: HarnessLoader;

  beforeAll(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentDialogComponent],
      providers: [{ provide: MatDialogRef, useValue: dialogRefMock }, provideAnimations()]
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentDialogComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('select all weaopns with "Laspistol" in name and save', async () => {
    //select weapon tab
    const tabLabel: string = 'Weapons';
    const tab: MatTabHarness = await loader.getHarness(MatTabHarness.with({ label: tabLabel }));
    await tab.select();
    expect(await tab.isSelected()).toBe(true);
    expect(await tab.getLabel()).toBe(tabLabel);

    //insert 'Laspistol' as filter query
    const searchQuery: string = 'Laspistol';
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
    const selectedWeaponsNames: string[] = ['Laspistol', 'Hot-shot Laspistol'];
    const chipSet: MatChipSetHarness = await loader.getHarness(
      MatChipSetHarness.with({ selector: 'mat-chip-set[role=weapons]' })
    );
    const chips: MatChipHarness[] = await chipSet.getChips();

    expect(chips.length).toBe(2);
    chips.forEach(async chip => {
      expect(selectedWeaponsNames.includes(await chip.getText())).toBe(true);
    });

    //save data
    const saveButton: MatButtonHarness = await loader.getHarness(
      MatButtonHarness.with({ text: 'Add items' })
    );
    await saveButton.click();

    expect(dialogRefMock.close).toHaveBeenCalledWith(CLOSE_DATA);
  });
});
