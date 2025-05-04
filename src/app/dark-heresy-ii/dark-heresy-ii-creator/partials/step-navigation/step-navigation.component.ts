import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-step-navigation',
  imports: [MatStepperModule, MatButtonModule],
  templateUrl: './step-navigation.component.html',
  styleUrl: './step-navigation.component.scss',
})
export class StepNavigationComponent {
  @Input() step?: 'first' | 'last';
  @Input() valid: boolean = false;

  @Output() resetAll: EventEmitter<void> = new EventEmitter();
  @Output() save: EventEmitter<void> = new EventEmitter();
}
