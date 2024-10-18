import { Homeworld, HomeworldNames } from './../data/homeworlds';
import { CommonModule } from '@angular/common';
import { DHII_SheetService } from './../service/dhii-sheet.service';
import { Component, inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { HomeworldCardComponent } from '../homeworld-card/homeworld-card.component';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-dark-heresy-ii-creator',
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HomeworldCardComponent
  ],
  templateUrl: './dark-heresy-ii-creator.component.html',
  styleUrl: './dark-heresy-ii-creator.component.scss'
})
export class DarkHeresyIICreatorComponent {
  protected sheetService: DHII_SheetService = inject(DHII_SheetService);
  @ViewChild('stepper') stepper?: MatStepper;

  firstFormGroup: FormGroup = new FormGroup({
    firstCtrl: new FormControl()
  });
  secondFormGroup: FormGroup = new FormGroup({
    secondCtrl: new FormControl()
  });

  chooseHomeworld([name, homeworld]: [HomeworldNames, Homeworld]) {
    console.log(name, homeworld);

    this.sheetService.updateHomeworld(homeworld);
    this.stepper?.next();
  }
}
