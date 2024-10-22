import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spread',
  standalone: true
})
export class SpreadPipe implements PipeTransform {
  transform(value?: string[]): string {
    return value?.join(',  ') ?? '';
  }
}
