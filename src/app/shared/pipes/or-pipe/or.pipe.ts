import { Pipe, PipeTransform } from '@angular/core';
import { DHII_BackgroundEquipment } from '@dhii/types/dhii-background';

@Pipe({
  name: 'or',
  standalone: true
})
export class OrPipe implements PipeTransform {
  /**
   * Merge each string array into string combined by *or*
   * @param value string[][]
   * @returns string[]
   */
  transform(value: (string | DHII_BackgroundEquipment)[][] | undefined): string[] {
    if (!value) {
      return [''];
    }
    if (typeof value[0] === 'string') {
      return value?.map(el => el.join(' or ')) ?? [''];
    }

    return (
      value?.map(el => el.map(e => (typeof e === 'object' ? e.value : e)).join(' or ')) ?? ['']
    );
  }
}
