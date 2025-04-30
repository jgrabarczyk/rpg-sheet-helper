import { CommonModule, KeyValue } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { GridTemplateAreasDirective } from './table-grid.directive';
import { GridAreaDirective } from './grid-area.directive';


export type TableData<T> ={
  data: T[];
  headers: KeyValue<keyof T, string>[]
}

@Component({
    selector: 'app-backpack',
    imports: [MatCardModule, GridTemplateAreasDirective, GridAreaDirective, CommonModule],
    templateUrl: './backpack.component.html',
    styleUrl: './backpack.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: []
})
export class BackpackComponent<T> {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input({required: true}) table!: TableData<T>;
}
