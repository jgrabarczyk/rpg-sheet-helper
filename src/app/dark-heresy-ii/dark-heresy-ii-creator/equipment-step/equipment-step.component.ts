import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { StepNavigationComponent } from '../step-navigation/step-navigation.component';
import { DynamicListComponent } from '../dynamic-list/dynamic-list.component';
import { FormControl, Validators, FormArray } from '@angular/forms';
import { TwoColumnStepComponent } from "../two-column-step/two-column-step.component";

@Component({
  selector: 'app-equipment-step',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, StepNavigationComponent, DynamicListComponent, TwoColumnStepComponent],
  templateUrl: './equipment-step.component.html',
  styleUrl: './equipment-step.component.scss'
})
export class EquipmentStepComponent {
  @Input() valid: boolean = false;
  @Input() equipment: string[] = [];
  @Input() set equipmentToPick(newEquipmentToPick: string[][]) {
    this.equipmentToChoose = newEquipmentToPick;
    this.equipmentToChoose.forEach(() =>
      this.form.push(new FormControl(null, Validators.required))
    );
  }

  @Output() updateEquipment: EventEmitter<string[]> = new EventEmitter<string[]>();

  protected equipmentToChoose: string[][] = [];
  protected form = new FormArray<FormControl>([]);

  save(equipment: string[]) {
    this.updateEquipment.emit(equipment as string[]);
    this.valid = true;
  }
}
