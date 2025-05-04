import { Pipe, PipeTransform } from '@angular/core';
import { DHII_AttributeName } from '@dhii/types/dhii-attribute';

@Pipe({ name: 'isBonusAttribute', standalone: true })
export class IsBonusAttributePipe implements PipeTransform {
  public transform(
    value: DHII_AttributeName,
    bonusArray?: [DHII_AttributeName, DHII_AttributeName]
  ): boolean {
    return !!bonusArray?.includes(value);
  }
}
