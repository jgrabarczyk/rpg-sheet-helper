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
  @Input() set skills(t: DHII_SkillName[]) {
    this.skills_ = mapStringArrayToSelectOptionArray(t);
  }
  get skills(): SelectOption[] {
    return this.skills_;
  }
  private skills_: SelectOption[] = [];

  @Input() set skillsToPick(skillsToPick: DHII_SkillName[][]) {
    this.skillsToPick_ = skillsToPick.map(skills => mapStringArrayToSelectOptionArray(skills));
    this.skillsToPick_.forEach(() => this.form.push(new FormControl(null, Validators.required)));
  }
  get skillsToPick(): SelectOption[][] {
    return this.skillsToPick_;
  }
  private skillsToPick_: SelectOption[][] = [];

  @Output() updateSkills: EventEmitter<DHII_SkillName[]> = new EventEmitter<DHII_SkillName[]>();

  protected form = new FormArray<FormControl>([]);
  protected valid = false;

  protected save(skills: string[]): void {
    this.updateSkills.emit(skills as DHII_SkillName[]);
    this.valid = true;
  }
}
