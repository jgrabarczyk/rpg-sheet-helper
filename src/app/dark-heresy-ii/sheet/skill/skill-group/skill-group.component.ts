import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { DHII_Skill, DHII_SkillLevel, DHII_SkillName, DHII_Skills } from '@dhii/types/dhii-skill';
import { Roll } from '@appTypes/roll';

import { SkillComponent } from '../skill.component';

@Component({
    selector: 'app-skill-group',
    imports: [MatDividerModule, MatListModule, MatCardModule, SkillComponent],
    templateUrl: './skill-group.component.html',
    styleUrl: './skill-group.component.scss'
})
export class SkillGroupComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() skills!: DHII_Skills;
  @Input() editable: boolean = false;
  @Input() step: number = 5;

  @Output() updateSkill = new EventEmitter<DHII_Skill>();
  @Output() roll = new EventEmitter<Roll>();

  protected decrease(name: DHII_SkillName): void {
    const skillLevel: DHII_SkillLevel = this.skills.get(name)!.lvl;

    if (skillLevel.current <= 0) {
      alert('alredy lowest');
      return;
    }

    skillLevel.current--;
    this.updateSkill.next(this.skills.get(name)!);
  }

  protected increase(name: DHII_SkillName): void {
    const skillLevel: DHII_SkillLevel = this.skills.get(name)!.lvl;

    if (skillLevel.current >= skillLevel.max) {
      alert('already maxed');
      return;
    }

    skillLevel.current++;
    this.updateSkill.next(this.skills.get(name)!);
  }

  protected rollDice(name: DHII_SkillName, modifier: number): void {
    const skillLevel: DHII_Skill = this.skills.get(name)!;
    const value: number = skillLevel.value + modifier;

    //make sure there is always 1% chance to success
    const chance: number = value <= 1 ? 1 : value;

    this.roll.emit({ name: skillLevel.name, chance });
  }
}
