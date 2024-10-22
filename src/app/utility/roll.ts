import { DiceRoll, Roll } from '../types/roll';

export function rollDices(roll: DiceRoll, modifier?: 'bonus' | 'penality'): number {
  const [diceQuantity, diceFaces] = roll.split('d').map(el => Number(el));

  const results: number[] = Array.from(
    { length: diceQuantity },
    () => Math.floor(Math.random() * diceFaces) + 1
  ).sort((a, b) => a - b);

  if (modifier === 'bonus') {
    results.shift();
  } else if (modifier === 'penality') {
    results.pop();
  }

  const final: number = results.reduce((acc, current) => acc + current);
  console.log('rollDice:', roll, '|', final);
  return final;
}

export function rollTest(roll: Roll) {
  const testRoll: number = rollDices('1d100');
  const difficultyTier: number =
    Math.abs(Math.floor(testRoll / 10) - Math.floor(roll.value / 10)) + 1;

  console.log(
    `Test: ${roll.name} \nChance:\n  ${roll.value} \nRoll: \n  ${testRoll} \nResult: \n  ${
      testRoll <= roll.value ? 'success' : 'fail'
    } (${difficultyTier}).`
  );
}
