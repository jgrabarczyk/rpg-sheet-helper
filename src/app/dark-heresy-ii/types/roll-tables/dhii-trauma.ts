import { pickRollableItem, RollableItem, RollableItemsMap, RollRange } from '@appTypes/roll-item';
export type DHII_Trauma = RollableItem;
export function rollMutationTable(result: number): DHII_Trauma  {
  return pickRollableItem(result, TRAUMAS)
}

export const TRAUMAS: RollableItemsMap = new Map<RollRange, RollableItem>([
  [
    '01-40',
    {
      name: 'Bad thoughts',
      description: ` The character becomes withdrawn and quiet. He suffers a –10 penalty to all Fellowship based tests for 3d10 hours.`
    }
  ],
  [
    '41-70',
    {
      name: 'Minor OCD',
      description: ` The character must compulsively perform an action (such as fevered praying, frantically cleaning a weapon, etc.) and pays little attention to anything else. He suffers a –10 penalty toall test based on Intelligence, Fellowship, and Perception. This effect lasts for 3d10 hours.`
    }
  ],
  [
    '71-100',
    {
      name: 'Fear',
      description: ` The character is constantly fearful, seeing danger everywhere, and is extremely jumpy. The character gains a +10 bonus to all Perception-based tests and is at a –10 penalty to Willpower tests for the next 1d5 days.`
    }
  ],
  [
    '101-120',
    {
      name: 'Temporary Phobia',
      description: ` The character suffers from a temporary Severe phobia (see Gaining Mental Disorders, page 287). This effect lasts for 1d5 days.`
    }
  ],
  [
    '121-130',
    {
      name: 'Wrath',
      description: ` The character reacts to the slightest stressor pressure by becoming extremely agitated. When performing any task that involves a test, the character must first pass a Willpower testor suffer a –10 modifier to the test. During combat encounters, he suffers a –10 penalty on all tests. This effect lasts for 1d5 days.`
    }
  ],
  [
    '131-140',
    {
      name: 'Nightmars',
      description: ` The character suffers vivid and extreme nightmares whenever he tries to sleep. The next day, and for a further 1d10 days, the character is exhausted by a lack of sleep and gains 1 levelof Fatigue.`
    }
  ],
  [
    '141-150',
    {
      name: 'Selective mutism',
      description: ` The character is struck dumb and is unable to speak. This lasts for 1d5 days.`
    }
  ],
  [
    '141-160',
    {
      name: 'PTSD',
      description: ` Extremely distressed and unfocused, the character refuses to eat or drink, and looks to be in a terrible state. Reduce all of the character’s characteristics by 10 (to a minimumof 1) for 1d10 days.`
    }
  ],
  [
    '161-170',
    {
      name: 'Hysteria',
      description: ` The character suffers a fit of hysterics, and becomes temporarily blind or deaf for 1d10 days.`
    }
  ],
  [
    '171-9999',
    {
      name: 'Catatonic Dementia',
      description: ` The character becomes completely traumatised and virtually unresponsive. He cannot initiate actions, but can be gently led. This effect lasts for 1d10 days.`
    }
  ]
]);
