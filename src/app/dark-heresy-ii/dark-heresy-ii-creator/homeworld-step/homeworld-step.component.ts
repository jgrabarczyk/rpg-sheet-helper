import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HomeworldCardComponent } from '../../homeworld-card/homeworld-card.component';
import { DHII_Homeworld, DHII_HomeworldNames, DHII_Homeworlds } from '../../types/dhii-homeworlds';
import { DHII_CharacterHomeworld } from '../../types/dark-heresy-ii';
import { CardListStepComponent } from '../card-list-step/card-list-step.component';

@Component({
  selector: 'app-homeworld-step',
  standalone: true,
  imports: [
    CommonModule,
    HomeworldCardComponent,
    CardListStepComponent
  ],
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
