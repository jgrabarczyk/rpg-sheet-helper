import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {
  FormControl,
  ReactiveFormsModule,
  UntypedFormGroup,
} from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';

import { BACKPACK_ITEMS } from '@dhii/types/items/all-items';
import { Armour, ARMOURS } from '@dhii/types/items/armour/armour';
import { CYBERNETICS } from '@dhii/types/items/equipment/cybernetics';
import { DHII_Equipment, GenericItem } from '@dhii/types/items/generic-item';
import { WEAPONS } from '@dhii/types/items/weapon/weapons-data';
import { Weapon } from '@dhii/types/items/weapon/weapon';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { assertUnreachable } from '@util/assert-unreachable';

type ETab<L, O> = {
  label: string;
  fieldKey: L;
  options: Map<string, O>;
  filteredOptions: Observable<Map<string, O>>;
  selectedOptions: O[];
};

export type EqupimentTab =
  | ETab<'cybernetics' | 'backpackItems', GenericItem>
  | ETab<'weapons', Weapon>
  | ETab<'armours', Armour>;

@Component({
  selector: 'app-equipment-dialog',
  imports: [
    MatTabsModule,
    CommonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
  templateUrl: './equipment-dialog.component.html',
  styleUrl: './equipment-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EquipmentDialogComponent implements OnInit {
  private dialogRef: MatDialogRef<
    EquipmentDialogComponent,
    DHII_Equipment | null
  > = inject(MatDialogRef<EquipmentDialogComponent>);
  protected backpackItems: Map<string, GenericItem> = BACKPACK_ITEMS;
  protected cybernetics = CYBERNETICS;
  protected weapons = WEAPONS;
  protected armours = ARMOURS;

  protected form = new UntypedFormGroup({
    backpackItems: new FormControl(),
    cybernetics: new FormControl(),
    weapons: new FormControl(),
    armours: new FormControl(),
  });

  protected tabs: EqupimentTab[] = [
    {
      label: 'Backpack Items',
      fieldKey: 'backpackItems',
      options: this.backpackItems,
      filteredOptions: new Observable(),
      selectedOptions: [],
    },

    {
      label: 'Cybernetics',
      fieldKey: 'cybernetics',
      options: this.cybernetics,
      filteredOptions: new Observable(),
      selectedOptions: [],
    },

    {
      label: 'Weapons',
      fieldKey: 'weapons',
      options: this.weapons,
      filteredOptions: new Observable(),
      selectedOptions: [],
    },

    {
      label: 'Armours',
      fieldKey: 'armours',
      options: this.armours,
      filteredOptions: new Observable(),
      selectedOptions: [],
    },
  ];

  public ngOnInit() {
    this.tabs.forEach(tab => {
      tab.filteredOptions = this.form.controls[tab.fieldKey].valueChanges.pipe(
        startWith(''),
        map(filterQuery => this.getFilterOptionsFor(tab, filterQuery))
      );
    });
  }

  protected toggleItem<L, O>(tab: ETab<L, O>, item: O, checked: boolean): void {
    checked ? this.selectItem(tab, item) : this.removeItem(tab, item);
  }

  protected save(): void {
    const eq: DHII_Equipment = {
      armours: [],
      backpack: [],
      weapons: [],
    };

    this.tabs.forEach(tab => {
      if (tab.fieldKey === 'armours') {
        eq.armours = tab.selectedOptions;
        return;
      }
      if (tab.fieldKey === 'weapons') {
        eq.weapons = tab.selectedOptions;
        return;
      }
      if (tab.fieldKey === 'backpackItems' || tab.fieldKey === 'cybernetics') {
        eq.backpack = [...eq.backpack, ...tab.selectedOptions];
        return;
      }

      assertUnreachable(tab.fieldKey);
    });
    this.dialogRef.close(eq);
  }

  private selectItem<L, O>(tab: ETab<L, O>, item: O): void {
    if (tab.selectedOptions.indexOf(item) !== -1) {
      throw Error('Unable to add item. Item is already selected', {
        cause: item,
      });
    }
    tab.selectedOptions.push(item);
  }

  private removeItem<L, O>(tab: ETab<L, O>, item: O): void {
    const index: number = tab.selectedOptions.indexOf(item);
    tab.selectedOptions = tab.selectedOptions.filter((_, i) => i !== index);
  }

  private getFilterOptionsFor(
    tab: EqupimentTab,
    filterQuery: string
  ): Map<string, GenericItem> {
    if (tab.fieldKey === 'armours') {
      return this.filterOptionsFor(tab, filterQuery);
    }
    if (tab.fieldKey === 'weapons') {
      return this.filterOptionsFor(tab, filterQuery);
    }
    if (tab.fieldKey === 'backpackItems' || tab.fieldKey == 'cybernetics') {
      return this.filterOptionsFor(tab, filterQuery);
    }

    assertUnreachable(tab.fieldKey);
  }

  private filterOptionsFor<L, O extends GenericItem>(
    tab: ETab<L, O>,
    filterQuery: string
  ): Map<string, O> {
    const filteredOptions: typeof tab.options = new Map();

    for (const [itemKey, item] of tab.options.entries()) {
      if (this.isFilterQueryInItemName(item.name, filterQuery)) {
        filteredOptions.set(itemKey, item);
      }
    }
    return filteredOptions;
  }

  private isFilterQueryInItemName(
    itemName: string,
    filterQuery: string
  ): boolean {
    return itemName.toLowerCase().includes(filterQuery.toLowerCase());
  }
}
