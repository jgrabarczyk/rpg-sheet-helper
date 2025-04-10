import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { Observable } from 'rxjs';
import { LoggerItem, RollService } from '../roll-service';

@Component({
  selector: 'app-roll-loger',
  standalone: true,
  imports: [CommonModule, MatDividerModule],
  templateUrl: './roll-loger.component.html',
  styleUrl: './roll-loger.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RollLogerComponent {
  private rollService: RollService = inject(RollService)

  public loggerStack$: Observable<LoggerItem[]> = this.rollService.loggerStack$
}
