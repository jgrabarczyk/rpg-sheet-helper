/* eslint-disable @typescript-eslint/typedef */
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { MatExpansionPanelHarness } from '@angular/material/expansion/testing';
import { MatDialogHarness } from '@angular/material/dialog/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatInputHarness } from '@angular/material/input/testing';
import { MatTabHarness } from '@angular/material/tabs/testing';
import { MatCheckboxHarness } from '@angular/material/checkbox/testing';
import { MatCardHarness } from '@angular/material/card/testing';
import { MatListItemHarness } from '@angular/material/list/testing';

import { AttributesGroupComponent } from '@dhii/partials/attributes-group/attributes-group.component';
import { JSONstringify } from '@util/json-mappers';
import { SaveDialogComponent } from '@shared/dialogs/save-dialog/save-dialog.component';

import { StoragePrefixes } from 'services/localstorage.service';
import { LoadCharacterComponent } from 'load-character/load-character.component';
import { SheetComponent } from './sheet.component';
import { AptitudesGroupComponent } from './aptitude/aptitudes-group.component';
import { SheetHeaderComponent } from './sheet-header/sheet-header.component';
import { SkillGroupComponent } from './skill/skill-group/skill-group.component';
import { TalentsGroupComponent } from './talents-group/talents-group.component';
import { BackpackComponent } from './equipment/backpack/backpack.component';

import { INITIAL_CHARACTER_FOR_TESTS } from '../../../tests/character-data';
import { getButtonHarnessWithSelector } from '../../../tests/harness-selector-helpers';

describe('SheetComponent', () => {
  let routerHarness: RouterTestingHarness;
  let componentLoader: HarnessLoader;
  let rootLoader: HarnessLoader;

  const initialSaveName: string = 'arbite';
  const prefix: StoragePrefixes = 'dhii';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SaveDialogComponent,
        BackpackComponent,
        SheetComponent,
        AttributesGroupComponent,
        CommonModule,
        SkillGroupComponent,
        AptitudesGroupComponent,
        SheetHeaderComponent,
        TalentsGroupComponent,
        NoopAnimationsModule
      ],
      providers: [
        provideRouter([
          { path: 'sheet/:prefix/:saveName', component: SheetComponent, pathMatch: 'full' },
          { path: 'sheet', component: SheetComponent, pathMatch: 'full' },
          { path: 'load', component: LoadCharacterComponent }
        ])
      ]
    }).compileComponents();

    // localStorage.setItem(
    //   `${prefix}+${initialSaveName}`,
    //   JSONstringify(INITIAL_CHARACTER_FOR_TESTS)
    // );

    // routerHarness = await RouterTestingHarness.create(`/sheet/${prefix}/${initialSaveName}`);
    // const routerFixture: ComponentFixture<unknown> = routerHarness.fixture;
    // routerFixture.autoDetectChanges(true);
    // componentLoader = TestbedHarnessEnvironment.loader(routerFixture);
    // rootLoader = TestbedHarnessEnvironment.documentRootLoader(routerFixture);
  });

  afterEach(() => {
    localStorage.clear();
    routerHarness = null as unknown as RouterTestingHarness;
  });

  describe('check "/sheet/:prefix/:saveName" path ', () => {
    beforeEach(async () => {
      localStorage.setItem(
        `${prefix}+${initialSaveName}`,
        JSONstringify(INITIAL_CHARACTER_FOR_TESTS)
      );

      routerHarness = await RouterTestingHarness.create(`/sheet/${prefix}/${initialSaveName}`);
      const routerFixture: ComponentFixture<unknown> = routerHarness.fixture;
      routerFixture.autoDetectChanges(true);
      componentLoader = TestbedHarnessEnvironment.loader(routerFixture);
      rootLoader = TestbedHarnessEnvironment.documentRootLoader(routerFixture);
    });

    const newSaveName: string = 'Mortarion';
    it(`Should initialize component and save character as "${newSaveName}"`, async () => {
      //click save button
      const saveCharacterButton: MatButtonHarness = await getButtonHarnessWithSelector(
        componentLoader,
        'saveCharacter'
      );
      await saveCharacterButton.click();

      //fill dialog with new saveName
      const dialog: MatDialogHarness = await rootLoader.getHarness(MatDialogHarness);
      const input: MatInputHarness = await dialog.getHarness(MatInputHarness);
      await input.setValue(newSaveName);

      //save dialog
      const dialogSaveButton: MatButtonHarness = await dialog.getHarness(
        MatButtonHarness.with({ selector: '[name="save"]' })
      );
      await dialogSaveButton.click();
      const eqTab: MatTabHarness[] = await componentLoader.getAllHarnesses(MatTabHarness);

      expect(eqTab).not.toBeFalsy();
      await routerHarness.navigateByUrl('/sheet/dhii/' + newSaveName);

      const panel: MatExpansionPanelHarness = await componentLoader.getHarness(
        MatExpansionPanelHarness.with({ title: 'Character Name' })
      );

      expect(await panel.getDescription()).toBe('Andrzej');
    });

    it('should add equipment', async () => {
      //////////
      const addEquipmentButton: MatButtonHarness = await getButtonHarnessWithSelector(
        componentLoader,
        'addItems'
      );

      await addEquipmentButton.click();

      const equipmentDialog: MatDialogHarness = await rootLoader.getHarness(MatDialogHarness);
      // // eqiupment dialog //
      const weaponTabLabel: string = 'Weapons';
      const weaponTab: MatTabHarness = await equipmentDialog.getHarness(
        MatTabHarness.with({ label: weaponTabLabel })
      );
      await weaponTab.select();

      const weaponFilterQuery: string = 'Laspistol';
      const weaponFilterQueryInput: MatInputHarness = await weaponTab.getHarness(MatInputHarness);
      await weaponFilterQueryInput.setValue(weaponFilterQuery);

      // //mark all filtered result as checked
      const [firstWeapon, secondWeapon] = await weaponTab.getAllHarnesses(MatCheckboxHarness);

      await firstWeapon.check();
      await secondWeapon.check();

      expect(await firstWeapon.isChecked()).toBe(true);
      expect(await secondWeapon.isChecked()).toBe(true);

      // //save added items
      const addItemsButton: MatButtonHarness = await equipmentDialog.getHarness(
        MatButtonHarness.with({ selector: '[name="addItemsDialog"]' })
      );
      await addItemsButton.click();
      const panel: MatCardHarness = await componentLoader.getHarness(
        MatCardHarness.with({ title: 'Weapons Range' })
      );

      expect(await panel.getText()).toContain('Laspistol');
      expect(await panel.getText()).toContain('Hot-shot Laspistol');
    });

    it('should increase weapon skill twice (from 0 to 10)', async () => {
      const attributeCard: MatCardHarness = await componentLoader.getHarness(
        MatCardHarness.with({ title: 'Attributes' })
      );
      const weaponSkillAttributeItem = await attributeCard.getHarness(
        MatListItemHarness.with({ text: /Weapon Skill/gm })
      );

      const increaseAttributeLevelButton: MatButtonHarness =
        await weaponSkillAttributeItem.getHarness(
          MatButtonHarness.with({ selector: '[name="increaseAttributeLevel"]' })
        );
      await increaseAttributeLevelButton.click();
      await increaseAttributeLevelButton.click();

      const weaponSkillAttributeValue: MatInputHarness = await weaponSkillAttributeItem.getHarness(
        MatInputHarness
      );
      expect(await weaponSkillAttributeValue.getValue()).toBe('10');
    });

    it('should increase trade skill up to max (from 0 to 30) and roll test', async () => {
      const attributeCard: MatCardHarness = await componentLoader.getHarness(
        MatCardHarness.with({ title: 'Skills' })
      );

      const tradeSkillItem = await attributeCard.getHarness(
        MatListItemHarness.with({ text: /Trade/gm })
      );

      const increaseSkillLevelButton: MatButtonHarness = await tradeSkillItem.getHarness(
        MatButtonHarness.with({ selector: '[name="increaseSkillLevel"]' })
      );

      await increaseSkillLevelButton.click();
      await increaseSkillLevelButton.click();
      await increaseSkillLevelButton.click();
      await increaseSkillLevelButton.click();

      const tradeSkillValue: MatInputHarness = await tradeSkillItem.getHarness(MatInputHarness);
      expect(await tradeSkillValue.getValue()).toBe('30');

      const quickRollButton: MatButtonHarness = await tradeSkillItem.getHarness(
        MatButtonHarness.with({ text: /Quick Roll/ })
      );

      await quickRollButton.click();

      const diceLoggerCard: MatCardHarness = await componentLoader.getHarness(
        MatCardHarness.with({ title: 'Dice roll history' })
      );
      const rollItem = await diceLoggerCard.getHarness(MatListItemHarness);
      expect(await rollItem.getFullText()).toContain('Trade');
    });

    it('should delete current character and navigate to "/load" path ', async () => {
      const deleteCharacterButton: MatButtonHarness = await getButtonHarnessWithSelector(
        componentLoader,
        'deleteCharacter'
      );
      await deleteCharacterButton.click();

      const confirmDialog: MatDialogHarness = await rootLoader.getHarness(MatDialogHarness);
      const confirmButton: MatButtonHarness = await confirmDialog.getHarness(
        MatButtonHarness.with({ selector: '[name="confirm"]' })
      );

      await confirmButton.click();
      expect(routerHarness.routeDebugElement?.componentInstance).toBeInstanceOf(
        LoadCharacterComponent
      );
    });
  });
});
