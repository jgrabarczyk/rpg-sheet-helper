import { Pipe, PipeTransform } from '@angular/core';

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
  transform(value: string[][] | undefined): string[] {
    return value?.map(el => el.join(' or ')) ?? [''];
  }
}
