import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { TwoColumnStepComponent } from '@dhii/stepper-partials/two-column-step/two-column-step.component';
import { SheetComponent } from '../../../sheet/sheet.component';
import { DHII_CharacterDetails } from '@dhii/types/dark-heresy-ii';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SaveDialogComponent } from 'shared/dialogs/save-dialog/save-dialog.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-final-details-step',
  standalone: true,
  imports: [
    TwoColumnStepComponent,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    SheetComponent,
    CommonModule,
    MatDialogModule
  ],
  templateUrl: './final-details-step.component.html',
  styleUrl: './final-details-step.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinalDetailsStepComponent {
  private dialog: MatDialog = inject(MatDialog);
  @Input() details?: DHII_CharacterDetails;
  @Output() resetAll: EventEmitter<void> = new EventEmitter();
  @Output() setDetails: EventEmitter<DHII_CharacterDetails> = new EventEmitter();
  @Output() save: EventEmitter<string> = new EventEmitter();

  form: FormGroup = new FormGroup({
    characterName: new FormControl<string>(
      <string>this.details?.characterName,
      Validators.required
    ),
    age: new FormControl<number>(
      <number>this.details?.age,
      Validators.compose([
        Validators.required,
        Validators.min(10),
        Validators.max(999),
        Validators.pattern('^[0-9]*$')
      ])
    )
  });

  saveCharacterDetails() {
    if (this.form.invalid) {
      return;
    }

    this.setDetails.emit(this.form.value);
  }

  saveSheet() {
    this.saveCharacterDetails();

    this.dialog
      .open(SaveDialogComponent)
      .afterClosed()
      .pipe(filter(dialogData => !!dialogData))
      .subscribe(dialogData => this.save.emit(dialogData));
  }
}
