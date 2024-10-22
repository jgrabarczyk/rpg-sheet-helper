import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { DHII_Backgrounds, DHII_Background } from '../../types/dhii-background';
import { BackgroundCardComponent } from "../../background-card/background-card.component";
import { StepFooterComponent } from "../step-footer/step-footer.component";

@Component({
  selector: 'app-background-step',
  standalone: true,
  imports: [MatStepperModule, BackgroundCardComponent, StepFooterComponent],
  templateUrl: './background-step.component.html',
  styleUrl: './background-step.component.scss'
})
export class BackgroundStepComponent {
  @Input() backgrounds: DHII_Backgrounds | null = null;
  @Output() chooseBackground: EventEmitter<DHII_Background> = new EventEmitter()
}
