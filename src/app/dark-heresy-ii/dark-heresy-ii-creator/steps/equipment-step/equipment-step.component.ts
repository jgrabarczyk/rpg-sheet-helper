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
  @Input() set equipment(eq: DHII_BackgroundEquipment[]) {
    this.equipment_ = this.mapEqArrayToSelectOptions(eq);
  }
  get equipment(): SelectOption[] {
    return this.equipment_;
  }
  private equipment_: SelectOption[] = [];

  @Input() set equipmentToPick(newEquipmentToPick: DHII_BackgroundEquipment[][]) {
    this.equipmentToPick_ = newEquipmentToPick.map(eq => this.mapEqArrayToSelectOptions(eq));
    this.equipmentToPick_.forEach(() =>
      this.form.push(new FormControl(null, Validators.required))
    );
  }
  get equipmentToPick(): SelectOption[][] {
    return this.equipmentToPick_;
  }
  private equipmentToPick_: SelectOption[][] = [];

 
  @Output() updateEquipment: EventEmitter<string[]> = new EventEmitter<string[]>();

  protected form = new FormArray<FormControl>([]);
  protected valid = false;

  protected save(equipment: string[]): void {
    this.updateEquipment.emit(equipment);
    this.valid = true;
  }

  private mapEqArrayToSelectOptions(arr: DHII_BackgroundEquipment[]): SelectOption[] {
    return arr.map(el => ({ key: el.key, value: `${el.value}|${el.quantity}` }));
  }
}
