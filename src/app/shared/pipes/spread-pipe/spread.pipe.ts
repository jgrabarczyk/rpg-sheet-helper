import { Pipe, PipeTransform } from '@angular/core';
import { DHII_BackgroundEquipment } from '@dhii/types/dhii-background';

@Pipe({
  name: 'spread',
  standalone: true
})
export class SpreadPipe implements PipeTransform {
  /**
   * Convert array into single string
   * @param value string[]
   * @param separator string used as a Array.join() argument
   * @returns string
   */
  transform(value?: string[] | DHII_BackgroundEquipment[], separator: string = ', '): string {
    if (!value) {
      return '';
    }
    if (typeof value[0] === 'string') {
      return value?.join(separator);
    }

    return value?.map(el => (typeof el === 'object' ? el.value : el))?.join(separator) ?? '';
  }
}
