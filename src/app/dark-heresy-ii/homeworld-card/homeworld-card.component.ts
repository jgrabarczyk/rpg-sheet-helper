import { CommonModule } from '@angular/common';
import { Homeworld } from './../data/homeworlds';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-homeworld-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './homeworld-card.component.html',
  styleUrl: './homeworld-card.component.scss'
})
export class HomeworldCardComponent {
  @Input() homeworld!: Homeworld;
}
