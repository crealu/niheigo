let phrases = [
  {
    e: 'I eat oranges',
    er: {
      subject: 'I',
      time: '',
      companion: '',
      place: '',
      object: 'oranges',
      verb: 'eat'
    },
    r: {
      topic: 'Watashi wa',
      time: '',
      companion: '',
      place: '',
      object: 'orengi wo',
      verb: 'taberu'
    },
    cc: {
      topic: '私は',
      time: '',
      companion: '',
      place: '',
      object: 'オレンジを',
      verb: 'たべる'
    }
  },
  {
    e: 'I teach english',
    er: {
      subject: 'I',
      time: '',
      companion: '',
      place: '',
      object: 'english',
      verb: 'teach'
    },
    r: {
      topic: 'Watashi wa',
      time: '',
      companion: '',
      place: '',
      object: 'eigo wo',
      verb: 'oshieru'
    },
    cc: {
      topic: '私は',
      time: '',
      companion: '',
      place: '',
      object: 'えいごを',
      verb: 'おしえる'
    }
  },
  {
    e: 'I live in Shinkamagaya',
    er: {
      subject: 'I',
      time: '',
      companion: '',
      place: 'in Shinkamagaya',
      object: 'english',
      verb: 'teach'
    },
    r: {
      topic: 'Watashi wa',
      time: '',
      companion: '',
      place: 'Shinkamagaya de',
      object: '',
      verb: 'sunde imasu'
    },
    cc: {
      topic: '私は',
      time: '',
      companion: '',
      place: '新鎌ケ谷で',
      object: '',
      verb: '住んでいます'
    }
  }
];

let longSentences = [
  {
    e: 'I ate lunch with my friend at a restaurant on Sunday',
    er: {
      subject: 'I',
      time: 'on Sunday',
      companion: 'with my friend',
      place: 'at a restaurant',
      object: 'lunch',
      verb: 'ate'
    },
    r: {
      topic: 'Watashi wa',
      time: 'nichiyoubi ni',
      companion: 'tomodachi to',
      place: 'resutoran de',
      object: 'ohirugohan o',
      verb: 'tabemashita'
    },
    cc: {
      topic: '私は',
      time: 'にちようびに',
      companion: 'ともだちと',
      place: 'レストランで',
      object: 'おひるごはんを',
      verb: '食べました'
    }
  },
  {
    e: 'Ken speaks Japanese at home with his family',
    er: {
      subject: 'Ken',
      time: '',
      companion: 'with his family',
      place: 'at home',
      object: 'Japanese',
      verb: 'speaks'
    },
    r: {
      topic: 'Ken-san',
      time: '',
      companion: 'kazoku to',
      place: 'uchi de',
      object: 'nihongo wo',
      verb: 'hanashimasu'
    },
    cc: {
      topic: 'けんさんは',
      time: '',
      companion: 'かぞくと',
      place: 'うちで',
      object: 'にほんごを',
      verb: 'はなします'
    }
  },
  {
    e: 'My dad bought beautiful roses on my mom\'s birthday near the station',
    er: {
      subject: 'My dad',
      time: 'on my mom\'s birthday',
      companion: '',
      place: 'near the station',
      object: 'beautiful roses',
      verb: 'bought'
    },
    r: {
      topic: 'chichi wa',
      time: 'haha no tanjoubi ni',
      companion: '',
      place: 'eki no chikaku de',
      object: 'kireina bara wo',
      verb: 'kaimashita'
    },
    cc: {
      topic: 'ちちは',
      time: 'ははのたんじょうびに',
      companion: '',
      place: 'えきのちかくで',
      object: 'きれいなばらお',
      verb: 'かいました'
    }
  },
  {
    e: 'I don\'t drink coffee at night',
    er: {
      subject: 'I',
      time: 'at night',
      companion: '',
      place: '',
      object: 'coffee',
      verb: 'don\'t drink'
    },
    r: {
      topic: 'watashi wa',
      time: 'yoru ni',
      companion: '',
      place: '',
      object: 'koohii wo',
      verb: 'nomimasen'
    },
    cc: {
      topic: '私は',
      time: 'よるに',
      companion: '',
      place: '',
      object: 'コオひいを',
      verb: 'のみません'
    }
  },
  {
    e: 'I want to see cherry blossoms in Kyoto in the Spring',
    er: {
      subject: 'I',
      time: 'in the Spring',
      companion: '',
      place: 'in Kyoto',
      object: 'cherry blossoms',
      verb: 'want to see'
    },
    r: {
      topic: 'watashi wa',
      time: 'haru ni',
      companion: '',
      place: 'kyouto de',
      object: 'sakura wo',
      verb: 'mitai desu'
    },
    cc: {
      topic: '私は',
      time: 'はるに',
      companion: '',
      place: 'きょうとで',
      object: 'さくらを',
      verb: 'みたいです'
    }
  },
  {
    e: 'Restaurants in Tokyo are expensive sometimes',
    er: {
      subject: 'Restaurants',
      time: 'sometimes',
      companion: '',
      place: 'in Tokyo',
      object: '',
      verb: 'are expensive'
    },
    r: {
      topic: 'resutoran wa',
      time: 'tokidoki ni',
      companion: '',
      place: 'tokyou de',
      object: '',
      verb: 'takai desu'
    },
    cc: {
      topic: 'レストランは',
      time: 'ときどきに',
      companion: '',
      place: 'ときょうで',
      object: '',
      verb: 'たかいです'
    }
  }
];

function newSentence() {
  let choice = longSentences.length;
  let rand = Math.floor(Math.random() * (choice - 1) + 1);

  let siE = document.getElementsByClassName('si-e');
  let siER = document.getElementsByClassName('si-er');
  let siR = document.getElementsByClassName('si-r');
  let siCC = document.getElementsByClassName('si-cc');

  clearDiv(siE[0]);

  clearDiv(siER)
  siE[0].innerHTML = longSentences[rand].e;

}

let phrasesToCheck = [
  {
    e: 'Learn more',
    er: '',
    r: 'Motto kuwashiku shiru',
    cc: 'もっと詳しく知る'
  },
  {
    e: 'Slowly please',
    er: '',
    r: 'yukkuri kudasai',
    cc: 'ゆっくりください'
  },
  {
    e: 'One more time please',
    er: 'again once more',
    r: 'mou ichido onegai shimasu',
    cc: 'もういちどおねがいします'
  },
  {
    e: 'Please write it down',
    er: 'write it please',
    r: 'kaite kudasai',
    cc: 'カイテクダサイ'
  },
  {
    e: 'See you later',
    er: '',
    r: 'ja ma ta',
    cc: 'じゃまた'
  },
  {
    e: 'I would like to open a bank account',
    er: '',
    r: 'ginko kozawokaisetsu shitai',
    cc: 'ギンココザヲカイセツシタイ'
  },
  // from 2019/02/22
  {
    e: 'Can you write it down',
    er: '',
    r: 'sore wo kakitomemasu ka',
    cc: 'それをかきとめますか'
  },
  {
    e: 'Is there a phone store nearby',
    er: '',
    r: 'chikaku ni denwa-ten wa arimasu ka',
    cc: '近くに電話店はありますか'
  },
  {
    e: 'Where is the exit',
    er: '',
    r: 'deguchi wa dokodesu ka',
    cc: '出口はどこですか'
  },
  {
    e: 'what is this (item) in Japanese',
    er: '',
    r: 'kore wa Nihon-go de nan desu ka',
    cc: 'これは日本ごでなんですか'
  },
  {
    e: 'In Japanese, that is a "telephone"',
    er: '',
    r: 'Nihon-go de sore wa "denwa" desu',
    cc: '日本ごでそれは”電話”です'
  },
  {
    e: 'I like your hat',
    er: '',
    r: 'watashi wa anata no boshi ga sukidesu',
    cc: '私はあなたの帽子が好きです'
  },
  {
    e: 'Welcome back',
    er: '',
    r: 'okansonasai',
    cc: 'おかんソなさい'
  },
  {
    e: 'I need to practice',
    er: '',
    r: 'renshu ga hitsuyodesu',
    cc: '練習が必要です'
  },
  {
    e: 'What do you want to do',
    er: '',
    r: 'nani wo shitaidesu ka',
    cc: '何をしたいですか'
  },
  {
    e: 'How often do you come here',
    er: '',
    r: 'dono kurai no hindo de koko ni kimasu ka',
    cc: 'どのくらいの頻度でここに来ますか'
  },
  {
    e: 'I will be back another day',
    er: '',
    r: 'mata modotte kimasu',
    cc: 'また戻ってきます'
  },
  {
    e: 'When do you close',
    er: '',
    r: 'itsu shimarimasu ka',
    cc: 'いつ閉まりますか'
  },
  {
    e: 'I have this',
    er: '',
    r: 'watashi wa kore wo motte imasu',
    cc: '私はこれを盛っています'
  },
  {
    e: 'I can\'t stay',
    er: '',
    r: 'watashi wa taizaid dekinai',
    cc: '私は滞在できない'
  },
  {
    e: 'I am happy',
    er: '',
    r: 'ureshidesu',
    cc: '嬉しいです'
  }
];

function しつ() {
  let ib = document.getElementById('interact-box');
  ib.style.height = '40px';

  let ibs = document.getElementById('ib-selection');

  let japeng = document.createElement("button");
  japeng.setAttribute("id", "je-toggle");
  japeng.setAttribute("data-language", "0");
  japeng.addEventListener('click', toggleJE);

  let japengText = document.createTextNode("JP/ENG");
  japeng.appendChild(japengText);

  ibs.appendChild(japeng);

  for (let i = 0; i < phrasesToCheck.length; i++) {
    let phraseE = phrasesToCheck[i].e;
    let phraseText = document.createTextNode(phraseE);
    let newP = document.createElement("button");
    newP.appendChild(phraseText);
    newP.classList.add('phrases');
    newP.addEventListener('click', selectPhrase);
    ibs.appendChild(newP);
  }
}

function toggleJE() {
  let jeToggle = document.getElementById('je-toggle');
  let dlang = jeToggle.dataset.language;

  let phrasesListed = document.getElementsByClassName('phrases');
  if (dlang == 0) {
    for (let i = 0; i < phrasesListed.length; i++) {
      clearDiv(phrasesListed[i]);
      let japanese = phrasesToCheck[i].cc.toString();
      let jText = document.createTextNode(japanese);
      phrasesListed[i].appendChild(jText);
    }
    jeToggle.dataset.language = 1;
  } else {
      for (let j = 0; j < phrasesListed.length; j++) {
        clearDiv(phrasesListed[j]);
        let english = phrasesToCheck[j].e.toString();
        let eText = document.createTextNode(english);
        phrasesListed[j].appendChild(eText);
      }
      jeToggle.dataset.language = 0;
  }
}

let kanji = {
  sun: ['taiyo', '太陽'],
  one: ['ichi', '一',],
  big: ['oki', 'オキ'],
  year: ['toshi', '年'],
  middle: ['chukan', ''],
  toMeet: ['au tame ni', '会'],
  people: ['hito', '人'],
  book: ['hon', '本'],
  moon: ['tsuki', '月'],
  month: ['tsuki', '月'],
  long: ['nagaidesu', '長'],
  country: ['kuni', ''],
  toGoOut: ['gaishutsu suru', ''],
  top: ['appu', ''],
  ten: ['ju', '十'],
  life: ['seikatsu', '生活'],
  child: ['ko', '子'],
  minute: ['bun', '分'],
  east: ['azuma', '東'],
  three: ['san', '三'],
  toGo: ['iku', '行'],
  same: ['onaji', '同'],
  now: ['ima', ''],
  expensive: ['takai', '高'],
  money: ['okane', '金'],
  time: ['jikan', '時'],
  hand: ['hando', ''],
  toSee: ['miru', '見'],
  city: ['shiti', '市'],
  power: ['pawa', ''],
  rice: ['gohan', ''],
  oneself: ['jibun', '自'],
  before: ['mae', ''],
  sound: ['oto', '音']
};

let myKanji = {
  sound: ['oto', '音'],
  music: ['ongaku', '音楽']
};

let センテン = [
  {
    e: 'I eat oranges',
    er: 'I oranges eat',
    r: 'Watashi wa orengi o taberu',
    cc: '私は　オレンジを　たべる'
  },
  {
    e: 'I teach english',
    er: 'I english teach',
    r: 'Watashi wa ego o oshiemasu',
    cc: '私は　エゴを　おしえます'
  },
  {
    e: 'I live in Shinkamagaya',
    er: 'I in Shinkamagaya live',
    r: 'Watashi wa Shinkamagaya de sunde imasu',
    cc: '私は　新鎌ケ谷で　住んでいます'
  }
];

function selectPhrase() {
  console.log(this.firstChild);
}
