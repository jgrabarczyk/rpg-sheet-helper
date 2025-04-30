import { KeyValue } from '@angular/common';
import { Directive, ElementRef, inject, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appGridTemplateAreas]'
})
export class GridTemplateAreasDirective<T> {
  @Input() public set appGridTemplateAreas(gridData: KeyValue<T, string>[]) {
    const keyGrid: string = gridData.map(v => v.key).join(' ');
    this.el.nativeElement.style.display = 'grid';
    this.el.nativeElement.style.gridTemplateAreas = `'${keyGrid}'`;
    this.el.nativeElement.style.gridTemplateColumns = `repeat(${gridData.length}, minmax(55px, 1fr))`;
  }
  
  private el: ElementRef<HTMLElement> = inject(ElementRef<HTMLElement>);
}
