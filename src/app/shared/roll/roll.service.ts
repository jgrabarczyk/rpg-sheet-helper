import { Injectable } from '@angular/core';
import { DiceRoll, Roll } from '../../types/roll';

import { BehaviorSubject } from 'rxjs';

export interface LoggerItem {
  message: string;
  title: string;
  id: number;
}

export type LoggerDiceRoll =
  | {
      roll: DiceRoll;
      title: string;
      modifier?: 'bonus' | 'penality';
      type: 'default';
    }
  | {
      roll: DiceRoll;
      title?: string;
      modifier?: 'bonus' | 'penality';
      type: 'skipLog';
    };

@Injectable({
  providedIn: 'root'
})
export class RollService {
  private idTracker: number = 0;
  private loggerStackSubject$ = new BehaviorSubject<LoggerItem[]>([]);

  public loggerStack$ = this.loggerStackSubject$.asObservable();

  rollDices(loggerRoll: LoggerDiceRoll): number {
    const [diceQuantity, diceFaces] = loggerRoll.roll.split('d').map(el => Number(el));

    const results: number[] = Array.from(
      { length: diceQuantity },
      () => Math.floor(Math.random() * diceFaces) + 1
    ).sort((a, b) => a - b);

    if (loggerRoll.modifier === 'bonus') {
      results.shift();
    } else if (loggerRoll.modifier === 'penality') {
      results.pop();
    }

    const final: number = results.reduce((acc, current) => acc + current);

    if (loggerRoll.type === 'default') {
      const message: string = `Rolling:${loggerRoll.roll} <br/> Result:${final}`;
      const title: string = loggerRoll.title;
      this.addToStack({
        message,
        title
      });
    }
    return final;
  }

  rollTest(roll: Roll) {
    const testValue: number = this.rollDices({
      roll: '1d100',
      type: 'skipLog',
      title: roll.name
    });

    const difficultyTier: number =
      Math.abs(Math.floor(testValue / 10) - Math.floor(roll.chance / 10)) + 1;

    const message: string = this.composeRollMessage({
      roll,
      testValue,
      difficultyTier
    });

    const title: string = 'RollTest ' + roll.name;

    this.addToStack({
      message,
      title
    });
  }

  private addToStack(item: Omit<LoggerItem, 'id'>) {
    const stack: LoggerItem[] = this.loggerStackSubject$.value;
    stack.push({ ...item, id: this.idTracker++ });
    this.loggerStackSubject$.next(stack);
  }

  private composeRollMessage(data: {
    roll: Roll;
    testValue: number;
    difficultyTier: number;
  }): string {
    return `
      Test: ${data.roll.name} 
      \nChance:
      \n  ${data.roll.chance} 
      \nRoll: 
      \n  ${data.testValue} 
      \nResult: 
      \n  ${data.testValue <= data.roll.chance ? 'success' : 'fail'} (${data.difficultyTier}).
    `;
  }
}
