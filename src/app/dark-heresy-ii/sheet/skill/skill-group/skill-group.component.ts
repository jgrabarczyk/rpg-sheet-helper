import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { Roll } from '../../../../types/roll';
import { DHII_SkillName, DHII_Skill, DHII_SkillLevel } from '../../../types/dhii-skill';
import { SkillComponent } from '../skill.component';

@Component({
  selector: 'app-skill-group',
  standalone: true,
  imports: [MatDividerModule, MatListModule, MatCardModule, SkillComponent],
  templateUrl: './skill-group.component.html',
  styleUrl: './skill-group.component.scss'
})
export class SkillGroupComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() skills: Map<DHII_SkillName, DHII_Skill> = new Map();
  @Input() editable: boolean = false;
  @Input() step: number = 5;

  @Output() updateSkill = new EventEmitter<DHII_Skill>();
  @Output() roll = new EventEmitter<Roll>();

  decrease(name: DHII_SkillName): void {
    const lvl: DHII_SkillLevel = this.skills.get(name)!.lvl;

    if (lvl.current <= 0) {
      alert('alredy lowest');
      return;
    }

    lvl.current--;
    this.updateSkill.next(this.skills.get(name)!);
  }

  increase(name: DHII_SkillName): void {
    const lvl: DHII_SkillLevel = this.skills.get(name)!.lvl;

    if (lvl.current >= lvl.max) {
      alert('already maxed');
      return;
    }

    lvl.current++;
    this.updateSkill.next(this.skills.get(name)!);
  }

  rollDice(name: DHII_SkillName, modifier: number): void {
    const skill: DHII_Skill = this.skills.get(name)!;
    const value: number = skill.value + modifier;
    //make sure there is always 1% chance to success
    const chance: number =  value <= 1 ? 1 : value;
    
    this.roll.emit({ name: skill.name, chance });
  }
}
