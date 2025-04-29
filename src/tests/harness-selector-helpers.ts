import { HarnessLoader } from '@angular/cdk/testing';
import { MatButtonHarness } from '@angular/material/button/testing';

export function getButtonHarnessWithSelector(loader: HarnessLoader, selector: string) {
  return loader.getHarness(MatButtonHarness.with({ selector: `[name="${selector}"]` }));
}
