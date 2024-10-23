import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import {
  DHII_Background,
  DHII_BackgroundNames,
  DHII_Backgrounds
} from '../../types/dhii-background';
import { BackgroundCardComponent } from '../../background-card/background-card.component';
import { StepNavigationComponent } from '../step-navigation/step-navigation.component';
import { DHII_CharacterBackground } from '../../types/dark-heresy-ii';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-background-step',
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    MatCardModule,
    BackgroundCardComponent,
    StepNavigationComponent
  ],
  templateUrl: './background-step.component.html',
  styleUrl: './background-step.component.scss'
})
export class BackgroundStepComponent {
  @Input() backgrounds: DHII_Backgrounds | null = null;
  @Input() selectedBackground?: DHII_BackgroundNames;

  @Output() chooseBackground: EventEmitter<DHII_CharacterBackground> = new EventEmitter();

  select([key, value]: [DHII_BackgroundNames, DHII_Background]) {
    this.chooseBackground.emit({ key, value });
  }
}
