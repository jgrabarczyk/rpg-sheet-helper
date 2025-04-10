import { Pipe, PipeTransform } from '@angular/core';

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
  transform(value?: string[], separator: string =  ', '): string {
    return value?.join(separator) ?? '';
  }
}
