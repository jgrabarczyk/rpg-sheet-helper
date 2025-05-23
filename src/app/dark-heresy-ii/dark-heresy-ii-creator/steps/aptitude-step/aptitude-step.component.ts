import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import {
  FormArray,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

import { DHII_Aptitude } from '@dhii/types/dark-heresy-ii';
import { DHII_ATTRIBUTE_NAMES } from '@dhii/types/dhii-attribute';
import { TwoColumnStepComponent } from '@dhii/stepper-partials/two-column-step/two-column-step.component';

@Component({
  selector: 'app-aptitude-step',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    ReactiveFormsModule,
    TwoColumnStepComponent,
  ],
  templateUrl: './aptitude-step.component.html',
  styleUrl: './aptitude-step.component.scss',
})
export class AptitudeStepComponent {
  @Input() set aptitudes(aptitudes: DHII_Aptitude[]) {
    //get unique values
    this.uniqueAptitudes = Array.from(new Set(aptitudes));

    //remove duplicates
    this.uniqueAptitudes.forEach(el => {
      const index: number = aptitudes.findIndex((x: DHII_Aptitude) => x === el);
      aptitudes.splice(index, 1);
    });

    //create duplicates options
    this.duplicates = [];
    this.formDuplicates = new FormArray<FormControl>([]);
    aptitudes.forEach(() => {
      this.duplicates.push(this.defaultOptions);
      this.formDuplicates.push(new FormControl(null, Validators.required));
    });
  }

  @Input() set aptitudesToPick(newAptitudesToChoose: DHII_Aptitude[][]) {
    this.aptitudesToChoose = newAptitudesToChoose;

    this.formChooseFrom = new FormArray<FormControl>([]);
    this.aptitudesToChoose.forEach(() => {
      this.formChooseFrom.push(new FormControl(null, Validators.required));
    });
  }

  @Output() updateAptitudes: EventEmitter<DHII_Aptitude[]> = new EventEmitter<
    DHII_Aptitude[]
  >();

  protected defaultOptions = DHII_ATTRIBUTE_NAMES;
  protected uniqueAptitudes: DHII_Aptitude[] = [];
  protected duplicates: DHII_Aptitude[][] = [];
  protected aptitudesToChoose: DHII_Aptitude[][] = [];
  protected valid = false;
  protected formDuplicates = new FormArray<FormControl>([]);
  protected formChooseFrom = new FormArray<FormControl>([]);

  protected save(): void {
    this.updateAptitudes.emit([
      ...this.formChooseFrom.value,
      ...this.formDuplicates.value,
      ...this.uniqueAptitudes,
    ]);
    this.valid = true;
  }
}
