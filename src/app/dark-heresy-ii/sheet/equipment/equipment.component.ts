import { CommonModule, KeyValue } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { RateOfFirePipe } from '@dhii/pipes/rate-of-fire/rate-of-fire.pipe';
import { ReloadTimePipe } from '@dhii/pipes/reload-time/reload-time.pipe';
import { BaseArmour, ForceFieldArmour } from '@dhii/types/items/armour/armour';
import { DHII_Equipment, GenericItem } from '@dhii/types/items/generic-item';
import {
  WeapnRangeReadOnly,
  WeaponBase,
  WeaponMelee,
  WeaponThrown,
} from '@dhii/types/items/weapon/weapon';
import { EquipmentDialogComponent } from '@shared/dialogs/equipment-dialog/equipment-dialog.component';
import { assertUnreachable } from '@util/assert-unreachable';
import { filter } from 'rxjs';
import { BackpackComponent, TableData } from './backpack/backpack.component';

const GENERIC_ITEM_HEADERS: KeyValue<keyof GenericItem, string>[] = [
  { key: 'name', value: 'Name' },
  { key: 'quantity', value: 'Qty.' },
  { key: 'notes', value: 'Description' },
  // { key: 'weightInKilos', value: 'Weight' }
];
const WEAPON_HEADERS: KeyValue<keyof WeaponBase, string>[] = [
  { key: 'armourPenetration', value: 'AP' },
  { key: 'damage', value: 'Damage' },
  { key: 'damageType', value: 'Dmg. Type' },
  { key: 'class', value: 'Class' },
  { key: 'family', value: 'Specialisation' },
  { key: 'traits', value: 'Triats' },
];
@Component({
  selector: 'app-equipment',
  imports: [MatCardModule, MatButtonModule, CommonModule, BackpackComponent],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EquipmentComponent {
  private dialog: MatDialog = inject(MatDialog);

  @Input() strength?: number;
  @Input() set equipment(eq: DHII_Equipment | undefined) {
    if (!eq) {
      return;
    }
    this.parseEquipment(eq);
  }
  @Output() addEquipment: EventEmitter<DHII_Equipment> = new EventEmitter();

  protected weapons: {
    melee: TableData<WeaponMelee>;
    ranged: TableData<WeapnRangeReadOnly>;
    thrown: TableData<WeaponThrown>;
    missles: TableData<WeaponBase>;
  } = {
    melee: {
      headers: [...GENERIC_ITEM_HEADERS, ...WEAPON_HEADERS],
      data: [],
    },
    missles: {
      headers: [...GENERIC_ITEM_HEADERS, ...WEAPON_HEADERS],
      data: [],
    },
    ranged: {
      headers: [
        ...GENERIC_ITEM_HEADERS,
        ...WEAPON_HEADERS,
        { key: 'rangeInMeters', value: 'Range' },
        { key: 'rateOfFire', value: 'ROF' },
        { key: 'clipSize', value: 'Clip Size' },
        { key: 'reloadInActions', value: 'Reload Time' },
      ],
      data: [],
    },
    thrown: {
      headers: [
        ...GENERIC_ITEM_HEADERS,
        ...WEAPON_HEADERS,
        { key: 'rangeInMeters', value: 'Range' },
      ],
      data: [],
    },
  };

  protected protection: {
    armours: TableData<BaseArmour>;
    forceFields: TableData<ForceFieldArmour>;
  } = {
    armours: {
      headers: [
        ...GENERIC_ITEM_HEADERS,
        { key: 'agilityCap', value: 'Agility Cap' },
        { key: 'armorPoints', value: 'Armour' },
        { key: 'protectedLocations', value: 'Locations' },
      ],
      data: [],
    },
    forceFields: {
      headers: [
        ...GENERIC_ITEM_HEADERS,
        { key: 'protectionRating', value: 'Prot Rating' },
      ],
      data: [],
    },
  };

  protected backpackTable: TableData<GenericItem> = {
    headers: [...GENERIC_ITEM_HEADERS],
    data: [],
  };

  private rateOfFirePipe: RateOfFirePipe = new RateOfFirePipe();
  private reloadTime: ReloadTimePipe = new ReloadTimePipe();

  protected addItems(): void {
    this.dialog
      .open<EquipmentDialogComponent, unknown, DHII_Equipment | null>(
        EquipmentDialogComponent,
        {
          maxHeight: '100%',
          maxWidth: '100%',
          width: '75%',
          height: '75%',
        }
      )
      .afterClosed()
      .pipe(filter(Boolean))
      .subscribe(dialogResult => this.addEquipment.emit(dialogResult));
  }

  private parseEquipment(eq: DHII_Equipment): void {
    eq.armours.forEach(armour => {
      if (armour.class === 'Force Field') {
        this.protection.forceFields.data.push(armour);
      } else {
        this.protection.armours.data.push(armour);
      }
    });

    eq.weapons.forEach(weapon => {
      if (!weapon.isRanged) {
        this.weapons.melee.data.push(weapon);
        return;
      } else if (
        weapon.class === 'Melee/Thrown' ||
        weapon.class === 'Thrown' ||
        weapon.class === 'Grenade'
      ) {
        this.weapons.thrown.data.push({
          ...weapon,
          rangeInMeters: Math.floor((this.strength ?? 10) / 10) * 3,
        });
        return;
      } else if (
        weapon.class === 'Basic' ||
        weapon.class === 'Heavy' ||
        weapon.class === 'Pistol'
      ) {
        this.weapons.ranged.data.push({
          ...weapon,
          rateOfFire: this.rateOfFirePipe.transform(weapon.rateOfFire),
          reloadInActions: this.reloadTime.transform(weapon.reloadInActions),
        });
        return;
      } else {
        assertUnreachable(weapon.class);
      }
    });

    eq.backpack.forEach(item => this.backpackTable.data.push(item));
  }
}
