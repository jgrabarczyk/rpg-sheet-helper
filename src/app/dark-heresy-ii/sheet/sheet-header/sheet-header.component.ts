import { Component, Input } from '@angular/core';
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
  private editable_: boolean = false;
  @Input() set editable(isEditable: boolean) {
    isEditable ? this.form.enable() : this.form.disable();
    this.editable_ = isEditable;
  }

  get editable(){
    return this.editable_;
  }

  
  form: FormGroup = new FormGroup({
    characterName: new FormControl({
      value: '',
      disabled: true,
    }),
    homeworld: new FormControl({
      value: '',
      disabled: true,
    }),
    background: new FormControl({
      value: '',
      disabled: true,
    }),
    role: new FormControl({
      value: '',
      disabled: true,
    }),
  })
}
