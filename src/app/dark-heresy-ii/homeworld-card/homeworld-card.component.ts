import { CommonModule } from '@angular/common';
import { DHII_Homeworld } from '../types/dhii-homeworlds';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { OrPipe } from "../../utility/or.pipe";
import { MatDividerModule } from '@angular/material/divider';
import { SpreadPipe } from "../../utility/spread.pipe";

@Component({
  selector: 'app-homeworld-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, OrPipe, MatDividerModule, SpreadPipe],
  templateUrl: './homeworld-card.component.html',
  styleUrl: './homeworld-card.component.scss'
})
export class HomeworldCardComponent {
  @Input() homeworld!: DHII_Homeworld;
}
