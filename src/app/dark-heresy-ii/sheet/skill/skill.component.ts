import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircle as faCircleFilled } from '@fortawesome/free-solid-svg-icons';
import { FillPipe } from '../../../utility/fill-pipe/fill.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { RollboxComponent } from "../rollbox/rollbox.component"; 

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [
    FontAwesomeModule,
    FillPipe,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RollboxComponent
],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { subscriptSizing: 'dynamic' }
    }
  ],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {
  @Input() label?: string;
  @Input() maxLevel: number = 0;
  @Input() currentLevel: number = 0;
  @Input() min = 0;
  @Input() max: number = 100;
  @Input() editable: boolean = false;

  @Input() set value(newValue: number) {
    this.field.setValue(newValue <= 1 ? 1 : newValue);
  }

  @Output() increase: EventEmitter<void> = new EventEmitter<void>();
  @Output() decrease: EventEmitter<void> = new EventEmitter<void>();
  @Output() roll: EventEmitter<number> = new EventEmitter<number>();

  protected field: FormControl<number> = new FormControl(
    { value: 0, disabled: true },
    { nonNullable: true }
  );

  protected faCircle = faCircle;
  protected faCircleFilled = faCircleFilled;
}
