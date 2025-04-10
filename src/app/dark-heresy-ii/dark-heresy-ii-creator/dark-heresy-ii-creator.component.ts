import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';

import { MainNavigationComponent } from '@shared/main-navigation/main-navigation.component';
import { RollLogerComponent } from '@shared/roll/roll-loger/roll-loger.component';
import { Roll } from '@appTypes/roll';
import {
  DHII_Aptitude,
  DHII_CharacterBackground,
  DHII_CharacterDetails,
  DHII_CharacterHomeworld,
  DHII_CharacterRole
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
  standalone: true,
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
    MainNavigationComponent,
    WoundsAndFateStepComponent,
    RollLogerComponent,
    FinalDetailsStepComponent
  ],
  templateUrl: './dark-heresy-ii-creator.component.html',
  styleUrl: './dark-heresy-ii-creator.component.scss'
})
export class DarkHeresyIICreatorComponent implements OnInit {
  @ViewChild('stepper') stepper?: MatStepper;

  protected creatorService: DHII_CreatorService = inject(DHII_CreatorService);

  ngOnInit() {
    this.resetStepperAndCreationService();
  }

  setHomeworld(homeworld: DHII_CharacterHomeworld) {
    this.creatorService.setHomeworld(homeworld);
  }

  setBackground(background: DHII_CharacterBackground) {
    this.creatorService.setBackground(background);
  }

  setAptitudes(aptitudes: DHII_Aptitude[]) {
    this.creatorService.setAptitudes(aptitudes);
  }

  setRole(role: DHII_CharacterRole) {
    this.creatorService.setRole(role);
  }

  setTalents(talents: DHII_TalentName[]) {
    this.creatorService.setTalents(talents);
  }

  setSkills(skills: DHII_SkillName[]) {
    this.creatorService.setSkills(skills);
  }

  setWounds() {
    this.creatorService.setWounds();
  }

  setFate() {
    this.creatorService.setFate();
  }

  setDivination() {
    this.creatorService.setDivination();
  }

  setAttributes() {
    this.creatorService.setAttributes();
  }
  
  setCharacterDetails(details:DHII_CharacterDetails) {
    this.creatorService.setCharacterDetails(details);
  }

  rerollAttribute(roll: Roll) {
    this.creatorService.rerollAttribute(roll.name as DHII_AttributeName);
  }

  resetStepperAndCreationService() {
    this.stepper?.reset();
    this.creatorService.resetAll();
  }

  saveCharacter(saveName:string){
    this.creatorService.saveCharacterToLocalStorage(saveName)
  }
}
