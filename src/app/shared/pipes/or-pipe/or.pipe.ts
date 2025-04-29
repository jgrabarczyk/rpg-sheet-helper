import { Pipe, PipeTransform } from '@angular/core';
import { DHII_BackgroundEquipment } from '@dhii/types/dhii-background';

@Pipe({
  name: 'or',
  standalone: true
})
export class OrPipe implements PipeTransform {
  /**
   * Merge each element of array into string combined by *or*
   * @param value (string | DHII_BackgroundEquipment)[][]
   * @returns string[]
   */
  transform(value: (string | DHII_BackgroundEquipment)[][] | undefined): string[] {
    if (!value || value.length === 0) {
      return [''];
    }

    return value.map(el => el.map(e => (typeof e === 'object' ? e.value : e)).join(' or '));
  }
}
