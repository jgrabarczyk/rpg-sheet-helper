import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { Roll } from '@appTypes/roll';
import { AttributesGroupComponent } from '@dhii/partials/attributes-group/attributes-group.component';
import { TwoColumnStepComponent } from '@dhii/stepper-partials/two-column-step/two-column-step.component';
import { DHII_Attributes, DHII_AttributeName } from '@dhii/types/dhii-attribute';

@Component({
  selector: 'app-attribute-step',
  standalone: true,
  imports: [AttributesGroupComponent, TwoColumnStepComponent, MatButtonModule, MatCardModule],
  templateUrl: './attribute-step.component.html',
  styleUrl: './attribute-step.component.scss'
})
export class AttributeStepComponent {
  @Input() attributes!: DHII_Attributes;
  @Input() bonus!: [DHII_AttributeName, DHII_AttributeName];
  @Input() penality!: DHII_AttributeName;

  @Output() reroll = new EventEmitter();
  @Output() generateAll = new EventEmitter();

  protected isAtributeRerollAvalible: boolean = false;
  protected valid = false;

  protected roll(): void {
    this.isAtributeRerollAvalible = true;
    this.valid = true;
    this.generateAll.emit();
  }

  protected useReroll($event: Roll): void {
    this.isAtributeRerollAvalible = false;
    this.reroll.emit($event);
  }
}
