import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CardListStepComponent } from '@dhii/stepper-partials/card-list-step/card-list-step.component';
import { DHII_CharacterBackground } from '@dhii/types/dark-heresy-ii';
import { DHII_Backgrounds, DHII_BackgroundNames, DHII_Background } from '@dhii/types/dhii-background';

import { BackgroundCardComponent } from './background-card/background-card.component';

@Component({
  selector: 'app-background-step',
  standalone: true,
  imports: [
    CommonModule,
    BackgroundCardComponent,
    CardListStepComponent
],
  templateUrl: './background-step.component.html',
  styleUrl: './background-step.component.scss'
})
export class BackgroundStepComponent {
  @Input() backgrounds: DHII_Backgrounds | null = null;
  @Input() selectedBackground?: DHII_BackgroundNames;

  @Output() chooseBackground: EventEmitter<DHII_CharacterBackground> = new EventEmitter();

  protected select([key, value]: [DHII_BackgroundNames, DHII_Background]): void {
    this.chooseBackground.emit({ key, value });
  }
}
