import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { TwoColumnStepComponent } from '@dhii/stepper-partials/two-column-step/two-column-step.component';
import { DHII_Divination } from '@dhii/types/roll-tables/dhii-divination';

@Component({
  selector: 'app-divination-step',
  imports: [TwoColumnStepComponent, MatCardModule],
  templateUrl: './divination-step.component.html',
  styleUrl: './divination-step.component.scss',
})
export class DivinationStepComponent {
  @Input() divination?: DHII_Divination;

  @Output() setDivination: EventEmitter<void> = new EventEmitter();

  protected valid = false;

  protected set(): void {
    this.valid = true;
    this.setDivination.emit();
  }
}
