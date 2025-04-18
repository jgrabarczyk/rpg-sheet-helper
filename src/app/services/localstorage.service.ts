import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DHII_Character } from '@dhii/types/dark-heresy-ii';
import { ConfirmDialogComponent } from '@shared/dialogs/confirm-dialog/confirm-dialog.component';
import { SaveDialogComponent } from '@shared/dialogs/save-dialog/save-dialog.component';

import { JSONparse, JSONstringify } from '@util/json-mappers';
import { BehaviorSubject, filter, map, Observable, tap } from 'rxjs';

export type StoragePrefixes = 'dhii';
export type StorageSaveName = `${StoragePrefixes}+${string}`;

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private dialog: MatDialog = inject(MatDialog);

  protected storageSubject$: BehaviorSubject<Storage> = new BehaviorSubject<Storage>(localStorage);

  public readonly DHII_PREFIX = 'dhii';
  public DHII_CharacterKeys$ = this.storageSubject$.asObservable().pipe(
    map(storage =>
      Object.keys(storage)
        .filter(key => key.includes(this.DHII_PREFIX))
        .map(key => this.splitSaveName(key as StorageSaveName)[1])
    )
  );

  private readonly currentSaveName$: BehaviorSubject<StorageSaveName | null> =
    new BehaviorSubject<StorageSaveName | null>(null);

  saveCharacterToLocalStorage<T extends object>(character: T, prefix: StoragePrefixes) {
    return this.dialog
      .open<SaveDialogComponent, null, string>(SaveDialogComponent)
      .afterClosed()
      .pipe(
        filter(dialogData => !!dialogData),
        map(saveName => {
          const currentSaveName: StorageSaveName = `${prefix}+${saveName}`;
          this.currentSaveName$.next(currentSaveName);
          this.setItem({
            key: currentSaveName,
            value: character
          });
          return saveName!
        })
      );
  }

  loadCharacterFromLocalStorage(name: string, prefix: StoragePrefixes): DHII_Character {
    const currentSaveName: StorageSaveName = `${prefix}+${name}`;
    const character: DHII_Character = this.getItem<DHII_Character>(currentSaveName);
    this.currentSaveName$.next(currentSaveName);
    return character;
  }

  deleteCharacterFromLocalStorage(name: string, prefix: StoragePrefixes): Observable<true> {
    return this.dialog
      .open(ConfirmDialogComponent, {
        data: {
          text: 'Are you sure you want to delete the save "' + name + '"',
          title: 'Confirm deletion'
        }
      })
      .afterClosed()
      .pipe(
        filter(data => data),
        tap(() => this.removeItem(`${prefix}+${name}`))
      );
  }

  deleteCurrentCharacter(): Observable<true> {
    const currentSaveName: StorageSaveName | null = this.currentSaveName$.value;

    if (!currentSaveName) {
      throw Error('There is no currentSave to delete');
    }

    const [prefix, name] = this.splitSaveName(currentSaveName);
    return this.deleteCharacterFromLocalStorage(name, prefix);
  }


  loadCurrentCharacter(){
    const currentSaveName: StorageSaveName | null = this.currentSaveName$.value;

    if (!currentSaveName) {
      throw Error('There is no currentSave to load');
      
    }

    const [prefix, name] = this.splitSaveName(currentSaveName);
    return this.loadCharacterFromLocalStorage(name, prefix);
  }

  private setItem(obj: { key: StorageSaveName; value: object }) {
    localStorage.setItem(obj.key, JSONstringify(obj.value));
    this.storageSubject$.next(localStorage);
  }

  private getItem<T = object>(key: StorageSaveName): T {
    const item: string | null = this.storageSubject$.value.getItem(key);

    if (item === null) {
      throw Error(`There is no key ${key} in localStorage`);
    }

    const parsedItem: object = JSONparse(item);

    if (typeof parsedItem !== 'object') {
      throw Error(`Invalid JSONparse operation. parsedItem is not a object`);
    }
    return parsedItem as T;
  }

  private removeItem(key: StorageSaveName) {
    localStorage.removeItem(key);
    this.storageSubject$.next(localStorage);
  }

  private splitSaveName(key: StorageSaveName): [StoragePrefixes, string] {
    return key.split('+') as [StoragePrefixes, string];
  }
}
