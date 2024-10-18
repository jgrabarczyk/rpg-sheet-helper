import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AttributeComponent } from '../attribute.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { Roll } from '../../../../types/roll';
import { DHII_Attribute, DHII_AttributeName } from '../../../types/dhii-attribute';
@Component({
  selector: 'app-attributes-group',
  standalone: true,
  imports: [CommonModule, AttributeComponent, MatDividerModule, MatListModule, MatCardModule],
  templateUrl: './attributes-group.component.html',
  styleUrl: './attributes-group.component.scss'
})
export class AttributesGroupComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() attributes: Map<DHII_AttributeName, DHII_Attribute> = new Map();
  @Input() editable: boolean = false;
  @Input() step: number = 5;

  @Output() updatedAttribute = new EventEmitter<DHII_Attribute>();
  @Output() roll = new EventEmitter<Roll>();

  updateValue(value: number, name: DHII_AttributeName) {
    const attribute: DHII_Attribute | undefined = this.attributes.get(name);
  
    if (!attribute) {
      return;
    }

    attribute.value = value;
    this.updatedAttribute.next(attribute);
  }

  increase(name: DHII_AttributeName) {
    const attribute: DHII_Attribute | undefined = structuredClone(this.attributes.get(name));

    if (!attribute || attribute.name === 'Influence') {
      return;
    }

    if (attribute.lvl.current >= attribute.lvl.max) {
      alert('already maxed');
      return;
    }

    attribute.lvl.current++;
    this.updatedAttribute.next(attribute);
  }

  decrease(name: DHII_AttributeName) {
    const attribute: DHII_Attribute | undefined = structuredClone(this.attributes.get(name));

    if (!attribute || attribute.name === 'Influence') {
      return;
    }

    if (attribute.lvl.current <= 0) {
      alert('already lowest');
      return;
    }

    attribute.lvl.current--;
    this.updatedAttribute.next(attribute);
  }

  rollDice(name: DHII_AttributeName, modifier: number): void {
    const attribute: DHII_Attribute | undefined = this.attributes.get(name);

    if (!attribute) {
      return;
    }

    const value: number = attribute.value + modifier;

    this.roll.emit({ name: attribute.name, value: value <= 1 ? 1 : value });
  }
}
