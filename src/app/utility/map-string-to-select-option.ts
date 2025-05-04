import { SelectOption } from '@dhii/stepper-partials/dynamic-list/dynamic-list.component';

export function mapStringToSelectOption(s: string): SelectOption {
  return { key: s, value: s };
}

export function mapStringArrayToSelectOptionArray(
  arr: string[]
): SelectOption[] {
  return arr.map(el => mapStringToSelectOption(el));
}
