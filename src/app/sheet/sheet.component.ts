import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DHII_SheetService } from '../dark-heresy-ii/service/dhii-sheet.service';
import { DHII_Attribute, DHII_Skill } from '../dark-heresy-ii/types/dark-heresy-ii';
import { Characteristic } from '../types/characteristic';
import { AttributesGroupComponent } from '../dark-heresy-ii/sheet/attribute/attributes-group/attributes-group.component';
import { SkillGroupComponent } from '../dark-heresy-ii/skill-group/skill-group.component';
import {
  AptitudesGroupComponent
} from '../dark-heresy-ii/sheet/aptitude/aptitudes-group.component';
import { SheetHeaderComponent } from "../dark-heresy-ii/sheet/sheet-header/sheet-header.component";
import { Roll } from '../types/roll';

@Component({
  selector: 'app-sheet',
  standalone: true,
  imports: [
    AttributesGroupComponent,
    CommonModule,
    SkillGroupComponent,
    AptitudesGroupComponent,
    SheetHeaderComponent
],
  templateUrl: './sheet.component.html',
  styleUrl: './sheet.component.scss'
})
export class SheetComponent {

  step = 5;
  editable = false;
  protected sheetService = inject(DHII_SheetService);

  updateAttribute(attribute: Characteristic) {
    this.sheetService.updateAttribute(attribute as DHII_Attribute);
  }

  updateSkill(skill: DHII_Skill) {
    this.sheetService.updateSkill(skill);
  }

  rollDice(roll: Roll){
    console.log("🚀 ~ SheetComponent ~ rollDice ~ roll:", roll)
    this.sheetService.rollDice(roll)
  }
}
