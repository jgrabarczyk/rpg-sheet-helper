import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DHII_SheetService } from '../dark-heresy-ii/service/dhii-sheet.service';
import { DHII_Attribute, DHII_Skill } from '../dark-heresy-ii/types/dark-heresy-ii';
import { Characteristic } from '../types/characteristic';
import { AttributesGroupComponent } from './attributes-group/attributes-group.component';

@Component({
  selector: 'app-sheet',
  standalone: true,
  imports: [AttributesGroupComponent, CommonModule],
  templateUrl: './sheet.component.html',
  styleUrl: './sheet.component.scss',
})
export class SheetComponent {
  protected sheetService = inject(DHII_SheetService)

  updateAttribute(attribute: Characteristic){
    this.sheetService.updateAttribute(attribute as DHII_Attribute)
  }
  
  updateSkill(skill: Characteristic){
    console.log("🚀 ~ SheetComponent ~ updateSkill ~ skill:", skill)
    this.sheetService.changeSkill(skill as DHII_Skill)
  }
}
