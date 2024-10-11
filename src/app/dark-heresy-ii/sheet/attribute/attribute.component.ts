import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircle as faCircleFilled } from '@fortawesome/free-solid-svg-icons';
import { FillPipe } from '../../../utility/fill-pipe/fill.pipe';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-attribute',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FillPipe,
    FontAwesomeModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { subscriptSizing: 'dynamic' }
    }
  ],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.scss'
})
export class AttributeComponent {
  @Input() label?: string;
  @Input() min = 0;
  @Input() max: number = 100;
  @Input() maxLevel: number = 0;
  @Input() currentLevel: number = 0;
  @Input() editable: boolean = false;
  @Input() set value(newValue: number) {
    this.field.setValue(newValue);
  }

  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();

  @Output() increase: EventEmitter<void> = new EventEmitter<void>();
  @Output() decrease: EventEmitter<void> = new EventEmitter<void>();

  protected field: FormControl<number> = new FormControl(
    { value: 0, disabled: !this.editable },
    { nonNullable: true }
  );

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
