import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MainNavigationComponent } from "../../shared/main-navigation/main-navigation.component";
import { RollLogerComponent } from "../../shared/roll/roll-loger/roll-loger.component";
import { Roll } from '../../types/roll';
import {
  DHII_Aptitude,
  DHII_CharacterBackground,
  DHII_CharacterHomeworld,
  DHII_CharacterRole
} from '../types/dark-heresy-ii';
import { DHII_AttributeName } from '../types/dhii-attribute';
import { DHII_SkillName } from '../types/dhii-skill';
import { DHII_TalentName } from '../types/dhii-talents';
import { AptitudeStepComponent } from './aptitude-step/aptitude-step.component';
import { AttributeStepComponent } from './attribute-step/attribute-step.component';
import { BackgroundStepComponent } from './background-step/background-step.component';
import { DHII_CreatorService } from './dhii-creator.service';
import { DivinationStepComponent } from './divination-step/divination-step.component';
import { EquipmentStepComponent } from './equipment-step/equipment-step.component';
import { HomeworldStepComponent } from './homeworld-step/homeworld-step.component';
import { RoleStepComponent } from './role-step/role-step.component';
import { SkillStepComponent } from './skill-step/skill-step.component';
import { TalentStepComponent } from './talent-step/talent-step.component';
import { WoundsAndFateStepComponent } from "./wounds-and-fate-step/wounds-and-fate-step.component";

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
    RollLogerComponent
],
  templateUrl: './dark-heresy-ii-creator.component.html',
  styleUrl: './dark-heresy-ii-creator.component.scss'
})
export class DarkHeresyIICreatorComponent implements OnInit {
  @ViewChild('stepper') stepper?: MatStepper;

  protected creatorService: DHII_CreatorService = inject(DHII_CreatorService);

  ngOnInit(){
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

  rerollAttribute(roll: Roll) {
    this.creatorService.rerollAttribute(roll.name as DHII_AttributeName);
  }

  resetStepperAndCreationService() {
    this.stepper?.reset();
    this.creatorService.resetAll();
  }

  save() {
    this.creatorService.saveCharacter();
  }
}
