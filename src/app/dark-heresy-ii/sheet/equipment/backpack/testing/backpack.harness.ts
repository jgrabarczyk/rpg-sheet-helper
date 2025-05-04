import {
  AsyncFactoryFn,
  ContentContainerComponentHarness,
  TestElement,
} from '@angular/cdk/testing';
import { MatCardHarness } from '@angular/material/card/testing';

export class BackpackHarness extends ContentContainerComponentHarness {
  static hostSelector = 'app-backpack';

  public async getTitleText(): Promise<string> {
    const card: MatCardHarness = await this.getHarness(MatCardHarness);
    return card.getTitleText();
  }

  public async getSubtitleText(): Promise<string> {
    const card: MatCardHarness = await this.getHarness(MatCardHarness);
    return card.getSubtitleText();
  }

  public async getTableHeader(): Promise<TestElement> {
    const headers: AsyncFactoryFn<TestElement> = await this.locatorFor(
      '[name="backpackHeader"]'
    );
    return await headers();
  }

  public async getTableRows(): Promise<TestElement[]> {
    const rows: AsyncFactoryFn<TestElement[]> = this.locatorForAll(
      '[name="backpackRow"]'
    );
    return await rows();
  }
}
