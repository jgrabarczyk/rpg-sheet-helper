import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AttributesGroupComponent } from '../../sheet/attribute/attributes-group/attributes-group.component';
import { DHII_AttributeName, DHII_Attributes } from '../../types/dhii-attribute';
import { MatButtonModule } from '@angular/material/button';
import { CardListStepComponent } from '../card-list-step/card-list-step.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Roll } from '../../../types/roll';

@Component({
  selector: 'app-attribute-step',
  standalone: true,
  imports: [
    AttributesGroupComponent,
    MatButtonModule,
    CardListStepComponent,
    MatCardModule,
    MatDividerModule
  ],
  templateUrl: './attribute-step.component.html',
  styleUrl: './attribute-step.component.scss'
})
export class AttributeStepComponent {
  @Input() attributes!: DHII_Attributes;
  @Input() bonus!: [DHII_AttributeName, DHII_AttributeName];
  @Input() penality!: DHII_AttributeName;
  isRerollAtributeAvalible: boolean = false;

  @Output() reroll = new EventEmitter();
  @Output() generateAll = new EventEmitter();

  valid = false;

  roll() {
    this.isRerollAtributeAvalible = true;
    this.valid = true;
    this.generateAll.emit();
  }

  useReroll($event: Roll) {
    this.isRerollAtributeAvalible = false;
    this.reroll.emit($event);
  }
}
