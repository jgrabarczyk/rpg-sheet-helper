import { MatFormFieldModule } from '@angular/material/form-field';
import { Component, Input } from '@angular/core';
import { DHII_SkillName } from '../../types/dhii-skill';
import { MatSelectModule } from '@angular/material/select';
import { StepFooterComponent } from "../step-footer/step-footer.component";

@Component({
  selector: 'app-skill-step',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, StepFooterComponent],
  templateUrl: './skill-step.component.html',
  styleUrl: './skill-step.component.scss'
})
export class SkillStepComponent {
  @Input() skills: DHII_SkillName[] = [];
  @Input() skillsToPick: DHII_SkillName[][] = [];
}
