import { HarnessLoader, TestElement } from '@angular/cdk/testing';
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
import { MatMenuHarness, MatMenuItemHarness } from '@angular/material/menu/testing';

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
import { BackpackHarness } from './equipment/backpack/testing/backpack.harness';

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

    describe('test equipment', () => {
      it('should add all weapons with "Laspistol" in name', async () => {
        const addEquipmentButton: MatButtonHarness = await getButtonHarnessWithSelector(
          componentLoader,
          'addItems'
        );

        await addEquipmentButton.click();

        const equipmentDialog: MatDialogHarness = await rootLoader.getHarness(MatDialogHarness);
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

        //save added items
        const addItemsButton: MatButtonHarness = await equipmentDialog.getHarness(
          MatButtonHarness.with({ selector: '[name="addItemsDialog"]' })
        );
        await addItemsButton.click();
        const panel: MatCardHarness = await componentLoader.getHarness(
          MatCardHarness.with({ title: 'Ranged Weapons' })
        );

        expect(await panel.getText()).toContain('Laspistol');
        expect(await panel.getText()).toContain('Hot-shot Laspistol');
      });

      it('should add empty equipment list', async () => {
        const addEquipmentButton: MatButtonHarness = await getButtonHarnessWithSelector(
          componentLoader,
          'addItems'
        );

        await addEquipmentButton.click();
        const equipmentDialog: MatDialogHarness = await rootLoader.getHarness(MatDialogHarness);

        //save added items
        const addItemsButton: MatButtonHarness = await equipmentDialog.getHarness(
          MatButtonHarness.with({ selector: '[name="addItemsDialog"]' })
        );
        await addItemsButton.click();

        const eqPanel: MatCardHarness = await componentLoader.getHarness(
          MatCardHarness.with({ title: 'Equipment' })
        );

        const backpacks: BackpackHarness[] = await eqPanel.getAllHarnesses(BackpackHarness);
        expect(backpacks.length).toBe(0);
      });

      it('should add one item from every type (Backapck Items, Cybernetic, Melee Weapons, Thrown Weapons, Ranged Weapons, Armours, Force Field, )', async () => {
        const addEquipmentButton: MatButtonHarness = await getButtonHarnessWithSelector(
          componentLoader,
          'addItems'
        );

        await addEquipmentButton.click();
        const equipmentDialog: MatDialogHarness = await rootLoader.getHarness(MatDialogHarness);

        const [backpackTab, cyberneticsTab, weaponsTab, armoursTab]: MatTabHarness[] =
          await equipmentDialog.getAllHarnesses(MatTabHarness.with());

        await backpackTab.select();
        const backpackFilter: MatInputHarness = await backpackTab.getHarness(MatInputHarness);
        await backpackFilter.setValue('Chrono');
        const backpackItem: MatCheckboxHarness = await backpackTab.getHarness(MatCheckboxHarness);
        await backpackItem.check();

        await cyberneticsTab.select();
        const cyberneticsFilter: MatInputHarness = await cyberneticsTab.getHarness(MatInputHarness);
        await cyberneticsFilter.setValue('Bionic Heart');
        const cyberneticsItem: MatCheckboxHarness = await cyberneticsTab.getHarness(
          MatCheckboxHarness
        );
        await cyberneticsItem.check();

        await weaponsTab.select();
        const weaponsFilter: MatInputHarness = await weaponsTab.getHarness(MatInputHarness);
        await weaponsFilter.setValue('Force Staff');
        let weaponsItem: MatCheckboxHarness = await weaponsTab.getHarness(MatCheckboxHarness);
        await weaponsItem.check();

        await weaponsFilter.setValue('Bolas')
        weaponsItem = await weaponsTab.getHarness(MatCheckboxHarness);
        await weaponsItem.check();
        await weaponsFilter.setValue('Plasma Gun')
        weaponsItem = await weaponsTab.getHarness(MatCheckboxHarness);
        await weaponsItem.check();

        
        await armoursTab.select();
        //add standard armour
        const armoursFilter: MatInputHarness = await armoursTab.getHarness(MatInputHarness);
        await armoursFilter.setValue('Light Power Armour');
        let armoursItem: MatCheckboxHarness = await armoursTab.getHarness(MatCheckboxHarness);
        await armoursItem.check();
        
        //add force field
        await armoursFilter.setValue('Flare Shield');
        armoursItem = await armoursTab.getHarness(MatCheckboxHarness); //update checkbox list for new filter value
        await armoursItem.check();
        

        //save added items
        const addItemsButton: MatButtonHarness = await equipmentDialog.getHarness(
          MatButtonHarness.with({ selector: '[name="addItemsDialog"]' })
        );
        await addItemsButton.click();

        const eqPanel: MatCardHarness = await componentLoader.getHarness(
          MatCardHarness.with({ title: 'Equipment' })
        );

        const [meleeWeapons,rangedWeapons, thrownWeapons, armours, forceFields, backpack]: BackpackHarness[] = await eqPanel.getAllHarnesses(
          BackpackHarness
        );
        const meleeWeaponItems: TestElement[] = await meleeWeapons.getTableRows();
        const rangedWeaopnItems: TestElement[] = await rangedWeapons.getTableRows();
        const thrownWeaopnItems: TestElement[] = await thrownWeapons.getTableRows();
        const armourItems: TestElement[] = await armours.getTableRows();
        const backpackItems: TestElement[] = await backpack.getTableRows();
        const forceFieldItems: TestElement[] = await forceFields.getTableRows();
        
        expect(meleeWeaponItems.length).toBe(1)
        expect(await meleeWeaponItems[0].text()).toContain('Force Staff')
        expect(await meleeWeaponItems[0].text()).withContext('should contain valid weapon traits').toContain('Two-Handed') //

        expect(rangedWeaopnItems.length).toBe(1)
        expect(await rangedWeaopnItems[0].text()).toContain('Plasma Gun')
        expect(await rangedWeaopnItems[0].text()).withContext('should contain valid weapon traits').toContain('Overheats') //

        expect(thrownWeaopnItems.length).toBe(1)
        expect(await thrownWeaopnItems[0].text()).toContain('Bolas')
        expect(await thrownWeaopnItems[0].text()).withContext('should contain valid weapon traits').toContain('Inaccurate') //
        
        expect(armourItems.length).toBe(1)
        expect(await armourItems[0].text()).toContain('Light Power Armour')
        expect(await armourItems[0].text()).withContext('should contian valid armour description').toContain('Add Unnatural Strenght (1), incrases wearer size by 1. Power source run 1d5 hours if not stated differently.')
        
        expect(forceFieldItems.length).toBe(1)
        expect(await forceFieldItems[0].text()).toContain('Flare Shield')
        expect(await forceFieldItems[0].text()).withContext('should contian valid force field description').toContain('Protection rating doubled against weapons with the Blast or Spray qualities. If the shield overloads, it inflicts 1d10 Energy damage to the wearer that ignores Toughness bonus and Armour.')

        
        expect(backpackItems.length).toBe(2)
        expect(await backpackItems[0].text()).toContain('Chrono')
        expect(await backpackItems[0].text()).withContext('should contian valid description').toContain('Keeps time.')
        expect(await backpackItems[1].text()).toContain('Bionic Heart')
        expect(await backpackItems[1].text()).withContext('should contian valid description').toContain('+1 AP to Body, grants Sprint talent.')
      });
    });

    describe('should test attribute', () => {
      it('should increase "Weapon Skill" attribute to max (from 0 to 25)', async () => {
        const attributeCard: MatCardHarness = await componentLoader.getHarness(
          MatCardHarness.with({ title: 'Attributes' })
        );
        const weaponSkillAttributeItem: MatListItemHarness = await attributeCard.getHarness(
          MatListItemHarness.with({ text: /Weapon Skill/gm })
        );

        const increaseAttributeLevelButton: MatButtonHarness =
          await weaponSkillAttributeItem.getHarness(
            MatButtonHarness.with({ selector: '[name="increaseAttributeLevel"]' })
          );
        const decreaseAttributeLevelButton: MatButtonHarness =
          await weaponSkillAttributeItem.getHarness(
            MatButtonHarness.with({ selector: '[name="decreaseAttributeLevel"]' })
          );

        await increaseAttributeLevelButton.click();
        //try to decrease below 0;
        await decreaseAttributeLevelButton.click();
        await decreaseAttributeLevelButton.click();
        await decreaseAttributeLevelButton.click();

        //try to increase more than 5 time
        await increaseAttributeLevelButton.click();
        await increaseAttributeLevelButton.click();
        await increaseAttributeLevelButton.click();
        await increaseAttributeLevelButton.click();
        await increaseAttributeLevelButton.click();
        await increaseAttributeLevelButton.click();
        await increaseAttributeLevelButton.click();

        const weaponSkillAttributeValue: MatInputHarness =
          await weaponSkillAttributeItem.getHarness(MatInputHarness);

        expect(await weaponSkillAttributeValue.getValue())
          .withContext('expect to cap attribute increases up to 5 times')
          .toBe('25');
      });
      it('should roll "Weapon Skill" attribute with 1% chance to success', async () => {
        const attributeCard: MatCardHarness = await componentLoader.getHarness(
          MatCardHarness.with({ title: 'Attributes' })
        );
        const wsItem: MatListItemHarness = await attributeCard.getHarness(
          MatListItemHarness.with({ text: /Weapon Skill/gm })
        );
        const rollMenuButton: MatButtonHarness = await wsItem.getHarness(
          MatButtonHarness.with({ text: 'Roll' })
        );
        await rollMenuButton.click();

        const rollMenu: MatMenuHarness = await wsItem.getHarness(MatMenuHarness);
        const rollMenuItems: MatMenuItemHarness[] = await rollMenu.getItems({ text: '0' });
        await rollMenuItems[0].click();

        const diceLoggerCard: MatCardHarness = await componentLoader.getHarness(
          MatCardHarness.with({ title: 'Dice roll history' })
        );
        const rollItem: MatListItemHarness = await diceLoggerCard.getHarness(MatListItemHarness);
        const rollText: string = await rollItem.getFullText();

        const expectedResultChanceText: string = `Chance:\n  1`;
        expect(rollText).toContain('Weapon Skill');
        expect(rollText).toContain(expectedResultChanceText);
      });
    });

    describe('should test skill', () => {
      it('should increase "Trade" skill up to max (from 0 to 30) and roll test', async () => {
        const skillCard: MatCardHarness = await componentLoader.getHarness(
          MatCardHarness.with({ title: 'Skills' })
        );

        const tradeSkillItem: MatListItemHarness = await skillCard.getHarness(
          MatListItemHarness.with({ text: /Trade/gm })
        );

        const increaseSkillLevelButton: MatButtonHarness = await tradeSkillItem.getHarness(
          MatButtonHarness.with({ selector: '[name="increaseSkillLevel"]' })
        );
        const decreaseSkillLevelButton: MatButtonHarness = await tradeSkillItem.getHarness(
          MatButtonHarness.with({ selector: '[name="decreaseSkillLevel"]' })
        );

        await increaseSkillLevelButton.click();
        await decreaseSkillLevelButton.click();
        await decreaseSkillLevelButton.click();
        await increaseSkillLevelButton.click();
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
        const rollItem: MatListItemHarness = await diceLoggerCard.getHarness(MatListItemHarness);
        expect(await rollItem.getFullText()).toContain('Trade');
      });
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
