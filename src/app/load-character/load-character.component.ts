import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MainNavigationComponent } from '../shared/main-navigation/main-navigation.component';
import { MatListModule } from '@angular/material/list';
import { DHII_SheetService } from 'dark-heresy-ii/service/dhii-sheet.service';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-load-character',
  standalone: true,
  imports: [RouterLink, MainNavigationComponent, MatCardModule, MatListModule, MatButtonModule, CommonModule],
  templateUrl: './load-character.component.html',
  styleUrl: './load-character.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadCharacterComponent {
  private sheetService = inject(DHII_SheetService);

  saveNames$ = this.sheetService.dhiiLocalStorageSaveNames$;

  loadCharacter(item: string): void {
    this.sheetService.loadCharacterFromLocalStorage(item)
  }

  deleteCharacter(item: string): void {
    this.sheetService.deleteCharacterFromLocalStorage(item);
  }
}
