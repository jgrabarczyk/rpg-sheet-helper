import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-rollbox',
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './rollbox.component.html',
  styleUrl: './rollbox.component.scss'
})
export class RollboxComponent {
  @Output() roll: EventEmitter<number> = new EventEmitter<number>();
}
