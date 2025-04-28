import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '@shared/dialogs/confirm-dialog/confirm-dialog.component';
import { SaveDialogComponent } from '@shared/dialogs/save-dialog/save-dialog.component';

import { JSONparse, JSONstringify } from '@util/json-mappers';
import { BehaviorSubject, filter, map, Observable, tap } from 'rxjs';

export type StoragePrefixes = 'dhii';
export type StorageSaveName = `${StoragePrefixes}+${string}`;
export type SaveNameConfig = { name: string; prefix: StoragePrefixes };

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private dialog: MatDialog = inject(MatDialog);

  public readonly DHII_PREFIX: StoragePrefixes = 'dhii';

  protected storageSubject$: BehaviorSubject<Storage> = new BehaviorSubject<Storage>(localStorage);
  public DHII_CharacterKeys$ = this.storageSubject$.asObservable().pipe(
    map(storage =>
      Object.keys(storage)
        .filter(key => key.includes(this.DHII_PREFIX))
        .map(key => this.splitSaveName(key as StorageSaveName)[1])
        .sort()
    )
  );

  private readonly currentSaveName$: BehaviorSubject<StorageSaveName | null> =
    new BehaviorSubject<StorageSaveName | null>(null);

  public saveCharacterToLocalStorage<T extends object>(character: T, prefix: StoragePrefixes): Observable<string> {
    return this.dialog
      .open<SaveDialogComponent, null, string>(SaveDialogComponent)
      .afterClosed()
      .pipe(
        filter(Boolean),
        map(name => {
          const currentSaveName: StorageSaveName = this.toSaveName({ name, prefix });
          this.currentSaveName$.next(currentSaveName);
          this.setItem({
            key: currentSaveName,
            value: character
          });
          return name;
        })
      );
  }

  public loadCharacterFromLocalStorage<T>(name: string, prefix: StoragePrefixes): T {
    const currentSaveName: StorageSaveName = this.toSaveName({ name, prefix });
    const character: T = this.getItem<T>(currentSaveName);
    this.currentSaveName$.next(currentSaveName);
    return character;
  }

  public deleteCharacterFromLocalStorage(name: string, prefix: StoragePrefixes): Observable<true> {
    const saveName: StorageSaveName = this.toSaveName({ name, prefix });
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
        tap(() => {
          this.removeItem(saveName);
          if (saveName === this.currentSaveName$.value) {
            this.currentSaveName$.next(null);
          }
        })
      );
  }

  public deleteCurrentCharacter(): Observable<true> {
    const currentSaveName: StorageSaveName | null = this.currentSaveName$.value;

    if (!currentSaveName) {
      throw Error('There is no currentSave to delete');
    }

    const [prefix, name] = this.splitSaveName(currentSaveName);
    return this.deleteCharacterFromLocalStorage(name, prefix).pipe();
  }

  public loadCurrentCharacter<T>(): T {
    const currentSaveName: StorageSaveName | null = this.currentSaveName$.value;

    if (!currentSaveName) {
      throw Error('There is no currentSave to load');
    }
    const [prefix, name] = this.splitSaveName(currentSaveName);
    return this.loadCharacterFromLocalStorage<T>(name, prefix);
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

  private toSaveName(config: SaveNameConfig): StorageSaveName {
    return `${config.prefix}+${config.name}`;
  }
}
