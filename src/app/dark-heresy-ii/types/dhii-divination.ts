
export type DHII_Divination = {
  name: string;
  description: string;
};

export function pickDivination(result: number): DHII_Divination {
  const key: string | undefined = findDivinationRange(result);

  if(!key){
    throw Error (`not found DIVINATIONS.key for result ${result}`);
  }
  return DIVINATIONS.get(key)!;
}

function findDivinationRange(roll:number){
  return Array.from(DIVINATIONS.keys()).find(range => {
    const [min, max] = range.split('-');
    return roll >= Number(min) && roll <= Number(max);
  });
}

export const DIVINATIONS: Map<string, DHII_Divination> = new Map<string, DHII_Divination>([
  [
    '00-01',
    {
      name: 'Mutation without, corruption within',
      description: 'Roll once on the Malignancies table and apply the result.'
    }
  ],
  [
    '02-05',
    {
      name: 'Trust in your fear',
      description:
        "Increase this character's Perception by 5. He also gains the Phobia Mental Disorder."
    }
  ],
  [
    '06-09',
    {
      name: 'Humans must die so that humanity can endure',
      description:
        'This character gains the Jaded talent. If he already possesses this talent, increase his Willpower characteristic by 2 instead.'
    }
  ],
  [
    '10-13',
    {
      name: 'The pain of the bullet is ecstasy compared to damnation',
      description:
        "Reduce this character's Agility characteristic by 3. The first time this character suffers Critical damage each session, roll a 1d10. On a result of 10, he does not suffer any Critical Effects, though the damage still counts as Critical Damage."
    }
  ],
  [
    '14-17',
    {
      name: 'Be a boon to your allies and the bane of your enemies',
      description:
        'The character gains the Hatred (choose any one) talent. If he already possessed this talent, increase his Strength characteristic by 2 instead.'
    }
  ],
  [
    '18-21',
    {
      name: 'The wise learn from the deaths of others',
      description:
        "Increase this character's Agility or Intelligence Characteristic by 3. Reduce his Weapon Skill of Ballistic skill characteristic by 3."
    }
  ],
  [
    '22-25',
    {
      name: 'Kill the alien before it can speak its lies',
      description:
        'This character gains the Quick Draw talent. If he already possesses this talent, increase his Agility characteristic by 2 instead.'
    }
  ],
  [
    '26-29',
    {
      name: 'Truth is subjective',
      description:
        "Increase this character's Perception by 3. The first time he would gain 1 or more Corruption points each session, he gains that amount plus 1 instead."
    }
  ],
  [
    '30-33',
    {
      name: 'Thought begets Heresy',
      description:
        "Reduce this character's Intelligence by 3. The first time he would gain 1 or more Corruption points each session, he reduces that amount by 1 (to a minimum of 0) instead."
    }
  ],
  [
    '34-38',
    {
      name: 'Heresy begets Retribution',
      description:
        "Increase this character's Fellowship or Strength characteristic by 3. Reduce his Toughness or Willpower characteristic by 3."
    }
  ],
  [
    '39-43',
    {
      name: 'A mind without purpose wanders in dark places',
      description:
        'When gaining Mental Disorders, the character may choose to gain a new Disorder instead of increasing the severity of an existing Disorder.'
    }
  ],
  [
    '44-49',
    {
      name: 'If a job is worth doing, it is worth dying for',
      description:
        "Increase this character's Toughness or Willpower characteristic by 3. Reduce his Fellowship or Strength characteristic by 3."
    }
  ],
  [
    '50-54',
    {
      name: 'Dark dreams lie upon the heart',
      description:
        'Whenever this character would roll on the Malignancies table, he may instead select any one result and gain that Malignancy.'
    }
  ],
  [
    '55-59',
    {
      name: 'Violence solves everything',
      description:
        "Increase this character's Weapon Skill or Ballistic Skill characteristic by 3. Reduce his Agility or Intelligence characteristic by 3."
    }
  ],
  [
    '60-63',
    {
      name: 'Ignorance is a wisdom of its own',
      description:
        "Reduce this character's Perception characteristic by 3. The first time he would gain 1 or more Insanity points each session, he reduces that amount by 1 (to a minimum of 0) instead."
    }
  ],
  [
    '64-67',
    {
      name: 'Only the insane have the strength to prosper',
      description:
        "Increase this character's Willpower characteristic by 3. The first time he would gain 1 or more Insanity points each session, he gains that amount plus 1 instead."
    }
  ],
  [
    '68-71',
    {
      name: 'A suspicious mind is a healthy mind',
      description:
        "Increase this character's Perception characteristic by 2. Additionally, he may re-roll Awareness tests to avoid being Surprised."
    }
  ],
  [
    '72-75',
    {
      name: 'Suffering is an unrelenting instructor',
      description:
        "Reduce this character's Toughness characteristic by 3. The first time that this character suffers any damage each session, he gains a +20 bonus to the next test he makes before the end of his next turn."
    }
  ],
  [
    '76-79',
    {
      name: 'The only true fear is dying without your duty done',
      description:
        'This character gains the Resistance (Cold, Heat, or Fear) talent. If he already possesses this Talent, increase his Toughness characteristic by 2 instead.'
    }
  ],
  [
    '80-83',
    {
      name: 'Only in death does duty end',
      description:
        'The first time this character would suffer Fatigue each session, he suffers that amount of Fatigue minus 1 (to a minimum of 0) instead.'
    }
  ],
  [
    '84-87',
    {
      name: 'Innocence is an illusion',
      description:
        'This character gains the Keen Intuition talent. If he already possesses this talent, increase his Intelligence characteristic by 2 instead.'
    }
  ],
  [
    '88-91',
    {
      name: 'To war is human',
      description:
        'This character gains the Dodge skill as a Known skill (rank 1). If he already posses this skill, increase his Agility characteristic by 2 instead.'
    }
  ],
  [
    '92-95',
    {
      name: 'There is no substitute for zeal',
      description:
        'This character gains the Clues from the Crowds talent. If he already possesses this talent, increase his Fellowship characteristic by 2 instead.'
    }
  ],
  [
    '96-99',
    {
      name: 'Even one who has nothing can still offer his life',
      description:
        'When this character burns Fate threshold to survive a lethal injury, roll 1d10. On a result of 10, he survives whatever grievous wound would have killed him but does not reduce his Fate threshold.'
    }
  ],
  [
    '100-101',
    {
      name: 'Do not ask why you serve. Only ask how',
      description: "Increase this character's Fate threshold by 1."
    }
  ]
]);
