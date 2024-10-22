import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DHII_Divination } from '../../types/dhii-divination';

@Component({
  selector: 'app-divination-step',
  standalone: true,
  imports: [],
  templateUrl: './divination-step.component.html',
  styleUrl: './divination-step.component.scss'
})
export class DivinationStepComponent {
  @Input() divination?: DHII_Divination;
  @Output() setDivination: EventEmitter<void> = new EventEmitter();
  @Output() resetStepper: EventEmitter<void> = new EventEmitter();
}
