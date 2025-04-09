import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'or',
  standalone: true
})
export class OrPipe implements PipeTransform {
  transform(value: string[][] | undefined): string[] {
    // return value?.join(' or ');
    return value?.map(el => el.join(' or ')) ?? [''];
  }
}
