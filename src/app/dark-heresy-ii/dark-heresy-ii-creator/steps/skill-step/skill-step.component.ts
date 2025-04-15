import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FormArray, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { DHII_SkillName } from '@dhii/types/dhii-skill';
import {
  DynamicListComponent,
  SelectOption
} from '@dhii/stepper-partials/dynamic-list/dynamic-list.component';
import { TwoColumnStepComponent } from '@dhii/stepper-partials/two-column-step/two-column-step.component';
import { mapStringArrayToSelectOptionArray } from '@util/map-string-to-select-option';

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
  @Input() set skills(t: DHII_SkillName[]) {
    this.skills_ = mapStringArrayToSelectOptionArray(t);
  }

  @Input() set skillsToPick(skillsToPick: DHII_SkillName[][]) {
    this.skillsToChoose = skillsToPick.map(skills => mapStringArrayToSelectOptionArray(skills));
    this.skillsToChoose.forEach(() => this.form.push(new FormControl(null, Validators.required)));
  }

  get skills(): SelectOption[] {
    return this.skills_;
  }

  private skills_: SelectOption[] = [];

  @Output() updateSkills: EventEmitter<DHII_SkillName[]> = new EventEmitter<DHII_SkillName[]>();

  protected skillsToChoose: SelectOption[][] = [];
  protected form = new FormArray<FormControl>([]);

  save(skills: string[]) {
    this.updateSkills.emit(skills as DHII_SkillName[]);
    this.valid = true;
  }
}
