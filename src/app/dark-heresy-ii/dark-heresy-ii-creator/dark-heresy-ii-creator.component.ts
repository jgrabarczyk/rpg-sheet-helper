import { DHII_Homeworld } from '../types/dhii-homeworlds';
import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { HomeworldCardComponent } from '../homeworld-card/homeworld-card.component';
import { MatStepper } from '@angular/material/stepper';
import { BackgroundCardComponent } from '../background-card/background-card.component';
import { DHII_Background } from '../types/dhii-background';
import { RoleCardComponent } from '../role-card/role-card.component';
import { DHII_Role } from '../types/dhii-role';
import { AttributesGroupComponent } from '../sheet/attribute/attributes-group/attributes-group.component';
import { DHII_AttributeName } from '../types/dhii-attribute';
import { Roll } from '../../types/roll';
import { AptitudesGroupComponent } from '../sheet/aptitude/aptitudes-group.component';
import { MatSelectModule } from '@angular/material/select';
import { DHII_CreatorService } from './dhii-creator.service';
import { DHII_SheetService } from '../service/dhii-sheet.service';
import { HomeworldStepComponent } from './homeworld-step/homeworld-step.component';
import { BackgroundStepComponent } from './background-step/background-step.component';
import { RoleStepComponent } from './role-step/role-step.component';
import { AttributeStepComponent } from "./attribute-step/attribute-step.component";
import { DHII_Aptitude } from '../types/dark-heresy-ii';
import { AptitudeStepComponent } from './aptitude-step/aptitude-step.component';
import { SkillStepComponent } from "./skill-step/skill-step.component";
import { EquipmentStepComponent } from "./equipment-step/equipment-step.component";
import { DivinationStepComponent } from "./divination-step/divination-step.component";
import { StepFooterComponent } from "./step-footer/step-footer.component";
import { TelentStepComponent } from "./telent-step/telent-step.component";
@Component({
  selector: 'app-dark-heresy-ii-creator',
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HomeworldCardComponent,
    BackgroundCardComponent,
    RoleCardComponent,
    AttributesGroupComponent,
    AptitudesGroupComponent,
    MatSelectModule,
    HomeworldStepComponent,
    BackgroundStepComponent,
    RoleStepComponent,
    AttributeStepComponent,
    AptitudeStepComponent,
    SkillStepComponent,
    EquipmentStepComponent,
    DivinationStepComponent,
    StepFooterComponent,
    TelentStepComponent
],
  templateUrl: './dark-heresy-ii-creator.component.html',
  styleUrl: './dark-heresy-ii-creator.component.scss'
})
export class DarkHeresyIICreatorComponent {
  protected sheetService: DHII_SheetService = inject(DHII_SheetService);
  protected creatorService: DHII_CreatorService = inject(DHII_CreatorService);
  @ViewChild('stepper') stepper?: MatStepper;

  firstFormGroup: FormGroup = new FormGroup({
    firstCtrl: new FormControl()
  });
  secondFormGroup: FormGroup = new FormGroup({
    secondCtrl: new FormControl()
  });
  thirdFormGroup: FormGroup = new FormGroup({
    thirdCtrl: new FormControl()
  });

  chooseHomeworld(homeworld: DHII_Homeworld) {
    this.creatorService.setHomeworld(homeworld);
    this.stepper?.next();
  }

  chooseBackground(background: DHII_Background) {
    this.creatorService.setBackground(background);
    this.stepper?.next();
  }

  chooseAptitudes(aptitudes: DHII_Aptitude[]) {
    this.creatorService.setAptitudes(aptitudes);
    this.stepper?.next();
  }

  chooseRole(role: DHII_Role) {
    this.creatorService.setRole(role);
    this.stepper?.next();
  }

  generateAttributes() {
    this.creatorService.generateAttributes();
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
}
