import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircle as faCircleFilled } from '@fortawesome/free-solid-svg-icons';
import { FillPipe } from '../../utility/fill-pipe/fill.pipe';

@Component({
  selector: 'app-attribute',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, FillPipe, FontAwesomeModule],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.scss',
})
export class AttributeComponent {
  @Input() label?: string;
  @Input() min = 0;
  @Input() max: number = 100;
  @Input() type: 'range' | 'number' = 'number';
  @Input() set value(newValue: number) {
    this.field.setValue(newValue);
  }

  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();

  protected field: FormControl<number> = new FormControl();

  protected faCircle = faCircle;
  protected faCircleFilled = faCircleFilled;
  
  change() {
    this.valueChange.emit(this.field.value);
  }

  updateRange(value: number) {
    this.field.setValue(value);
    this.valueChange.emit(this.field.value);
  }
}
