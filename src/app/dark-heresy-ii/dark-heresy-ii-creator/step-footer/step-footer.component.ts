import { Component } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-step-footer',
  standalone: true,
  imports: [MatStepperModule],
  templateUrl: './step-footer.component.html',
  styleUrl: './step-footer.component.scss'
})
export class StepFooterComponent {}
