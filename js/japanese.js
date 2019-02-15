function clearDiv(div) {
  while(div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

let hiraganaArrayG = [
    ['a', 'あ', 'ア'],
    ['i','い', 'イ'],
    ['u','う', 'ウ'],
    ['e','え', 'エ'],
    ['o', 'お', 'オ'],
    ['ka','か', 'カ'],
    ['ki','き', 'キ'],
    ['ku','く', 'ク'],
    ['ke','け', 'ケ'],
    ['ko','こ', 'コ'],
    ['sa','さ', 'サ'],
    ['shi', 'し', 'シ'],
    ['se','せ', 'セ'],
    ['su','す', 'ス'],
    ['so','そ', 'ソ'],
    ['ta', 'た', 'タ'],
    ['chi','ち', 'チ'],
    ['tsu', 'つ', 'ツ'],
    ['te','て', 'テ'],
    ['to','と', 'ト'],
    ['na','な', 'ナ'],
    ['ni','に', 'ニ'],
    ['nu','ぬ', 'ヌ'],
    ['ne','ね', 'ネ'],
    ['no','の', 'ノ'],
    ['ha','は', 'ハ'],
    ['hi', 'ひ', 'ヒ'],
    ['fu', 'ふ', 'フ'],
    ['he', 'へ', 'ヘ'],
    ['ho', 'ほ', 'ホ'],
    ['ma', 'ま', 'マ'],
    ['mi', 'み', 'ミ'],
    ['mu','む', 'ム'],
    ['me', 'め', 'メ'],
    ['mo', 'も', 'モ'],
    ['ra', 'ら', 'ラ'],
    ['ri', 'リ', 'リ'],
    ['ru', 'る', 'ル'],
    ['re', 'れ', 'レ'],
    ['ro', 'ろ', 'ロ'],
    ['ga', 'が', 'ガ'],
    ['gi', 'ぎ', 'ギ'],
    ['gu', 'ぐ', 'グ'],
    ['ge', 'げ', 'ゲ'],
    ['go', 'ご', 'ゴ'],
    ['za', 'ざ', 'ザ'],
    ['ji', 'じ', 'ジ'],
    ['zu', 'ず', 'ズ'],
    ['ze', 'ぜ', 'ゼ'],
    ['zo', 'ぞ', 'ゾ'],
    ['da', 'だ', 'ダ'],
    ['ji', 'ぢ', 'ジ'],
    ['du', 'づ', 'ヅ'],
    ['de', 'で', 'デ'],
    ['do', 'ど', 'ド'],
    ['ba', 'ば', 'バ'],
    ['bi', 'び', 'ビ'],
    ['bu', 'ぶ', 'ブ'],
    ['be', 'べ', 'ベ'],
    ['bo', 'ぼ', 'ボ'],
    ['pa', 'ぱ', 'パ'],
    ['pi', 'ぴ', 'ピ'],
    ['pu', 'ぷ', 'プ'],
    ['pe', 'ぺ', 'ペ'],
    ['po', 'ぽ', 'ポ'],
    ['ya', 'や', 'ヤ'],
    ['yu', 'ゆ', 'ユ'],
    ['yo', 'よ', 'ヨ'],
    ['kya', 'きゃ', 'キャ'],
    ['kyu', 'きゅ', 'キュ'],
    ['kyo', 'きょ', 'キョ'],
    ['sha', 'しゃ', 'シャ'],
    ['shu', 'しゅ', 'シュ'],
    ['sho', 'しょ', 'ショ'],
    ['cha', 'ちゃ', 'チャ'],
    ['chu', 'ちゅ', 'チュ'],
    ['cho', 'ちょ', 'チョ'],
    ['nya', 'にゃ', 'ニャ'],
    ['nyu', 'にゅ', 'ニュ'],
    ['nyo', 'にょ', 'ニョ'],
    ['hya', 'ひゃ', 'ヒャ'],
    ['hyu', 'ひゅ', 'ヒュ'],
    ['hyo', 'ひょ', 'ヒョ'],
    ['mya', 'みゃ', 'ミャ'],
    ['myu', 'みゅ', 'ミュ'],
    ['myo', 'みょ', 'ミョ'],
    ['rya', 'りゃ', 'リャ'],
    ['ryu', 'りゅ', 'リュ'],
    ['ryo', 'りょ', 'リョ'],
    ['gya', 'ぎゃ', 'ギャ'],
    ['gyu', 'ぎゅ', 'ギュ'],
    ['gyo', 'ぎょ', 'ギョ'],
    ['bya', 'びゃ', 'ビャ'],
    ['byu', 'びゅ', 'ビュ'],
    ['byo', 'びょ', 'ビョ'],
    ['pya', 'ぴゃ', 'ピャ'],
    ['pyu', 'ぴゅ', 'ピュ'],
    ['pyo', 'ぴょ', 'ピョ'],
    ['ja', 'や', 'ジャ'],
    ['ju', 'じゅ', 'ジュ'],
    ['jo', 'じょ', 'ジョ'],
    ['wa', 'わ', 'ワ'],
    ['wi', 'ゐ', 'ウィ'],
    ['we', 'ウ', 'ウェ'],
    ['wo', 'を', 'ヲ'],
    ['n', 'ん', 'ン']
];
/*
let あ = 'a';
console.log(あ);*/

let latinHere = document.getElementById('gets-latin');
let characterHere = document.getElementById('gets-character');

function randomize() {
  let options = document.getElementsByClassName('table-box').length;
  let random = Math.floor(Math.random() * (options - 1) + 1);
  clearDiv(latinHere);
  clearDiv(characterHere);

  latinHere.innerHTML = hiraganaArrayG[random][0];
  characterHere.innerHTML = hiraganaArrayG[random][1];
  console.log(hiraganaArrayG[random]);
}

function toggleCharacters() {

}

function assignSound() {
  let tableBoxes = document.getElementsByClassName('table-box');
  console.log(tableBox.firstChild[0].text);
}

function hiraganaPair(latin, character) {
  this.latin = latin,
  this.character = character
}
/*
let pair = new hiraganaPair('a', 'あ');
latinHere.innerHTML = pair.latin;
characterHere.innerHTML = pair.character;
*/
// start game
function startMatch() {
  let ego = [
    'excuse me',
    'where is that',
    'what is this',
    'what is that'
  ];

  let romaji = [
    'sumimasen',
    'sore wa doko desu ka',
    'kore wa nan desu ka',
    'sore wa nan desu ka'
  ];

  let nihongo = [
    'すみません',
    'それはどこですか',
    'これはなんですか',
    'それはなんですか'
  ];
}

function displayProject(div) {
  let topicContents = document.getElementsByClassName('topic-container');
  for (let i = 0; i < topicContents.length; i++) {
    topicContents[i].style.opacity = '0';
    topicContents[i].style.display = 'none';
  }

  let contentToDisplay = document.getElementById(div);
  contentToDisplay.style.display = 'block';
  contentToDisplay.style.opacity = '1';
}

function navigate(navtab) {
  switch (navtab) {
    case 'table':
      displayProject('table-content');
      break;
    case 'patterns':
      displayProject('patterns-content');
      break;
    case 'sentences':
      displayProject('sentences-content')
      break;
    case 'match':
      displayProject('match-content')
      break;
  }
}

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


let on = 0;
let collectedArray = [];

// event listener functions
function collectToTest() {
  let tableBoxes = document.getElementsByClassName('table-box');
  for (let i = 0; i < tableBoxes.length; i++) {
    tableBoxes[i].addEventListener('click', collect);
  }
  let topicContents = document.getElementsByClassName('topic-contents');
  for (let j = 0; j < topicContents.length; j++) {
    topicContents[j].style.marginBottom = '60px';
  }
  let ib = document.getElementById('interact-box');
  ib.style.height = '30px';
  ib.style.opacity = '1';
  ib.style.width = 'inherit';
  on = 1;
}

function finishCollecting() {
  let selection = document.getElementById('gets-selection');

  function triplet(r, h, k) {
    this.rom = r,
    this.hir = h,
    this.kat = k
  }

  for (let i = 0; i < collectedArray.length; i++) {
    let r = collectedArray[i][0];
    let h = collectedArray[i][1];
    let k = collectedArray[i][2];

    let tri = new triplet(r, h, k);
    let tripletText = document.createTextNode(r + ', ' + h + ', ' + k);
    let pEl = document.createElement("p");
    pEl.appendChild(tripletText);
    selection.appendChild(pEl);
  }

  collectedArray = [];
  on = 0;
}

function collect() {
  let collectedHere = document.getElementById('collected-amount');
  let romaji, hiragana, katakana;
  let ib = document.getElementById('interact-box');

  if (on == 1) {
    romaji = this.firstChild.nextSibling.innerText;
    hiragana = this.childNodes[2].nextSibling.innerText;
    katakana = this.childNodes[4].nextSibling.innerText;
  }

  let tripletArray = [romaji, hiragana, katakana];
  let dataCollected = this.dataset.collect;
  if (dataCollected == 0) {
    collectedArray.push(tripletArray);
    addToIB();
    this.style.background = 'white';
    collectedHere.dataset.collection++;
    collectedHere.innerHTML = collectedHere.dataset.collection;
    this.dataset.collect = 1;
    console.log(collectedArray);
  } else {
      this.style.transform = 'rotate(360deg)';
  }
}

function addToIB() {
  let ibs = document.getElementById('ib-selection');
  clearDiv(ibs);
  for (let i = 0; i < collectedArray.length; i++) {
    let r = collectedArray[i][0];
    let h = collectedArray[i][1];
    let k = collectedArray[i][2];
    let tripletText = document.createTextNode(r + ', ' + h + ', ' + k);

    let pEl = document.createElement("p");
    pEl.classList.add('collected-content')
    pEl.appendChild(tripletText);
    ibs.appendChild(pEl);
  }
}

function toggleIB() {
  let ib = document.getElementById('interact-box');
  if (ib.style.height == '80%') {
    ib.style.height = '40px';
  } else {
      ib.style.height = '80%';
  }
}

// play sound
function assignSound() {
  let tableBoxes = document.getElementsByClassName('table-box');
  let soundParam;
  for (let i = 0; i < tableBoxes.length; i++) {
    tableBoxes[i].addEventListener('click', playJap);
  }
}

function playJap() {
  let soundID = this.childNodes[6].nextSibling.id;
  let jsound = document.getElementById(soundID);
  colorSound(this);
  jsound.play();
  runTimer(jsound, this);
}

function runTimer(sound, tb) {
  let i = 0;
  let id = setInterval(frame, 1000);
  function frame() {
    i++;
    if (i == 1) {
      clearInterval(id);
      if (sound.paused) {
        unColorSound(tb);
      }
    }
  }
}

function colorSound(clicked) {
  clicked.childNodes[1].style.color = '#6CC088';
  clicked.childNodes[3].style.color = '#6CC088';
  clicked.childNodes[5].style.color = '#6CC088';
}

function unColorSound(clicked) {
  clicked.childNodes[1].style.color = '#686868';
  clicked.childNodes[3].style.color = '#686868';
  clicked.childNodes[5].style.color = '#686868';
}
