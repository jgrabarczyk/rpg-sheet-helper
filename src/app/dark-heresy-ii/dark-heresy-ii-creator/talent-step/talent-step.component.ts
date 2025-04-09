import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { DHII_TalentName } from '../../types/dhii-talents';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FormArray, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TwoColumnStepComponent } from '../two-column-step/two-column-step.component';
import { MatButtonModule } from '@angular/material/button';
import { DynamicListComponent } from '../dynamic-list/dynamic-list.component';

@Component({
  selector: 'app-talent-step',
  standalone: true,
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
  @Input() valid: boolean = false;
  @Input() talents: DHII_TalentName[] = [];
  @Input() set talentsToPick(talentsToPick: DHII_TalentName[][]) {
    this.talentsToChoose = talentsToPick;
    this.talentsToChoose.forEach(() => this.form.push(new FormControl(null, Validators.required)));
  }

  @Output() updateTalents: EventEmitter<DHII_TalentName[]> = new EventEmitter<DHII_TalentName[]>();

  protected talentsToChoose: DHII_TalentName[][] = [];
  protected form = new FormArray<FormControl>([]);

  save(talents: string[]) {
    this.updateTalents.emit(talents as DHII_TalentName[]);
    this.valid = true;
  }
}
