import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HomeworldCardComponent } from '../../homeworld-card/homeworld-card.component';
import { DHII_Homeworld, DHII_HomeworldNames, DHII_Homeworlds } from '../../types/dhii-homeworlds';
import { MatStepperModule } from '@angular/material/stepper';
import { StepNavigationComponent } from '../step-navigation/step-navigation.component';
import { DHII_CharacterHomeworld } from '../../types/dark-heresy-ii';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-homeworld-step',
  standalone: true,
  imports: [CommonModule, HomeworldCardComponent, MatStepperModule, MatCardModule, StepNavigationComponent],
  templateUrl: './homeworld-step.component.html',
  styleUrl: './homeworld-step.component.scss'
})
export class HomeworldStepComponent {
  @Input() homeworlds: DHII_Homeworlds | null = null;
  @Input() selectedHomeworld?: DHII_HomeworldNames;
  
  @Output() chooseHomeworld: EventEmitter<DHII_CharacterHomeworld> = new EventEmitter();

  select([key, value]: [DHII_HomeworldNames, DHII_Homeworld]) {
    this.chooseHomeworld.emit({ key, value });
  }
}
