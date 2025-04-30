import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FormArray, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import {
  DynamicListComponent,
  SelectOption
} from '@dhii/stepper-partials/dynamic-list/dynamic-list.component';
import { TwoColumnStepComponent } from '@dhii/stepper-partials/two-column-step/two-column-step.component';
import { DHII_TalentName } from '@dhii/types/dhii-talents';
import { mapStringArrayToSelectOptionArray } from '@util/map-string-to-select-option';

@Component({
    selector: 'app-talent-step',
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatListModule,
        MatSelectModule,
        ReactiveFormsModule,
        TwoColumnStepComponent,
        DynamicListComponent
    ],
    templateUrl: './talent-step.component.html',
    styleUrl: './talent-step.component.scss'
})
export class TalentStepComponent {
  @Input() set talents(t: DHII_TalentName[]) {
    this.talents_ = mapStringArrayToSelectOptionArray(t);
  }
  get talents(): SelectOption[] {
    return this.talents_;
  }
  private talents_: SelectOption[] = [];

  @Input() set talentsToPick(talentsToPick: DHII_TalentName[][]) {
    this.talentsToPick_ = talentsToPick.map(talents => mapStringArrayToSelectOptionArray(talents));
    this.talentsToPick_.forEach(() => this.form.push(new FormControl(null, Validators.required)));
  }
  get talentsToPick(): SelectOption[][] {
    return this.talentsToPick_;
  }
  private talentsToPick_: SelectOption[][] = [];

  @Output() updateTalents: EventEmitter<DHII_TalentName[]> = new EventEmitter<DHII_TalentName[]>();

  protected form = new FormArray<FormControl>([]);
  protected valid = false;

  protected save(talents: string[]): void {
    this.updateTalents.emit(talents.map(el => el as DHII_TalentName));
    this.valid = true;
  }
}
