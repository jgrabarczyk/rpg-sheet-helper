import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CardListStepComponent } from '@dhii/stepper-partials/card-list-step/card-list-step.component';
import { DHII_Roles, DHII_RoleNames, DHII_Role } from '@dhii/types/dhii-role';

import { RoleCardComponent } from './role-card/role-card.component';

@Component({
  selector: 'app-role-step',
  standalone: true,
  imports: [CommonModule, RoleCardComponent, CardListStepComponent],
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

  protected select([key, value]: [DHII_RoleNames, DHII_Role]): void {
    this.chooseRole.emit({ key, value });
  }
}
