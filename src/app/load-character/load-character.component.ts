import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LocalstorageService, StoragePrefixes } from 'services/localstorage.service';
import { MainNavigationComponent } from '../shared/main-navigation/main-navigation.component';
import { MatListModule } from '@angular/material/list';
import { DHII_SheetService } from 'dark-heresy-ii/service/dhii-sheet.service';
import { DHII_Character } from '@dhii/types/dark-heresy-ii';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '@shared/dialogs/confirm-dialog/confirm-dialog.component';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

const PREFIX: StoragePrefixes = 'dhii';

@Component({
  selector: 'app-load-character',
  standalone: true,
  imports: [RouterLink, MainNavigationComponent, MatCardModule, MatListModule, MatButtonModule, CommonModule],
  templateUrl: './load-character.component.html',
  styleUrl: './load-character.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadCharacterComponent {
  private dialog: MatDialog = inject(MatDialog);
  private storageService = inject(LocalstorageService);
  private sheetService = inject(DHII_SheetService);
  private router = inject(Router);

  saveNames$ = this.storageService.DHII_CharacterKeys$;

  loadCharacter(item: string): void {
    const character: DHII_Character = this.storageService.getItem<DHII_Character>(
      `${PREFIX}+${item}`
    );
    this.sheetService.updateCharacter(character);
    this.router.navigate(['/sheet']);
  }

  deleteCharacter(item: string): void {
    this.dialog
      .open(ConfirmDialogComponent, {
        data: {
          text: 'Are you sure you want to delete the save "' + item + '"',
          title: 'Confirm deletion'
        }
      })
      .afterClosed()
      .pipe(filter(data => data))
      .subscribe(() => this.storageService.removeItem(`${PREFIX}+${item}`));
  }
}
