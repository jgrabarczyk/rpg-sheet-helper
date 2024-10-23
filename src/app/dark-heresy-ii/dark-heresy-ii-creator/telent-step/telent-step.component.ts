import { Component, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DHII_TalentName } from '../../types/talents';
import { StepNavigationComponent } from "../step-navigation/step-navigation.component";

@Component({
  selector: 'app-telent-step',
  standalone: true,
  imports: [MatInputModule, MatSelectModule, StepNavigationComponent],
  templateUrl: './telent-step.component.html',
  styleUrl: './telent-step.component.scss'
})
export class TelentStepComponent {
  @Input() talents: DHII_TalentName[] = []
  @Input() talentsToPick: DHII_TalentName[][] = []
}
