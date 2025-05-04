import {
  pickRollableItem,
  RollableItem,
  RollableItemsMap,
  RollRange,
} from '@appTypes/roll-item';

export type DHII_Mutation = RollableItem;

export function rollMutationTable(result: number): DHII_Mutation {
  return pickRollableItem(result, MUTATIONS);
}

export const MUTATIONS: RollableItemsMap = new Map<RollRange, RollableItem>([
  [
    '01-06',
    {
      name: 'Bestial Hide',
      description: `The character's skin becomes toughened with layers of thick scales or chitin, and he gains the Natural Armour (2) trait.`,
    },
  ],
  [
    '07-11',
    {
      name: 'Unnatural Arms',
      description: `Twisted appendages (shrivelled arms, hooked talons, or fleshy tendrils) emerge from this character's spine or torso. He gains the Multiple Arms (CB) trait.`,
    },
  ],
  [
    '12-17',
    {
      name: 'Sightless Orbs',
      description: `This character's eyes become sightless, cracked windows into a soul afflicted with a growing corruption. He gains Blind and Unnatural Senses (CBx10) traits.`,
    },
  ],
  [
    '18-25',
    {
      name: 'Swollen Brute',
      description: `This character becomes bloated, his muscles expanding and his form becoming excessively corpulent or disturbingly muscular (or perhaps both). This character's Toughness and Strength characteristics are permanently increased by 10, but his Agility bonus is reduced by 1 for purposes of movement.`,
    },
  ],
  [
    '26-30',
    {
      name: 'Deathsight',
      description: `This character's mind becomes twisted, his eyes showing him countless possible annihilations of anything or anyone he gazes upon for more than a few moments. Once per game session, this character may increase the damage of one attack he has made by his Corruption bonus. If he does so, he gains 1 Corruption point.`,
    },
  ],
  [
    '31-36',
    {
      name: 'Cursed Fleshmetal',
      description: `This character's armour and cybernetic implants become fused with his flesh, and even regenerate. Removing any of these items requires a Challenging (+0) Medicae test; if the test fails, he suffers 1d5 Rending damage to a randomly selected limb that ignores Armour. He can make an Ordinary (+10) Toughness test to repair items merged with him, in the same manner as a Tech-Use test to repair the same equipment, but suffers 1 Corruption point.`,
    },
  ],
  [
    '37-43',
    {
      name: 'Razor Fangs',
      description: `This character's teeth grow long, turning into tearing fangs. This character gains an unarmed attack that inflicts 1d5+CB Rending damage, pen 2. He permanently reduces his Fellowship characteristic by 1d5.`,
    },
  ],
  [
    '44-49',
    {
      name: 'Excessive Legs',
      description: `This character develops extra legs that support his form, suspending his upper torso above a centauroid lower body. This character gains the Quadruped trait with a number of extra legs equal half to his Corruption bonus (rounded up).`,
    },
  ],
  [
    '50-54',
    {
      name: 'Wings',
      description: `Massive feathered or leathery wings erupt from this character's spine, and he gains the Flyer (CBx2) trait.`,
    },
  ],
  [
    '55-60',
    {
      name: 'Serpentine Tail',
      description: `This character's legs wither while his spine elongates into a serpentine tail that supports his body. He gains the Crawler trait and gains an unarmed attack that can strike for 1d10 Impact damage, Pen 0.`,
    },
  ],
  [
    '61-69',
    {
      name: 'Searing Blood',
      description: `This character's veins are filled with searing acids in place of blood, though somehow the corrosive effects do not burn his own flesh. Whenever he suffers Blood Loss, the foul liquid erupts and inflicts 1d5+CB Energy damage, Pen 0, to each other character within 1d5 metres.`,
    },
  ],
  [
    '70-77',
    {
      name: 'Witch-Curse',
      description: `A small stigma in the shape of a maddening rune appears on this character's body, marking him as touched by Chaos. He gains the Psyker trait (or adds 1 to an existing psy rating) and freely learns any 1 psychic power that costs 100 xp or less. Whenever he attempts to use this power, he gains 1d5 Corruption points.`,
    },
  ],
  [
    '78-84',
    {
      name: 'Bone-Blades',
      description: `This character's bones grow long, twisted spurs that sprout painfully from his flesh on his command. This character gains an unarmed attack that inflicts 1d10+CB Rending damage, Pen 0. Whenever he makes an attack with this weapon, this character suffers Blood Loss unless he passes a Challenging (+0) Toughness test.`,
    },
  ],
  [
    '85-89',
    {
      name: 'Cannibalistic Urge',
      description: `Blood and marrow become as wine and bread to this character, and normal food no longer sates the hunger of his soul. Once per game session, he can remove 1d5 damage by consuming human flesh. Each time he does so, he gains 1 Corruption point.`,
    },
  ],
  [
    '90-92',
    {
      name: 'Corrupted Flesh',
      description: `Instead of blood, when this character's flesh is torn asunder, horrific insects, worms, or flitting creatures spill forth. Whenever he suffers damage, this character gains the Fear (1) trait for 1d5 rounds.`,
    },
  ],
  [
    '93-94',
    {
      name: 'It Will Not Die!',
      description: `This character is touched by the power of the Warp, and fortune twists to keep him alive regardless of the terrible wounds he suffers, as if it is the will of some dark being that resides beyond the veil of reality. He can no longer burn a Fate point to survive lethal injuries. Whenever this character would die, he instead survives by the narrowest margin as if he had burned a Fate point and gains 1d10+5 Corruption points.`,
    },
  ],
  [
    '95-97',
    {
      name: 'Warp Gaze',
      description: `Whatever this character looks upon burns with the fire of the Warp, and all who see his eyes despair. This character gainsa 20m ranged attack that strikes with 1d10+CB Energy damage and the Spray quality. Each time he uses this attack, he gains 1d5 Corruption points. Characters struck with this attack must make a Challenging (+0) Fear(1) test.`,
    },
  ],
  [
    '98-99',
    {
      name: 'Warp Regeneration',
      description: `Corruption seethes through this character's flesh, sewing his body back together time and time again whether he wills it or not. Whenever this character suffers damage, he makes a Challenging (+0) Toughness test. If he succeeds, he gains the Regeneration (CB) trait for 1 round and gains 1d5 Corruption points.`,
    },
  ],
  [
    '100-100',
    {
      name: 'The Warp Made Manifest',
      description: `This character becomes a Daemon-like creature, capable of reshaping reality itself at his whim. He gains the Daemonic (CB), Fear (2), From Beyond, and Warp Instability traits. He can also use his Willpower characteristic in place of any other characteristic for any test he is called upon to take.`,
    },
  ],
]);
