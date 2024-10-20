import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DHII_Role } from '../types/dhii-role';

@Component({
  selector: 'app-role-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './role-card.component.html',
  styleUrl: './role-card.component.scss'
})
export class RoleCardComponent {
  @Input() role!: DHII_Role;
}
