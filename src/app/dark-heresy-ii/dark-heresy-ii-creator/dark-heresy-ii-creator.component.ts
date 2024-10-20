import { DHII_Homeworld, DHII_HomeworldNames } from '../types/dhii-homeworlds';
import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { HomeworldCardComponent } from '../homeworld-card/homeworld-card.component';
import { MatStepper } from '@angular/material/stepper';
import { BackgroundCardComponent } from '../background-card/background-card.component';
import { DHII_Background, DHII_BackgroundNames } from '../types/dhii-background';
import { RoleCardComponent } from '../role-card/role-card.component';
import { DHII_Role, DHII_RoleNames } from '../types/dhii-role';
import { AttributesGroupComponent } from '../sheet/attribute/attributes-group/attributes-group.component';
import { DHII_AttributeName } from '../types/dhii-attribute';
import { Roll } from '../../types/roll';
import { AptitudesGroupComponent } from "../sheet/aptitude/aptitudes-group.component";
import {MatSelectModule} from '@angular/material/select'; 
import { DHII_CreatorService } from './dhii-creator.service';
import { DHII_SheetService } from '../service/dhii-sheet.service';
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
    MatSelectModule
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

  chooseHomeworld([, homeworld]: [DHII_HomeworldNames, DHII_Homeworld]) {
    this.creatorService.setHomeworld(homeworld);
    this.stepper?.next();
  }

  chooseBackground([, background]: [DHII_BackgroundNames, DHII_Background]) {
    this.creatorService.setBackground(background);
    this.stepper?.next();
  }
  chooseRole([, role]: [DHII_RoleNames, DHII_Role]) {
    this.creatorService.setRole(role);
    this.stepper?.next();
  }

  generateAttributes() {
    this.creatorService.generateAttributes();
  }

  reroll(roll: Roll) {
    this.creatorService.rerollAttribute(roll.name as DHII_AttributeName);
  }
}
