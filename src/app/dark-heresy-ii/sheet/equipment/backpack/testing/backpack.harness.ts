import { ContentContainerComponentHarness } from '@angular/cdk/testing';
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
  async tableHeader(){
    return this.locatorFor('div', '[name="backpackHeader"]')
  }
  async tableRows(){
    return this.locatorForAll('div', '[name="backpackRow"]')
  }
}
