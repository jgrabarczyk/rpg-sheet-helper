import {
  AsyncFactoryFn,
  ContentContainerComponentHarness,
  TestElement
} from '@angular/cdk/testing';
import { MatCardHarness } from '@angular/material/card/testing';

export class BackpackHarness extends ContentContainerComponentHarness {
  static hostSelector = 'app-backpack';

  async getTitleText() {
    const card: MatCardHarness = await this.getHarness(MatCardHarness);
    return card.getTitleText();
  }
  async getSubtitleText() {
    const card: MatCardHarness = await this.getHarness(MatCardHarness);
    return card.getSubtitleText();
  }
  async getTableHeader() {
    const headers: AsyncFactoryFn<TestElement> = await this.locatorFor('[name="backpackHeader"]');
    return await headers();
  }
  async getTableRows() {
    const rows: AsyncFactoryFn<TestElement[]> = this.locatorForAll('[name="backpackRow"]');
    return await rows();
  }
}
