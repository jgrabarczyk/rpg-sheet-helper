import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-save-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  templateUrl: './save-dialog.component.html',
  styleUrl: './save-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaveDialogComponent {
  dialogRef: MatDialogRef<SaveDialogComponent, string | undefined | null> = inject(MatDialogRef<SaveDialogComponent>)
  saveName = new FormControl(null, Validators.required);

  save(): void {
    this.dialogRef.close(this.saveName.value)
  }
}
