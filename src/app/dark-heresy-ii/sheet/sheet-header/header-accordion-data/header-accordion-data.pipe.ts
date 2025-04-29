import { Pipe, PipeTransform } from '@angular/core';
import { DHII_Character } from '@dhii/types/dark-heresy-ii';
export interface SheetHeaderAccordionData {
  title: string;
  disabled: boolean;
  description?: string | number;
  content?: string;
}

@Pipe({
  name: 'headerAccordionData',
  standalone: true
})
export class HeaderAccordionDataPipe implements PipeTransform {
  transform(character: DHII_Character): SheetHeaderAccordionData[] {
    return [
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
    ];
  }
}
