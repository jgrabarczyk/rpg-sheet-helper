import { DHII_Aptitude } from './dark-heresy-ii';

export type DHII_TalentName = 
| 'Ambidextrous'
| 'Blind Fighting'
| 'Bodyguard'
| 'Catfall'
| 'Clues from the Crowds'
| 'Die Hard'
| 'Disarm'
| 'Double Team'
| 'Enemy'
| 'Ferric Summons'
| 'Flagellant'
| 'Frenzy'
| 'Grenadier'
| 'Iron Jaw'
| 'Jaded'
| 'Keen Intuition'
| 'Leap Up'
| 'Leaping Dodge'
| 'Mounted Warrior'
| 'Nowhere to Hide'
| 'Peer'
| 'Quick Draw'
| 'Rapid Reload'
| 'Resistance'
| 'Sound Constitution'
| 'Skilled Rider'
| 'Takedown'
| 'Technical Knock'
| 'Warp Sense'
| 'Weapon-Tech'
| 'Weapon Training'
| 'Ambassador Imperialis'
| 'Archivator'
| 'Armour-Monger'
| 'Battle Rage'
| 'Bulging Biceps'
| 'Bulwark of Faith'
| 'Combat Master'
| 'Constant Vigilance'
| 'Contact Network'
| 'Coordinated Interrogation'
| 'Counter Attack'
| 'Cover-Up'
| 'Daemonhunter'
| 'Daemonologist'
| 'Deny the Witch'
| 'Devastating Assault'
| 'Double Tap'
| 'Exotic Weapon Training'
| 'Face in a Crowd'
| 'Field Vivisection'
| 'Hard Target'
| 'Hardened Soul'
| 'Hardy'
| 'Hatred'
| 'Hip Shooting'
| 'Hotshot Pilot'
| 'Independent Targeting'
| 'Inescapable Attack'
| 'Inspiring Aura'
| 'Iron Resolve'
| 'Killing Strike'
| 'Lexographer'
| 'Lumien Shock'
| 'Maglev Transcendence'
| 'Marksman'
| 'Mechadendrite Use'
| 'One-on-One'
| 'Penitent Psyker'
| 'Precision Killer'
| 'Prosanguine'
| 'Purity of Hatred'
| 'Rites of Banishment'
| 'Strong Minded'
| 'Swift Attack'
| 'Tainted Psyker'
| 'Two-Weapon Wielder'
| 'Unarmed Specialist'
| 'Warp Conduit'
| 'Whirlwind of Death'
| 'Witch Finder'
| 'Xenosavant'
| 'Aegis of Contempt'
| 'Adamantium Faith'
| 'Assassin Strike'
| 'Bastion of Iron Will'
| 'Blademaster'
| 'Crushing Blow'
| 'Daemonic Disruption'
| 'Dark Soul'
| 'Deathdealer'
| 'Delicate Interrogation'
| 'Divine Protection'
| 'Eye of Vengeance'
| 'Favoured by the Warp'
| 'Flash of Insight'
| 'Halo of Command'
| 'Hammer Blow'
| 'Hull Down'
| 'Infused Knowledge'
| 'Instrument of His Will'
| 'Iron Faith'
| 'Lightning Attack'
| 'Luminen Blast'
| 'Mastery'
| 'Mighty Shot'
| 'Never Die'
| 'Preternatural Speed'
| 'Push the Limit'
| 'Sanctic Purity'
| 'Shield Wall'
| 'Sprint'
| 'Step Aside'
| 'Superior Chirurgeon'
| 'Target Selection'
| 'Thunder Charge'
| 'True Grit'
| 'Two-Weapon Master'
| 'Warp Lock'
//talents with specific specialisation choosen;
  | 'Weapon Training (Shock)'
  | 'Weapon Training (Low-Tech | Solid Projectile)'
  | 'Weapon Training (Chain)'
  | 'Weapon Training (Las)'
  | 'Weapon Training (Flame)'
  | 'Weapon Training (Low-Tech)'
  | 'Weapon Training (Solid Projectile)'
  | 'Mechadendrite Use (Utility)'
  | 'Resistance (Pick One)'
  | 'Resistance (Psychic Powers)'
  | 'Hatred (Choose Group)'
  | 'Hatred (Daemons)'
  | 'Peer (Criminal Cartels)'

export type DHII_Talent = {
  name: string;
  tier: 1 | 2 | 3;
  aptitudes: [DHII_Aptitude[] | DHII_Aptitude, DHII_Aptitude];
  description: string;
  prerequisite?: string;
  specialisations?: string[];
};

export const talents: Map<string, DHII_Talent> = new Map([
  [
    'Ambidextrous',
    {
      name: 'Ambidextrous',
      tier: 1,
      prerequisite: ' Agility 30',
      aptitudes: ['Weapon Skill', 'Ballistic Skill'],
      description: `This talent does not represent true ambidexterity so much as sufficient training with both hands to make the distinction moot. When
combined with Two-Weapon Wielder talent, the penalty for making attacks with both weapons in the same turn drops to –10.`
    }
  ],
  [
    'Blind Fighting',
    {
      name: 'Blind Fighting',
      tier: 1,
      prerequisite: ' Perception 30',
      aptitudes: ['Perception', 'Fieldcraft'],
      description: `Years of practice and development of his other senses allows the Acolyte to fight in close combat without the benefit of sight. He
ignores all penalties for fighting with a melee weapon while suffering from obscured vision, permitting him to fight in fog, smoke, or
darkness more effectively. See page 229 for a full list of normal penalties based on lighting and vision. Note this talent only
improves his chances to hit with melee weapons, and has no effect on ranged weapon attacks.`
    }
  ],
  [
    'Bodyguard',
    {
      name: 'Bodyguard',
      tier: 1,
      prerequisites: ' Agility 35',
      aptitudes: ['Agility', 'Defence'],
      description: `After an enemy makes a successful attack against an ally, the character may use a Reaction to move up to his Half Move distance in
order to interpose himself between the attacker and target. The attack is then resolved against the character instead of the original
target. In the case of a melee attack, the character may also attempt to Parry the attack as part of his Reaction.`
    }
  ],
  [
    'Catfall',
    {
      name: 'Catfall',
      tier: 1,
      prerequisite: ' Agility 30',
      aptitudes: ['Agility', 'Fieldcraft'],
      description: `Gymnastic ability and natural balance enables the Acolyte to fall great distances without harm. He automatically reduces the effective
distance of all falls by a number of metres equal to his Agility bonus, ignoring this distance as if it did not exist. He also adds +20
to his Acrobatics skill tests when using the Jump special skill use, as it pertains to reducing damage from falling.`
    }
  ],
  [
    'Clues from the Crowds',
    {
      name: 'Clues from the Crowds',
      tier: 1,
      prerequisite: ' Fellowship 30',
      aptitudes: ['General', 'Social'],
      description: `It is often difficult to extract information from groups such as hive gangs or Administratum scribes, as often numbers can bolster
recalcitrance to questioning. A veteran Acolyte knows that such groups can hold critical information to complete an investigation, and
can throw more effective nets when interrogating groups and reveal valued clues. Once per day, he can re-roll a test made to gather
information from a group of people`
    }
  ],
  [
    'Die Hard',
    {
      name: 'Die Hard',
      tier: 1,
      prerequisite: ' Willpower 40',
      aptitudes: ['Willpower', 'Defence'],
      description: `Through either mental resolve or sheer stubbornness, the Acolyte refuses to fall. When this character would suffer a level of Fatigue
due to the Blood Loss condition, he makes a Challenging (+0) Willpower test, if he succeeds, he does not suffer a level of Fatigue.`
    }
  ],
  [
    'Disarm',
    {
      name: 'Disarm',
      tier: 1,
      prerequisite: ' Agility 30',
      aptitudes: ['Weapon Skill', 'Defence'],
      description: `The Acolyte can wrest weapons from his opponents’ hands through practised technique or brute force. As a Full Action, the character may
make an Opposed Weapon Skill test against one target with whom he is engaged. If the Acolyte wins the test, the enemy drops his weapon
to the ground. Should the Acolyte score three or more degrees of success, he can take the enemy’s weapon from him.`
    }
  ],
  [
    'Double Team',
    {
      name: 'Double Team',
      tier: 1,
      prerequisite: ' None',
      aptitudes: ['General', 'Offence'],
      description: `The Acolyte has experience of fighting in paired teams that work together to take down their enemies. When Ganging Up on an opponent,
he gains an additional +10 bonus to Weapon Skill tests. If both the characters that outnumber the enemy have this talent, then both
gain an additional +10 bonus, for a total of +20. This bonus is in addition to the normal bonus gained from Ganging Up on an opponent
(see page 229).`
    }
  ],
  [
    'Enemy',
    {
      name: 'Enemy',
      tier: 1,
      prerequisite: ' None',
      specialisations: ['Any listed in the sidebar The Powers of Askellon'],
      aptitudes: ['General', 'Social'],
      description: `
The opposite of Peer (see page 130), the Acolyte is particularly despised and possibly hunted by a specific social group or
organisation, heretical cult, or xenos race. He suffers an additional –10 penalty to Fellowship and Influence tests when dealing with
this group, and the GM can use them to complicate his life from time to time. Unlike other talents, Enemy does not cost any xp to
purchase and cannot be taken as an advance. Instead the GM and player can agree to award it when appropriate to the adventure or
campaign. It can be removed with the approval of the GM, if the character has redeemed himself with the group in question. The Enemy
talent can be awarded multiple times for the same group, in which case it should be listed as Enemy (X), with X equalling the number of
times the talent has been awarded. This can be used to represent groups who particularly hate the Acolyte and want to see him dead. In
game terms, the penalty to Fellowship tests increases to –10 times X.`
    }
  ],
  [
    'Ferric Summons',
    {
      name: 'Ferric Summons',
      tier: 1,
      prerequisites: ' Ferric Lure Implants, Mechanicus Implants',
      aptitudes: ['Willpower', 'Tech'],
      description: `The Acolyte has trained himself in better use of his Ferric Lure Implants (see page 182). He can summon to his hand an unsecured metal
object weighing up to 2 kilograms per point of his Willpower bonus, and can summon such objects up to 40 metres distant.`
    }
  ],
  [
    'Flagellant',
    {
      name: 'Flagellant',
      tier: 1,
      prerequisites: ' Willpower 30',
      aptitudes: ['Offence', 'Toughness'],
      description: `The Acolyte knows that pain is cleansing, and regularly mortalities his own flesh to atone for his sins. As a Full Action, the
character can inflict some suitable punishment on his own body, suffering 1d5–2 levels of Fatigue (to a minimum of 1). He then gains a
+10 bonus on Willpower tests to resist Fear, Pinning, psychic powers, or suffering Corruption, for one hour or until the end of the
current encounter. If the Acolyte also possesses the Frenzy talent, he can enter a Frenzied state as a Free Action while under the
effects of this talent.`
    }
  ],
  [
    'Frenzy',
    {
      name: 'Frenzy',
      tier: 1,
      prerequisite: ' None',
      aptitudes: ['Strength', 'Offence'],
      description: `The Acolyte’s temper and passion boil just below the surface of his psyche, mostly held in check by his rational mind, but easily
released when needed. If he spends one full round fuelling his anger—by flagellation, drugs, or other means—on the next round, he goes
into an uncontrolled rage, gaining a +10 bonus to Weapon Skill, Strength, Toughness, and Willpower, but suffering a –20 penalty to
Ballistic Skill, Intelligence, and Fellowship. Note that characteristic penalties are different from characteristic damage (see page
188), and cannot reduce a characteristic below 1. While Frenzied, the character must attack the nearest enemy in melee combat if
possible. If he is not engaged with the nearest enemy, he must move towards that enemy and engage it if possible. He will not take
obviously suicidal actions such as leaping off a building in order to engage someone on the ground, but he will take any actions that
offer a reasonable opportunity to engage in melee with the nearest enemy.
While Frenzied, he is immune to Fear, Pinning, Stunning effects, and the effects of Fatigue, he cannot Parry, retreat, or flee. He
remains Frenzied for the duration of the combat, and cannot use psychic powers while Frenzied. After combat ends, or if there are no
more eligible enemy targets for the character to attack, he can make a Willpower test to snap out of his Frenzy. If he fails, he must
continue to attack, favouring NPCs over PCs. Each successive round, however, he can make another Willpower test, with a cumulative +10
bonus to return to a stable state of mind and come out of Frenzy. After Frenzying, he cannot Frenzy again for at least an hour, as he
recovers his mental and physical strength.`
    }
  ],
  [
    'Grenadier',
    {
      name: 'Grenadier',
      tier: 1,
      prerequisite: ' Ballistic Skill 35',
      aptitudes: ['Ballistic Skill', 'Finesse'],
      description: `The Acolyte knows that grenades and other explosives are amongst the most effective ways to bring down marauding alien beasts, or to
quickly thin out hordes of lesser xenos monstrosities. When the character misses with a thrown weapon or weapon with the Blast quality,
he may reduce the distance it scatters by a number of metres up to half his BS bonus.`
    }
  ],
  [
    'Iron Jaw',
    {
      name: 'Iron Jaw',
      tier: 1,
      prerequisite: ' Toughness 40',
      aptitudes: ['Toughness', 'Defence'],
      description: `The Acolyte has taken blows from Orks and given back as good as he got, bouncing back from most strikes without ill effects. Whenever
this character becomes Stunned, he may make a Challenging (+0) Toughness test as a Free Action to ignore the effects.`
    }
  ],
  [
    'Jaded',
    {
      name: 'Jaded',
      tier: 1,
      prerequisite: ' Willpower 40',
      aptitudes: ['Willpower', 'Defence'],
      description: `The Acolyte’s wide travels have shown him both wonders and horrors beyond the ken of most. The galaxy has thrown its worst at him and
he has yet to flinch. Mundane events, from death’s horrific visage to xenos abominations, do not force him to gain Insanity points or
make Fear tests. Daemons, Warp manifestations,
and other unnatural effects still affect him normally.`
    }
  ],
  [
    'Keen Intuition',
    {
      name: 'Keen Intuition',
      tier: 1,
      prerequisite: ' Intelligence 35',
      aptitudes: ['Perception', 'Social'],
      description: `The Acolyte has trained extensively to notice objects that seem out of place or hidden. This can bring the smallest irregularity to
prominence, revealing the heresy festering beneath the surface. After failing an Awareness skill test, the character can re-roll the
test with a –10 modifier.`
    }
  ],
  [
    'Leap Up',
    {
      name: 'Leap Up',
      tier: 1,
      prerequisite: ' Agility 30',
      aptitudes: ['Agility', 'General'],
      description: `A combination of athletic ability and speed allows the Acolyte to spring to his feet in virtually any circumstance. He can stand up as
a Free Action.`
    }
  ],
  [
    'Leaping Dodge',
    {
      name: 'Leaping Dodge',
      tier: 1,
      prerequisite: ' Agility 35, Rank 2 in the Dodge skill',
      aptitudes: ['Agility', 'Defence'],
      description: `The Acolyte has become practiced at escaping weapons that cover an area to deadly effect, from flamers to strange xenos devices. When
he would make an Agility test to avoid attacks from weapons with the Spray quality, he may make the test using his Dodge (Ag) skill
instead.`
    }
  ],
  [
    'Mounted Warrior',
    {
      name: 'Mounted Warrior',
      tier: 1,
      prerequisites:
        ' Rank 2 (Trained) in any Operate skill or Rank 2 (Trained) in Survival skill, Ballistic Skill 30 or Weapon Skill 30',
      specialisations: ['Melee', 'Ranged'],
      aptitudes: [['Weapon Skill', 'Ballistic Skill'], 'Offence'],
      description: `
Hard-won experience fighting from the saddle or seat of a vehicle has trained the Acolyte to adjust for the motion of mounted combat,
moving with the vehicle instead of fighting against it. When a character purchases this talent, he selects the specialisation that',
patches the' characteristic prerequisite and aptitude used in purchase. He then reduces any penalty for making corresponding attacks',
(Melee o[r Ranged) from a moving vehicle or mount by 10 for each time the talent has been purchased in that specialisation. This applies]
to both ordinary attack actions and vehicle combat actions, such as Hit and Run.`
    }
  ],
  [
    'Nowhere to Hide',
    {
      name: 'Nowhere to Hide',
      tier: 1,
      prerequisite: ' Perception 30',
      aptitudes: ['Perception', 'Offence'],
      description: `The Acolyte’s keen eye ensures he can spot soft points even in the most impregnable of protective cover. When he damages cover (see
page 229), the character adds his degrees of success from the attack to the reduction of the cover’s Armour value. If using a weapon
that does not require a skill test, he adds 1 instead.`
    }
  ],
  [
    'Peer',
    {
      name: 'Peer',
      tier: 1,
      prerequisite: ' Fellowship 30',
      specialisations: [
        'Any listed in the sidebar The Powers of Askellon (see page 126), others at GM’s discretion'
      ],
      aptitudes: ['Fellowship', 'Social'],
      description: `
The Acolyte knows how to deal with a particular social group or organisation, or even xenos race. He gains a +10 bonus to all
Fellowship and Influence tests when interacting with this chosen group, and at the GM’s discretion can sometimes call upon them for
favors. The GM and player may agree to award this talent when appropriate to the adventure or campaign, though the character must still
pay the experience cost for the Talent as normal. This talent can be awarded multiple times for the same group, in which case it should
be listed as Peer (X), with X equalling the number of times the talent has been awarded. This can be used to represent groups who
particularly like the character and may even be staunch allies. In game terms, the bonus to Fellowship tests increases to +10 times X.
Additionally, when the character acquires this talent, he increases his Influence by 1.`
    }
  ],
  [
    'Quick Draw',
    {
      name: 'Quick Draw',
      tier: 1,
      prerequisite: ' None',
      aptitudes: ['Agility', 'Finesse'],
      description: `The Acolyte has practised so frequently with his weapons that they practically leap into his hands in response to a simple thought. As
a Free Action, the character may draw and ready a Pistol or Basic weapon, or a one-handed Melee weapon.`
    }
  ],
  [
    'Rapid Reload',
    {
      name: 'Rapid Reload',
      tier: 1,
      prerequisite: ' None',
      aptitudes: ['Agility', 'Fieldcraft'],
      description: `The firing ranges and weapon drill chambers are the Acolyte’s constant abode. Hours of reloading countless magazines or power cells
means that he can replace them without looking and without thinking, even in the middle of combat. He halves all reload times, rounding
down. Thus, a Half Action reload becomes a Free Action, a Full Action reload becomes a Half Action, and so on.`
    }
  ],
  [
    'Resistance',
    {
      name: 'Resistance',
      tier: 1,
      prerequisite: ' None',
      specialisations: [
        'Cold',
        'Fear',
        'Heat',
        'Poisons',
        'Psychic Powers',
        'Radiation',
        'Vacuum',
        'Other'
      ],
      aptitudes: ['Toughness', 'Defence'],
      description: `
The Acolyte’s background, experience, training, exposure, or plain stubbornness has developed a resistance within him. Each time he
selects this talent, choose one area of resistance. He gains a +10 bonus when making tests to resist effects of this type. The GM can
require approval for certain choices, or justification based on the Acolyte’s past.`
    }
  ],
  [
    'Sound Constitution',
    {
      name: 'Sound Constitution',
      tier: 1,
      prerequisites: ' None',
      aptitudes: ['Toughness', 'General'],
      description: `The Acolyte gains an additional wound. He can purchase this talent additional times up to twice his Toughness bonus. When he gains this
talent multiple times, note the number of times it has been taken after the talent, such as Sound Constitution (3).`
    }
  ],
  [
    'Skilled Rider',
    {
      name: 'Skilled Rider',
      tier: 1,
      prerequisite: ' Rank 2 in any Operate skill',
      aptitudes: ['Agility', 'Fieldcraft'],
      description: `Often, the best way to overcome the heretic is with merciless speed, and so many Acolytes make extensive use of vehicles and mounts in
their pursuit of humanity’s enemies. Whether the character has used his prized bike until it feels like an extension of his own body,
or he has the experience necessary to instantly adjust to the strange mounts and vehicles found across the Askellon Sector, moving to
or from the saddle or pilot’s seat is second nature. Whenever the character would be thrown from or tossed about within his vehicle, he
makes an Ordinary (+10) Agility test. If he succeeds, the character may choose to either land safely on his feet or retain his original
position in the vehicle. In addition, once per round the character can attempt an Ordinary (+10) Agility test to Mount or Dismount a
vehicle as a Free Action.`
    }
  ],
  [
    'Takedown',
    {
      name: 'Takedown',
      tier: 1,
      prerequisite: ' None',
      aptitudes: ['Weapon Skill', 'Offence'],
      description: `When making a Standard Attack or Charge action, the Acolyte can declare that he is attempting a takedown of his target. He then rolls
to hit (using his Weapon Skill) as normal, applying all the regular modifiers for the attack action. If the character hits and would
have done at least 1 point of damage (after reduction for Armour and Toughness), no wounds are caused. Instead, the opponent must make
a Challenging (+0) Toughness test or be Stunned for 1 Round and knocked Prone. In addition, when performing a Stun Action, the
character does not suffer the normal –20 penalty to his Weapon Skill.`
    }
  ],
  [
    'Technical Knock',
    {
      name: 'Technical Knock',
      tier: 1,
      prerequisite: ' Intelligence 30',
      aptitudes: ['Intelligence', 'Tech'],
      description: `Either through the ease of long practice, or the proper ritual to appease a weapon’s machine spirit, the Acolyte can clear stoppages
with a simple knock or solid smack of his hand to a weapon. Once per round, he may attempt to unjam a gun (see page 224) as a Half
Action rather than a Full Action. He must touch the weapon to make use of this talent.`
    }
  ],
  [
    'Warp Sense',
    {
      name: 'Warp Sense',
      tier: 1,
      prerequisites: ' Perception 30, Psy rating, Psyniscience',
      aptitudes: ['Perception', 'Psyker'],
      description: `The Acolyte’s senses have evolved to perceive the Warp in parallel with the physical world. The character can use the Psyniscience
Skill as a Free Action instead of as a Half Action. He can also passively detect psychic effects and entities without the need to
actively seek them out. Whenever the character could detect such a Warp signature or a creature, the GM can allow him to make a
Psyniscience skill test to detect it, in the same way he could use Awareness to spot an ambush without knowing it is there.`
    }
  ],
  [
    'Weapon-Tech',
    {
      name: 'Weapon-Tech',
      tier: 1,
      prerequisites: ' Intelligence 40, Tech Use +10',
      aptitudes: ['Intelligence', 'Tech'],
      description: `The Acolyte calls upon the blessings of the Omnissiah, channeling his faith into his weapon and performing armament rituals to more
readily smite his foes. Once per combat encounter, as a Free Action, this character may enhance any Melta, Plasma, Power, or Exotic
weapon he is personally wielding. This increases the weapon’s damage and penetration by an amount equal to the character’s Intelligence
bonus until the end of the round.`
    }
  ],
  [
    'Weapon Training',
    {
      name: 'Weapon Training',
      tier: 1,
      prerequisite: ' None',
      specialisations: [
        'Bolt',
        'Chain',
        'Flame',
        'Heavy',
        'Las',
        'Launcher',
        'Melta',
        'Plasma',
        'Power',
        'Low-Tech',
        'Shock',
        'Solid Projectile'
      ],
      aptitudes: ['General', 'Finesse'],
      description: `
The Acolyte can use all weapons with Class: Pistol, Basic, Melee, Throwing, and Vehicle within the group he has selected with this
talent. When a character attempts to use a weapon he does not have the correct Weapon Training talent for, he suffers a –20 penalty to
any relevant Weapon Skill or Ballistic Skill test. The character can only use weapons with Class: Heavy without suffering the –20
penalty if he has both Weapon Training in the appropriate group and Weapon Training (Heavy). This talent can be taken more than once,
each time with a different Specialisation. Note that a character without the Weapon Training (Low-Tech) talent operating a weapon that
functions as a Low-Tech weapon in certain circumstances does not suffer this penalty, so long as he has the applicable Weapon Training
talent for the weapon (Power for a power sword, for example).`
    }
  ],
  // --------------------------------------------------------------------
  // TIER 2
  [
    'Ambassador Imperialis',
    {
      name: 'Ambassador Imperialis',
      tier: 2,
      prerequisites: ' Fellowship 35, Intelligence 35',
      aptitudes: ['Perception', 'Social'],
      description: `Whether from serving in the fleet of a Rogue Trader or dealing with xenos mercenaries on frontier worlds, the Acolyte is experienced in
dealing with alien and the most divergent of non- Imperial cultures, able to avoid the subtle faux pas that can so easily cause a
negotiation to deteriorate into bloodshed. The character reduces any penalty to Interaction skill tests for dealing with xenos or
non-Imperial NPCs by 20. In addition, once per encounter, he can reroll a failed Interaction skill test when interacting with such an
NPC.`
    }
  ],
  [
    'Archivator',
    {
      name: 'Archivator',
      tier: 2,
      prerequisite: ' Int 40',
      aptitudes: ['Knowledge', 'Perception'],
      description: `Whether through years of experience or specialised training, the Acolyte is a master of mining information from the Imperium’s
countless archives. From delving into deep info-crypts to searching mouldering librarium stacks and deciphering ancient tech-slabs, the
Acolyte can uncover knowledge thought long lost. When making a Scholastic Lore or Forbidden Lore test utilising sources of recorded
information of any sort, such as cogitators, tomes, info-nets, and data-slates, the character can reroll a failed test once with a –10
penalty. In addition, tests to perform research or find information in these circumstances take half the usual time.`
    }
  ],
  [
    'Armour-Monger',
    {
      name: 'Armour-Monger',
      tier: 2,
      prerequisites: ' Intelligence 35, Tech-Use, Trade (Armourer)',
      aptitudes: ['Intelligence', 'Tech'],
      description: `The Acolyte is a skilled armourer, and constantly tinkers and improves his armour, or keeps it in pristine shape by repairing the
slightest damage it sustains. With years of training, he has even learned to enhance the protection afforded by his armour and how to
use it to its optimum. The character gains an extra amount of Armour points equal to his Intelligence bonus, which he can distribute to
any locations that his armour would normally cover, as long as he has at least an hour each day to clean and repair it or make minor
modifications. This bonus applies only to armour when the Acolyte is wearing it, as it combines his training with his skill at armoury.`
    }
  ],
  [
    'Battle Rage',
    {
      name: 'Battle Rage',
      tier: 2,
      prerequisite: ' Frenzy',
      aptitudes: ['Strength', 'Defence'],
      description: `Long experience and indomitable will have allowed the character to master the beast within, directing its rage while keeping his head,
despite the howling bloodlust in his mind. The Acolyte can Parry while Frenzied, and can re-roll a failed test to snap out of Frenzy or
resist entering Frenzy if he so chooses.`
    }
  ],
  [
    'Bulging Biceps',
    {
      name: 'Bulging Biceps',
      tier: 2,
      prerequisite: ' Strength 45',
      aptitudes: ['Strength', 'Offence'],
      description: `Whereas a weaker man might be sent flying by the recoil of a heavy weapon, this Acolyte’s strong physique allows him to remain
standing. He can fire a heavy weapon using Semi- Auto Burst or Full Auto Burst without bracing the weapon, and does not suffer the –30
penalty for failing to brace it. In addition, whenever he uses the Heft special use of the Athletics skill (see page 98) he can add +20
to his Athletics skill test to reflect his powerful musculature.`
    }
  ],
  [
    'Bulwark of Faith',
    {
      name: 'Bulwark of Faith',
      tier: 2,
      prerequisites: ' Willpower 45, Iron Faith',
      aptitudes: ['Defence', 'Willpower'],
      description: `When the character passes a Fear test caused by a Daemon, the Daemon suffers 1 Energy damage ignoring armour and Toughness bonus for
each degree of success on the Fear test.`
    }
  ],
  [
    'Combat Master',
    {
      name: 'Combat Master',
      tier: 2,
      prerequisite: ' Weapon Skill 30',
      aptitudes: ['Weapon Skill', 'Defence'],
      description: `The Acolyte’s weapon seems to be everywhere at once, keeping many more opponents at bay in close combat than would seem possible.
Opponents fighting him in hand-to-hand combat gain no bonuses for Ganging Up (see page 229).`
    }
  ],
  [
    'Constant Vigilance',
    {
      name: 'Constant Vigilance',
      tier: 2,
      prerequisites: ' Awareness +10, Intelligence 35 or Perception 35',
      specialisations: ['Intelligence', 'Perception'],
      aptitudes: ['Perception', 'Defence'],
      description: ` From years of surviving ambushes and surprise attacks, the Acolyte is always ready for battle. His subconscious is alert to the
slightest footstep or activation of a lasgun pack, and he acts often before he is fully aware of the threat. When this talent is taken,
the character selects the Specialisation that matches the prerequisite (Perception or Intelligence) used in purchase. He can use the
characteristic that matches that Specialisation when rolling for Initiative instead of his Agility value, and rolls two dice for the
roll (picking the highest of the two for his score).`
    }
  ],
  [
    'Contact Network',
    {
      name: 'Contact Network',
      tier: 2,
      prerequisites: ' Cover-Up, Intelligence 35',
      aptitudes: ['Fellowship', 'Leadership'],
      description: `Acolytes rely on a web of relationships, favours, debts, and obligations that can range from within a hab-block to spanning an entire
system. Developing and exploiting this network properly allows them to gain access to weapons, travel berths, personnel, and other
resources when needed, those who maximise their connections can ensure they are well-armed and well-prepared as they face a new heresy.
An Acolyte with this talent can use his Fellowship characteristic in place of his Influence when making Requisition tests (see page
142).`
    }
  ],
  [
    'Coordinated Interrogation',
    {
      name: 'Coordinated Interrogation',
      tier: 2,
      prerequisites: ' Clues from the Crowds, Strength 40 or Willpower 40',
      aptitudes: ['Intelligence', 'Social'],
      description: `A trained Acolyte, especially when working in conjunction with fellow veteran Acolytes, can induce cooperation from even the most
hardened of suspects and captured heretics. He gains a +10 bonus to all Interrogation tests, and gains an additional +5 for each other
character participating in the interrogation who also has Coordinated Interrogation. This counts as test assistance, and thus also
gains the standard assistance bonuses as per page 25.`
    }
  ],
  [
    'Counter Attack',
    {
      name: 'Counter Attack',
      tier: 2,
      prerequisite: ' Weapon Skill 40',
      aptitudes: ['Weapon Skill', 'Defence'],
      description: `The Acolyte’s lightning ripostes are things of deadly beauty, swift and invisible as the wind. Once per turn, after successfully
Parrying an opponent’s attack, this character may immediately make a Standard Attack action as a Free Action against that opponent
using the weapon with which he Parried. The character suffers a –20 penalty on the Weapon Skill test for this attack.`
    }
  ],
  [
    'Cover-Up',
    {
      name: 'Cover-Up',
      tier: 2,
      prerequisite: ' Intelligence 35',
      aptitudes: ['Intelligence', 'Knowledge'],
      description: `Even the slightest whisper of the Inquisition’s presence can be enough to scatter suspected heretics and drive cults into hiding. To
prevent the growth and spread of rumours, Acolytes use combinations of well-placed bribes, dire threats, and other means to keep their
activities as secretive as possible. At the GM’s discretion, the character can reduce his Influence to increase his group’s Subtlety.
For every point of Influence lost in this way, the Acolyte increases his warband’s Subtlety by 1d5.`
    }
  ],
  [
    'Daemonhunter',
    {
      name: 'Daemonhunter',
      tier: 2,
      prerequisites: ' Forbidden Lore (Daemonology), Willpower 40',
      aptitudes: ['Offence', 'Willpower'],
      description: `Effect: The Acolyte may re-roll failed Awareness and Psyniscience tests to detect the presence of Daemons. In addition, his attacks
against Daemons gain the Proven (3) quality.`
    }
  ],
  [
    'Daemonologist',
    {
      name: 'Daemonologist',
      tier: 2,
      prerequisites: ' Psy rating 3, Willpower 45, Forbidden Lore (Daemonology)',
      aptitudes: ['Psyker', 'Willpower'],
      description: `When the character takes the Focus Power action and the target of the psychic power is a Daemon, he gains a +10 bonus to the Focus
Power test. At the GM’s discretion, this bonus may apply to other tests, such as rituals to summon or bind a Daemon.`
    }
  ],
  [
    'Deny the Witch',
    {
      name: 'Deny the Witch',
      tier: 2,
      prerequisite: ' Willpower 35',
      aptitudes: ['Willpower', 'Defence'],
      description: `The Acolyte draws on his faith and mental fortitude to act as his shield against those tainted by the Warp. The character may use his
Willpower characteristic when making an Evasion Reaction against ranged or melee attacks against him made with psychic powers. When
successfully evading an attack with an area of effect, the character does not move but instead is simply unaffected by the psychic
power.`
    }
  ],
  [
    'Devastating Assault',
    {
      name: 'Devastating Assault',
      tier: 2,
      prerequisite: ' Weapon Skill 35',
      aptitudes: ['Weapon Skill', 'Offence'],
      description: `The Acolyte launches a furious attack on his foe, the rage of the Emperor powering his assault. Once per turn, after resolving an All
Out Attack action that successfully hits, the character may make a second All Out Attack action against the same target as a Free
Action, with the same bonuses and penalties as the first.`
    }
  ],
  [
    'Double Tap',
    {
      name: 'Double Tap',
      tier: 2,
      prerequisite: ' Two-Weapon Wielder',
      aptitudes: ['Finesse', 'Offence'],
      description: `The Acolyte is practiced in making dual attacks, and can almost subconsciously tell when his hits strike to best effect. When making a
second ranged attack action in the same turn against the same target, he gains a +20 bonus to the attack test if his first attack
scored one or more successful hits.`
    }
  ],
  [
    'Exotic Weapon Training',
    {
      name: 'Exotic Weapon Training',
      tier: 2,
      prerequisite: ' None',
      specialisations: ['Each different exotic weapon'],
      aptitudes: ['Intelligence', 'Finesse'],
      description: `
The Acolyte is trained to use a particularly obscure type of weapon, such as a graviton gun or needle pistol. Weapons requiring this
unique talent are noted in their armoury descriptions. Unlike other kinds of weapons training, this talent applies only to a single
weapon type and not a class of weapons. Note that an Exotic weapon with the Heavy class would also require the Weapon Training (Heavy)
talent as well as Exotic Weapon Training in that specific weapon.`
    }
  ],
  [
    'Face in a Crowd',
    {
      name: 'Face in a Crowd',
      tier: 2,
      prerequisites: ' Clues from the Crowds, Fellowship 35',
      aptitudes: ['Fellowship', 'Social'],
      description: `A successful investigation often involves trailing suspects without their knowledge, the better to follow them to hidden dens of
heretical worship or criminal activity. With training, the Acolyte can ensure none notice his presence, through careful replication of
a crowd’s mannerisms or even joining gatherings while still keeping a careful eye on his quarry. When employing the Shadowing special
use of the Stealth skill, he can use his Fellowship characteristic instead of his Agility.`
    }
  ],
  [
    'Field Vivisection',
    {
      name: 'Field Vivisection',
      tier: 2,
      prerequisites:
        ' Ballistic Skill or Weapon Skill 40, Forbidden Lore (Xenos–Any), Rank 2 in the Medicae skill',
      specialisations: ['Ranged', 'Melee'],
      aptitudes: [['Ballistic Skill', 'Weapon Skill'], 'Knowledge'],
      description: `The Acolyte is well-versed in the blasphemous anatomy of his xenos foes, and uses this knowledge to utmost effect, both in the
laboratorium and on the battlefield. Each time this talent is taken, the character selects the Specialisation that matches the
Characteristic and Aptitude pair (Ballistic Skill or Weapon Skill) used in purchase. When using the Called Shot action with a melee or
ranged attack (depending on the Specialisation) against a target for which the character has the appropriate Forbidden Lore (Xenos)
skill, he makes a Medicae (WS) or Medicae (BS) test in place of the normal Weapon Skill or Ballistic Skill test.`
    }
  ],
  [
    'Hard Target',
    {
      name: 'Hard Target',
      tier: 2,
      prerequisite: ' Agility 40',
      aptitudes: ['Agility', 'Defence'],
      description: `Light on his feet, the Acolyte dodges and weaves as he moves, skills learned from long years in the line of fire. When he performs a
Charge or Run action, opponents suffer a –20 penalty to Ballistic Skill tests made to hit him with ranged attacks. This penalty
continues until the start of his next turn.`
    }
  ],
  [
    'Hardened Soul',
    {
      name: 'Hardened Soul',
      tier: 2,
      prerequisites: ' Willpower 35, 10 Corruption points',
      aptitudes: ['Defence', 'Willpower'],
      description: `Whenever the character would gain Corruption points, he may reduce the amount gained by half (rounded up) and gain Insanity points
equal to the amount reduced.`
    }
  ],
  [
    'Hardy',
    {
      name: 'Hardy',
      tier: 2,
      prerequisite: ' Toughness 40',
      aptitudes: ['Toughness', 'Defence'],
      description: `The Acolyte’s constitution allows him to rebound quickly from shock or injury. When undergoing medical treatment or healing from
injuries, he always recovers damage as if Lightly Damaged, regardless of the level of damage he sustained.`
    }
  ],
  [
    'Hatred',
    {
      name: 'Hatred',
      tier: 2,
      prerequisite: ' None',
      specialisations: [
        'Chaos Space Marines',
        'Daemons',
        'Mutants',
        'Psykers',
        'Xenos (specific)',
        'others including groups from The Powers of Askellon (page 94)'
      ],
      aptitudes: ['Weapon Skill', 'Social'],
      description: `
A group, organisation, or race has wronged the character in the past, fuelling this animosity. When fighting opponents of that group in
close combat, the Acolyte gains a +10 bonus to all Weapon Skill tests made against them. He also finds it difficult to back down from a
fight with his hated foe, and must make a Challenging (+0) Willpower test to retreat or surrender when fighting them, unless suicidally
outnumbered or outclassed.`
    }
  ],
  [
    'Hip Shooting',
    {
      name: 'Hip Shooting',
      tier: 2,
      prerequisites: ' Agility 40, Ballistic Skill 40',
      aptitudes: ['Ballistic Skill', 'Finesse'],
      description: `The Acolyte’s prowess with ranged weapons is such that he can still fire accurately without his eye behind the sights. As a Full
Action, he can both move up to his Full Move rate and make a single attack with a ranged weapon. This attack can only be a single shot,
and so cannot be a semi- or full-automatic ranged attack for example. Characters with the Two-Weapon Fighting talent can use this
talent with Hip Shooting to make two single shots, if they are armed with a ranged weapon in each hand.`
    }
  ],
  [
    'Hotshot Pilot',
    {
      name: 'Hotshot Pilot',
      tier: 2,
      prerequisites: ' Rank 2 in Survival or any Operate skill, Agility 35',
      aptitudes: ['Agility', 'Tech'],
      description: `When the situation calls for it, the operator stretches the bounds of his abilities, displaying impressive feats of manoeuvring. This
experience has also taught the Acolyte how to recover from what might become fatal mishaps for a less skilled operator attempting such
manoeuvres. When the Acolyte succeeds on an Operate test (or Survival test in the case of a living steed), he may voluntarily suffer 1
level of Fatigue to add a number of degrees of success equal to half of his Agility bonus. When the Acolyte fails an Operate test (or
Survival test in the case of a living steed), he may voluntarily suffer 1 level of Fatigue in order to reduce the degrees of failure by
an amount equal to his Agility bonus, to a minimum of 1.`
    }
  ],
  [
    'Independent Targeting',
    {
      name: 'Independent Targeting',
      tier: 2,
      prerequisite: ' Ballistic Skill 40',
      aptitudes: ['Ballistic Skill', 'Finesse'],
      description: `The Acolyte has developed his situational awareness to a point where he can fire in two directions within a split second. When firing
two weapons as part of a single action (using the Two- Weapon Fighting talent, for example), the character does not need his targets to
be within 10 metres of each other.`
    }
  ],
  [
    'Inescapable Attack',
    {
      name: 'Inescapable Attack',
      tier: 2,
      prerequisites: ' Ballistic Skill 40 or Weapon Skill 40, Perception 35',
      specialisations: ['Ranged', 'Melee'],
      aptitudes: [['Ballistic Skill', 'Weapon Skill'], 'Finesse'],
      description: `
The Acolyte can anticipate his opponent’s reactions, and ensures his hits strike no matter how a foe tries to avoid them. This talent
applies to Melee or Ranged attacks, depending on the Speciality chosen. After making a successful attack test of the appropriate type
as part of an All Out Attack, Called Shot, Charge, Standard Attack, or Stun action, the character imposes a penalty on all evasion
attempts (Dodge or Parry tests) made against this attack equal to 10 times the total degrees of success scored on the attack test.`
    }
  ],
  [
    'Inspiring Aura',
    {
      name: 'Inspiring Aura',
      tier: 2,
      prerequisites: ' Halo of Command',
      aptitudes: ['Leadership', 'Willpower'],
      description: `The character can affect allies of any kind—not only subordinates—with the Terrify special use for the Command skill (see page 101 of
the Dark Heresy Core Rulebook). This need not represent threats and intimidation, but might represent inspiring words, encouragement,
or sheer steadfastness in the face of terrifying foes.
`
    }
  ],
  [
    'Iron Resolve',
    {
      name: 'Iron Resolve',
      tier: 2,
      prerequisites: ' Resistance (Fear), Jaded',
      aptitudes: ['Defence', 'Willpower'],
      description: `After failing a Fear or Pinning test, the character can re-roll the test with a –10 modifier.
`
    }
  ],
  [
    'Killing Strike',
    {
      name: 'Killing Strike',
      tier: 2,
      prerequisite: ' Weapon Skill 50',
      aptitudes: ['Weapon Skill', 'Offence'],
      description: `With expert precision, the Acolyte can land blows which defy his opponent’s ability to counter, slicing through defences as surely as a
powerblade cuts flesh. At the beginning of each of his turns, the character may spend a Fate point to make his melee attacks
unavoidable with the Dodge and Parry skills until the end of the round. Other means of avoiding or stopping attacks (such as displacer
fields or alien protective devices) are unaffected.
`
    }
  ],
  [
    'Lexographer',
    {
      name: 'Lexographer',
      tier: 2,
      prerequisite: ' Rank 3 in Linguistics (Any)',
      aptitudes: ['Intelligence', 'Knowledge'],
      description: `From years poring over dusty tomes and examining ancient ruins on forgotten worlds—and perhaps even speaking face-toface with inhuman
beings—the Acolyte has become an expert in deciphering lost human languages as well as those of xenos. The character can attempt any
Linguistics skill in which he is not trained as an untrained skill test as if it were not a Specialist skill.
`
    }
  ],
  [
    'Lumien Shock',
    {
      name: 'Lumien Shock',
      tier: 2,
      prerequisites: ' Luminen Capacitors, Mechanicus Implants',
      aptitudes: ['Weapon Skill', 'Tech'],
      description: `The energies charged in the Acolyte’s Luminen Capacitors can be expelled by touching a foe. The character always counts as being
equipped with a melee weapon that inflicts 1d10 plus his WPB in Energy damage, with Pen 0 and the Shocking quality. He always counts as
having Weapon Training for it and after making this attack, he must pass a Toughness test or suffer 1 level of Fatigue.
`
    }
  ],
  [
    'Maglev Transcendence',
    {
      name: 'Maglev Transcendence',
      tier: 2,
      prerequisites: ' Maglev Coils, Mechanicus Implants',
      aptitudes: ['Intelligence', 'Tech'],
      description: `The Acolyte has learned how to better use his implanted maglev coils, and can hover for a number of minutes equal to 1d10 plus twice
his Toughness bonus. He can move his Run speed when making a Half Move action and suffers no damage from falling if the coils are
active. Each use drains half the power stored in the coils (therefore he can use the coils twice before recharging them).
`
    }
  ],
  [
    'Marksman',
    {
      name: 'Marksman',
      tier: 2,
      prerequisite: ' Ballistic Skill 35',
      aptitudes: ['Ballistic Skill', 'Finesse'],
      description: `The Acolyte’s steady hand and eagle eye allow him to keep crosshairs steady on any target, regardless of range. Distance is no
protection against the character’s marksmanship, and he suffers no penalties for making Ballistic Skill tests at Long or Extreme range.
`
    }
  ],
  [
    'Mechadendrite Use',
    {
      name: 'Mechadendrite Use',
      tier: 2,
      prerequisite: ' Mechanicus Implants',
      specialisations: ['Weapon', 'Utility'],
      aptitudes: ['Intelligence', 'Tech'],
      description: `
The Acolyte is trained in the use of a particular kind of mechadendrite (see page 183) in much the same way as Weapon Training allows
the use of weapons. Though there are many different types of mechadendrites, this talent divides them into two broad categories:
• Weapon: Mechadendrites of this type end in either ranged or close combat weapons, and have the supplemental power supplies and
mechanical support necessary for combat.
• Utility: Including such varied types as Manipulator, Medicae, Utility, Optical, and countless others, these generally require less
hardy mountings, but all function in a similar manner.
`
    }
  ],
  [
    'One-on-One',
    {
      name: 'One-on-One',
      tier: 2,
      prerequisites: ' Weapon Skill 40',
      aptitudes: ['Finesse', 'Weapon Skill'],
      description: `When fighting a single enemy in melee combat, the character scores extra degrees of success on successful Weapon Skill tests equal to
half of his Weapon Skill bonus (rounded down).
`
    }
  ],
  [
    'Penitent Psyker',
    {
      name: 'Penitent Psyker',
      tier: 2,
      prerequisites: ' Psy rating, Strong Minded, Willpower 40',
      aptitudes: ['Psyker', 'Defence'],
      description: `Psykers are hated and shunned throughout the Imperium, and even those psykers who serve the Emperor often struggle with their curse.
Whether a rogue psyker taken under an Inquisitor’s wing or a sanctioned psyker whose faith condemns his abilities, such an individual
might develop the ability to act as a kind of psychic lightning rod, sacrificing his own flesh in order to protect his allies from the
Warp-spawned powers of the witch and wyrd. When the psyker or an ally within 10 metres becomes the target of a psychic power, the
psyker may voluntarily suffer any number of levels of Fatigue. Each level of Fatigue suffered grants the target a +10 bonus on any
Opposed test to resist the power or Evasion test to avoid its effects. If the target’s test to resist or avoid the power results in a
roll of doubles, the psyker generates Psychic Phenomena, just as if he had used the Focus Power action.
`
    }
  ],
  [
    'Precision Killer',
    {
      name: 'Precision Killer',
      tier: 2,
      prerequisites: ' Ballistic Skill 40 or Weapon Skill 40',
      specialisations: ['Ranged', 'Melee'],
      aptitudes: [['Ballistic Skill', 'Weapon Skill'], 'Finesse'],
      description: `
The Acolyte’s eye, hand, and weapon act seamlessly together, placing his attacks exactly where he intends. When this talent is taken,
the character selects the Specialisation that matches the Characteristic and Aptitude pair (Ballistic Skill or Weapon Skill) used in
purchase. When making a Called Shot (see page 219) with a melee or ranged attack (depending on the Specialisation), he does not suffer
the usual –20 penalty.
`
    }
  ],
  [
    'Prosanguine',
    {
      name: 'Prosanguine',
      tier: 2,
      prerequisites: ' Autosanguine Implants, Mechanicus Implants',
      aptitudes: ['Toughness', 'Tech'],
      description: `Through the Acolyte’s iron will, he is able to speed the function of his Autosanguinator. He must spend 10 minutes in meditation and
make a Tech-Use test. If he succeeds, he removes 1d5 points of damage. If he rolls a 96 or higher, he loses the ability to use his
Autosanguinator for one week.
`
    }
  ],
  [
    'Purity of Hatred',
    {
      name: 'Purity of Hatred',
      tier: 2,
      prerequisites: ' Hatred (Any)',
      specialisations: ['Any group for which the character possesses the Hatred talent'],
      aptitudes: ['Offence', 'Willpower'],
      description: `
The Acolyte has honed his hatred to a razor’s edge, pure and unsullied by mercy or doubt. When facing the object of his hatred, whether
it be the witch, mutant, heretic, or traitor, the Acolyte is an instrument of the Emperor’s Will, despatching His judgement upon the
enemies of humanity as if guided by His very hand. When selecting this talent, the character chooses one specific group for which he
possesses the Hatred talent. Against opponents of this group, the Acolyte’s attacks gain the Vengeful (9) quality. If the Acolyte’s
weapon or attacks already possess this quality, decrease the value by one (to a minimum of 1).
`
    }
  ],
  [
    'Rites of Banishment',
    {
      name: 'Rites of Banishment',
      tier: 2,
      prerequisites: ' Common Lore (Imperial Creed) +10 or Forbidden Lore (Daemonology)',
      aptitudes: ['Offence', 'Willpower'],
      description: `Once per round as a Half Action, the character may speak the litanies and invocations to disrupt Daemons. Until the beginning of his
next turn, Daemons within a distance equal to twice the character’s Willpower bonus in meters suffer a –10 penalty to Willpower tests.
`
    }
  ],
  [
    'Strong Minded',
    {
      name: 'Strong Minded',
      tier: 2,
      prerequisites: ' Resistance (Psychic Powers), Willpower 30',
      aptitudes: ['Willpower', 'Defence'],
      description: `The Acolyte’s mind acts as a fortress against psychic attacks. He can re-roll failed Willpower tests to resist any psychic powers that
affect his mind. This talent does not affect psychic powers that have a physical effect, such as Smite or Assail.
`
    }
  ],
  [
    'Swift Attack',
    {
      name: 'Swift Attack',
      tier: 2,
      prerequisites: ' Weapon Skill 30',
      aptitudes: ['Weapon Skill', 'Finesse'],
      description: `The Acolyte’s ability with weapons is legendary, allowing him to attack with amazing speed in melee. He can make the Swift Attack
action (see page 225).
`
    }
  ],
  [
    'Tainted Psyker',
    {
      name: 'Tainted Psyker',
      tier: 2,
      prerequisites: ' Psy rating, Rank 2 (Trained) in Psyniscience skill, 10 Corruption points',
      aptitudes: ['Knowledge', 'Psyker'],
      description: `Though all psykers draw their power from the Warp, the Scholastica Psykana teaches that the Warp is something to fear. Some psykers
ignore these warnings, whether wyrds who escaped the Black Ships, scholars of maleic lore, or even sanctioned psykers fallen from
grace. Such tainted psykers embrace the true potential the Warp ofers, and even heed its denizens’ whispered promises of greater power.
When making a Focus Power test, the character may gain a number of Corruption points up to his psy rating. For each point he gains in
this way, he gains a +10 bonus to the Focus Power test but adds +5 to rolls on Table 6–2: Psychic Phenomena (see page 196 of the DARK
HERESY Core Rulebook).
`
    }
  ],
  [
    'Two-Weapon Wielder',
    {
      name: 'Two-Weapon Wielder',
      tier: 2,
      prerequisites: ' None',
      specialisations: ['Melee', 'Ranged'],
      aptitudes: [['Weapon Skill', 'Ballistic Skill'], 'Finesse'],
      description: `
Intensive training allows the Acolyte to use a weapon in each hand when needed. When armed with two one-handed weapons (ether melee or
ranged weapons), after making a Half Action attack (this can be a Single Attack, a Swift Attack, or a Lightning Attack with a melee
weapon, or it can be a single shot, semi-auto burst, or full auto burst with a ranged weapon), he can make a single additional Half
Action attack following the same restrictions with the other weapon as a Free Action. In effect, this allows him to attack twice in a
round, once from each of his weapons. Both of these attacks count as being part of the same Half Action, and both tests made to attack
with the weapons suffer a –20 penalty. This talent can be taken twice, each time with a different specialisation (melee or ranged). If
he possesses both talents, then he can fight with one melee and one ranged weapon. When this talent is taken with the melee focus it
counts as having the Weapon Skill and Finesse aptitudes, and when it is taken with the ranged focus it counts as having the Ballistic,
Skill and Finesse aptitudes.,
`
    }
  ],
  [
    'Unarmed Specialist',
    {
      name: 'Unarmed Specialist',
      tier: 2,
      prerequisites: ' Agility 35, Ambidextrous, Weapon Skill 35',
      aptitudes: ['Strength', 'Offence'],
      description: `After extensive training, the Acolyte has made his body as dangerous as any Munitorum-issued weapon. He gains the Deadly Natural Weapon
trait (see page 135), and counts as armed even when facing weapon-wielding opponents while barehanded. While fighting barehanded, he
can also re-roll the damage he inflicts.
`
    }
  ],
  [
    'Warp Conduit',
    {
      name: 'Warp Conduit',
      tier: 2,
      prerequisites: ' Psy rating, Strong Minded, Willpower 50',
      aptitudes: ['Willpower', 'Psyker'],
      description: `The sheer power of the Acolyte’s mind allows him to channel vast amounts of Warp energy when he chooses. When Pushing (see page 194),
before rolling his Focus Power test the character may spend one Fate Point to add an additional 1d5 to the effective psy rating of the
power. Channelling such vast amounts of power is dangerous, however, and so he adds +30 to rolls on Table 6–2: Psychic Phenomena when
he makes one as a result of this talent.
`
    }
  ],
  [
    'Whirlwind of Death',
    {
      name: 'Whirlwind of Death',
      tier: 2,
      prerequisite: ' Weapon Skill 40',
      aptitudes: ['Weapon Skill', 'Finesse'],
      description: `When facing massed opponents in close quarters, the Acolyte becomes a streak of blows, moving, hacking, gutting, and beheading his
enemies with ceaseless fury. As a Half Action, the character may make one Standard Attack action (see page 224) with a melee weapon
against a foe, plus one additional Standard Attack action with the same weapon targeting each other foe also engaged in melee combat
with the character beyond the first (to a maximum number of attacks up to his Weapon Skill bonus).
`
    }
  ],
  [
    'Witch Finder',
    {
      name: 'Witch Finder',
      tier: 2,
      prerequisites: ' Rank 2 (Trained) in the Forbidden Lore (Psykers) skill, Willpower 45',
      aptitudes: ['Knowledge', 'Perception'],
      description: `In order to root out the witch, wyrd, and sorcerer, an Inquisitor or Acolyte must be able to detect and follow the sign and spoor of
the psyker. Although some are themselves psykers, or employ the services of such, others train their own senses and mind to detect even
the subtlest traces of psychic activity. The character counts as possessing the Psyniscience skill at Rank 1 (Known), even though he is
not a psyker. Note that he cannot spend experience to gain additional ranks in the skill.

`
    }
  ],
  [
    'Xenosavant',
    {
      name: 'Xenosavant',
      tier: 2,
      prerequisite: ' Rank 3 in Forbidden Lore (Xenos–Any)',
      aptitudes: ['Intelligence', 'Knowledge'],
      description: `In his study and prosecution of the xenos threat, the Acolyte has become well-versed in the ways and forms of the myriad alien races
that menace humanity. The character can attempt any Forbidden Lore (Xenos) test in which he is not trained as an untrained skill test
as if it were not a Specialist skill.
`

      // TIER 3
    }
  ],
  [
    'Aegis of Contempt',
    {
      name: 'Aegis of Contempt',
      tier: 3,
      prerequisites: ' Shared Destiny, Shield of Contempt, Hatred (any)',
      aptitudes: ['Defence', 'Leadership'],
      description: `The Inquisitor wards his mind and soul to withstand the influence of the Archenemy of Mankind. Just as his Acolytes help him to guard
Mankind against such damnation, so does he guard them, strengthening their resolve with benedictions of hatred and cleansing prayers.
Whenever this character or an ally within 10 metres gains Corruption, reduce the amount gained by 1 to a minimum of 0. In addition, an
ally within 10 metres can spend a Fate point to gain 0 Corruption instead. These effects do not stack when there are multiple
characters with this talent within range.
`
    }
  ],
  [
    'Adamantium Faith',
    {
      name: 'Adamantium Faith',
      tier: 3,
      prerequisites: ' Jaded, Resistance (Fear), Willpower 45',
      aptitudes: ['Willpower', 'Defence'],
      description: `The Acolyte has become inured to horrors that would cripple lesser men. This might come from years of facing incoming fire, staring
down the terrors of the Warp, or simply his absolute faith in the Emperor. He can subtract his Willpower bonus from his degrees of
failure on a failed Fear or Pinning test. If this reduces the result to zero or less, he counts as having passed the Fear test with 1
degree of success.
`
    }
  ],
  [
    'Assassin Strike',
    {
      name: 'Assassin Strike',
      tier: 3,
      prerequisites: ' Acrobatics, Agility 40',
      aptitudes: ['Weapon Skill', 'Fieldcraft'],
      description: `The character’s natural agility and graceful martial form turn him into a dervish of death in combat. After making a melee attack, a
successful Challenging (+0) Acrobatics skill test allows the Acolyte to move at half rate as a Free Action. He may only make this move
once per round, and the character’s opponent does not receive a free attack resulting from this move.
`
    }
  ],
  [
    'Bastion of Iron Will',
    {
      name: 'Bastion of Iron Will',
      tier: 3,
      prerequisites: ' Psy rating, Strong Minded, Willpower 40',
      aptitudes: ['Willpower', 'Psyker'],
      description: `The Acolyte’s sheer willpower and psychic focus have become one and the same, over years of practice and training, such that their
combined use is second nature. He adds 5 x his psy rating to any Opposed test he makes when defending against psychic powers.
`
    }
  ],
  [
    'Blademaster',
    {
      name: 'Blademaster',
      tier: 3,
      prerequisites: ' Weapon Skill 30, Weapon Training (any melee)',
      aptitudes: ['Weapon Skill', 'Finesse'],
      description: `The Acolyte’s mastery of bladed weapons and their martial disciplines has no peer. When attacking with any bladed weapon, including
chainswords, axes, and power swords, he can re-roll one missed attack per round.
`
    }
  ],
  [
    'Crushing Blow',
    {
      name: 'Crushing Blow',
      tier: 3,
      prerequisite: ' Weapon Skill 40',
      aptitudes: ['Weapon Skill', 'Offence'],
      description: `The Acolyte has the ability to focus his entire body into close combat attacks. He adds half his Weapon Skill bonus (rounding up) to
damage he inflicts with melee attacks.
`
    }
  ],
  [
    'Daemonic Disruption',
    {
      name: 'Daemonic Disruption',
      tier: 3,
      prerequisites: ' Bane of the Daemon, Willpower 50, Untouchable elite advance',
      aptitudes: ['Willpower', 'Psyker'], //not sure aboute psyker aptitude
      description: `Whenever a creature with the Warp Instability trait makes a successful attack test against this character, it must immediately test for
Warp Instability after resolving the attack.
`
    }
  ],
  [
    'Dark Soul',
    {
      name: 'Dark Soul',
      tier: 3,
      prerequisites: ' Hardened Soul, 20 Corruption points',
      aptitudes: ['Toughness', 'Willpower'],
      description: `When the character would test to gain a mutation as a result of increasing Corruption, he may choose to automatically pass the test. If
he does, he also gains a Malignancy and increases his Corruption total by 1d10.
`
    }
  ],
  [
    'Deathdealer',
    {
      name: 'Deathdealer',
      tier: 3,
      prerequisites: ' Ballistic Skill 45 or Weapon Skill 45',
      specialisations: ['Ranged', 'Melee'],
      aptitudes: ['Perception', 'Finesse'],
      description: `
The Acolyte can place his hits where they inflict maximum harm, such as gaps or joints in armour. When this talent is taken, the',
pharacter selects' the Specialisation that matches the prerequisite used in purchase (Melee with Weapon Skill, Ranged with Ballistic',
Skill).[ When the character’s attack in that combat type inflicts Critical damage, he adds his Perception bonus to the damage result.]
description:
`
    }
  ],
  [
    'Delicate Interrogation',
    {
      name: 'Delicate Interrogation',
      tier: 3,
      prerequisites: ' Coordinated Interrogation, Fellowship 50',
      aptitudes: ['Intelligence', 'Finesse'],
      description: `Questioning suspects and witnesses is always a necessary part of any investigation. Such sessions must remain secretive or obscured,
however, lest others learn of the Inquisition’s interest, and a variety of subterfuges, deceptions, and outright threats come into play
to aid this effort. Whenever the Acolyte would decrease his warband’s Subtlety due to an interrogation, the amount of Subtlety lost is
reduced by 1d5. If this results in a negative number, the Acolyte’s skilled efforts increase the warband’s Subtlety by 1.
`
    }
  ],
  [
    'Divine Protection',
    {
      name: 'Divine Protection',
      tier: 3,
      prerequisites: ' Ballistic Skill 45, Willpower 35',
      aptitudes: ['Finesse', 'Willpower'], //unsure of willpower aptitude
      description: `Those who hunt the witch and mutant often prefer to use cleansing ire to purify their unclean enemies. As if to
further demonstrate the cleansing power of lame, some such blessed warriors even use lamers and similar weapons when their allies are
in the line of fire, yet miraculously leave them unaffected. If a supposed ally does succumb to the flames, surely that is only
evidence of concealed heresy. When the Acolyte attacks using a weapon with the Spray quality, it only strikes enemies within the area
of effect, the attack does not harm allies.
`
    }
  ],
  [
    'Eye of Vengeance',
    {
      name: 'Eye of Vengeance',
      tier: 3,
      prerequisite: ' Ballistic Skill 50',
      aptitudes: ['Ballistic Skill', 'Offence'],
      description: `The Acolyte can focus his intent on where it is likely to do most damage to his enemy and then strike his foe down with a single shot.
Before making a ranged Standard Attack action, he can spend a Fate point. If he does so, he adds the number of degrees of success
scored on the attack test to both his damage and penetration for the hit.
`
    }
  ],
  [
    'Favoured by the Warp',
    {
      name: 'Favoured by the Warp',
      tier: 3,
      prerequisite: ' Willpower 35',
      aptitudes: ['Willpower', 'Psyker'],
      description: `Whenever this character rolls on Table 6–2: Psychic Phenomena (see page 196), so long as he does not receive the Perils of the Warp
result, he may roll a second time and choose which result he receives.
`
    }
  ],
  [
    'Flash of Insight',
    {
      name: 'Flash of Insight',
      tier: 3,
      prerequisites: ' Contact Network, Coordinated Interrogation, Intelligence 40',
      aptitudes: ['Perception', 'Knowledge'],
      description: `Despite steady application of logic and careful analysis, some conundrums remain insoluble, but inspiration could come from outside
sources, such as reading patterns from wisps of lho smoke or even making direct appeals to the Emperor for guidance. An Acolyte who has
trained his mind to process such lateral data can leap to conclusions that direct thinking cannot provide, and thus quash even the most
hidden of heresies. When stuck in an investigation, he can spend one Fate point to reveal a single clue or lead to aid in the
progression of his efforts.
`
    }
  ],
  [
    'Halo of Command',
    {
      name: 'Halo of Command',
      tier: 3,
      prerequisites: ' Fellowship 40, Willpower 40',
      aptitudes: ['Fellowship', 'Leadership'],
      description: `The Acolyte has trained himself to better lead and sway others, either motivating or terrifying those around him to greater levels.
When targeting friendly NPCs through skills that have either the Social or Leadership Aptitudes (such as Charm, Command, and,
Intimidate), he can affect those within 100 times his Fellowship bonus in metres rather than 10 times that number.
`
    }
  ],
  [
    'Hammer Blow',
    {
      name: 'Hammer Blow',
      tier: 3,
      prerequisite: ' Crushing Blow',
      aptitudes: ['Strength', 'Offence'],
      description: `The Acolyte strikes a single blow with such focus and force that it breaks armour and pulps flesh as it strikes. When he uses an All
Out Attack action to make a single melee attack, he can add half his Strength bonus (rounded up) to the weapon’s penetration. The
attack also counts as having the Concussive (2) weapon quality, to represent the shocking force of the blow’s impact.
`
    }
  ],
  [
    'Hull Down',
    {
      name: 'Hull Down',
      tier: 3,
      prerequisites: ' Rank 2 in Survival or any Operate skill',
      aptitudes: ['Agility', 'Fieldcraft'],
      description: `The Acolyte remains aware of his foes at all times in combat, carefully angling his vehicle or steed at each moment to present a
narrower silhouette to all attackers, as well as taking the best advantage of any intervening terrain to gain cover. When the character
takes a vehicle combat action with the Movement subtype, his vehicle or steed counts the value of its Size trait as being one lower for
purposes of attack modifiers and the benefits of cover until the start of his next turn.
`
    }
  ],
  [
    'Infused Knowledge',
    {
      name: 'Infused Knowledge',
      tier: 3,
      prerequisites: ' Intelligence 40, Lore (any one)',
      aptitudes: ['Intelligence', 'Knowledge'],
      description: `The Acolyte has been imbued with a great breadth of lore, either through punishing noetic techniques or by arcane methods kept secret
by the guardians of technology and learning. He counts as having all Common Lore and Scholastic Lore skills at rank 1
(Known)—basically, he knows something about everything. If he wishes to later improve his Lore skills, these advances must be bought
using experience points (from rank 1) as normal. He also adds one degree of success to any successful Common or Scholastic Lore tests,
due to his ingrained training.

`
    }
  ],
  [
    'Instrument of His Will',
    {
      name: 'Instrument of His Will',
      tier: 3,
      prerequisites: ' Willpower 50',
      aptitudes: ['Offence', 'Willpower'],
      description: `After making a successful attack against a Daemon (this can include striking it with a psychic power), the character may spend a Fate
point to increase the damage of the first hit he inflicts as part of that attack by an amount equal to twice his Willpower bonus. This
additional damage ignores armour and Toughness bonus.
`
    }
  ],
  [
    'Iron Faith',
    {
      name: 'Iron Faith',
      tier: 3,
      prerequisites: ' Iron Resolve',
      aptitudes: ['Defence', 'Willpower'],
      description: `The character is immune to the effects of the Baneful Presence trait.
`
    }
  ],
  [
    'Lightning Attack',
    {
      name: 'Lightning Attack',
      tier: 3,
      prerequisite: ' Swift Attack',
      aptitudes: ['Weapon Skill', 'Finesse'],
      description: `The Acolyte’s speed with weapons is unmatched, allowing him to launch flurries of attacks in melee. He can make the Lightning Attack
action (see page 222).
`
    }
  ],
  [
    'Luminen Blast',
    {
      name: 'Luminen Blast',
      tier: 3,
      prerequisites: ' Luminen Shock, Luminen Capacitors, Mechanicus Implants',
      aptitudes: ['Ballistic Skill', 'Tech'],
      description: `The energies charged in the Acolyte’s Luminen Capacitors can be expelled in a ranged attack. The character always counts as being
equipped with a Pistol weapon with a 10m range. This can only be used in single shot mode, and deals 1d10 plus twice his Willpower
bonus in Energy damage, with Pen 0 and the Shocking quality. The character always counts as having Weapon Training for this weapon and
after making an attack with it, he must pass a Toughness test or suffer 1 level of Fatigue.`
    }
  ],
  [
    'Mastery',
    {
      name: 'Mastery',
      tier: 3,
      prerequisite: ' Rank 4 in selected skill',
      specialisations: ['Any skill'],
      aptitudes: ['Intelligence', 'Knowledge'],
      description: `
The Acolyte has mastered a single skill. He can spend a Fate point to automatically pass a skill test with his chosen skill, provided
the final modifier to his skill test is Challenging (+0) or better. He scores a number of degrees of success equal to the
characteristic bonus of the skill’s associated characteristic. This talent may be taken more than once, each time for a different
skill.`
    }
  ],
  [
    'Mighty Shot',
    {
      name: 'Mighty Shot',
      tier: 3,
      prerequisite: ' Ballistic Skill 40',
      aptitudes: ['Ballistic Skill', 'Offence'],
      description: `The Acolyte knows the weak points in every type of armour and material, and has the skill to ensure that his shots land exactly where
they can do the most damage. He adds half his Ballistic Skill bonus (rounded up) to damage he inflicts with ranged weapons.`
    }
  ],
  [
    'Never Die',
    {
      name: 'Never Die',
      tier: 3,
      prerequisites: ' Willpower 50, Toughness 50',
      aptitudes: ['Toughness', 'Defence'],
      description: `The Acolyte’s will or devotion to the Emperor can sustain him when his mortal body fails. He may spend one Fate point to ignore the
effects of injury (such as those from Critical damage), Fatigue, and Stunning for a single combat, so long as they would not kill him
immediately. This talent does not prevent the damage, but allows him to temporarily ignore its effects for the duration of the combat.
Once the encounter ends, the effects trigger as normal.`
    }
  ],
  [
    'Preternatural Speed',
    {
      name: 'Preternatural Speed',
      tier: 3,
      prerequisites: ' Weapon Skill 40, Agility 50',
      aptitudes: ['Agility', 'Offence'],
      description: `The Acolyte is a swift-moving bringer of death, a living, bloody scythe before whom foes die like corn before the reaper. When making a
Charge action, he doubles his normal Charge movement (for instance, if he has an Agility bonus of 3 and thus a Charge movement of 9
metres, his movement is then doubled to 18 metres with this talent).
`
    }
  ],
  [
    'Push the Limit',
    {
      name: 'Push the Limit',
      tier: 3,
      prerequisites: ' Rank 2 in Survival or any Operate skill, Tech-Use',
      aptitudes: ['Perception', 'Tech'],
      description: `Whether through study, practice, or sheer intuition, the Acolyte is aware of the limits of his vehicle or steed, and knows how to push
it to those limits and beyond. Although overtaxing a beast or executing wheel-tearing turns can provide a great advantage in combat or
pursuit, a single wrong move can prove catastrophic, injuring the pilot or even ripping his vehicle apart. Once per round, the
character may add +20 to an Operate test (or Survival test in the case of living steeds), however, if he fails the test by 4 or more
degrees of failure, immediately roll 1d5 on Table 7–32: Motive Systems Critical Hit Effects on page 257 of the Dark Heresy Core
Rulebook and apply the result. If he is riding a living mount, roll 1d5 on Table 7–18: Impact Critical Effects – Leg on page 239 of the
Dark Heresy Core Rulebook and apply the result.
`
    }
  ],
  [
    'Sanctic Purity',
    {
      name: 'Sanctic Purity',
      tier: 3,
      prerequisites: ' Daemonologist, Favoured by the Warp, Willpower 50',
      aptitudes: ['Psyker', 'Willpower'],
      description: `When the character triggers Psychic Phenomena when manifesting a power from the Sanctic Daemonology discipline, he may spend a Fate
point in order to negate the result entirely.

`
    }
  ],
  [
    'Shield Wall',
    {
      name: 'Shield Wall',
      tier: 3,
      prerequisites: ' Ambidextrous, Weapon Skill 40',
      aptitudes: ['Defence', 'Weapon Skill'],
      description: `When armed with a shield, the character can re-roll one failed Evasion test to Parry an attack per round.`
    }
  ],
  [
    'Sprint',
    {
      name: 'Sprint',
      tier: 3,
      prerequisite: ' None',
      aptitudes: ['Agility', 'Fieldcraft'],
      description: `The Acolyte moves at great speeds, and when taking a Full Move action can move an extra number of metres equal to his Agility bonus.
Additionally, whenever he takes a Run action, he may move double the normal distance. If he did so in the previous round, however, he
suffers 1 level of Fatigue.
`
    }
  ],
  [
    'Step Aside',
    {
      name: 'Step Aside',
      tier: 3,
      prerequisites: ' Agility 40, Dodge or Parry',
      aptitudes: ['Agility', 'Defence'],
      description: `Swaying his body out of the path of an attack, the Acolyte causes the shot to pass through thin air, or turns his blade mid-swing to
deflect a blow. He can make an additional Evasion attempt (either a Dodge or a Parry) once per round. In effect, this gives him a
second Reaction that can only be used for Dodge or Parry attempts, allowing two Dodges, two Parries, or a Dodge and a Parry in each
turn. However, he can still only attempt a single Dodge or Parry against each individual attack.
`
    }
  ],
  [
    'Superior Chirurgeon',
    {
      name: 'Superior Chirurgeon',
      tier: 3,
      prerequisite: ' Rank 2 in the Medicae skill',
      aptitudes: ['Intelligence', 'Fieldcraft'],
      description: `The Acolyte’s advanced medical training enables him to knit flesh with deft mastery, essential for treating combat casualties. His
exceptional education in use of the Narthecium, Med-Slate, and supplemental drugs give his patients an enormous advantage. He gains a
+20 bonus on all Medicae skill tests. When providing first aid, he ignores the penalties for Heavily Damaged patients and only suffers
a –10 penalty for those suffering Critical damage.
`
    }
  ],
  [
    'Target Selection',
    {
      name: 'Target Selection',
      tier: 3,
      prerequisite: ' Ballistic Skill 50',
      aptitudes: ['Ballistic Skill', 'Finesse'],
      description: `The Acolyte’s dread gaze marks out his chosen victim, and not even the riotous confusion of close combat interferes. He can shoot into
melee with no penalty. If he also makes an Aim action beforehand, he prevents any chance of hitting friendly targets as well.
`
    }
  ],
  [
    'Thunder Charge',
    {
      name: 'Thunder Charge',
      tier: 3,
      prerequisite: ' Strength 50',
      aptitudes: ['Strength', 'Offence'],
      description: `The Acolyte charges into combat using his body as an additional weapon. Driven by his rage and momentum, the impact of such a charge
can knock foes flying or bring them to their knees. When he makes a Charge action, he can barrel through enemies to get to his target.
The character makes an Opposed Strength test against each foe in his way (those who his movement would take him past or through). Each
foe that loses the Opposed test is knocked Prone. After resolving these Opposed tests, the character’s Charge action resolves against
his original target as normal.
`
    }
  ],
  [
    'True Grit',
    {
      name: 'True Grit',
      tier: 3,
      prerequisite: ' Toughness 40',
      aptitudes: ['Toughness', 'Defence'],
      description: `The Acolyte is able to shrug off wounds that would fell lesser men. Whenever he suffers Critical damage (after reduction for Armour and
Toughness), reduce the amount by his Toughness bonus (to a minimum of 1 damage).
`
    }
  ],
  [
    'Two-Weapon Master',
    {
      name: 'Two-Weapon Master',
      tier: 3,
      prerequisites:
        ' Agility 45, Ambidextrous, Ballistic Skill 40 or Weapon Skill 40, Two-Weapon Wielder (Melee, Ranged)',
      aptitudes: ['Finesse', 'Offence'],
      description: `The Acolyte has mastered the difficult ability of wielding a weapon in each hand, making him deadly both in personal and short ranged
attacks. When armed with two single-handed weapons (such as a pistol or sword in either hand), he ignores the –20 penalty for
Two-Weapon Fighting (see page 228).`
    }
  ],
  [
    'Warp Lock',
    {
      name: 'Warp Lock',
      tier: 3,
      prerequisites: ' Psy rating, Strong Minded, Willpower 50',
      aptitudes: ['Willpower', 'Psyker'],
      description: `The Acolyte has learned to swiftly cut himself off from the Warp to protect himself from harm. Once per game session, he may ignore the
Psychic Phenomena he has rolled (including the Perils of the Warp result on Table 6–2: Psychic Phenomena, see page 196), completely
negating its effects. Such rapid dislocation from the Warp, though, is stressful and traumatic to his mind. He suffers 1d5 Energy
damage to the Head location (not reduced by Armour or Toughness) as a result, and cannot make any Focus Power tests or sustain other
psychic powers until the beginning of his next turn.`
    }
  ]
]);
