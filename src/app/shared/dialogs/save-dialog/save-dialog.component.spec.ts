import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveDialogComponent } from './save-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatInputHarness } from '@angular/material/input/testing';

import { dialogRefMock } from '../../../../tests/mocks/dialog-ref';
import { MatButtonHarness } from '@angular/material/button/testing';
import { getButtonHarnessWithSelector } from '../../../../tests/harness-selector-helpers';

describe('SaveDialogComponent', () => {
  let fixture: ComponentFixture<SaveDialogComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaveDialogComponent, NoopAnimationsModule],
      providers: [{ provide: MatDialogRef, useValue: dialogRefMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(SaveDialogComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should correclty save data', async () => {
    const inputValue: string = 'custom save';
    const saveNameInput: MatInputHarness = await loader.getHarness(MatInputHarness);
    await saveNameInput.setValue(inputValue);
    const saveButton: MatButtonHarness = await getButtonHarnessWithSelector(loader, 'save');
    await saveButton.click();
    expect(dialogRefMock.close).toHaveBeenCalledWith(inputValue);
  });
});
