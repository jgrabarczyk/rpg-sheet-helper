import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RoleCardComponent } from '../../role-card/role-card.component';
import { StepNavigationComponent } from '../step-navigation/step-navigation.component';

@Component({
  selector: 'app-two-column-step',
  standalone: true,
  imports: [CommonModule, MatCardModule, RoleCardComponent, StepNavigationComponent],
  templateUrl: './two-column-step.component.html',
  styleUrl: './two-column-step.component.scss'
})
export class TwoColumnStepComponent {
  @Input() valid: boolean = false;
  @Input() title?: string;
  @Input() subtitle?: string;
}
