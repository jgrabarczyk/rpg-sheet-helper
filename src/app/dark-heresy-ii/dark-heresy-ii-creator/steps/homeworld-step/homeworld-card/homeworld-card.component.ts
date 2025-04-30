import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { DHII_Homeworld } from '@dhii/types/dhii-homeworlds';

import { OrPipe } from '@pipes/or-pipe/or.pipe';
import { SpreadPipe } from '@pipes/spread-pipe/spread.pipe';

@Component({
    selector: 'app-homeworld-card',
    imports: [CommonModule, MatCardModule, OrPipe, MatDividerModule, SpreadPipe],
    templateUrl: './homeworld-card.component.html',
    styleUrl: './homeworld-card.component.scss'
})
export class HomeworldCardComponent {
  @Input() homeworld!: DHII_Homeworld;
}
