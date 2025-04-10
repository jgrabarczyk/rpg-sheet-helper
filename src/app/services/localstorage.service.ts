import { Injectable } from '@angular/core';

import { JSONparse, JSONstringify } from '@util/json-mappers';
import { BehaviorSubject, map } from 'rxjs';

export type StoragePrefixes = 'dhii';
export type StorageSaveName = `${StoragePrefixes}+${string}`;

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  protected storageSubject$: BehaviorSubject<Storage> = new BehaviorSubject<Storage>(localStorage);

  public DHII_CharacterKeys$ = this.storageSubject$.asObservable().pipe(
    map(storage =>
      Object.keys(storage)
        .filter(key => key.includes('dhii'))
        .map(key => key.split('+')[1])
    )
  );
  
  setItem(obj: { key: StorageSaveName; value: object }) {
    localStorage.setItem(obj.key, JSONstringify(obj.value));
    this.storageSubject$.next(localStorage);
  }

  getItem<T = object>(key: StorageSaveName): T {
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

  removeItem(key: StorageSaveName) {
    localStorage.removeItem(key);
    this.storageSubject$.next(localStorage);
  }
}
