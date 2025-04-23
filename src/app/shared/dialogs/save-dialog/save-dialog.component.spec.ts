/* eslint-disable @typescript-eslint/typedef */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveDialogComponent } from './save-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatInputHarness } from '@angular/material/input/testing';

import { dialogRefMock } from '../../../../tests/mocks/dialog-ref';
import { MatButtonHarness } from '@angular/material/button/testing';

describe('SaveDialogComponent', () => {
  let fixture: ComponentFixture<SaveDialogComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaveDialogComponent],
      providers: [{ provide: MatDialogRef, useValue: dialogRefMock }, provideAnimations()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaveDialogComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should correclty save data', async () => {
    const inputValue: string = 'custom save'; 
    const input = await loader.getHarness(MatInputHarness);
    await input.setValue(inputValue)
    const button = await loader.getHarness(MatButtonHarness.with({text: 'Save'}))
    await button.click()
    expect(dialogRefMock.close).toHaveBeenCalledWith(inputValue)
  });
});
