import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { Roll } from '@appTypes/roll';

import { DHII_Attribute, DHII_AttributeName, DHII_Attributes } from '@dhii/types/dhii-attribute';
import { IsBonusAttributePipe } from '@dhii/pipes/is-bonus-attribute/is-bonus-attribute.pipe';

import { AttributeComponent } from '../../sheet/attribute/attribute.component';
@Component({
  selector: 'app-attributes-group',
  standalone: true,
  imports: [CommonModule, AttributeComponent, MatDividerModule, MatListModule, MatCardModule, IsBonusAttributePipe],
  templateUrl: './attributes-group.component.html',
  styleUrl: './attributes-group.component.scss'
})
export class AttributesGroupComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() attributes!: DHII_Attributes;
  @Input() bonus?: [DHII_AttributeName, DHII_AttributeName ];
  @Input() penality?: DHII_AttributeName
  @Input() editable: boolean = false;
  @Input() mode: 'create' | 'play' = 'play';
  @Input() step: number = 5;
  @Input() isRerollAtributeAvalible!: boolean;

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
      throw Error('No attribute fond for name: ' + name)
    }

    const value: number = attribute.value + modifier;

    this.roll.emit({ name: attribute.name, chance: value <= 1 ? 1 : value });
  }
}
