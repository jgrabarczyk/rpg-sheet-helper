import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AttributeComponent } from '../attribute.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { DHII_Attribute } from '../../../types/dark-heresy-ii';
import { Roll } from '../../../../types/roll';
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
  @Input() attributes: DHII_Attribute[] = [];
  @Input() editable: boolean = false;
  @Input() step: number = 5;

  @Output() updatedAttribute = new EventEmitter<DHII_Attribute>();
  @Output() roll = new EventEmitter<Roll>();

  updateValue(value: number, index: number) {
    this.attributes[index].value = value;
    this.updatedAttribute.next(this.attributes[index]);
  }

  increase(index: number) {
    const attribute: DHII_Attribute = structuredClone(this.attributes[index]);
    if (attribute.name === 'Influence') {
      return;
    }

    if (attribute.lvl.current >= attribute.lvl.max) {
      alert('already maxed');
      return;
    }

    attribute.lvl.current++;
    this.updatedAttribute.next(attribute);
  }

  decrease(index: number) {
    const attribute: DHII_Attribute = structuredClone(this.attributes[index]);

    if (attribute.name === 'Influence') {
      return;
    }

    if (attribute.lvl.current <= 0) {
      alert('already lowest');
      return;
    }

    attribute.lvl.current--;
    this.updatedAttribute.next(attribute);
  }

  rollDice(index: number, modifier: number): void {
    const attribute: DHII_Attribute = this.attributes[index];
    const value: number = attribute.value + modifier;

    this.roll.emit({ name: attribute.name, value: value <= 1 ? 1 : value });
  }
}
