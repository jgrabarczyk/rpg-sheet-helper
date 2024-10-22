import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DHII_Aptitude } from '../../types/dark-heresy-ii';
import { AptitudesGroupComponent } from "../../sheet/aptitude/aptitudes-group.component";
import { MatFormField } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { StepFooterComponent } from "../step-footer/step-footer.component";
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-aptitude-step',
  standalone: true,
  imports: [AptitudesGroupComponent, MatFormField, MatSelectModule, StepFooterComponent, MatListModule],
  templateUrl: './aptitude-step.component.html',
  styleUrl: './aptitude-step.component.scss'
})
export class AptitudeStepComponent {
  @Input() aptitudes: DHII_Aptitude[] = [];
  @Input() aptitudesToPick: DHII_Aptitude[][] = [];

  @Output() updateAptitudes: EventEmitter<DHII_Aptitude[]> = new EventEmitter<DHII_Aptitude[]>();
}
