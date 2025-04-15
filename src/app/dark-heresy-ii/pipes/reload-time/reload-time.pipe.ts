import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reloadTime',
  standalone: true
})
export class ReloadTimePipe implements PipeTransform {
  transform(reloadTimeInActions: number): string {
    if (reloadTimeInActions === 1) {
      return 'Half';
    } else {
      return reloadTimeInActions / 2 + ' Full';
    }
  }
}
