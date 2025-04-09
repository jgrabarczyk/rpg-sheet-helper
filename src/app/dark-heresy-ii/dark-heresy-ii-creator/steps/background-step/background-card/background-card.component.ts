import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { DHII_Background } from '@dhii/types/dhii-background';

import { OrPipe } from '@util/or-pipe/or.pipe';
import { SpreadPipe } from '@util/spread.pipe';


@Component({
  selector: 'app-background-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, OrPipe, MatListModule, SpreadPipe],
  templateUrl: './background-card.component.html',
  styleUrl: './background-card.component.scss'
})
export class BackgroundCardComponent {
  @Input() background!: DHII_Background;

}
