import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { DHII_Character } from '@dhii/types/dark-heresy-ii';
import { BACKGROUNDS, DHII_Backgrounds } from '@dhii/types/dhii-background';
import { DHII_Homeworlds, HOMEWORLDS } from '@dhii/types/dhii-homeworlds';
import { DHII_Roles, ROLES } from '@dhii/types/dhii-role';

import { HeaderAccordionDataPipe } from './header-accordion-data/header-accordion-data.pipe';

/**
 * @todo add readonly option
 * @todo add wounds | experience | corruption | insanity
 *
 */
@Component({
  selector: 'app-sheet-header',
  standalone: true,
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    HeaderAccordionDataPipe,
    MatButtonModule,
    MatButtonToggleModule
  ],
  templateUrl: './sheet-header.component.html',
  styleUrl: './sheet-header.component.scss'
})
export class SheetHeaderComponent {
  protected homeworlds: DHII_Homeworlds = HOMEWORLDS;
  protected roles: DHII_Roles = ROLES;
  protected backgrounds: DHII_Backgrounds = BACKGROUNDS;

  @Input() public set character(char: DHII_Character) {
    if (!char) {
      throw Error('char is missing');
    }
    this.character_ = char;
    this.updateForm();
  }

  public get character(): DHII_Character {
    return this.character_;
  }

  private character_!: DHII_Character;

  @Input() public set editable(isEditable: boolean) {
    isEditable ? this.form.enable() : this.form.disable();
    this.editable_ = isEditable;
  }

  public get editable(): boolean {
    return this.editable_;
  }

  private editable_: boolean = false;

  @Output() saveCharacter = new EventEmitter();
  @Output() deleteCharacter = new EventEmitter();
  
  protected form: FormGroup = new FormGroup({
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

  private updateForm(): void {
    this.form.controls['characterName'].setValue(this.character_.details?.characterName);
    this.form.controls['age'].setValue(this.character_.details?.age);
    this.form.controls['homeworld'].setValue(this.character_.homeworld?.key);
    this.form.controls['background'].setValue(this.character_.background?.key);
    this.form.controls['role'].setValue(this.character_.role?.key);
  }
}
