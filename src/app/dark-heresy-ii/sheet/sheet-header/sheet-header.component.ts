import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DHII_Character } from '@dhii/types/dark-heresy-ii';
import { BACKGROUNDS, DHII_Backgrounds } from '@dhii/types/dhii-background';
import { DHII_Homeworlds, HOMEWORLDS } from '@dhii/types/dhii-homeworlds';
import { DHII_Roles, ROLES } from '@dhii/types/dhii-role';

/**
 * @todo add readonly option
 * @todo show homeworld bonus 
 * @todo show background bonus 
 */
@Component({
  selector: 'app-sheet-header',
  standalone: true,
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './sheet-header.component.html',
  styleUrl: './sheet-header.component.scss'
})
export class SheetHeaderComponent {
  protected homeworlds: DHII_Homeworlds = HOMEWORLDS;
  protected roles: DHII_Roles = ROLES;
  protected backgrounds: DHII_Backgrounds = BACKGROUNDS;

  @Input() set character(char: DHII_Character | null) {
    if (!char) {
      return;
    }
    this.character_ = char;
    this.updateForm();
  }

  get character() {
    return this.character_;
  }

  private character_: DHII_Character | null = null;

  @Input() set editable(isEditable: boolean) {
    isEditable ? this.form.enable() : this.form.disable();
    this.editable_ = isEditable;
  }

  get editable() {
    return this.editable_;
  }

  private editable_: boolean = false;

  form: FormGroup = new FormGroup({
    characterName: new FormControl({
      value: '',
      disabled: true
    }),
    age: new FormControl({
      value: '',
      disabled: true
    }),
    homeworld: new FormControl({
      value: '',
      disabled: true
    }),
    background: new FormControl({
      value: '',
      disabled: true
    }),
    role: new FormControl({
      value: '',
      disabled: true
    })
  });

  private updateForm() {
    if (this.character_ === null) {
      return;
    }
    this.form.controls['characterName'].setValue(this.character_.details?.characterName);
    this.form.controls['age'].setValue(this.character_.details?.age);
    this.form.controls['homeworld'].setValue(this.character_.homeworld?.key);
    this.form.controls['background'].setValue(this.character_.background?.key);
    this.form.controls['role'].setValue(this.character_.role?.key);
  }
}
