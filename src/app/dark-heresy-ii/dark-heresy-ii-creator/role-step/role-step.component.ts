import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoleCardComponent } from '../../role-card/role-card.component';
import { DHII_Role, DHII_Roles } from '../../types/dhii-role';
import { StepFooterComponent } from "../step-footer/step-footer.component";

@Component({
  selector: 'app-role-step',
  standalone: true,
  imports: [RoleCardComponent, StepFooterComponent],
  templateUrl: './role-step.component.html',
  styleUrl: './role-step.component.scss'
})
export class RoleStepComponent {
  @Input() roles: DHII_Roles | null = null;
  @Output() chooseRole: EventEmitter<DHII_Role> = new EventEmitter<DHII_Role>();
}
