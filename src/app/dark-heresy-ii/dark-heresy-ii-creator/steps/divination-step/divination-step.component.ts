import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { TwoColumnStepComponent } from '@dhii/stepper-partials/two-column-step/two-column-step.component';
import { DHII_Divination } from '@dhii/types/dhii-divination';

@Component({
  selector: 'app-divination-step',
  standalone: true,
  imports: [TwoColumnStepComponent, MatCardModule],
  templateUrl: './divination-step.component.html',
  styleUrl: './divination-step.component.scss'
})
export class DivinationStepComponent {
  @Input() divination?: DHII_Divination;
  
  @Output() setDivination: EventEmitter<void> = new EventEmitter();
  @Output() resetAll: EventEmitter<void> = new EventEmitter();
  @Output() save: EventEmitter<void> = new EventEmitter();

  valid = false;

  set(){
    this.valid = true;
    this.setDivination.emit()
  }

}
