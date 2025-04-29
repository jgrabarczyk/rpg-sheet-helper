import { ContentContainerComponentHarness, TestElement } from '@angular/cdk/testing';
import { MatCardHarness } from '@angular/material/card/testing';

export class HomeworldCardHarness extends ContentContainerComponentHarness {
  static hostSelector = 'app-homeworld-card';

  async click() {
    const host: TestElement = await this.host();
    return host.click();
  }

  async getTitleText() {
    const card: MatCardHarness = await this.getHarness(MatCardHarness)
    return card.getTitleText();
  }
}
