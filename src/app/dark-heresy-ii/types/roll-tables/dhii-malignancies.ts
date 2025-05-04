import {
  pickRollableItem,
  RollableItem,
  RollableItemsMap,
  RollRange,
} from '@appTypes/roll-item';

export type DHII_Malignancy = RollableItem;

export function rollMalignancyTable(result: number): DHII_Malignancy {
  return pickRollableItem(result, MALIGNANCIES);
}

export const MALIGNANCIES: RollableItemsMap = new Map<RollRange, RollableItem>([
  [
    '01-10',
    {
      name: 'Palsy',
      description: `The character suffers from numerous minor tics, shakes, and tremors with no medical cause. Reduce his Agility by 1d10.`,
    },
  ],
  [
    '11-15',
    {
      name: 'Dark-hearted',
      description: `The character grows increasingly cruel, callous, and vindictive. Reduce his Fellowship by 1d10.`,
    },
  ],
  [
    '16-20',
    {
      name: 'Ill-fortuned',
      description: `Chance seems to mock this Acolyte at the most crucial of opportunities. Whenever this character uses a Fate point, roll 1d10. On a result of 7-10, the Fate point has no effect but is spent anyway.`,
    },
  ],
  [
    '21-25',
    {
      name: 'Skin Afflictions',
      description: `The character is plagued by boils, scabs, weeping sores and other disgusting features across his body. He suffers a -20 penalty to all Charm tests.`,
    },
  ],
  [
    '26-30',
    {
      name: 'Night Eyes',
      description: `Light pains the character, echoing the growing stain on his soul. Unless he shields his eyes, he suffers a -10 penalty on all tests made in an area of bright light.`,
    },
  ],
  [
    '31-33',
    {
      name: 'Morbid',
      description: `The character finds it hard to concentrate as his mind turns increasingly macabre and he becomes prone to tortured, gloom filled trains of thought. Reduce his Intelligence by 1d10.`,
    },
  ],
  [
    '34-45',
    {
      name: 'Witch Mark',
      description: `The character develops some minor physical deformity or easily concealable mutation. It is small, but perhaps enough to consign him to death if found out by a fanatical witch hunter.`,
    },
  ],
  [
    '46-50',
    {
      name: 'Fell Obsession',
      description: `This functions like the Obsession Disorder on page 288, but in this case the character is obsessed by something sinister or malign (such as collecting finger-bone trophies, etc.).`,
    },
  ],
  [
    '51-55',
    {
      name: 'Irrational Nausea',
      description: `The character feels sick at the sight, sound, or smell of something otherwise innocuous (such as prayer books and holy items, bare flesh, human laughter, fresh food, etc.). When he encounters an object of his revulsion he must make a Toughness test or suffer a -10 penalty to all tests as long as he remains in its presence.`,
    },
  ],
  [
    '56-60',
    {
      name: 'Wasted Frame',
      description: `The character's pallor becomes corpse-like and his muscles waste away. Reduce his Strength by 1d10.`,
    },
  ],
  [
    '61-63',
    {
      name: 'Night Terrors',
      description: `The character is plagued by daemonic visions in his sleep. This functions identically to the Horrific Nightmares Disorder on page 289.`,
    },
  ],
  [
    '64-70',
    {
      name: 'Poor Health',
      description: `The character constantly suffers petty illnesses and phantom pains, and his wounds never seem to fully heal. Reduce the character's Toughness by 1d10.`,
    },
  ],
  [
    '71-75',
    {
      name: 'Distrustful',
      description: `The character cannot conceal the distrust and antipathy he has for others. He suffers a -10 penalty to Fellowship tests when dealing with strangers.`,
    },
  ],
  [
    '76-80',
    {
      name: 'Malign Sight',
      description: `The world seems to darken, tarnish, and rot if the character looks at anything too long. Reduce the character's Perception by 1d10.`,
    },
  ],
  [
    '81-83',
    {
      name: 'Ashen Taste',
      description: `Food and drink taste foul and provide little sustenance to the character, and he can barely stomach eating. Recovering levels of Fatigue takes twice as long for him than normal (see page 233).`,
    },
  ],
  [
    '84-90',
    {
      name: 'Bloodlust',
      description: `Murderous rage is never far from the character's mind. After suffering damage (after Armour and Toughness bonus) in combat, he must succeed at a Willpower test to allow his enemies to flee, be captured, or incapacitated, rather than killing them outright, even if his intent is otherwise.`,
    },
  ],
  [
    '91-93',
    {
      name: 'Blackout',
      description: `The character suffers from inexplicable blackouts. When they occur and what happens during them is up to the GM, who should inform the player the details of what (if anything) he remembers on awakening.`,
    },
  ],
  [
    '94-100',
    {
      name: 'Strange Addiction',
      description: `The character has a near-uncontrollable craving for some bizarre and unnatural substance (such as rose petals, fresh blood, widows' tears, etc.). This acts like a Minor Disorder for Compulsion (see page 288), but is freakish enough to cause serious suspicion if discovered.`,
    },
  ],
  [
    '100-100',
    {
      name: 'The Warp Made Manifest',
      description: `This character becomes a Daemon-like creature, capable of reshaping reality itself at his whim. He gains the Daemonic (CB), Fear (2), From Beyond, and Warp Instability traits. He can also use his Willpower characteristic in place of anyother characteristic for any test he is called upon to take.`,
    },
  ],
]);
