import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { StepNavigationComponent } from '../step-navigation/step-navigation.component';

@Component({
    selector: 'app-two-column-step',
    imports: [CommonModule, MatCardModule, StepNavigationComponent],
    templateUrl: './two-column-step.component.html',
    styleUrl: './two-column-step.component.scss'
})
export class TwoColumnStepComponent {
  @Input() valid: boolean = false;
  @Input() step?: 'first' | 'last';
  @Input() title?: string;
  @Input() subtitle?: string;

  @Output() resetAll: EventEmitter<void> = new EventEmitter();
  @Output() save: EventEmitter<void> = new EventEmitter();
}
