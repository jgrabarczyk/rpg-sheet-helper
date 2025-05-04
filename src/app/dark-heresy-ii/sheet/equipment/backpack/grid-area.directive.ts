import { Directive, ElementRef, inject, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appGridArea]',
})
export class GridAreaDirective {
  @Input() public set appGridArea(gridData: string | number | symbol) {
    this.el.nativeElement.style.gridArea = String(gridData);
  }

  private el: ElementRef<HTMLElement> = inject(ElementRef<HTMLElement>);
}
