import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  DHII_Background,
  DHII_BackgroundNames,
  DHII_Backgrounds
} from '../../types/dhii-background';
import { BackgroundCardComponent } from '../../background-card/background-card.component';
import { DHII_CharacterBackground } from '../../types/dark-heresy-ii';
import { CardListStepComponent } from "../card-list-step/card-list-step.component";

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

  select([key, value]: [DHII_BackgroundNames, DHII_Background]) {
    this.chooseBackground.emit({ key, value });
  }
}
