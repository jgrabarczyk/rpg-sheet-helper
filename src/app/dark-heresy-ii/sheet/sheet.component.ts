import { DHII_CreatorService } from '../dark-heresy-ii-creator/dhii-creator.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { Characteristic } from '@appTypes/characteristic';
import { Roll } from '@appTypes/roll';

import { AttributesGroupComponent } from '@dhii/partials/attributes-group/attributes-group.component';
import { DHII_Attribute } from '@dhii/types/dhii-attribute';
import { DHII_Skill } from '@dhii/types/dhii-skill';

import { MainNavigationComponent } from '@shared/main-navigation/main-navigation.component';
import { RollService } from '@shared/roll/roll-service';

import { DHII_SheetService } from '../service/dhii-sheet.service';
import { AptitudesGroupComponent } from './aptitude/aptitudes-group.component';
import { SheetHeaderComponent } from './sheet-header/sheet-header.component';
import { SkillGroupComponent } from './skill/skill-group/skill-group.component';
import { TalentsGroupComponent } from "./talents-group/talents-group.component";
import { EquipmentComponent } from "./equipment/equipment.component";

@Component({
  selector: 'app-sheet',
  standalone: true,
  imports: [
    AttributesGroupComponent,
    CommonModule,
    SkillGroupComponent,
    AptitudesGroupComponent,
    SheetHeaderComponent,
    MainNavigationComponent,
    TalentsGroupComponent,
    EquipmentComponent
],
  templateUrl: './sheet.component.html',
  styleUrl: './sheet.component.scss'
})
export class SheetComponent {
  step = 5;
  editable = false;
  protected sheetService = inject(DHII_SheetService);
  protected creatorService = inject(DHII_CreatorService);
  protected rollService = inject(RollService);

  updateAttribute(attribute: Characteristic) {
    this.sheetService.updateAttribute(attribute as DHII_Attribute);
  }

  updateSkill(skill: DHII_Skill) {
    this.sheetService.updateSkill(skill);
  }

  rollDice(roll: Roll) {
    this.rollService.rollTest(roll);
  }
}
