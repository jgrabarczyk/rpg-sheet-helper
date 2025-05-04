import {
  ContentContainerComponentHarness,
  TestElement,
} from '@angular/cdk/testing';
import { MatCardHarness } from '@angular/material/card/testing';

export class RoleCardHarness extends ContentContainerComponentHarness {
  static hostSelector = 'app-role-card';

  public async click(): Promise<void> {
    const host: TestElement = await this.host();
    return host.click();
  }

  public async getTitleText(): Promise<string> {
    const card: MatCardHarness = await this.getHarness(MatCardHarness);
    return card.getTitleText();
  }
}
