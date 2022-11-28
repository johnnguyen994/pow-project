export const spellList = {
  count: 319,
  results: [
    {
      id: 1,
      index: 'acid-arrow',
      name: 'Acid Arrow',
      url: '/api/spells/acid-arrow',
    },
    {
      id: 2,
      index: 'acid-splash',
      name: 'Acid Splash',
      url: '/api/spells/acid-splash',
    },
    {
      id: 3,
      index: 'aid',
      name: 'Aid',
      url: '/api/spells/aid',
    },
    {
      id: 4,
      index: 'alarm',
      name: 'Alarm',
      url: '/api/spells/alarm',
    },
    {
      id: 5,
      index: 'alter-self',
      name: 'Alter Self',
      url: '/api/spells/alter-self',
    },
    {
      index: 'animal-friendship',
      name: 'Animal Friendship',
      url: '/api/spells/animal-friendship',
    },
    {
      index: 'animal-messenger',
      name: 'Animal Messenger',
      url: '/api/spells/animal-messenger',
    },
    {
      index: 'animal-shapes',
      name: 'Animal Shapes',
      url: '/api/spells/animal-shapes',
    },
    {
      index: 'animate-dead',
      name: 'Animate Dead',
      url: '/api/spells/animate-dead',
    },
    {
      index: 'animate-objects',
      name: 'Animate Objects',
      url: '/api/spells/animate-objects',
    },
    {
      index: 'antilife-shell',
      name: 'Antilife Shell',
      url: '/api/spells/antilife-shell',
    },
    {
      index: 'antimagic-field',
      name: 'Antimagic Field',
      url: '/api/spells/antimagic-field',
    },
    {
      index: 'antipathy-sympathy',
      name: 'Antipathy/Sympathy',
      url: '/api/spells/antipathy-sympathy',
    },
    {
      index: 'arcane-eye',
      name: 'Arcane Eye',
      url: '/api/spells/arcane-eye',
    },
    {
      index: 'arcane-hand',
      name: 'Arcane Hand',
      url: '/api/spells/arcane-hand',
    },
    {
      index: 'web',
      name: 'Web',
      url: '/api/spells/web',
    },
    {
      index: 'weird',
      name: 'Weird',
      url: '/api/spells/weird',
    },
    {
      index: 'wind-walk',
      name: 'Wind Walk',
      url: '/api/spells/wind-walk',
    },
    {
      index: 'wind-wall',
      name: 'Wind Wall',
      url: '/api/spells/wind-wall',
    },
    {
      index: 'wish',
      name: 'Wish',
      url: '/api/spells/wish',
    },
    {
      index: 'word-of-recall',
      name: 'Word of Recall',
      url: '/api/spells/word-of-recall',
    },
    {
      index: 'zone-of-truth',
      name: 'Zone of Truth',
      url: '/api/spells/zone-of-truth',
    },
  ],
}

export const spellDetail = {
  _id: '6379e20e377ccb80b7d66348',
  higher_level: [],
  index: 'alter-self',
  name: 'Alter Self',
  desc: [
    'You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one.',
    '***Aquatic Adaptation.*** You adapt your body to an aquatic environment, sprouting gills and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed.',
    "***Change Appearance.*** You transform your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and distinguishing characteristics, if any. You can make yourself appear as a member of another race, though none of your statistics change. You also can't appear as a creature of a different size than you, and your basic shape stays the same; if you're bipedal, you can't use this spell to become quadrupedal, for instance. At any time for the duration of the spell, you can use your action to change your appearance in this way again.",
    '***Natural Weapons.*** You grow claws, fangs, spines, horns, or a different natural weapon of your choice. Your unarmed strikes deal 1d6 bludgeoning, piercing, or slashing damage, as appropriate to the natural weapon you chose, and you are proficient with your unarmed strikes. Finally, the natural weapon is magic and you have a +1 bonus to the attack and damage rolls you make using it.',
  ],
  range: 'Self',
  damage: {
    damage_type: {
      index: 'acid',
      name: 'Acid',
      url: '/api/damage-types/acid',
    },
    damage_at_character_level: {
      '1': '1d6',
      '5': '2d6',
      '11': '3d6',
      '17': '4d6',
    },
  },
  components: ['V', 'S'],
  ritual: false,
  duration: 'Up to 1 hour',
  concentration: true,
  casting_time: '1 action',
  level: 2,
  school: {
    index: 'transmutation',
    name: 'Transmutation',
    url: '/api/magic-schools/transmutation',
  },
  classes: [
    {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/classes/sorcerer',
    },
    {
      index: 'wizard',
      name: 'Wizard',
      url: '/api/classes/wizard',
    },
  ],
  subclasses: [
    {
      index: 'lore',
      name: 'Lore',
      url: '/api/subclasses/lore',
    },
  ],
  url: '/api/spells/alter-self',
}
