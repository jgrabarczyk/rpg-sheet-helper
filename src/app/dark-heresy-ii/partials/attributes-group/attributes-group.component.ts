import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { Roll } from '@appTypes/roll';
import { DHII_Attribute, DHII_AttributeName, DHII_Attributes } from '@dhii/types/dhii-attribute';
import { IsBonusAttributePipe } from '@dhii/pipes/is-bonus-attribute/is-bonus-attribute.pipe';
import { assertAttributeName } from '@util/assert-attribute-name';

import { AttributeComponent } from '../../sheet/attribute/attribute.component';

@Component({
  selector: 'app-attributes-group',
  standalone: true,
  imports: [
    CommonModule,
    AttributeComponent,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    IsBonusAttributePipe
  ],
  templateUrl: './attributes-group.component.html',
  styleUrl: './attributes-group.component.scss'
})
export class AttributesGroupComponent {
  @Input({ required: true }) attributes!: DHII_Attributes;
  @Input() editable: boolean = false;
  @Input() mode: 'create' | 'play' = 'play';
  @Input() step: number = 5;
  @Input() isAtributeRerollAvalible: boolean = false;
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() bonus?: [DHII_AttributeName, DHII_AttributeName];
  @Input() penality?: DHII_AttributeName;

  @Output() updatedAttribute = new EventEmitter<DHII_Attribute>();
  @Output() roll = new EventEmitter<Roll>();

  protected updateValue(value: number, name: DHII_AttributeName): void {
    const attribute: DHII_Attribute = this.attributes.get(name)!;

    attribute.value = value;
    this.updatedAttribute.next(attribute);
  }

  protected increase(name: DHII_AttributeName): void {
    const attribute: DHII_Attribute = structuredClone(this.attributes.get(name)!);
    assertAttributeName(attribute.name);

    if (attribute.lvl.current >= attribute.lvl.max) {
      alert('already maxed');
      return;
    }

    attribute.lvl.current++;
    this.updatedAttribute.next(attribute);
  }

  protected decrease(name: DHII_AttributeName): void {
    const attribute: DHII_Attribute = structuredClone(this.attributes.get(name)!);
    assertAttributeName(attribute.name);

    if (attribute.lvl.current <= 0) {
      alert('already lowest');
      return;
    }

    attribute.lvl.current--;
    this.updatedAttribute.next(attribute);
  }

  protected rollDice(name: DHII_AttributeName, modifier: number): void {
    const attribute: DHII_Attribute = this.attributes.get(name)!;
    const value: number = attribute.value + modifier;

    this.roll.emit({ name: attribute.name, chance: value <= 1 ? 1 : value });
  }
}
