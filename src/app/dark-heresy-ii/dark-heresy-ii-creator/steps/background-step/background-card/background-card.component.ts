import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { DHII_Background } from '@dhii/types/dhii-background';

import { OrPipe } from '@pipes/or-pipe/or.pipe';
import { SpreadPipe } from '@pipes/spread-pipe/spread.pipe';

@Component({
  selector: 'app-background-card',
  imports: [CommonModule, MatCardModule, OrPipe, MatListModule, SpreadPipe],
  templateUrl: './background-card.component.html',
  styleUrl: './background-card.component.scss',
})
export class BackgroundCardComponent {
  @Input({ required: true }) background!: DHII_Background;
}
