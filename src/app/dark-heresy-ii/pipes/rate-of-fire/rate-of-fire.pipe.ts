import { Pipe, PipeTransform } from '@angular/core';
import { RateOfFire } from '@dhii/types/items/weapon/weapon';

@Pipe({
  name: 'rateOfFire',
  standalone: true
})
export class RateOfFirePipe implements PipeTransform {
  transform(value: RateOfFire | string): string {
    if (typeof value === 'string') {
      return value;
    }

    let result: string = (value.single ? 'S' : '-') + '/';
    result += ('semi' in value ? value.semi : '-') + '/';
    result += 'full' in value ? value.full : '-';
    return result;
  }
}
