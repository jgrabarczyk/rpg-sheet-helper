import { CommonModule } from '@angular/common';
import { Component, inject, viewChild, AfterViewInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';

import { RollLogerComponent } from '@shared/roll/roll-loger/roll-loger.component';
import { Roll } from '@appTypes/roll';
import {
  DHII_Aptitude,
  DHII_CharacterBackground,
  DHII_CharacterDetails,
  DHII_CharacterHomeworld,
  DHII_CharacterRole,
} from '../types/dark-heresy-ii';
import { DHII_AttributeName } from '../types/dhii-attribute';
import { DHII_SkillName } from '../types/dhii-skill';
import { DHII_TalentName } from '../types/dhii-talents';
import { AptitudeStepComponent } from './steps/aptitude-step/aptitude-step.component';
import { AttributeStepComponent } from './steps/attribute-step/attribute-step.component';
import { BackgroundStepComponent } from './steps/background-step/background-step.component';
import { DivinationStepComponent } from './steps/divination-step/divination-step.component';
import { EquipmentStepComponent } from './steps/equipment-step/equipment-step.component';
import { HomeworldStepComponent } from './steps/homeworld-step/homeworld-step.component';
import { RoleStepComponent } from './steps/role-step/role-step.component';
import { SkillStepComponent } from './steps/skill-step/skill-step.component';
import { TalentStepComponent } from './steps/talent-step/talent-step.component';
import { WoundsAndFateStepComponent } from './steps/wounds-and-fate-step/wounds-and-fate-step.component';
import { FinalDetailsStepComponent } from './steps/final-details-step/final-details-step.component';
import { DHII_CreatorService } from './dhii-creator.service';

@Component({
  selector: 'app-dark-heresy-ii-creator',
  imports: [
    CommonModule,
    MatStepperModule,
    MatCardModule,
    HomeworldStepComponent,
    BackgroundStepComponent,
    RoleStepComponent,
    AttributeStepComponent,
    AptitudeStepComponent,
    SkillStepComponent,
    EquipmentStepComponent,
    DivinationStepComponent,
    TalentStepComponent,
    WoundsAndFateStepComponent,
    RollLogerComponent,
    FinalDetailsStepComponent,
  ],
  templateUrl: './dark-heresy-ii-creator.component.html',
  styleUrl: './dark-heresy-ii-creator.component.scss',
})
export class DarkHeresyIICreatorComponent implements AfterViewInit {
  readonly stepper = viewChild.required<MatStepper>('stepper');

  protected creatorService: DHII_CreatorService = inject(DHII_CreatorService);

  public ngAfterViewInit() {
    this.resetStepperAndCreationService();
  }

  protected setHomeworld(homeworld: DHII_CharacterHomeworld): void {
    this.creatorService.setHomeworld(homeworld);
  }

  protected setBackground(background: DHII_CharacterBackground): void {
    this.creatorService.setBackground(background);
  }

  protected setAptitudes(aptitudes: DHII_Aptitude[]): void {
    this.creatorService.setAptitudes(aptitudes);
  }

  protected setRole(role: DHII_CharacterRole): void {
    this.creatorService.setRole(role);
  }

  protected setTalents(talents: DHII_TalentName[]): void {
    this.creatorService.setTalents(talents);
  }

  protected setSkills(skills: DHII_SkillName[]): void {
    this.creatorService.setSkills(skills);
  }

  protected setWounds(): void {
    this.creatorService.setWounds();
  }

  protected setFate(): void {
    this.creatorService.setFate();
  }

  protected setDivination(): void {
    this.creatorService.setDivination();
  }

  protected setEquipment(eq: string[]): void {
    this.creatorService.setEquipment(eq);
  }

  protected setAttributes(): void {
    this.creatorService.setAttributes();
  }

  protected setCharacterDetails(details: DHII_CharacterDetails): void {
    this.creatorService.setCharacterDetails(details);
  }

  protected rerollAttribute(roll: Roll): void {
    this.creatorService.rerollAttribute(roll.name as DHII_AttributeName);
  }

  protected resetStepperAndCreationService(): void {
    this.stepper().reset();
    this.creatorService.resetAll();
  }

  protected saveCharacterCreatorData(): void {
    this.creatorService.saveCharacterToLocalStorage();
  }
}
