import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DHII_Background } from '../types/dhii-background';
import { OrPipe } from "../../utility/or.pipe";
import { MatListModule } from '@angular/material/list';
import { SpreadPipe } from "../../utility/spread.pipe";

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
