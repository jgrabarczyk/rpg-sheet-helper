import { DHII_Character, INITIAL_CHARACTER } from '@dhii/types/dark-heresy-ii';
import { BACKGROUNDS } from '@dhii/types/dhii-background';
import { ROLES } from '@dhii/types/dhii-role';
import { HOMEWORLDS } from '@dhii/types/dhii-homeworlds';

import { HeaderAccordionDataPipe } from './header-accordion-data.pipe';

describe('HeaderAccordionDataPipe', () => {
  it('create an instance', () => {
    const pipe: HeaderAccordionDataPipe = new HeaderAccordionDataPipe();
    expect(pipe).toBeTruthy();
  });
  it('transforms data correctly', () => {
    const pipe: HeaderAccordionDataPipe = new HeaderAccordionDataPipe();
    const character: DHII_Character = INITIAL_CHARACTER;
    character.details = {
      age: 13,
      characterName: 'tester'
    };
    character.homeworld = {
      key: 'daemon',
      value: HOMEWORLDS.get('daemon')!
    };
    character.background = {
      key: 'admech',
      value: BACKGROUNDS.get('admech')!
    };
    character.background = {
      key: 'admech',
      value: BACKGROUNDS.get('admech')!
    };
    character.role = {
      key: 'ace',
      value: ROLES.get('ace')!
    };
    character.divination = {
      name: 'divination name',
      description: 'divination description'
    };
    
    expect(pipe.transform(character)).toEqual([
      {
        title: 'Character Name',
        disabled: true,
        description: character.details?.characterName
      },
      {
        title: 'Character Age',
        disabled: true,
        description: character.details?.age
      },
      {
        title: 'Home World',
        disabled: false,
        description: character.homeworld?.value.name,
        content: character.homeworld?.value.bonus
      },
      {
        title: 'Background',
        disabled: false,
        description: character.background?.value.name,
        content: character.background?.value.bonus
      },
      {
        title: 'Role',
        disabled: false,
        description: character.role?.value.name,
        content: character.role?.value.bonus
      },
      {
        title: 'Divination',
        disabled: false,
        description: character.divination?.name,
        content: character.divination?.description
      }
    ]);
  });
});
