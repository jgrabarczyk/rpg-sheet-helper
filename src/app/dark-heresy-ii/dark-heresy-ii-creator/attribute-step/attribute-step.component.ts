import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AttributesGroupComponent } from '../../sheet/attribute/attributes-group/attributes-group.component';
import { DHII_AttributeName, DHII_Attributes } from '../../types/dhii-attribute';
import { StepNavigationComponent } from "../step-navigation/step-navigation.component";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-attribute-step',
  standalone: true,
  imports: [AttributesGroupComponent, StepNavigationComponent, MatButtonModule],
  templateUrl: './attribute-step.component.html',
  styleUrl: './attribute-step.component.scss'
})
export class AttributeStepComponent {
  @Input() attributes!: DHII_Attributes;
  @Input() bonus!: [DHII_AttributeName, DHII_AttributeName];
  @Input() penality!: DHII_AttributeName;

  @Output() reroll = new EventEmitter();
  @Output() generateAll = new EventEmitter();
}
