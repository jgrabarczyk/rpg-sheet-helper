import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators, FormArray } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-dynamic-list',
  standalone: true,
  imports: [
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    ReactiveFormsModule,
  ],
  templateUrl: './dynamic-list.component.html',
  styleUrl: './dynamic-list.component.scss'
})
export class DynamicListComponent {
  @Input() basedOn?: Map<string, unknown> = new Map();
  @Input() items: string[] = [];
  @Input() set optionalItems(newOptionalItems: string[][]) {
    this.optionals = newOptionalItems;
    this.form = new FormArray<FormControl>([]);
    this.optionals.forEach(() => this.form.push(new FormControl(null, Validators.required)));
  }
  @Output() update: EventEmitter<string[]> = new EventEmitter<string[]>();

  protected optionals: string[][] = [];
  protected form = new FormArray<FormControl>([]);

  save() {
    this.update.emit([...this.form.value, ...this.items]);
  }
}
