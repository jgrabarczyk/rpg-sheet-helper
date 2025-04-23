import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogComponent } from './confirm-dialog.component';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { provideAnimations } from '@angular/platform-browser/animations';
import { dialogRefMock } from '../../../../tests/mocks/dialog-ref';
import { MatButtonHarness } from '@angular/material/button/testing';

describe('ConfirmDialogComponent', () => {
  let fixture: ComponentFixture<ConfirmDialogComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefMock },
        { provide: MAT_DIALOG_DATA, useValue: {title: 'test title', text: 'test text'} },
         provideAnimations()
        ]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmDialogComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should close with true on confirm', async () => {
    const button: MatButtonHarness = await loader.getHarness(MatButtonHarness.with({ text: 'Confirm' }));
    await button.click();
    expect(dialogRefMock.close).toHaveBeenCalledWith(true)
  });
  it('should close with no data on cancel', async () => {
    const button: MatButtonHarness = await loader.getHarness(MatButtonHarness.with({ text: 'Confirm' }));
    await button.click();
    expect(dialogRefMock.close).toHaveBeenCalled()
  });
});
