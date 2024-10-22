import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { StepFooterComponent } from "../step-footer/step-footer.component";

@Component({
  selector: 'app-equipment-step',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, StepFooterComponent],
  templateUrl: './equipment-step.component.html',
  styleUrl: './equipment-step.component.scss'
})
export class EquipmentStepComponent {
  @Input() equipment: string[] = [];
  @Input() equipmentToPick: string[][] = [];
}
