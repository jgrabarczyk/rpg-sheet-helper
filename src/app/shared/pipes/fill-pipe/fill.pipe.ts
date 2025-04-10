import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fill',
  standalone: true
})
export class FillPipe implements PipeTransform {
  /**
   * Create array and propagate them with natural numbers from 0 to **value**
   * 
   * @param value number
   * @return Array<number> with **value** length
   */
  transform(value: number) {
    return [...Array(value)].map((_, i) => i + 1);
  }
}
