import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Characteristic } from '../../../types/characteristic';
import { AttributeComponent } from '../../../sheet/attribute/attribute.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
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
  @Input() attributes: Characteristic[] = [];
  @Input() type: 'range' | 'number' = 'number';

  @Output() updateAttribute = new EventEmitter<Characteristic>();

  updateValue(value: number, index: number) {
    this.attributes[index].value = value;
    this.updateAttribute.next(this.attributes[index]);
  }
  increase(index: number) {
    const attribute: Characteristic = this.attributes[index];
    attribute.lvl
    this.updateAttribute.next(attribute);
  }
  decrease(index: number) {
    const attribute: Characteristic = this.attributes[index];

    this.updateAttribute.next(attribute);
  }
}
