import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { DHII_Role } from '@dhii/types/dhii-role';

import { OrPipe } from '@pipes/or-pipe/or.pipe';
import { SpreadPipe } from '@pipes/spread-pipe/spread.pipe';

@Component({
  selector: 'app-role-card',
  imports: [CommonModule, MatCardModule, OrPipe, SpreadPipe],
  templateUrl: './role-card.component.html',
  styleUrl: './role-card.component.scss',
})
export class RoleCardComponent {
  @Input() role!: DHII_Role;
}
