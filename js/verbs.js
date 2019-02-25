// verbs.js

let allVerbs = {
  u: [
    {
      e: 'to learn',
      r: 'manabu',
      cc: '学ぶ'
    },
    {
      e: 'to drink',
      r: 'nomu',
      cc: '飲む'
    },
    {
      e: 'to buy',
      r: 'kau',
      cc: '買う'
    },
    {
      e: 'to write, draw, paint',
      r: 'kaku',
      cc: '書く'
    },
    {
      e: 'to send',
      r: 'okuru',
      cc: '送る'
    },
    {
      e: 'to make, produce, cook, create',
      r: 'tsukuru',
      cc: '作る'
    },
    {
      e: 'to meet, match, fit',
      r: 'au',
      cc: 'あう'
    },
    {
      e: 'to go',
      r: 'iku',
      cc: 'いく'
    },
    {
      e: 'to come',
      r: 'kuru',
      cc: '来る'
    },
    {
      e: 'to have, be at, exist (inanimate)',
      r: 'aru',
      cc: 'ある'
    },
    {
      e: 'to have, be at, exist (animate)',
      r: 'iru',
      cc: '居る'
    },
    {
      e: 'to speak, talk',
      r: 'hanasu',
      cc: '話す'
    },
    {
      e: 'to get up, wake up, happen, occur',
      r: 'okiru',
      cc: '起きる',
      error: 'may be irregular'
    },
    {
      e: 'to repair, fix',
      r: 'naosu',
      cc: '直す'
    },
    {
      e: 'to receive, be given',
      r: 'morau',
      cc: '貰う'
    },
    {
      e: 'to go up, rise',
      r: 'agaru',
      cc: '上がる'
    },
    {
      e: 'to go down, drop',
      r: 'sagaru',
      cc: '下がる'
    },
    {
      e: 'to decrease',
      r: 'heru',
      cc: '減る',
      error: 'check that it is not -ru'
    },
    {
      e: 'to learn (2nd)',
      r: 'narau',
      cc: '習う'
    },
    {
      e: 'to begin, start, open',
      r: 'hajimaru',
      cc: '始まる'
    },
    {
      e: 'to finish, end',
      r: 'owaru',
      cc: '終わる'
    },
    {
      e: 'to win',
      r: 'katsu',
      cc: '勝つ'
    },
    {
      e: 'to turn, curve, bend',
      r: 'magaru',
      cc: '曲がる'
    },
    {
      e: 'to grill, bake, roast, toast',
      r: 'yaku',
      cc: '焼く'
    },
    {
      e: 'to wear, put on (clothes)',
      r: 'kiru',
      cc: '着る'
    },
    {
      e: 'to take off (shoes, clothes)',
      r: 'nugu',
      cc: '脱ぐ'
    },
    {
      e: 'to take, get / to take a picture',
      r: 'toru',
      cc: '取る'
    },
  ],

  ru: [
    {
      e: 'to teach, inform, notice, let somebody know',
      r: 'oshieru',
      cc: '教える',
    },
    {
      e: 'to return',
      r: 'modoru',
      cc: '戻る',
    },
    {
      e: 'to cut',
      r: 'kiru',
      cc: '切る',
    },
    {
      e: 'to eat',
      r: 'taberu',
      cc: '食べる',
    },
    {
      e: 'to borrow, rent',
      r: 'kariru',
      cc: '借りる'
    },
    {
      e: 'to watch, look, see',
      r: 'miru',
      cc: '見る',
    },
    {
      e: 'to show',
      r: 'miseru',
      cc: '見せる',
    },
    {
      e: 'to sleep, lie down, go to bed',
      r: 'neru',
      cc: '寝る',
    },
    {
      e: 'to break, be broken',
      r: 'kowareru',
      cc: '壊れる',
    },
    {
      e: 'to give, present',
      r: 'ataeru',
      cc: '与える',
    },
    {
      e: 'to increase',
      r: 'fueru',
      cc: '増える',
    },
    {
      e: 'to remember, memorize, master',
      r: 'oboeru',
      cc: '覚える',
    },
    {
      e: 'to check, investigate',
      r: 'shiraberu',
      cc: '調べる',
    },
    {
      e: 'to forget',
      r: 'wasureru',
      cc: '忘れる',
    },
    {
      e: 'to open',
      r: 'akeru',
      cc: '開ける',
    },
    {
      e: 'to close',
      r: 'shimeru',
      cc: '閉める',
    },
    {
      e: 'to lose (a game)',
      r: 'makeru',
      cc: '負ける',
    }
  ]
};

let uVerbs = [];
let ruVerbs = [];

let するVerbs = [
  {
    e: 'to do',
    r: 'suru',
    cc: 'する',
    conj: {
      inf: {
        present: {
          reg: ['suru', 'する'],
          neg: ['shinai', 'しない']
        },
        past: {
          reg: ['shita', 'した'],
          neg: ['shinakatta', 'しなかった']
        }
      },
      fo: {
        present: {
          reg: ['shimasu', 'します'],
          neg: ['shimasen', 'しません']
        },
        past: {
          reg: ['shimashita', 'しました'],
          neg: ['shimasen deshita', 'しませんでした']
        }
      }
    }
  },
  {
    e: 'to drive',
    r: 'doraibu suru',
    cc: 'ドライブする',
    conj: {}
  },
  {
    e: 'to type',
    r: 'taipu suru',
    cc: 'タイプする',
    conj: {}
  },
  {
    e: 'to kiss',
    r: 'kisu suru',
    cc: 'キスする',
    conj: {}
  },
  {
    e: 'to knock',
    r: 'nokku suru',
    cc: 'ノックする',
    conj: {}
  },
  {
    e: 'to study',
    r: 'benkyou suru',
    cc: '勉強する',
    conj: {
      inf: {
        present: {
          reg: [],
          neg: []
        },
        past: {
          reg: [],
          neg: []
        }
      },
      fo: {
        present: {
          reg: [],
          neg: []
        },
        past: {
          reg: [],
          neg: []
        }
      }
    }
  },
  {
    e: 'to travel',
    r: 'ryokou suru',
    cc: '旅行する',
    conj: {}
  },
  {
    e: 'to telephone',
    r: 'denwa suru',
    cc: '電話する',
    conj: {}
  },
  {
    e: 'to take a walk',
    r: 'sanpo suru',
    cc: '散歩する',
    conj: {}
  },
  {
    e: 'to have a meal',
    r: 'shokuji suru',
    cc: '食事する',
    conj: {}
  },
  {
    e: 'to get married',
    r: 'kekkon suru',
    cc: '結婚する',
    conj: {}
  },
  {
    e: 'to explain',
    r: 'setsumei suru',
    cc: '説明する',
    conj: {}
  },
  {
    e: 'to do the washing',
    r: 'sentaku suru',
    cc: '洗濯する',
    conj: {}
  },
  {
    e: 'to ask questions',
    r: 'shitsumon suru',
    cc: '質問する',
    conj: {}
  },
  {
    e: 'to promise',
    r: 'yakusoku suru',
    cc: '約束する',
    conj: {}
  },
  {
    e: 'to reserve',
    r: 'yoyaku suru',
    cc: '予約する',
    conj: {}
  },
  {
    e: 'to clean',
    r: 'souji suru',
    cc: '掃除する',
    conj: {}
  },
  {
    e: 'to shop',
    r: 'kaimono suru',
    cc: '買い物する',
    conj: {}
  },
  {
    e: 'to prepare',
    r: 'junbi suru',
    cc: '準備する',
    conj: {}
  },
  {
    e: 'to stay longer',
    r: 'yukkuri suru',
    cc: 'ゆっくりする',
    conj: {}
  },
  {
    e: 'to be absent minded',
    r: 'bon\'yari suru',
    cc: 'ぼんやりする',
    conj: {}
  },
  {
    e: 'to smile',
    r: 'nikoniko suru',
    cc: 'ニコニコする',
    conj: {}
  },
  {
    e: 'to be excited',
    r: 'wakuwaku suru',
    cc: 'ワクワクする',
    conj: {}
  }
];

function showCC() {
  let verbInp = document.getElementById('verb-inp').value;
  let kHere = document.getElementById('kanji-here');
  let eHere = document.getElementById('eigo-here');


  for (let i = 0; i < allVerbs.ru.length; i++) {
    if (verbInp == allVerbs.ru[i].r) {
      kHere.innerHTML = allVerbs.ru[i].cc;
      eHere.innerHTML = allVerbs.ru[i].e;
    }
  }
  console.log(allVerbs.ru.length);
}

let sqlDatabase = [
  {
    user: 'Cam',
    password: 'pass'
  }
]

function showVerbs() {
  let verbsHere = document.getElementById('all-verbs-here');
  for (let i = 0; i < allVerbs.u.length; i++) {
    verbsHere.innerHTML += allVerbs.u[i].cc;
    verbsHere.innerHTML += allVerbs.u[i].e;
  }
}
