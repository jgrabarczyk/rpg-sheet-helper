import { CommonModule, KeyValue } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BaseArmour, ForceFieldArmour } from '@dhii/types/items/armour/armour';
import { DHII_Equipment, GenericItem } from '@dhii/types/items/generic-item';
import {
  WeapnRangeReadOnly,
  WeaponBase,
  WeaponMelee,
  WeaponThrown
} from '@dhii/types/items/weapon/weapon';
import { BackpackComponent, TableData } from './backpack/backpack.component';
import { RateOfFirePipe } from '@dhii/pipes/rate-of-fire/rate-of-fire.pipe';
import { ReloadTimePipe } from '@dhii/pipes/reload-time/reload-time.pipe';

const GENERIC_ITEM_HEADERS: KeyValue<keyof GenericItem, string>[] = [
  { key: 'name', value: 'Name' },
  { key: 'quantity', value: 'Qty.' },
  { key: 'notes', value: 'Description' }
  // { key: 'weightInKilos', value: 'Weight' }
];
const WEAPON_HEADERS: KeyValue<keyof WeaponBase, string>[] = [
  { key: 'armourPenetration', value: 'AP' },
  { key: 'damage', value: 'Damage' },
  { key: 'damageType', value: 'Dmg. Type' },
  { key: 'class', value: 'Class' },
  { key: 'family', value: 'Specialisation' },
  { key: 'traits', value: 'Triats' }
];
@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, BackpackComponent],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EquipmentComponent {

  @Input() strength?: number;
  @Input() set equipment(eq: DHII_Equipment | undefined) {
    if (!eq) {
      return;
    }
    this.parseEquipment(eq);
  }

  weapons: {
    melee: TableData<WeaponMelee>;
    ranged: TableData<WeapnRangeReadOnly>;
    thrown: TableData<WeaponThrown>;
    missles: TableData<WeaponBase>;
  } = {
    melee: {
      headers: [...GENERIC_ITEM_HEADERS, ...WEAPON_HEADERS],
      data: []
    },
    missles: {
      headers: [...GENERIC_ITEM_HEADERS, ...WEAPON_HEADERS],
      data: []
    },
    ranged: {
      headers: [
        ...GENERIC_ITEM_HEADERS,
        ...WEAPON_HEADERS,
        { key: 'rangeInMeters', value: 'Range' },
        { key: 'rateOfFire', value: 'ROF' },
        { key: 'clipSize', value: 'Clip Size' },
        { key: 'reloadInActions', value: 'Reload Time' }
      ],
      data: []
    },
    thrown: {
      headers: [
        ...GENERIC_ITEM_HEADERS,
        ...WEAPON_HEADERS,
        { key: 'rangeInMeters', value: 'Range' }
      ],
      data: []
    }
  };

  protection: {
    armours: TableData<BaseArmour>;
    forceFields: TableData<ForceFieldArmour>;
  } = {
    armours: {
      headers: [
        ...GENERIC_ITEM_HEADERS,
        { key: 'agilityCap', value: 'Agility Cap' },
        { key: 'armorPoints', value: 'Armour' },
        { key: 'protectedLocations', value: 'Locations' }
      ],
      data: []
    },
    forceFields: {
      headers: [...GENERIC_ITEM_HEADERS, { key: 'protectionRating', value: 'Prot Rating' }],
      data: []
    }
  };

  backpackTable: TableData<GenericItem> = {
    headers: [...GENERIC_ITEM_HEADERS],
    data: []
  };

  private rof: RateOfFirePipe = new RateOfFirePipe();
  private reloadTime: ReloadTimePipe = new ReloadTimePipe();

  addItem() {
    // this.dialog.open().afterClosed().subscribe()
  }

  private parseEquipment(eq: DHII_Equipment) {
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
          rangeInMeters: Math.floor(this.strength ?? 0 / 10) * 3
        });
        return;
      } else if (
        weapon.class === 'Basic' ||
        weapon.class === 'Heavy' ||
        weapon.class === 'Pistol'
      ) {
        this.weapons.ranged.data.push({
          ...weapon,
          rateOfFire: this.rof.transform(weapon.rateOfFire),
          reloadInActions: this.reloadTime.transform(weapon.reloadInActions)
        });
      }
    });

    eq.backpack.forEach(item => this.backpackTable.data.push(item));
  }
}
