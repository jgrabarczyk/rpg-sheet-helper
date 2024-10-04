import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AttributeComponent } from '../attribute.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { DHII_Attribute } from '../../../types/dark-heresy-ii';
@Component({
  selector: 'app-attributes-group',
  standalone: true,
  imports: [AttributeComponent, MatDividerModule, MatListModule, MatCardModule],
  templateUrl: './attributes-group.component.html',
  styleUrl: './attributes-group.component.scss'
})
export class AttributesGroupComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() attributes: DHII_Attribute[] = [];
  @Input() type: 'range' | 'number' = 'number';

  @Output() updatedAttribute = new EventEmitter<DHII_Attribute>();

  updateValue(value: number, index: number) {
    this.attributes[index].value = value;
    this.updatedAttribute.next(this.attributes[index]);
  }
  
  increase(index: number) {
    const attribute: DHII_Attribute = this.attributes[index];
    if (attribute.name === 'Influance') {
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
    const attribute: DHII_Attribute = this.attributes[index];
    if (attribute.name === 'Influance') {
      return;
    }

    if (attribute.lvl.current <= 0) {
      alert('already lowest');
      return;
    }

    attribute.lvl.current--;
    this.updatedAttribute.next(attribute);
  }
}
