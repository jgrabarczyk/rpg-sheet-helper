import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputHarness } from '@angular/material/input/testing';
import { MatSelectHarness } from '@angular/material/select/testing';

import { DHII_Character } from '@dhii/types/dark-heresy-ii';

import { SheetHeaderComponent } from './sheet-header.component';
import {
  MatAccordionHarness,
  MatExpansionPanelHarness,
} from '@angular/material/expansion/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import {
  HeaderAccordionDataPipe,
  SheetHeaderAccordionData,
} from './header-accordion-data/header-accordion-data.pipe';
import { INITIAL_CHARACTER_FOR_TESTS } from '../../../../tests/character-data';
import { getButtonHarnessWithSelector } from '../../../../tests/harness-selector-helpers';

describe('SheetHeaderComponent', () => {
  let component: SheetHeaderComponent;
  let fixture: ComponentFixture<SheetHeaderComponent>;
  let loader: HarnessLoader;

  const char: DHII_Character = INITIAL_CHARACTER_FOR_TESTS;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SheetHeaderComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SheetHeaderComponent);
    component = fixture.componentInstance;
    component.character = char;
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  describe('Test cases for when EDITABLE mode is ON', () => {
    beforeEach(() => {
      component.editable = true;
      fixture.detectChanges();
    });
    describe('Should correctly update form', () => {
      // eslint-disable-next-line @typescript-eslint/typedef
      const inputConfig = [
        {
          name: 'characterName',
          expectedValue: 'Andrzej',
        },

        {
          name: 'age',
          expectedValue: '78',
        },
      ];
      // eslint-disable-next-line @typescript-eslint/typedef
      const selectConfig = [
        { name: 'homeworld', expectedValue: 'Agri-World' },
        { name: 'background', expectedValue: 'Adeptus Mechanicus' },
        { name: 'role', expectedValue: 'Warrior' },
      ];

      inputConfig.forEach(config => {
        it(`Should correctly set ${config.name}`, async () => {
          const input: MatInputHarness = await loader.getHarness(
            MatInputHarness.with({ selector: `[name="${config.name}"]` })
          );
          expect(await input.getValue()).toBe(config.expectedValue);
        });
      });

      selectConfig.forEach(config => {
        it(`should correctly set ${config.name}`, async () => {
          const nameInput: MatSelectHarness = await loader.getHarness(
            MatSelectHarness.with({ selector: `[name="${config.name}"]` })
          );
          expect(await nameInput.getValueText()).toBe(config.expectedValue);
        });
      });
    });
  });

  describe('Test cases for when EDITABLE mode is OFF', () => {
    const pipe: HeaderAccordionDataPipe = new HeaderAccordionDataPipe();
    const accordionData: SheetHeaderAccordionData[] = pipe.transform(char);

    let accordion: MatAccordionHarness;

    beforeEach(async () => {
      component.editable = false;
      fixture.detectChanges();
      accordion = await loader.getHarness(MatAccordionHarness);
    });
    describe('Check if panels are set correctly', () => {
      accordionData.forEach(panelConfig => {
        it(`${panelConfig.title} is set correctly`, async () => {
          const panel: MatExpansionPanelHarness = (
            await accordion.getExpansionPanels({ title: panelConfig.title })
          )[0];
          const title: string | null = await panel.getTitle();
          const description: string | null = await panel.getDescription();

          expect(title).toEqual(panelConfig.title);
          expect(description).toEqual(String(panelConfig.description)!);
        });
      });
    });

    describe('Check if panels are disabled', () => {
      const namePanel: SheetHeaderAccordionData = accordionData[0];
      const agePanel: SheetHeaderAccordionData = accordionData[1];
      [namePanel, agePanel].forEach(panelConfig => {
        it(`${panelConfig.title} is disabled `, async () => {
          const panel: MatExpansionPanelHarness = (
            await accordion.getExpansionPanels({ title: panelConfig.title })
          )[0];

          expect(await panel.isDisabled()).toBeTrue();
        });
      });
    });

    it('Component IS NOT EDITABLE', () => {
      expect(component.editable).toBeFalse();
    });
  });

  describe('Check error handling', () => {
    it('Should throw error while trying to pass null as character', () => {
      expect(() => {
        component.character = null as unknown as DHII_Character;
      }).toThrowError('char is missing');
    });
    it('Should throw error while trying to pass undefined as character', () => {
      expect(() => {
        component.character = undefined as unknown as DHII_Character;
      }).toThrowError('char is missing');
    });
  });

  describe('Check component Outputs', () => {
    it('Should emit save event', async () => {
      spyOn(component.saveCharacter, 'emit');
      const saveButton: MatButtonHarness = await getButtonHarnessWithSelector(
        loader,
        'saveCharacter'
      );
      await saveButton.click();
      expect(component.saveCharacter.emit).toHaveBeenCalled();
    });
    it('Should emit delete event', async () => {
      spyOn(component.deleteCharacter, 'emit');
      const deleteButton: MatButtonHarness = await getButtonHarnessWithSelector(
        loader,
        'deleteCharacter'
      );
      await deleteButton.click();
      expect(component.deleteCharacter.emit).toHaveBeenCalled();
    });
  });
});
