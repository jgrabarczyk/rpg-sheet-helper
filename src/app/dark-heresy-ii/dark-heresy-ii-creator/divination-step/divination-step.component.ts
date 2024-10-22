import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DHII_Divination } from '../../types/dhii-divination';
import { StepFooterComponent } from "../step-footer/step-footer.component";

@Component({
  selector: 'app-divination-step',
  standalone: true,
  imports: [StepFooterComponent],
  templateUrl: './divination-step.component.html',
  styleUrl: './divination-step.component.scss'
})
export class DivinationStepComponent {
  @Input() divination?: DHII_Divination;
  
  @Output() setDivination: EventEmitter<void> = new EventEmitter();
  @Output() resetAll: EventEmitter<void> = new EventEmitter();
  @Output() save: EventEmitter<void> = new EventEmitter();
}
