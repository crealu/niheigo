let phrases = [
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

let sentences = [
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
      object: 'nihongo o',
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
      object: 'kireina bara o',
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
      object: 'koohii o',
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
      object: 'sakura o',
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
  let choice = sentences.length;
  let rand = Math.floor(Math.random() * (choice - 1) + 1);

  let siE = document.getElementsByClassName('si-e');
  let siER = document.getElementsByClassName('si-er');
  let siR = document.getElementsByClassName('si-r');
  let siCC = document.getElementsByClassName('si-cc');

  clearDiv(siE[0]);

  clearDiv(siER)
  siE.innerHTML = sentences[rand].e;



}

let phrasesToCheck = [
  {
    e: 'Learn more',
    er: '',
    r: 'Motto kuwashiku shiru',
    cc: 'もっと詳しく知る'
  },
  {
    e: 'To teach',
    er: '',
    r: 'oshieru tame ni',
    cc: '教えるために'
  },
  {
    e: 'To learn',
    er: '',
    r: 'manabu tame ni',
    cc: '学ぶために'
  },
  {
    e: 'I live in',
    er: '',
    r: 'watashi wa sunde imasu',
    cc: '私は住んでいます'
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
  {
    e: 'I ate lunch with my friend at a restaurant on Sunday',
    er: '',
    r: '',
    cc: ''
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

function selectPhrase() {
  console.log(this.firstChild);
}
