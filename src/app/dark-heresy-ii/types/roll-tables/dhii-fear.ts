import {
  pickRollableItem,
  RollableItem,
  RollableItemsMap,
  RollRange,
} from '@appTypes/roll-item';

export type DHII_FearEffect = RollableItem;

export function rollFearTable(result: number): DHII_FearEffect {
  return pickRollableItem(result, FEAR_EFFECTS);
}

export const FEAR_EFFECTS: RollableItemsMap = new Map<RollRange, RollableItem>([
  [
    '01-20 ',
    {
      name: 'Starled',
      description: `'The character is badly startled. He can only take a single Half Action during his next turn, but afterward he acts normally.`,
    },
  ],
  [
    '21-40 ',
    {
      name: 'Shaken',
      description: `Fear grips the character and he begins to shake and tremble. He suffers a -10 penalty on all tests for the rest of the encounter unless he can recover his wits (see Shock and Snapping Out of It, page 286).`,
    },
  ],
  [
    '41-60 ',
    {
      name: 'Shocked',
      description: `Reeling with shock, the character backs away from the source of his Fear. He cannot willingly approach the object of his Fear, but can otherwise act normally, with a -10 penalty on all tests until the end of the encounter.`,
    },
  ],
  [
    '61-80 ',
    {
      name: 'Frozen',
      description: `The character is frozen by terror. He can take no actions until he recovers himself (see Shock and Snapping Out of It, page 286). After snapping out of it, he makes all tests with a -10 penalty for the rest of the encounter.`,
    },
  ],
  [
    '81-100 ',
    {
      name: 'Paniced',
      description: `Panic grips the character. He must flee the source of his fear, if able, as fast as he can, and if prevented from doing so, can only take Half Actions and is at a -20 penalty to all tests. Once away from the danger, he must successfully Snap Out of It (see Shock and Snapping Out of It, page 286) to regain control.`,
    },
  ],
  [
    '101-120',
    {
      name: 'Fainted',
      description: `Fainting dead away, the character keels over and remains Unconscious for 1d5 rounds. Once he regains consciousness, he is still shaken and takes all tests with a -10 penalty until the end of the encounter.`,
    },
  ],
  [
    '121-130',
    {
      name: 'Overcome with Fear',
      description: `Totally overcome, the character screams and vomits uncontrollably for 1d5 rounds. During this time he can do nothing, and drops anything he is holding. Afterward, until the end of the encounter, the character can only take a single Half Action each turn.`,
    },
  ],
  [
    '131-140',
    {
      name: 'Hystericall',
      description: `The character laughs hysterically and randomly attacks anything near him in a manic frenzy, firing wildly or attacking with whatever he has at hand. This effect lasts until the character Snaps Out of It (see Shock and Snapping Out of It, page 286), or until he is knocked Unconscious or otherwise incapacitated.`,
    },
  ],
  [
    '141-160',
    {
      name: 'Complete Mess',
      description: `The character crumples to the ground for 1d5+1 rounds and begins sobbing, babbling, and tearing at his own flesh, and can do nothing else. Even after he returns to his senses, he is a complete mess, and suffers a -20 penalty on all tests until the end of the encounter.`,
    },
  ],
  [
    '160-170',
    {
      name: 'Catatonic',
      description: `The character's mind snaps. He becomes catatonic for 1d5 hours; for that time, he is Unconscious and cannot be roused.`,
    },
  ],
  [
    '171-999',
    {
      name: 'Pure Terror',
      description: `The character is so overcome with terror that his heart stops: he must make a Challenging (+0) Toughness test or die. If he succeeds, the character still falls Unconscious for 1d5 hours, and cannot be roused for that time.`,
    },
  ],
]);
