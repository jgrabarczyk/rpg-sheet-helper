import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DHII_SkillName } from '../../types/dhii-skill';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { TwoColumnStepComponent } from '../two-column-step/two-column-step.component';
import { MatListModule } from '@angular/material/list';
import { FormArray, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DynamicListComponent } from '../dynamic-list/dynamic-list.component';

@Component({
  selector: 'app-skill-step',
  standalone: true,
  imports: [
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    ReactiveFormsModule,
    TwoColumnStepComponent,
    DynamicListComponent
  ],
  templateUrl: './skill-step.component.html',
  styleUrl: './skill-step.component.scss'
})
export class SkillStepComponent {
  @Input() valid: boolean = false;
  @Input() skills: DHII_SkillName[] = [];
  @Input() set skillsToPick(talentsToPick: DHII_SkillName[][]) {
    this.skillsToChoose = talentsToPick;
    this.skillsToChoose.forEach(() => this.form.push(new FormControl(null, Validators.required)));
    this.valid = !this.skillsToChoose.length;
  }
  @Output() updateSkills: EventEmitter<DHII_SkillName[]> = new EventEmitter<DHII_SkillName[]>();

  protected skillsToChoose: DHII_SkillName[][] = [];
  protected form = new FormArray<FormControl>([]);

  save(skills: string[]) {
    this.updateSkills.emit(skills as DHII_SkillName[]);
    this.valid = true;
  }
}
