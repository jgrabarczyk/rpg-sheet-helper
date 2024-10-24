import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RoleCardComponent } from '../../role-card/role-card.component';
import { StepNavigationComponent } from '../step-navigation/step-navigation.component';

@Component({
  selector: 'app-card-list-step',
  standalone: true,
  imports: [CommonModule, MatCardModule, RoleCardComponent, StepNavigationComponent],
  templateUrl: './card-list-step.component.html',
  styleUrl: './card-list-step.component.scss'
})
export class CardListStepComponent {
  @Input() valid: boolean = false;
  @Input() title?: string;
  @Input() subtitle?: string;
}
