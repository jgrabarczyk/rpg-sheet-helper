import { DHII_CreatorService } from './../dark-heresy-ii/dark-heresy-ii-creator/dhii-creator.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DHII_SheetService } from '../dark-heresy-ii/service/dhii-sheet.service';
import { Characteristic } from '../types/characteristic';
import { AttributesGroupComponent } from '../dark-heresy-ii/partials/attributes-group/attributes-group.component';
import { AptitudesGroupComponent } from '../dark-heresy-ii/sheet/aptitude/aptitudes-group.component';
import { SheetHeaderComponent } from '../dark-heresy-ii/sheet/sheet-header/sheet-header.component';
import { Roll } from '../types/roll';
import { DHII_Attribute } from '../dark-heresy-ii/types/dhii-attribute';
import { DHII_Skill } from '../dark-heresy-ii/types/dhii-skill';
import { SkillGroupComponent } from '../dark-heresy-ii/sheet/skill/skill-group/skill-group.component';
import { rollTest } from '../utility/roll';
import { MainNavigationComponent } from "../shared/main-navigation/main-navigation.component";

@Component({
  selector: 'app-sheet',
  standalone: true,
  imports: [
    AttributesGroupComponent,
    CommonModule,
    SkillGroupComponent,
    AptitudesGroupComponent,
    SheetHeaderComponent,
    MainNavigationComponent
],
  templateUrl: './sheet.component.html',
  styleUrl: './sheet.component.scss'
})
export class SheetComponent {
  step = 5;
  editable = false;
  protected sheetService = inject(DHII_SheetService);
  protected creatorService = inject(DHII_CreatorService);

  updateAttribute(attribute: Characteristic) {
    this.sheetService.updateAttribute(attribute as DHII_Attribute);
  }

  updateSkill(skill: DHII_Skill) {
    this.sheetService.updateSkill(skill);
  }

  rollDice(roll: Roll) {
    rollTest(roll);
  }
}
