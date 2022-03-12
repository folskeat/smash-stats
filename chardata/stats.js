let stats = [
  {
    csspos: 1,
    name: 'Mario',
    weight: 98,
    gravity: 0.087,
    walk: 1.155,
    run: 1.76,
    dash: 1.936,
    airmove: 1.208,
    airacc: 0.08,
    fall: 1.5,
    fastfall: 2.4,
    fullhop: 36.33,
    shorthop: 17.54,
    doublejump: 36.33,
    numairjump: 1,
    image: 'mario',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 2,
    name: 'Donkey Kong',
    weight: 127,
    gravity: 0.085,
    walk: 1.365,
    run: 1.873,
    dash: 2.09,
    airmove: 1.208,
    airacc: 0.06,
    fall: 1.63,
    fastfall: 2.608,
    fullhop: 34,
    shorthop: 17.3,
    doublejump: 35.5,
    numairjump: 1,
    image: 'dk',
    isDropped: false,
    hasAlt: false,
  },
  {    
    csspos: 3,
    name: 'Link',
    weight: 104,
    gravity: 0.096,
    walk: 1.247,
    run: 1.534,
    dash: 1.98,
    airmove: 0.924,
    airacc: 0.05,
    fall: 1.6,
    fastfall: 3.04,
    fullhop: 27.8,
    shorthop: 13.38,
    doublejump: 29,
    numairjump: 1,
    image: 'link',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 4,
    name: 'Samus',
    weight: 108,
    gravity: 0.075,
    walk: 1.115,
    run: 1.654,
    dash: 1.87,
    airmove: 1.103,
    airacc: 0.09,
    fall: 1.33,
    fastfall: 2.168,
    fullhop: 37,
    shorthop: 18,
    doublejump: 37,
    numairjump: 1,
    image: 'samus',
    isDropped: false,
    hasAlt: true,
    toggleAlt: false,
  },
  {
    csspos: 5,
    name: 'Yoshi',
    weight: 104,
    gravity: 0.080,
    walk: 1.208,
    run: 2.046,
    dash: 1.98,
    airmove: 1.344,
    airacc: 0.098,
    fall: 1.29,
    fastfall: 2.064,
    fullhop: 36.09,
    shorthop: 14.43,
    doublejump: 51.56,
    numairjump: 1,
    image: 'yoshi',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 6,
    name: 'Kirby',
    weight: 79,
    gravity: 0.064,
    walk: 0.977,
    run: 1.727,
    dash: 1.9,
    airmove: 0.84,
    airacc: 0.095,
    fall: 1.23,
    fastfall: 1.968,
    fullhop: 25.37,
    shorthop: 12.24,
    doublejump: 21.064,
    numairjump: 5,
    image: 'kirby',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 7,
    name: 'Fox',
    weight: 77,
    gravity: 0.23,
    walk: 1.523,
    run: 2.402,
    dash: 2.09,
    airmove: 1.11,
    airacc: 0.09,
    fall: 2.1,
    fastfall: 3.36,
    fullhop: 35,
    shorthop: 16.4,
    doublejump: 37,
    numairjump: 1,
    image: 'fox',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 8,
    name: 'Pikachu',
    weight: 79,
    gravity: 0.095,
    walk: 1.302,
    run: 2.039,
    dash: 1.98,
    airmove: 0.957,
    airacc: 0.1,
    fall: 1.55,
    fastfall: 2.48,
    fullhop: 35.5,
    shorthop: 17.12,
    doublejump: 35.5,
    numairjump: 1,
    image: 'pikachu',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 9,
    name: 'Luigi',
    weight: 97,
    gravity: 0.083,
    walk: 1.134,
    run: 1.65,
    dash: 1.815,
    airmove: 0.77,
    airacc: 0.075,
    fall: 1.32,
    fastfall: 2.112,
    fullhop: 44,
    shorthop: 19.98,
    doublejump: 41.31,
    numairjump: 1,
    image: 'luigi',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 10,
    name: 'Ness',
    weight: 94,
    gravity: 0.077,
    walk: 0.907,
    run: 1.609,
    dash: 1.826,
    airmove: 1.007,
    airacc: 0.1,
    fall: 1.31,
    fastfall: 2.096,
    fullhop: 34.48,
    shorthop: 16.65,
    doublejump: 45.65,
    numairjump: 1,
    image: 'ness',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 11,
    name: 'Captain Falcon',
    weight: 104,
    gravity: 0.12,
    walk: 0.987,
    run: 2.552,
    dash: 1.98,
    airmove: 1.218,
    airacc: 0.075,
    fall: 1.865,
    fastfall: 2.984,
    fullhop: 37.31,
    shorthop: 17.98,
    doublejump: 37.31,
    numairjump: 1,
    image: 'falcon',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 12,
    name: 'Jigglypuff',
    weight: 68,
    gravity: 0.053,
    walk: 0.735,
    run: 1.271,
    dash: 1.65,
    airmove: 1.332,
    airacc: 0.13,
    fall: 0.98,
    fastfall: 1.568,
    fullhop: 19.79,
    shorthop: 11.26,
    doublejump: 24.866,
    numairjump: 5,
    image: 'puff',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 13,
    name: 'Peach',
    weight: 89,
    gravity: 0.07,
    walk: 0.924,
    run: 1.595,
    dash: 1.826,
    airmove: 1.029,
    airacc: 0.12,
    fall: 1.19,
    fastfall: 1.904,
    fullhop: 30.03,
    shorthop: 14.5,
    doublejump: 30.03,
    numairjump: 1,
    image: 'peach',
    isDropped: false,
    hasAlt: true,
    toggleAlt: false,
  },
  {
    csspos: 14,
    name: 'Bowser',
    weight: 135,
    gravity: 0.125,
    walk: 0.901,
    run: 1.971,
    dash: 2.255,
    airmove: 1.155,
    airacc: 0.05,
    fall: 1.77,
    fastfall: 2.832,
    fullhop: 33,
    shorthop: 15.7,
    doublejump: 32.61,
    numairjump: 1,
    image: 'bowser',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 15,
    name: 'Ice Climbers',
    weight: 92,
    gravity: 0.082,
    walk: 1.008,
    run: 1.53,
    dash: 1.68,
    airmove: 0.83,
    airacc: 0.09,
    fall: 1.3,
    fastfall: 2.08,
    fullhop: 34.69,
    shorthop: 16.75,
    doublejump: 34.69,
    numairjump: 1,
    image: 'icies',
    isDropped: false,
    hasAlt: true,
    toggleAlt: false,
  },
  {
    csspos: 16,
    name: 'Sheik',
    weight: 78,
    gravity: 0.15,
    walk: 1.47,
    run: 2.42,
    dash: 2.178,
    airmove: 1.155,
    airacc: 0.09,
    fall: 1.75,
    fastfall: 2.8,
    fullhop: 39,
    shorthop: 18.75,
    doublejump: 40,
    numairjump: 1,
    image: 'sheik',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 17,
    name: 'Zelda',
    weight: 85,
    gravity: 0.071,
    walk: 0.914,
    run: 1.43,
    dash: 1.958,
    airmove: 1.092,
    airacc: 0.065,
    fall: 1.35,
    fastfall: 2.16,
    fullhop: 31.55,
    shorthop: 15.24,
    doublejump: 31.55,
    numairjump: 1,
    image: 'zelda',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 18,
    name: 'Dr. Mario',
    weight: 98,
    gravity: 0.087,
    walk: 0.917,
    run: 1.398,
    dash: 1.538,
    airmove: 0.924,
    airacc: 0.061,
    fall: 1.5,
    fastfall: 2.4,
    fullhop: 30.881,
    shorthop: 13.415,
    doublejump: 27.785,
    numairjump: 1,
    image: 'doctor',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 19,
    name: 'Pichu',
    weight: 62,
    gravity: 0.14,
    walk: 1.302,
    run: 1.892,
    dash: 1.98,
    airmove: 1.029,
    airacc: 0.1,
    fall: 1.9,
    fastfall: 2.5,
    fullhop: 36.75,
    shorthop: 17.43,
    doublejump: 36.02,
    numairjump: 1,
    image: 'pichu',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 20,
    name: 'Falco',
    weight: 82,
    gravity: 0.13,
    walk: 1.344,
    run: 1.619,
    dash: 2.035,
    airmove: 0.977,
    airacc: 0.1,
    fall: 1.8,
    fastfall: 2.88,
    fullhop: 50.51,
    shorthop: 17.34,
    doublejump: 50.51,
    numairjump: 1,
    image: 'falco',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 21,
    name: 'Marth',
    weight: 90,
    gravity: 0.075,
    walk: 1.575,
    run: 1.964,
    dash: 2.255,
    airmove: 1.071,
    airacc: 0.08,
    fall: 1.58,
    fastfall: 2.528,
    fullhop: 33.66,
    shorthop: 16.26,
    doublejump: 33.66,
    numairjump: 1,
    image: 'marth',
    isDropped: false,
    hasAlt: true,
    toggleAlt: false,
  },
  {
    csspos: 22,
    name: 'Young Link',
    weight: 88,
    gravity: 0.096,
    walk: 1.26,
    run: 1.749,
    dash: 2.09,
    airmove: 0.966,
    airacc: 0.06,
    fall: 1.8,
    fastfall: 2.88,
    fullhop: 33.66,
    shorthop: 16.26,
    doublejump: 33.66,
    numairjump: 1,
    image: 'young',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 23,
    name: 'Ganondorf',
    weight: 118,
    gravity: 0.108,
    walk: 0.767,
    run: 1.34,
    dash: 1.87,
    airmove: 0.83,
    airacc: 0.04,
    fall: 1.65,
    fastfall: 2.64,
    fullhop: 25.49,
    shorthop: 12.24,
    doublejump: 26,
    numairjump: 1,
    image: 'ganon',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 24,
    name: 'Mewtwo',
    weight: 79,
    gravity: 0.082,
    walk: 1.26,
    run: 2.255,
    dash: 2.255,
    airmove: 1.313,
    airacc: 0.07,
    fall: 1.55,
    fastfall: 2.48,
    fullhop: 31.11,
    shorthop: 17.5,
    doublejump: 57.35,
    numairjump: 1,
    image: 'mewtwo',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 25,
    name:  'Roy',
    weight: 95,
    gravity: 0.114,
    walk: 1.208,
    run: 2.145,
    dash: 2.2,
    airmove: 1.302,
    airacc: 0.05,
    fall: 1.8,
    fastfall: 2.88,
    fullhop: 30.97,
    shorthop: 13,
    doublejump: 28,
    numairjump: 1,
    image: 'roy',
    isDropped: false,
    hasAlt: true,
    toggleAlt: false,
  },
  {
    csspos: 26,
    name: 'Mr. Game & Watch',
    weight: 75,
    gravity: 0.08,
    walk: 1.18,
    run: 1.679,
    dash: 1.98,
    airmove: 1.176,
    airacc: 0.1,
    fall: 1.24,
    fastfall: 1.984,
    fullhop: 27.51,
    shorthop: 13.26,
    doublejump: 27.51,
    numairjump: 1,
    image: 'gw',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 27,
    name: "Meta Knight",
    weight: 80,
    gravity: 0.11,
    walk: 1.239,
    run: 2.09,
    dash: 2.211,
    airmove: 1.04,
    airacc: 0.075,
    fall: 1.66,
    fastfall: 2.656,
    fullhop: 32,
    shorthop: 13.92,
    doublejump: 20.914,
    numairjump: 5,
    image: 'metaknight',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 28,
    name: 'Pit',
    weight: 96,
    gravity: 0.081,
    walk: 1.259,
    run: 1.828,
    dash: 2.09,
    airmove: 0.935,
    airacc: 0.075,
    fall: 1.48,
    fastfall: 2.368,
    fullhop: 31,
    shorthop: 14.96,
    doublejump: 23.701,
    numairjump: 3,
    image: 'pit',
    isDropped: false,
    hasAlt: true,
    toggleAlt: false,
  },
  {
    csspos: 29,
    name: 'Zero Suit Samus',
    weight: 80,
    gravity: 0.12,
    walk: 1.47,
    run: 2.31,
    dash: 2.42,
    airmove: 1.26,
    airacc: 0.095,
    fall: 1.7,
    fastfall: 2.72,
    fullhop: 44.5,
    shorthop: 21.35,
    doublejump: 44.2,
    numairjump: 1,
    image: 'zss',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 30,
    name: 'Wario',
    weight: 107,
    gravity: 0.107,
    walk: 0.889,
    run: 1.65,
    dash: 1.837,
    airmove: 1.271,
    airacc: 0.12,
    fall: 1.61,
    fastfall: 2.576,
    fullhop: 30.5,
    shorthop: 14.7,
    doublejump: 30.5,
    numairjump: 1,
    image: 'wario',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 31,
    name: 'Snake',
    weight: 106,
    gravity: 0.08,
    walk: 0.882,
    run: 1.595,
    dash: 1.76,
    airmove: 0.987,
    airacc: 0.03,
    fall: 1.73,
    fastfall: 2.768,
    fullhop: 21.62,
    shorthop: 13.69,
    doublejump: 34.07,
    numairjump: 1,
    image: 'snake',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 32,
    name: 'Ike',
    weight: 107,
    gravity: 0.092,
    walk: 0.912,
    run: 1.507,
    dash: 1.815,
    airmove: 1.134,
    airacc: 0.05,
    fall: 1.65,
    fastfall: 2.65,
    fullhop: 29.9,
    shorthop: 16,
    doublejump: 31,
    numairjump: 1,
    image: 'ike',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 33,
    name: 'Squirtle',
    weight: 75,
    gravity: 0.128,
    walk: 1.281,
    run: 1.76,
    dash: 1.936,
    airmove: 1.01,
    airacc: 0.105,
    fall: 1.35,
    fastfall: 2.16,
    fullhop: 35.35,
    shorthop: 17.03,
    doublejump: 35.35,
    numairjump: 1,
    image: 'squirtle',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 34,
    name: 'Ivysaur',
    weight: 96,
    gravity: 0.082,
    walk: 1.103,
    run: 1.595,
    dash: 1.903,
    airmove: 0.998,
    airacc: 0.095,
    fall: 1.38,
    fastfall: 2.208,
    fullhop: 32.25,
    shorthop: 15.58,
    doublejump: 32.25,
    numairjump: 1,
    image: 'ivy',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 35,
    name: 'Charizard',
    weight: 116,
    gravity: 0.110,
    walk: 1.187,
    run: 2.2,
    dash: 2.288,
    airmove: 1.103,
    airacc: 0.06,
    fall: 1.52,
    fastfall: 2.432,
    fullhop: 32,
    shorthop: 15.43,
    doublejump: 28,
    numairjump: 2,
    image: 'zard',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 36,
    name: 'Diddy Kong',
    weight: 90,
    gravity: 0.125,
    walk: 1.313,
    run: 2.006,
    dash: 2.09,
    airmove: 0.924,
    airacc: 0.05,
    fall: 1.75,
    fastfall: 2.8,
    fullhop: 41.21,
    shorthop: 19.9,
    doublejump: 41.21,
    numairjump: 1,
    image: 'diddy',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 37,
    name: 'Lucas',
    weight: 94,
    gravity: 0.09,
    walk: 0.893,
    run: 1.65,
    dash: 1.815,
    airmove: 1.155,
    airacc: 0.095,
    fall: 1.37,
    fastfall: 2.192,
    fullhop: 29.41,
    shorthop: 13,
    doublejump: 44.13,
    numairjump: 1,
    image: 'lucas',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 38,
    name: 'Sonic',
    weight: 86,
    gravity: 0.09,
    walk: 1.444,
    run: 3.85,
    dash: 2.31,
    airmove: 1.208,
    airacc: 0.05,
    fall: 1.65,
    fastfall: 2.64,
    fullhop: 35,
    shorthop: 16.89,
    doublejump: 35,
    numairjump: 1,
    image: 'sonic',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 39,
    name: 'King Dedede',
    weight: 127,
    gravity: 0.097,
    walk: 1.029,
    run: 1.496,
    dash: 1.815,
    airmove: 0.735,
    airacc: 0.05,
    fall: 1.95,
    fastfall: 3.12,
    fullhop: 32.85,
    shorthop: 16.02,
    doublejump: 28.503,
    numairjump: 4,
    image: 'dedede',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 40,
    name: 'Olimar',
    weight: 79,
    gravity: 0.068,
    walk: 0.945,
    run: 1.617,
    dash: 1.606,
    airmove: 0.861,
    airacc: 0.08,
    fall: 1.35,
    fastfall: 2.16,
    fullhop: 33.5,
    shorthop: 16.19,
    doublejump: 33.5,
    numairjump: 1,
    image: 'olimar',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 41,
    name: 'Lucario',
    weight: 92,
    gravity: 0.084,
    walk: 1.103,
    run: 1.705,
    dash: 2.255,
    airmove: 1.281,
    airacc: 0.09,
    fall: 1.68,
    fastfall: 2.688,
    fullhop: 37.62,
    shorthop: 18.19,
    doublejump: 37.62,
    numairjump: 1,
    image: 'lucario',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 42,
    name: 'R.O.B.',
    weight: 106,
    gravity: 0.09,
    walk: 1.178,
    run: 1.725,
    dash: 2.002,
    airmove: 1.134,
    airacc: 0.085,
    fall: 1.6,
    fastfall: 2.56,
    fullhop: 38,
    shorthop: 18.38,
    doublejump: 38,
    numairjump: 1,
    image: 'rob',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 43,
    name: 'Toon Link',
    weight: 91,
    gravity: 0.081,
    walk: 1.288,
    run: 1.906,
    dash: 1.914,
    airmove: 1.05,
    airacc: 0.09,
    fall: 1.38,
    fastfall: 2.208,
    fullhop: 33.8,
    shorthop: 16.32,
    doublejump: 33.8,
    numairjump: 1,
    image: 'toon',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 44,
    name: 'Wolf',
    weight: 92,
    gravity: 0.13,
    walk: 1.208,
    run: 1.54,
    dash: 2.09,
    airmove: 1.281,
    airacc: 0.09,
    fall: 1.8,
    fastfall: 2.88,
    fullhop: 32.02,
    shorthop: 15.38,
    doublejump: 30.71,
    numairjump: 1,
    image: 'wolf',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 45,
    name: 'Villager',
    weight: 92,
    gravity: 0.078,
    walk: 1.092,
    run: 1.397,
    dash: 1.815,
    airmove: 0.987,
    airacc: 0.06,
    fall: 1.32,
    fastfall: 2.112,
    fullhop: 32.5,
    shorthop: 15.69,
    doublejump: 32.5,
    numairjump: 1,
    image: 'villager',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 46,
    name: 'Mega Man',
    weight: 102,
    gravity: 0.107,
    walk: 1.132,
    run: 1.602,
    dash: 1.958,
    airmove: 1.155,
    airacc: 0.11,
    fall: 1.8,
    fastfall: 2.88,
    fullhop: 32.8,
    shorthop: 11.49,
    doublejump: 32.8,
    numairjump: 1,
    image: 'megaman',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 47,
    name: 'Wii Fit Trainer',
    weight: 96,
    gravity: 0.09,
    walk: 1.224,
    run: 1.866,
    dash: 2.024,
    airmove: 1.019,
    airacc: 0.09,
    fall: 1.3,
    fastfall: 2.08,
    fullhop: 35.6,
    shorthop: 17.18,
    doublejump: 35.6,
    numairjump: 1,
    image: 'wiifit',
    isDropped: false,
    hasAlt: true,
    toggleAlt: false,
  },
  {
    csspos: 48,
    name: 'Rosalina & Luma',
    weight: 82,
    gravity: 0.062,
    walk: 1.138,
    run: 1.795,
    dash: 2.035,
    airmove: 1.05,
    airacc: 0.11,
    fall: 1.2,
    fastfall: 1.92,
    fullhop: 40,
    shorthop: 19.37,
    doublejump: 40,
    numairjump: 1,
    image: 'rosa',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 49,
    name: 'Little Mac',
    weight: 87,
    gravity: 0.09,
    walk: 1.386,
    run: 2.464,
    dash: 2.365,
    airmove: 1.208,
    airacc: 0.04,
    fall: 1.95,
    fastfall: 3.12,
    fullhop: 26,
    shorthop: 12.53,
    doublejump: 26,
    numairjump: 1,
    image: 'mac',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 50,
    name: 'Greninja',
    weight: 88,
    gravity: 0.18,
    walk: 1.502,
    run: 2.288,
    dash: 2.178,
    airmove: 1.239,
    airacc: 0.08,
    fall: 1.85,
    fastfall: 2.96,
    fullhop: 46,
    shorthop: 22.11,
    doublejump: 46,
    numairjump: 1,
    image: 'greninja',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 51,
    name: 'Mii Brawler',
    weight: 94,
    gravity: 0.192,
    walk: 1.26,
    run: 1.92,
    dash: 1.87,
    airmove: 1.15,
    airacc: 0.068,
    fall: 1.92,
    fastfall: 3.072,
    fullhop: 35,
    shorthop: 17,
    doublejump: 35.5,
    numairjump: 1,
    image: 'brawler',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 52,
    name: 'Mii Swordfighter',
    weight: 100,
    gravity: 0.106,
    walk: 1.07,
    run: 1.58,
    dash: 1.74,
    airmove: 1.17,
    airacc: 0.06,
    fall: 1.55,
    fastfall: 2.48,
    fullhop: 28.3,
    shorthop: 12.3,
    doublejump: 28.3,
    numairjump: 1,
    image: 'sword',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 53,
    name: 'Mii Gunner',
    weight: 104,
    gravity: 0.098,
    walk: 1.00,
    run: 1.37,
    dash: 1.63,
    airmove: 0.93,
    airacc: 0.053,
    fall: 1.45,
    fastfall: 2.32,
    fullhop: 30.9,
    shorthop: 14.6,
    doublejump: 32.3,
    numairjump: 1,
    image: 'gunner',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 54,
    name: 'Palutena',
    weight: 91,
    gravity: 0.12,
    walk: 1.271,
    run: 2.077,
    dash: 2.035,
    airmove: 1.0,
    airacc: 0.115,
    fall: 1.55,
    fastfall: 2.48,
    fullhop: 35.9,
    shorthop: 17.3,
    doublejump: 35.9,
    numairjump: 1,
    image: 'palu',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 55,
    name: 'Pac-Man',
    weight: 95,
    gravity: 0.072,
    walk: 1.097,
    run: 1.672,
    dash: 1.87,
    airmove: 1.092,
    airacc: 0.08,
    fall: 1.35,
    fastfall: 2.16,
    fullhop: 34.1,
    shorthop: 16.48,
    doublejump: 34.1,
    numairjump: 1,
    image: 'pacman',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 56,
    name: 'Robin',
    weight: 95,
    gravity: 0.089,
    walk: 0.936,
    run: 1.265,
    dash: 1.815,
    airmove: 1.05,
    airacc: 0.08,
    fall: 1.5,
    fastfall: 2.4,
    fullhop: 33.21,
    shorthop: 16.02,
    doublejump: 33.21,
    numairjump: 1,
    image: 'robin',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 57,
    name: 'Shulk',
    weight: 97,
    gravity: 0.098,
    walk: 1.155,
    run: 1.672,
    dash: 1.87,
    airmove: 1.113,
    airacc: 0.05,
    fall: 1.58,
    fastfall: 2.528,
    fullhop: 33.5,
    shorthop: 16.8,
    doublejump: 33.5,
    numairjump: 1,
    image: 'shulk',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 58,
    name: 'Bowser Jr.',
    weight: 108,
    gravity: 0.092,
    walk: 0.924,
    run: 1.566,
    dash: 1.76,
    airmove: 1.134,
    airacc: 0.08,
    fall: 1.65,
    fastfall: 2.64,
    fullhop: 34.4,
    shorthop: 16.59,
    doublejump: 34.4,
    numairjump: 1,
    image: 'junior',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 59,
    name: 'Duck Hunt',
    weight: 86,
    gravity: 0.076,
    walk: 1.213,
    run: 1.793,
    dash: 1.76,
    airmove: 1.155,
    airacc: 0.08,
    fall: 1.65,
    fastfall: 2.64,
    fullhop: 34,
    shorthop: 16.32,
    doublejump: 33.8,
    numairjump: 1,
    image: 'duckhunt',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 60,
    name: 'Ryu',
    weight: 103,
    gravity: 0.12,
    walk: 0.75,
    run: 1.6,
    dash: 1.76,
    airmove: 1.12,
    airacc: 0.035,
    fall: 1.6,
    fastfall: 2.24,
    fullhop: 26,
    shorthop: 15,
    doublejump: 29.5,
    numairjump: 1,
    image: 'ryu',
    isDropped: false,
    hasAlt: true,
    toggleAlt: false,
  },
  {
    csspos: 61,
    name: 'Cloud',
    weight: 100,
    gravity: 0.098,
    walk: 1.155,
    run: 2.145,
    dash: 2.145,
    airmove: 1.155,
    airacc: 0.07,
    fall: 1.68,
    fastfall: 2.688,
    fullhop: 32.5,
    shorthop: 17,
    doublejump: 32.5,
    numairjump: 1,
    image: 'cloud',
    isDropped: false,
    hasAlt: true,
    toggleAlt: false,
  },
  {
    csspos: 62,
    name: 'Corrin',
    weight: 98,
    gravity: 0.092,
    walk: 1.208,
    run: 1.595,
    dash: 1.892,
    airmove: 1.019,
    airacc: 0.05,
    fall: 1.65,
    fastfall: 2.64,
    fullhop: 33,
    shorthop: 16,
    doublejump: 31,
    numairjump: 1,
    image: 'corrin',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 63,
    name: 'Bayonetta',
    weight: 81,
    gravity: 0.12,
    walk: 0.945,
    run: 1.76,
    dash: 1.936,
    airmove: 1.019,
    airacc: 0.095,
    fall: 1.77,
    fastfall: 2.832,
    fullhop: 39,
    shorthop: 21.35,
    doublejump: 42,
    numairjump: 1,
    image: 'bayo',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 64,
    name: 'Inkling',
    weight: 94,
    gravity: 0.087,
    walk: 1.134,
    run: 1.925,
    dash: 2.118,
    airmove: 1.208,
    airacc: 0.08,
    fall: 1.58,
    fastfall: 2.528,
    fullhop: 33,
    shorthop: 17.54,
    doublejump: 36.33,
    numairjump: 1,
    image: 'inkling',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 65,
    name: 'Ridley',
    weight: 107,
    gravity: 0.09,
    walk: 1.1,
    run: 2.2,
    dash: 1.8,
    airmove: 1.05,
    airacc: 0.07,
    fall: 1.78,
    fastfall: 2.848,
    fullhop: 34,
    shorthop: 14.2,
    doublejump: 25.8,
    numairjump: 2,
    image: 'ridley',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 66,
    name: 'Simon',
    weight: 107,
    gravity: 0.085,
    walk: 0.76,
    run: 1.52,
    dash: 1.73,
    airmove: 0.94,
    airacc: 0.03,
    fall: 1.85,
    fastfall: 2.96,
    fullhop: 30,
    shorthop: 18,
    doublejump: 29,
    numairjump: 1,
    image: 'simon',
    isDropped: false,
    hasAlt: true,
    toggleAlt: false,
  },
  {
    csspos: 67,
    name: 'King K. Rool',
    weight: 135,
    gravity: 0.105,
    walk: 0.903,
    run: 1.485,
    dash: 1.936,
    airmove: 0.945,
    airacc: 0.05,
    fall: 1.7,
    fastfall: 2.72,
    fullhop: 33,
    shorthop: 13.5,
    doublejump: 32.61,
    numairjump: 1,
    image: 'krool',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 68,
    name: 'Isabelle',
    weight: 88,
    gravity: 0.07,
    walk: 1.14,
    run: 1.48,
    dash: 1.815,
    airmove: 1.02,
    airacc: 0.06,
    fall: 1.3,
    fastfall: 2.08,
    fullhop: 32.5,
    shorthop: 15.69,
    doublejump: 32.5,
    numairjump: 1,
    image: 'isabelle',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 69,
    name: 'Incineroar',
    weight: 116,
    gravity: 0.126,
    walk: 0.62,
    run: 1.18,
    dash: 1.76,
    airmove: 0.88,
    airacc: 0.07,
    fall: 1.76,
    fastfall: 2.816,
    fullhop: 31.6,
    shorthop: 14.4,
    doublejump: 14.4,
    numairjump: 32.8,
    image: 'incin',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 70,
    name: 'Piranha Plant',
    weight: 112,
    gravity: 0.14,
    walk: 0.76,
    run: 1.72,
    dash: 1.82,
    airmove: 1.0,
    airacc: 0.06,
    fall: 1.95,
    fastfall: 2.73,
    fullhop: 37.4,
    shorthop: 17.5,
    doublejump: 38.52,
    numairjump: 1,
    image: 'plant',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 71,
    name: 'Joker',
    weight: 93,
    gravity: 0.127,
    walk: 1.12,
    run: 2.06,
    dash: 1.9,
    airmove: 1.1,
    airacc: 0.08,
    fall: 1.63,
    fastfall: 3.097,
    fullhop: 32.5,
    shorthop: 14.2,
    doublejump: 34,
    numairjump: 1,
    image: 'joker',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 72,
    name: 'Hero',
    weight: 101,
    gravity: 0.094,
    walk: 0.98,
    run: 1.84,
    dash: 1.88,
    airmove: 1.01,
    airacc: 0.055,
    fall: 1.57,
    fastfall: 2.512,
    fullhop: 29,
    shorthop: 15.5,
    doublejump: 31,
    numairjump: 1,
    image: 'hero',
    isDropped: false,
    hasAlt: true,
    toggleAlt: false,
  },
  {
    csspos: 73,
    name: 'Banjo & Kazooie',
    weight: 106,
    gravity: 0.11,
    walk: 1.06,
    run: 2.18,
    dash: 1.68,
    airmove: 0.92,
    airacc: 0.07,
    fall: 1.76,
    fastfall: 2.816,
    fullhop: 29.8,
    shorthop: 17.8,
    doublejump: 20.526,
    numairjump: 2,
    image: 'banjo',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 74,
    name: 'Terry',
    weight: 108,
    gravity: 0.09,
    walk: 0.85,
    run: 1.72,
    dash: 1.65,
    airmove: 0.95,
    airacc: 0.06,
    fall: 1.48,
    fastfall: 2.368,
    fullhop: 27,
    shorthop: 15.2,
    doublejump: 29,
    numairjump: 1,
    image: 'terry',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 75,
    name: 'Byleth',
    weight: 97,
    gravity: 0.089,
    walk: 0.97,
    run: 1.43,
    dash: 1.8,
    airmove: 0.89,
    airacc: 0.053,
    fall: 1.6,
    fastfall: 2.56,
    fullhop: 26.5,
    shorthop: 14,
    doublejump: 28.5,
    numairjump: 1,
    image: 'byleth',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 76,
    name: 'Min Min',
    weight: 104,
    gravity: 0.11,
    walk: 1.05,
    run: 1.55,
    dash: 1.9,
    airmove: 0.85,
    airacc: 0.06,
    fall: 1.5,
    fastfall: 2.432,
    fullhop: 30.7,
    shorthop: 16,
    doublejump: 29,
    numairjump: 1,
    image: 'minmin',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 77,
    name: 'Steve',
    weight: 92,
    gravity: 0.07,
    walk: 0.85,
    run: 1.45,
    dash: 1.45,
    airmove: 0.86,
    airacc: 0.05,
    fall: 1.42,
    fastfall: 2.272,
    fullhop: 16.5,
    shorthop: 10,
    doublejump: 22.5,
    numairjump: 1,
    image: 'steve',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 78,
    name: 'Sephiroth',
    weight: 79,
    gravity: 0.108,
    walk: 0.9,
    run: 1.86,
    dash: 1.92,
    airmove: 0.95,
    airacc: 0.08,
    fall: 1.84,
    fastfall: 2.944,
    fullhop: 30.5,
    shorthop: 10,
    doublejump: 34,
    numairjump: 1,
    image: 'seph',
    isDropped: false,
    hasAlt: true,
    toggleAlt: false,
  },
  {
    csspos: 79,
    name: 'Pyra',
    weight: 98,
    gravity: 0.078,
    walk: 0.92,
    run: 1.38,
    dash: 1.69,
    airmove: 1.1,
    airacc: 0.065,
    fall: 1.62,
    fastfall: 2.592,
    fullhop: 26.3,
    shorthop: 15.2,
    doublejump: 29,
    numairjump: 1,
    image: 'pyra',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 80,
    name: 'Mythra',
    weight: 92,
    gravity: 0.137,
    walk: 1.42,
    run: 2.41,
    dash: 2.45,
    airmove: 1.22,
    airacc: 0.07,
    fall: 1.87,
    fastfall: 2.992,
    fullhop: 30.8,
    shorthop: 15.6,
    doublejump: 33,
    numairjump: 1,
    image: 'mythra',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 81,
    name: 'Kazuya',
    weight: 113,
    gravity: 0.108,
    walk: 0.66,
    run: 1.55,
    dash: 1.58,
    airmove: 0.89,
    airacc: 0.04,
    fall: 1.7,
    fastfall: 2.72,
    fullhop: 18,
    shorthop: 12,
    doublejump: 49,
    numairjump: 1,
    image: 'kazuya',
    isDropped: false,
    hasAlt: false,
  },
  {
    csspos: 82,
    name: 'Sora',
    weight: 85,
    gravity: 0.064,
    walk: 0.82,
    run: 1.58,
    dash: 1.78,
    airmove: 0.96,
    airacc: 0.096,
    fall: 1.44,
    fastfall: 2.304,
    fullhop: 30,
    shorthop: 17.2,
    doublejump: 40,
    numairjump: 1,
    image: 'sora',
    isDropped: false,
    hasAlt: false,
  },
  /*
  {
    csspos:
    name:
    weight:
    gravity:
    walk:
    run:
    dash:
    airmove:
    airacc:
    fall:
    fastfall:
    fullhop:
    shorthop:
    doublejump:
    numairjump:
    image:
    isDropped: false,
  },
  */
]

export default stats;