import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { DHII_Talents } from '@dhii/types/dhii-talents';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-talents-group',
    imports: [MatDividerModule, MatListModule, MatCardModule, CommonModule],
    templateUrl: './talents-group.component.html',
    styleUrl: './talents-group.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalentsGroupComponent {
  @Input() talents!: DHII_Talents;
  @Input() title?: string;
  @Input() subtitle?: string;
}
