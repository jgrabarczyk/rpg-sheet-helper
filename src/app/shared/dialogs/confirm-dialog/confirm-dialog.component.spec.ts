import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogComponent } from './confirm-dialog.component';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  dialogClose,
  DialogCloseSpy,
} from '../../../../tests/mocks/dialog-ref';
import { MatButtonHarness } from '@angular/material/button/testing';
import { getButtonHarnessWithSelector } from '../../../../tests/harness-selector-helpers';

describe('ConfirmDialogComponent', () => {
  let fixture: ComponentFixture<ConfirmDialogComponent>;
  let loader: HarnessLoader;
  const dialogRefMock: DialogCloseSpy = dialogClose();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmDialogComponent, NoopAnimationsModule],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefMock },
        {
          provide: MAT_DIALOG_DATA,
          useValue: { title: 'test title', text: 'test text' },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmDialogComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should close with true on confirm', async () => {
    const button: MatButtonHarness = await getButtonHarnessWithSelector(
      loader,
      'confirm'
    );
    await button.click();
    expect(dialogRefMock.close).toHaveBeenCalledWith(true);
  });
  it('should close with no data on cancel', async () => {
    const button: MatButtonHarness = await getButtonHarnessWithSelector(
      loader,
      'cancel'
    );
    await button.click();
    expect(dialogRefMock.close).toHaveBeenCalled();
  });
});
