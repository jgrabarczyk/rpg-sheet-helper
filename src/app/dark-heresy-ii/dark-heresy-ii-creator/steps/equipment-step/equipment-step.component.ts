import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, Validators, FormArray } from '@angular/forms';

import {
  DynamicListComponent,
  SelectOption
} from '@dhii/stepper-partials/dynamic-list/dynamic-list.component';
import { TwoColumnStepComponent } from '@dhii/stepper-partials/two-column-step/two-column-step.component';
import { DHII_BackgroundEquipment } from '@dhii/types/dhii-background';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-equipment-step',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    DynamicListComponent,
    TwoColumnStepComponent,
    CommonModule
  ],
  templateUrl: './equipment-step.component.html',
  styleUrl: './equipment-step.component.scss'
})
export class EquipmentStepComponent {
  @Input() valid: boolean = false;
  @Input() set equipment(eq: DHII_BackgroundEquipment[]) {
    this.equipment_ = this.mapEqArrayToSelectOptions(eq);
  }
  @Input() set equipmentToPick(newEquipmentToPick: DHII_BackgroundEquipment[][]) {
    this.equipmentToChoose_ = newEquipmentToPick.map(eq => this.mapEqArrayToSelectOptions(eq));
    this.equipmentToChoose_.forEach(() =>
      this.form.push(new FormControl(null, Validators.required))
    );
  }

  get equipment(): SelectOption[] {
    return this.equipment_;
  }
  private equipment_: SelectOption[] = [];

  @Output() updateEquipment: EventEmitter<string[]> = new EventEmitter<string[]>();

  get equipmentToChoose(): SelectOption[][] {
    return this.equipmentToChoose_;
  }
  private equipmentToChoose_: SelectOption[][] = [];

  protected form = new FormArray<FormControl>([]);

  save(equipment: string[]) {
    this.updateEquipment.emit(equipment);
    this.valid = true;
  }

  private mapEqArrayToSelectOptions(arr: DHII_BackgroundEquipment[]): SelectOption[] {
    return arr.map(el => ({ key: el.key, value: `${el.value}|${el.quantity}` }));
  }
}
