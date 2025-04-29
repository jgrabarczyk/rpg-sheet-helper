import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircle as faCircleFilled } from '@fortawesome/free-solid-svg-icons';

import { FillPipe } from '@pipes/fill-pipe/fill.pipe';

import { RollboxComponent } from '../rollbox/rollbox.component';

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
    MatButtonModule,
    MatMenuModule,
    RollboxComponent
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
  @Input({required: true}) label!: string;
  @Input() min = 0;
  @Input() max: number = 100;
  @Input() maxLevel: number = 0;
  @Input() currentLevel: number = 0;
  @Input() showReroll: boolean = false;
  @Input() mode: 'play' | 'create' = 'play';
  @Input() set editable(isEditable: boolean) {
    isEditable ? this.field.enable() : this.field.disable();
  }
  @Input() set value(newValue: number) {
    this.field.setValue(newValue);
  }

  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() increase: EventEmitter<void> = new EventEmitter<void>();
  @Output() decrease: EventEmitter<void> = new EventEmitter<void>();
  @Output() roll: EventEmitter<number> = new EventEmitter<number>();

  protected field: FormControl<number> = new FormControl(
    { value: 0, disabled: true },
    { nonNullable: true }
  );

  protected faCircle = faCircle;
  protected faCircleFilled = faCircleFilled;

  change() {
    this.valueChange.emit(this.field.value);
  }
}
