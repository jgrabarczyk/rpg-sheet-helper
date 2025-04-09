import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { HomeworldCardComponent } from '../homeworld-card/homeworld-card.component';
import { MatStepper } from '@angular/material/stepper';
import { BackgroundCardComponent } from '../background-card/background-card.component';
import { RoleCardComponent } from '../role-card/role-card.component';
import { AttributesGroupComponent } from '../sheet/attribute/attributes-group/attributes-group.component';
import { DHII_AttributeName } from '../types/dhii-attribute';
import { Roll } from '../../types/roll';
import { AptitudesGroupComponent } from '../sheet/aptitude/aptitudes-group.component';
import { DHII_CreatorService } from './dhii-creator.service';
import { DHII_SheetService } from '../service/dhii-sheet.service';
import { HomeworldStepComponent } from './homeworld-step/homeworld-step.component';
import { BackgroundStepComponent } from './background-step/background-step.component';
import { RoleStepComponent } from './role-step/role-step.component';
import { AttributeStepComponent } from './attribute-step/attribute-step.component';
import {
  DHII_Aptitude,
  DHII_CharacterBackground,
  DHII_CharacterHomeworld,
  DHII_CharacterRole
} from '../types/dark-heresy-ii';
import { AptitudeStepComponent } from './aptitude-step/aptitude-step.component';
import { SkillStepComponent } from './skill-step/skill-step.component';
import { EquipmentStepComponent } from './equipment-step/equipment-step.component';
import { DivinationStepComponent } from './divination-step/divination-step.component';
import { StepNavigationComponent } from './step-navigation/step-navigation.component';
import { TalentStepComponent } from './talent-step/talent-step.component';
import { MatCardModule } from '@angular/material/card';
import { MainNavigationComponent } from "../../shared/main-navigation/main-navigation.component";
@Component({
  selector: 'app-dark-heresy-ii-creator',
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    MatCardModule,
    HomeworldCardComponent,
    BackgroundCardComponent,
    RoleCardComponent,
    AttributesGroupComponent,
    AptitudesGroupComponent,
    HomeworldStepComponent,
    BackgroundStepComponent,
    RoleStepComponent,
    AttributeStepComponent,
    AptitudeStepComponent,
    SkillStepComponent,
    EquipmentStepComponent,
    DivinationStepComponent,
    StepNavigationComponent,
    TalentStepComponent,
    MainNavigationComponent
],
  templateUrl: './dark-heresy-ii-creator.component.html',
  styleUrl: './dark-heresy-ii-creator.component.scss'
})
export class DarkHeresyIICreatorComponent {
  protected sheetService: DHII_SheetService = inject(DHII_SheetService);
  protected creatorService: DHII_CreatorService = inject(DHII_CreatorService);
  @ViewChild('stepper') stepper?: MatStepper;

  chooseHomeworld(homeworld: DHII_CharacterHomeworld) {
    this.creatorService.setHomeworld(homeworld);
  }

  chooseBackground(background: DHII_CharacterBackground) {
    this.creatorService.setBackground(background);
  }

  chooseAptitudes(aptitudes: DHII_Aptitude[]) {
    this.creatorService.setAptitudes(aptitudes);
  }

  chooseRole(role: DHII_CharacterRole) {
    this.creatorService.setRole(role);
  }

  generateAttributes() {
    this.creatorService.setAttributes();
  }

  reroll(roll: Roll) {
    this.creatorService.rerollAttribute(roll.name as DHII_AttributeName);
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

  resetAll() {
    this.stepper?.reset();
    // this.creatorService.reset();
  }

  save() {
    console.log('save');
  }
}
