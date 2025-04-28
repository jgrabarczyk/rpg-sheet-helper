import { DHII_Equipment } from "@dhii/types/items/generic-item";

export const EQ_DIALOG_CLOSE_DATA: DHII_Equipment = {
  armours: [],
  backpack: [],
  weapons: [
    {
      name: 'Laspistol',
      family: 'Las',
      class: 'Pistol',
      rangeInMeters: 30,
      isRanged: true,
      weaponJamOn: 100,
      rateOfFire: {
        single: true,
        semi: 2
      },
      damage: '1d10+2',
      damageType: 'Energy',
      armourPenetration: 0,
      clipSize: 30,
      reloadInActions: 1,
      weightInKilos: 1.5,
      availability: 10,
      notes:
        'Las Weapon Variable Setting: Overcharge: +1 Dam, 2 ammo. Overload: +2 Dam and Pen but uses 4 ammo, loses Reliable, and gains Unreliable'
    },
    {
      name: 'Hot-shot Laspistol',
      family: 'Las',
      class: 'Pistol',
      rangeInMeters: 20,
      isRanged: true,
      weaponJamOn: 96,
      rateOfFire: {
        single: true,
        semi: 2
      },
      damage: '1d10+4',
      damageType: 'Energy',
      armourPenetration: 7,
      clipSize: 40,
      reloadInActions: 4,
      weightInKilos: 4,
      availability: -20,
      notes: 'Do not benefit from the Las Weapon Variable Setting rules.'
    }
  ]
};