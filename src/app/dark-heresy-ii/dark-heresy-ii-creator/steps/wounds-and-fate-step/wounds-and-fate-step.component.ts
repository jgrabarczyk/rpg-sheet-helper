import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { TwoColumnStepComponent } from '@dhii/partials/two-column-step/two-column-step.component';
import { DHII_CharacterHomeworld } from '@dhii/types/dark-heresy-ii';


@Component({
  selector: 'app-wounds-and-fate-step',
  standalone: true,
  imports: [TwoColumnStepComponent, MatCardModule, MatButtonModule, MatDividerModule],
  templateUrl: './wounds-and-fate-step.component.html',
  styleUrl: './wounds-and-fate-step.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WoundsAndFateStepComponent {
  @Input() homeworld!: DHII_CharacterHomeworld;
  @Input() wounds?: number;
  @Input() fate?: number;
  @Output() setWounds = new EventEmitter();
  @Output() setFate = new EventEmitter();
}
