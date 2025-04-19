import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Characteristic } from '@appTypes/characteristic';
import { Roll } from '@appTypes/roll';

import { AttributesGroupComponent } from '@dhii/partials/attributes-group/attributes-group.component';
import { DHII_Attribute } from '@dhii/types/dhii-attribute';
import { DHII_Equipment } from '@dhii/types/items/generic-item';
import { DHII_Skill } from '@dhii/types/dhii-skill';

import { RollService } from '@shared/roll/roll-service';

import { AptitudesGroupComponent } from './aptitude/aptitudes-group.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { DHII_SheetService } from '../service/dhii-sheet.service';
import { SheetHeaderComponent } from './sheet-header/sheet-header.component';
import { SkillGroupComponent } from './skill/skill-group/skill-group.component';
import { TalentsGroupComponent } from './talents-group/talents-group.component';

@Component({
  selector: 'app-sheet',
  standalone: true,
  imports: [
    AttributesGroupComponent,
    CommonModule,
    SkillGroupComponent,
    AptitudesGroupComponent,
    SheetHeaderComponent,
    TalentsGroupComponent,
    EquipmentComponent
  ],
  templateUrl: './sheet.component.html',
  styleUrl: './sheet.component.scss'
})
export class SheetComponent implements OnInit {
  private sheetService = inject(DHII_SheetService);
  private rollService = inject(RollService);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  protected character$ = this.sheetService.character$;
  protected editable = false;

  ngOnInit() {
    this.loadCharacter();
  }

  addEquipment(eq: DHII_Equipment) {
    this.sheetService.addEquipment(eq);
  }
  
  deleteCharacter() {
    this.sheetService.deleteCurrentCharacter();
  }

  updateAttribute(attribute: Characteristic) {
    this.sheetService.updateAttribute(attribute as DHII_Attribute);
  }

  updateSkill(skill: DHII_Skill) {
    this.sheetService.updateSkill(skill);
  }

  rollDice(roll: Roll) {
    this.rollService.rollTest(roll);
  }
  
  saveCharacter() {
    this.sheetService.saveCharacterToLocalStorage();
  }


  private loadCharacter() {
    this.activatedRoute.params.subscribe(params => {
      const saveName: string = params['saveName'];
      saveName
        ? this.sheetService.loadCharacterFromLocalStorage(saveName, true)
        : this.sheetService.loadCurrentCharacter();
    });
  }
}
