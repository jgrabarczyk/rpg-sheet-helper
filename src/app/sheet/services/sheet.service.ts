import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Characteristic } from '../../types/characteristic';
@Injectable({
  providedIn: 'root',
})
export class SheetService {
  protected attributesSubject$: BehaviorSubject<Characteristic<any>[]> =
    new BehaviorSubject<Characteristic[]>([]);

  public attributes$: Observable<Characteristic[]> =
    this.attributesSubject$.asObservable();

  update(attribute: Characteristic) {
    console.log("🚀 ~ SheetService ~ update ~ attribute:", attribute)
    const newList = this.attributesSubject$.value;
    newList.find((el) => el.name === attribute.name)?.value === attribute.value;
    this.attributesSubject$.next(newList);
  }


}
