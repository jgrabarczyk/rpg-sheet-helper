import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoleCardComponent } from '../../role-card/role-card.component';
import { DHII_Role, DHII_RoleNames, DHII_Roles } from '../../types/dhii-role';
import { StepNavigationComponent } from '../step-navigation/step-navigation.component';

@Component({
  selector: 'app-role-step',
  standalone: true,
  imports: [CommonModule, MatCardModule,RoleCardComponent, StepNavigationComponent],
  templateUrl: './role-step.component.html',
  styleUrl: './role-step.component.scss'
})
export class RoleStepComponent {
  @Input() roles: DHII_Roles | null = null;
  @Input() selectedRole?: DHII_RoleNames;

  @Output() chooseRole: EventEmitter<{ key: DHII_RoleNames; value: DHII_Role }> = new EventEmitter<{
    key: DHII_RoleNames;
    value: DHII_Role;
  }>();

  select([key, value]: [DHII_RoleNames, DHII_Role]) {
    this.chooseRole.emit({ key, value });
  }
}
