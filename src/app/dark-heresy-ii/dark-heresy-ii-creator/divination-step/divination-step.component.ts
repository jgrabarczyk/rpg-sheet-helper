import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DHII_Divination } from '../../types/dhii-divination';
import { TwoColumnStepComponent } from "../two-column-step/two-column-step.component";
import { MatCardModule } from '@angular/material/card';

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
