import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-sheet-header',
  standalone: true,
  imports: [MatCardModule, ReactiveFormsModule, MatFormFieldModule,  MatInputModule, MatSelectModule],
  templateUrl: './sheet-header.component.html',
  styleUrl: './sheet-header.component.scss'
})
export class SheetHeaderComponent {
  form: FormGroup = new FormGroup({
    characterName: new FormControl()
  })
}
