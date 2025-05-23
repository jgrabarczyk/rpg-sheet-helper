import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Characteristic } from '@appTypes/characteristic';
import { Roll } from '@appTypes/roll';

import { AttributesGroupComponent } from '@dhii/partials/attributes-group/attributes-group.component';
import { DHII_Attribute } from '@dhii/types/dhii-attribute';
import { DHII_Skill } from '@dhii/types/dhii-skill';

import { RollService } from '@shared/roll/roll.service';

import { AptitudesGroupComponent } from './aptitude/aptitudes-group.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { DHII_SheetService } from '../service/dhii-sheet.service';
import { SheetHeaderComponent } from './sheet-header/sheet-header.component';
import { SkillGroupComponent } from './skill/skill-group/skill-group.component';
import { TalentsGroupComponent } from './talents-group/talents-group.component';
import { DHII_Equipment } from '@dhii/types/items/generic-item';
import { RollLogerComponent } from '../../shared/roll/roll-loger/roll-loger.component';

@Component({
  selector: 'app-sheet',
  imports: [
    AttributesGroupComponent,
    CommonModule,
    SkillGroupComponent,
    AptitudesGroupComponent,
    SheetHeaderComponent,
    TalentsGroupComponent,
    EquipmentComponent,
    RollLogerComponent,
  ],
  templateUrl: './sheet.component.html',
  styleUrl: './sheet.component.scss',
})
export class SheetComponent implements OnInit {
  private sheetService = inject(DHII_SheetService);
  private rollService = inject(RollService);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  protected character$ = this.sheetService.character$;
  protected editable = false;

  public ngOnInit() {
    this.loadCharacter();
  }

  protected addEquipment(eq: DHII_Equipment): void {
    this.sheetService.addEquipment(eq);
  }

  protected deleteCharacter(): void {
    this.sheetService.deleteCurrentCharacter();
  }

  protected updateAttribute(attribute: Characteristic): void {
    this.sheetService.updateAttribute(attribute as DHII_Attribute);
  }

  protected updateSkill(skill: DHII_Skill): void {
    this.sheetService.updateSkill(skill);
  }

  protected rollDice(roll: Roll): void {
    this.rollService.rollTest(roll);
  }

  protected saveCharacter(): void {
    this.sheetService.saveCharacterToLocalStorage();
  }

  private loadCharacter(): void {
    this.activatedRoute.params.subscribe(params => {
      const saveName: string = params['saveName'];
      saveName
        ? this.sheetService.loadCharacterFromLocalStorage(saveName, true)
        : this.sheetService.loadCurrentCharacter();
    });
  }
}
