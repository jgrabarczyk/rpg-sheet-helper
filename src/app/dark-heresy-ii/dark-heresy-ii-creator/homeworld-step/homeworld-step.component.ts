import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HomeworldCardComponent } from "../../homeworld-card/homeworld-card.component";
import { DHII_Homeworld, DHII_Homeworlds } from '../../types/dhii-homeworlds';
import { MatStepperModule } from '@angular/material/stepper';
import { StepFooterComponent } from "../step-footer/step-footer.component";

@Component({
  selector: 'app-homeworld-step',
  standalone: true,
  imports: [HomeworldCardComponent, MatStepperModule, StepFooterComponent],
  templateUrl: './homeworld-step.component.html',
  styleUrl: './homeworld-step.component.scss'
})
export class HomeworldStepComponent {
@Input() homeworlds: DHII_Homeworlds | null = null;
@Output() chooseHomeworld: EventEmitter<DHII_Homeworld> = new EventEmitter()
}
