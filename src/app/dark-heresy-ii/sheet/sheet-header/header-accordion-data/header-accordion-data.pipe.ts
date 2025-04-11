import { Pipe, PipeTransform } from '@angular/core';
import { DHII_Character } from '@dhii/types/dark-heresy-ii';
interface SheetHeaderAccordionData {
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
  transform(value: DHII_Character | null): SheetHeaderAccordionData[] {
    return value !== null
      ? [
          {
            title: 'Character Name',
            disabled: true,
            description: value.details?.characterName
          },
          {
            title: 'Character Age',
            disabled: true,
            description: value.details?.age
          },
          {
            title: 'Home World',
            disabled: false,
            description: value.homeworld?.value.name,
            content: value.homeworld?.value.bonus
          },
          {
            title: 'Background',
            disabled: false,
            description: value.background?.value.name,
            content: value.background?.value.bonus
          },
          {
            title: 'Role',
            disabled: false,
            description: value.role?.value.name,
            content: value.role?.value.bonus
          },
          {
            title: 'Divination',
            disabled: false,
            description: value.divination?.name,
            content: value.divination?.description
          }
        ]
      : [];
  }
}
