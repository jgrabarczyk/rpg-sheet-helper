import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { StepNavigationComponent } from "../step-navigation/step-navigation.component";

@Component({
  selector: 'app-equipment-step',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, StepNavigationComponent],
  templateUrl: './equipment-step.component.html',
  styleUrl: './equipment-step.component.scss'
})
export class EquipmentStepComponent {
  @Input() equipment: string[] = [];
  @Input() equipmentToPick: string[][] = [];
}
