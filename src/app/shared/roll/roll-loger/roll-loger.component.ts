import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { Observable } from 'rxjs';
import { LoggerItem, RollService } from '../roll.service';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
    selector: 'app-roll-loger',
    imports: [CommonModule, MatDividerModule, MatCardModule, MatListModule],
    templateUrl: './roll-loger.component.html',
    styleUrl: './roll-loger.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RollLogerComponent {
  private rollService: RollService = inject(RollService)
  protected loggerStack$: Observable<LoggerItem[]> = this.rollService.loggerStack$
}
