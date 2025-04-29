import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HarnessLoader, parallel } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import {
  MatStepHarness,
  MatStepperHarness,
  MatStepperNextHarness,
  MatStepperPreviousHarness
} from '@angular/material/stepper/testing';
import { MatCardHarness } from '@angular/material/card/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatInputHarness } from '@angular/material/input/testing';
import { MatListItemHarness } from '@angular/material/list/testing';
import { MatSelectHarness } from '@angular/material/select/testing';
import { MatOptionHarness } from '@angular/material/core/testing';

import { HomeworldCardHarness } from './steps/homeworld-step/homeworld-card/testing/homeworld-card.harness';
import { BackgroundCardHarness } from './steps/background-step/background-card/testing/background-card.harness';
import { RoleCardHarness } from './steps/role-step/role-card/testing/role-card.harness';
import { DarkHeresyIICreatorComponent } from './dark-heresy-ii-creator.component';
import { MatDialogHarness } from '@angular/material/dialog/testing';

describe('DarkHeresyIICreatorComponent', () => {
  let component: DarkHeresyIICreatorComponent;
  let loader: HarnessLoader;
  let rootLoader: HarnessLoader;
  let fixture: ComponentFixture<DarkHeresyIICreatorComponent>;
  let stepper: MatStepperHarness;
  let homeworldStep: MatStepHarness;
  let backgroundStep: MatStepHarness;
  let roleStep: MatStepHarness;
  let attributesStep: MatStepHarness;
  let aptitudesStep: MatStepHarness;
  let talentsStep: MatStepHarness;
  let skillStep: MatStepHarness;
  let equipmentStep: MatStepHarness;
  let woundsAndFateStep: MatStepHarness;
  let divinationStep: MatStepHarness;
  let finalStep: MatStepHarness;

  let nextStep: MatStepperNextHarness;
  let previousStep: MatStepperPreviousHarness;

  let rollLogger: MatCardHarness;
  let rollLoggerItems: MatListItemHarness[] = [];
  let rollLoggerMessages: (string | null)[] = [];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkHeresyIICreatorComponent, NoopAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DarkHeresyIICreatorComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    rootLoader = TestbedHarnessEnvironment.documentRootLoader(fixture);
    fixture.autoDetectChanges(true);
    stepper = await loader.getHarness(MatStepperHarness);
    [
      homeworldStep,
      backgroundStep,
      roleStep,
      attributesStep,
      aptitudesStep,
      talentsStep,
      skillStep,
      equipmentStep,
      woundsAndFateStep,
      divinationStep,
      finalStep
    ] = await stepper.getSteps();

    previousStep = await loader.getHarness(MatStepperPreviousHarness);
    nextStep = await loader.getHarness(MatStepperNextHarness);

    rollLogger = await loader.getHarness(MatCardHarness.with({ selector: '[name=rollLogger]' }));
  });

  afterEach(()=>{
    localStorage.clear();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('fill out stepper', async () => {
    /*---------------------------------------------------------------------------------------
     * 1 step - Choose Homeworld
     *---------------------------------------------------------------------------------------*/
    const homerworldCards: HomeworldCardHarness[] = await homeworldStep.getAllHarnesses(
      HomeworldCardHarness
    );
    expect(homerworldCards.length).toBe(15);
    await homerworldCards[0].click();
    await nextStep.click();
    await previousStep.click();
    await nextStep.click();
    expect(await homeworldStep.isCompleted()).toBeTrue();

    /*---------------------------------------------------------------------------------------
     * 2 step - Choose Background
     *---------------------------------------------------------------------------------------*/
    const backgroundCards: BackgroundCardHarness[] = await backgroundStep.getAllHarnesses(
      BackgroundCardHarness
    );
    expect(backgroundCards.length).toBe(13);
    await backgroundCards[0].click();
    await nextStep.click();
    expect(await backgroundStep.isCompleted()).toBeTrue();

    /*---------------------------------------------------------------------------------------
     * 3 step - Choose Role
     *---------------------------------------------------------------------------------------*/
    const roleStepCards: RoleCardHarness[] = await roleStep.getAllHarnesses(RoleCardHarness);
    expect(roleStepCards.length).toBe(12);
    await roleStepCards[0].click();
    await nextStep.click();
    expect(await roleStep.isCompleted()).toBeTrue();

    /*---------------------------------------------------------------------------------------
     * 4 step - Choose Attributes
     *---------------------------------------------------------------------------------------*/
    const [attributeDescription, attributeList]: MatCardHarness[] = await parallel(() => [
      attributesStep.getHarness(
        MatCardHarness.with({ selector: '[name="twoColumnDescriptionCard"]' })
      ),
      attributesStep.getHarness(MatCardHarness.with({ selector: '[name="attributeGroup"]' }))
    ]);

    const generateAttributeValuesButton: MatButtonHarness = await attributeDescription.getHarness(
      MatButtonHarness
    );
    await generateAttributeValuesButton.click();

    const attributeInputs: MatInputHarness[] = await attributeList.getAllHarnesses(MatInputHarness);
    const attributeValues: string[] = await parallel(() =>
      attributeInputs.map(el => el.getValue())
    );
    // check if generated attribute values mach their rolled values
    rollLoggerItems = await rollLogger.getAllHarnesses(MatListItemHarness);
    rollLoggerMessages = await parallel(() => rollLoggerItems.map(roll => roll.getSecondaryText()));

    const attributeRollResults: number[] = rollLoggerMessages
      .filter(v => !!v)
      .map(r => Number(r!.split('Result:')[1]));

    attributeValues.forEach((value, index) => {
      expect(Number(value))
        .withContext('attribute value should equal to rollResult+20')
        .toBe(attributeRollResults[index] + 20);
    });

    const rerollAttributeButton: MatButtonHarness = await attributeList.getHarness(
      MatButtonHarness.with({ text: 'Reroll attribute' })
    );
    rerollAttributeButton.click();
    rollLoggerItems = await rollLogger.getAllHarnesses(MatListItemHarness);
    expect(rollLoggerItems.length).withContext('after attribute generation and attribute reroll').toBe(11)

    await nextStep.click();
    expect(await attributesStep.isCompleted()).toBeTrue();

    /*---------------------------------------------------------------------------------------
     * 5 step - Choose Aptitudes
     *---------------------------------------------------------------------------------------*/
    const [aptitudesDescription, aptitudesList]: MatCardHarness[] = await parallel(() => [
      aptitudesStep.getHarness(
        MatCardHarness.with({ selector: '[name="twoColumnDescriptionCard"]' })
      ),
      aptitudesStep.getHarness(MatCardHarness.with({ selector: '[right-column]' }))
    ]);

    const saveAptitudesButton: MatButtonHarness = await aptitudesDescription.getHarness(
      MatButtonHarness
    );
    expect(await saveAptitudesButton.isDisabled()).toBeTrue();

    const [fristAptitude, secondAptitude]: MatSelectHarness[] = await aptitudesList.getAllHarnesses(
      MatSelectHarness
    );
    await fristAptitude.open();
    const firstAptitudeOptions: MatOptionHarness[] = await fristAptitude.getOptions();
    const fristAptitudeValues: string[] = await parallel(() =>
      firstAptitudeOptions.map(option => option.getText())
    );
    expect(fristAptitudeValues.join(',')).toBe('Knowledge,Social');
    await fristAptitude.clickOptions({ text: 'Knowledge' });

    await secondAptitude.open();
    const secondAptitudeOptions: MatOptionHarness[] = await secondAptitude.getOptions();
    const secondAptitudeValues: string[] = await parallel(() =>
      secondAptitudeOptions.map(option => option.getText())
    );
    expect(secondAptitudeValues.join(',')).toBe('Ballistic Skill,Weapon Skill');
    await secondAptitude.clickOptions({ text: 'Ballistic Skill' });

    expect(await saveAptitudesButton.isDisabled()).toBeFalse();
    await saveAptitudesButton.click();
    await nextStep.click();
    expect(await aptitudesStep.isCompleted()).toBeTrue();

    /*---------------------------------------------------------------------------------------
     * 6 step - Choose Talents
     *---------------------------------------------------------------------------------------*/
    const talentsList: MatCardHarness = await talentsStep.getHarness(
      MatCardHarness.with({ selector: '[right-column]' })
    );
    const [firstTalent, secondTalent]: MatSelectHarness[] = await talentsList.getAllHarnesses(
      MatSelectHarness
    );

    await firstTalent.open();
    const firstTalentOptions: MatOptionHarness[] = await firstTalent.getOptions();
    const firstTalentValues: string[] = await parallel(() =>
      firstTalentOptions.map(option => option.getText())
    );
    expect(firstTalentValues.join(',')).toBe(
      'Weapon Training (Las),Weapon Training (Solid Projectile)'
    );
    await firstTalent.clickOptions({ text: 'Weapon Training (Las)' });

    await secondTalent.open();
    const secondTalentOptions: MatOptionHarness[] = await secondTalent.getOptions();
    const secondTalentValues: string[] = await parallel(() =>
      secondTalentOptions.map(option => option.getText())
    );
    expect(secondTalentValues.join(',')).toBe('Jaded,Leap Up');
    await secondTalent.clickOptions({ text: 'Jaded' });

    const saveTalentButton: MatButtonHarness = await talentsList.getHarness(MatButtonHarness);
    expect(await saveTalentButton.isDisabled())
      .withContext('saveTalentButton should be enabled after choosing all talents')
      .toBeFalse();

    await saveTalentButton.click();
    await nextStep.click();
    expect(await talentsStep.isCompleted()).toBeTrue();

    /*---------------------------------------------------------------------------------------
     * 7 step - Choose Skills
     *---------------------------------------------------------------------------------------*/
    const skillList: MatCardHarness = await skillStep.getHarness(
      MatCardHarness.with({ selector: '[right-column]' })
    );

    const skills: MatSelectHarness[] = await skillList.getAllHarnesses(MatSelectHarness);

    expect(skills.length).toBe(1);

    await skills[0].open();
    const skillOptions: MatOptionHarness[] = await skills[0].getOptions();
    const skillValues: string[] = await parallel(() =>
      skillOptions.map(option => option.getText())
    );
    expect(skillValues.join(',')).toBe('Commerce,Medicae');
    await skills[0].clickOptions({ text: 'Medicae' });

    const saveSkillButton: MatButtonHarness = await skillList.getHarness(MatButtonHarness);
    expect(await saveSkillButton.isDisabled())
      .withContext('saveSkillButton should be enabled after choosing all skills')
      .toBeFalse();

    await saveSkillButton.click();
    await nextStep.click();
    expect(await skillStep.isCompleted()).toBeTrue();

    /*---------------------------------------------------------------------------------------
     * 8 step - Choose Equpiment
     *---------------------------------------------------------------------------------------*/
    const equipmentList: MatCardHarness = await equipmentStep.getHarness(
      MatCardHarness.with({ selector: '[right-column]' })
    );

    const equipment: MatSelectHarness[] = await equipmentList.getAllHarnesses(MatSelectHarness);

    expect(equipment.length).toBe(1);

    await equipment[0].open();
    const eqOptions: MatOptionHarness[] = await equipment[0].getOptions();
    const eqValues: string[] = await parallel(() => eqOptions.map(option => option.getText()));
    expect(eqValues.join(',')).toBe('Laspistol,Stub Automatic');
    await equipment[0].clickOptions({ text: 'Laspistol' });

    const saveEquButton: MatButtonHarness = await equipmentList.getHarness(MatButtonHarness);
    expect(await saveEquButton.isDisabled())
      .withContext('saveEquButton should be enabled after choosing all equipment')
      .toBeFalse();

    await saveEquButton.click();
    await nextStep.click();
    expect(await equipmentStep.isCompleted()).toBeTrue();

    /*---------------------------------------------------------------------------------------
     * 9 step - Determine Wounds and Fate
     *---------------------------------------------------------------------------------------*/
    const woundsAndFateCard: MatCardHarness = await woundsAndFateStep.getHarness(
      MatCardHarness.with({ selector: '[right-column]' })
    );
    const [woundsButton, fateButton]: MatButtonHarness[] = await woundsAndFateCard.getAllHarnesses(
      MatButtonHarness
    );

    await woundsButton.click();
    await fateButton.click();

    rollLoggerItems = await rollLogger.getAllHarnesses(MatListItemHarness);
    rollLoggerMessages = await parallel(() => rollLoggerItems.map(roll => roll.getSecondaryText()));

    expect(rollLoggerMessages.length)
      .withContext('rolls logger should has 13 entries at this step')
      .toBe(13);

    await nextStep.click();
    expect(await woundsAndFateStep.isCompleted()).toBeTrue();
    /*---------------------------------------------------------------------------------------
     * 10 step - Determine Wounds and Fate
     *---------------------------------------------------------------------------------------*/
    const divinationCard: MatCardHarness = await divinationStep.getHarness(
      MatCardHarness.with({ selector: '[right-column]' })
    );
    const buttons: MatButtonHarness[] = await divinationCard.getAllHarnesses(MatButtonHarness);
    expect(buttons.length).withContext('divination card should has only one button').toBe(1);

    await buttons[0].click();

    rollLoggerItems = await rollLogger.getAllHarnesses(MatListItemHarness);
    rollLoggerMessages = await parallel(() => rollLoggerItems.map(roll => roll.getSecondaryText()));
    expect(rollLoggerMessages.length)
      .withContext(
        'After attribute initialization, and wound,and fate, and divination rolls logger should has 14 entries'
      )
      .toBe(14);

    /*---------------------------------------------------------------------------------------
     * 11 step - Fill final details and save chracter
     *---------------------------------------------------------------------------------------*/
    const finalCard: MatCardHarness = await finalStep.getHarness(
      MatCardHarness.with({ selector: '[right-column]' })
    );

    const saveDetailsButton: MatButtonHarness = await finalCard.getHarness(MatButtonHarness);
    const [nameInput, ageInput]: MatInputHarness[] = await finalCard.getAllHarnesses(
      MatInputHarness
    );

    await nameInput.setValue('Imperator');
    await ageInput.setValue('987');
    expect(await saveDetailsButton.getText()).toBe('Save Character Details');
    await saveDetailsButton.click();

    const saveCharacter: MatButtonHarness = await finalStep.getHarness(
      MatButtonHarness.with({ text: 'Save character' })
    );
    await saveCharacter.click();

    const dialog: MatDialogHarness = await rootLoader.getHarness(MatDialogHarness);
    const input: MatInputHarness = await dialog.getHarness(MatInputHarness);
    await input.setValue('Khorne');
    const dialogSaveButton: MatButtonHarness = await dialog.getHarness(
      MatButtonHarness.with({ selector: '[name="save"]' })
    );
    await dialogSaveButton.click();

    const savedCharacterStringified: string | null = localStorage.getItem('dhii+Khorne');
    expect(savedCharacterStringified).toBeTruthy();
  });
});
