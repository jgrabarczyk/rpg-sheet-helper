import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fill',
  standalone: true
})
export class FillPipe implements PipeTransform {

  transform(value: number) {
    return [...Array(value)].map((v, i) => i + 1)
    
    
  }

}
