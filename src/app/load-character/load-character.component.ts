import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { DHII_SheetService } from 'dark-heresy-ii/service/dhii-sheet.service';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-load-character',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatListModule, MatButtonModule, CommonModule],
  templateUrl: './load-character.component.html',
  styleUrl: './load-character.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadCharacterComponent {
  private sheetService = inject(DHII_SheetService);

  protected saveNames$ = this.sheetService.dhiiLocalStorageSaveNames$;

  protected loadCharacter(item: string): void {
    this.sheetService.loadCharacterFromLocalStorage(item)
  }

  protected deleteCharacter(item: string): void {
    this.sheetService.deleteCharacterFromLocalStorage(item);
  }
}
