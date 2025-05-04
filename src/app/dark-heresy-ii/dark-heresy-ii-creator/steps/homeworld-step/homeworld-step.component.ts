import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CardListStepComponent } from '@dhii/stepper-partials/card-list-step/card-list-step.component';
import { DHII_CharacterHomeworld } from '@dhii/types/dark-heresy-ii';
import {
  DHII_Homeworlds,
  DHII_HomeworldNames,
  DHII_Homeworld,
} from '@dhii/types/dhii-homeworlds';

import { HomeworldCardComponent } from './homeworld-card/homeworld-card.component';

@Component({
  selector: 'app-homeworld-step',
  imports: [CommonModule, HomeworldCardComponent, CardListStepComponent],
  templateUrl: './homeworld-step.component.html',
  styleUrl: './homeworld-step.component.scss',
})
export class HomeworldStepComponent {
  @Input() homeworlds: DHII_Homeworlds | null = null;
  @Input() selectedHomeworld?: DHII_HomeworldNames;

  @Output() chooseHomeworld: EventEmitter<DHII_CharacterHomeworld> =
    new EventEmitter();

  protected select([key, value]: [DHII_HomeworldNames, DHII_Homeworld]): void {
    this.chooseHomeworld.emit({ key, value });
  }
}
