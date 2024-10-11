import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { SkillComponent } from '../sheet/skill/skill.component';
import { DHII_Skill, DHII_SkillLevel } from '../types/dark-heresy-ii';
import { Roll } from '../../types/roll';

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
  @Input() skills: DHII_Skill[] = [];
  @Input() editable: boolean = false;
  @Input() step: number = 5;

  @Output() updateSkill = new EventEmitter<DHII_Skill>();
  @Output() roll = new EventEmitter<Roll>();

  decrease(index: number): void {
    const lvl: DHII_SkillLevel = this.skills[index].lvl;

    if (lvl.current <= 0) {
      alert('alredy lowest');
      return;
    }

    lvl.current--;
    this.updateSkill.next(this.skills[index]);
  }

  increase(index: number): void {
    const lvl: DHII_SkillLevel = this.skills[index].lvl;

    if (lvl.current >= lvl.max) {
      alert('already maxed');
      return;
    }

    lvl.current++;
    this.updateSkill.next(this.skills[index]);
  }

  rollDice(index: number, modifier: number): void {
    const skill: DHII_Skill = this.skills[index];
    const value: number = skill.value + modifier;

    this.roll.emit({ name: skill.name, value: value <= 1 ? 1 : value });
  }
}
