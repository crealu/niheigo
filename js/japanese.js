function clearDiv(div) {
  while(div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

function shrinkClear(div) {
  div.style.height = '0px';
  while(div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

let hiraganaArrayG = [
    ['a', 'あ', 'ア'],
    ['i', 'い', 'イ'],
    ['u', 'う', 'ウ'],
    ['e', 'え', 'エ'],
    ['o', 'お', 'オ'],
    ['ka', 'か', 'カ'],
    ['ki', 'き', 'キ'],
    ['ku', 'く', 'ク'],
    ['ke', 'け', 'ケ'],
    ['ko', 'こ', 'コ'],
    ['sa', 'さ', 'サ'],
    ['shi', 'し', 'シ'],
    ['se', 'せ', 'セ'],
    ['su', 'す', 'ス'],
    ['so', 'そ', 'ソ'],
    ['ta', 'た', 'タ'],
    ['chi', 'ち', 'チ'],
    ['tsu', 'つ', 'ツ'],
    ['te', 'て', 'テ'],
    ['to', 'と', 'ト'],
    ['na', 'な', 'ナ'],
    ['ni', 'に', 'ニ'],
    ['nu', 'ぬ', 'ヌ'],
    ['ne', 'ね', 'ネ'],
    ['no', 'の', 'ノ'],
    ['ha', 'は', 'ハ'],
    ['hi', 'ひ', 'ヒ'],
    ['fu', 'ふ', 'フ'],
    ['he', 'へ', 'ヘ'],
    ['ho', 'ほ', 'ホ'],
    ['ma', 'ま', 'マ'],
    ['mi', 'み', 'ミ'],
    ['mu', 'む', 'ム'],
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

// naviagtion
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

let on = 0;
let preRandomized = [];
let collectedArray = [];

// collect content
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

/*
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
*/

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
    preRandomized.push(tripletArray);
    addToIB();
    this.style.background = 'white';
    collectedHere.dataset.collection++;
    collectedHere.innerHTML = collectedHere.dataset.collection;
    this.dataset.collect = 1;
    console.log(preRandomized);
  } else {
      this.style.border = '1px solid gray';
  }
}

function randomizeArray() {
  let preRandomLength = preRandomized.length;
  let r;
  while (preRandomLength > 0) {
    r = Math.floor(Math.random() * (preRandomLength - 1));
    let spliced = preRandomized.splice(r, 1);
    collectedArray.push(spliced[0]);
    preRandomLength = preRandomized.length;
  }
  console.log(collectedArray);
}

function addToIB() {
  let ibs = document.getElementById('ib-selection');
  clearDiv(ibs);
  for (let i = 0; i < preRandomized.length; i++) {
    let r = preRandomized[i][0];
    let h = preRandomized[i][1];
    let k = preRandomized[i][2];
    let tripletText = document.createTextNode(r + ', ' + h + ', ' + k);

    let pEl = document.createElement("p");
    pEl.classList.add('collected-content')
    pEl.appendChild(tripletText);
    ibs.appendChild(pEl);
  }
}

function toggleIB() {
  let ib = document.getElementById('interact-box');
  if (ib.style.height == '85%') {
    ib.style.height = '30px';
  } else {
      ib.style.height = '85%';
      ib.style.marginTop = '30px';
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

// matching
function testMatch(test) {
  let ibs = document.getElementById('ib-selection');
  let testHere = document.getElementById('gets-test');
  let choiceHere = document.getElementById('gets-choice');
  document.getElementById('collcont-title').style.display = 'none';
  document.getElementById('matchHK-btn').style.display = 'none';

  ibs.style.opacity = '0';
  testHere.style.display = 'none';
  testHere.style.opacity = '0';
  testMatchClear(ibs, testHere);
  randomizeArray();
/*
  let titleHere = document.createElement("h3");
  let titleText = 'Match each romaji to its katakana and hiragana pair';
  let title = document.createTextNode(titleText);
  titleHere.appendChild(title);
  titleHere.setAttribute('id', 'test-title');

  let testUL = document.createElement("ul");
  testUL.classList.add('match-list-test');*/

  let choiceUL = document.createElement("ul");
  choiceUL.classList.add('match-list-choice');

  for (let i = 0; i < collectedArray.length; i++) {
    let testLI = document.createElement("li");
    let romaji = collectedArray[i][0];
    let rText = document.createTextNode(romaji);
    //testLI.appendChild(rText);
    //testUL.appendChild(testLI);

    let answerInput = document.createElement("input");

    let choiceLI1 = document.createElement("li");
    let choiceLI2 = document.createElement("li");
    let hiragana = collectedArray[i][1];
    let katakana = collectedArray[i][2];
    let hText = document.createTextNode(hiragana);
    let kText = document.createTextNode(katakana);

    choiceLI1.setAttribute('data-hk', hiragana);
    choiceLI2.setAttribute('data-hk', katakana);
    choiceLI1.addEventListener('click', hkChoice);
    choiceLI2.addEventListener('click', hkChoice);
    choiceLI1.appendChild(hText);
    choiceLI2.appendChild(kText);
    choiceUL.appendChild(choiceLI1);
    choiceUL.appendChild(choiceLI2);
  }

  /*let beginButton = document.createElement("button");
  let beginText = document.createTextNode('Begin');
  beginButton.appendChild(beginText);
  beginButton.addEventListener('click', beginTest);*/

  //testHere.appendChild(titleHere);
  //testHere.appendChild(testUL);
  //testHere.appendChild(beginButton);
  choiceHere.appendChild(choiceUL);
  beginTest();

}

function testMatchClear(ibs, th) {
  let i = 0;
  let id = setInterval(frame, 1000);
  function frame() {
    i++;
    if (i == 1) {
      clearInterval(id);
      clearDiv(ibs);
      th.style.display = 'block';
      th.style.opacity = '1';
    }
  }
}

function beginTest() {
  let testHere = document.getElementById('gets-test');
  //let testList = document.getElementsByClassName('match-list-test')[0];
  //let testTitle = document.getElementById('test-title');
  let matchChoice = document.getElementsByClassName('match-list-choice')[0];

  let carousel = document.createElement("div");
  carousel.setAttribute('id', 'the-carousel');

  let caroCount = document.createElement("div");
  caroCount.setAttribute('data-slidenum', '0');
  caroCount.setAttribute('id', 'caro-slide');
  carousel.appendChild(caroCount);

  //this.style.transition = '0.5s';
  //this.style.opacity = '0';
  //testList.style.opacity = '0';
  //testTitle.style.opacity = '0';
  testHere.appendChild(carousel);


  beginTestClear(testHere, carousel);
  matchChoice.style.display = 'block';
}

function beginTestClear(f, c) {
  let i = 0;
  let id = setInterval(frame, 1000);
  function frame() {
    i++;
    if (i == 1) {
      clearInterval(id);
      clearDiv(f);
      fillCaro(c);
      f.appendChild(c);
      caro('prev');
      f.style.opacity = '1';
    }
  }
}

function fillCaro(caroDiv) {
  /*let prevButton = document.createElement("button");
  let prevText = document.createTextNode('<');
  prevButton.appendChild(prevText);
  caroDiv.appendChild(prevButton);*/
  document.getElementById('prev-nav').style.opacity = '1';
  document.getElementById('next-nav').style.opacity = '1';
  for (let i = 0; i < collectedArray.length; i++) {
    let slide = document.createElement("div");
    let slideRomaji = document.createElement("p");
    let slotH = document.createElement("div");
    let slotK = document.createElement("div");

    let r = collectedArray[i][0];
    let rText = document.createTextNode(r);
    //let slotHText = document.createTextNode('H');
    //let slotKText = document.createTextNode('K');

    //slotH.appendChild(slotHText);
    //slotK.appendChild(slotKText);
    slotH.setAttribute('placeholder', 'H');
    slotK.setAttribute('placeholder', 'K');
    slotH.classList.add('answer-slot');
    slotK.classList.add('answer-slot');
    slotH.addEventListener('click', selectHK, 'h');
    slotK.addEventListener('click', selectHK, 'k');

    slideRomaji.appendChild(rText);
    slide.appendChild(slideRomaji);
    slide.appendChild(slotH);
    slide.appendChild(slotK);
    slide.setAttribute('data-slide', 'slide' + i.toString());
    slide.classList.add('caro-slides');
    caroDiv.appendChild(slide);
  }
  /*let nextButton = document.createElement("button");
  let nextText = document.createTextNode('>');
  nextButton.appendChild(nextText);
  caroDiv.appendChild(nextButton);*/
}

function caro(direction) {
  let slideNumHere = document.getElementById('caro-slide');
  let testHere = document.getElementById('gets-test');
  let checkButton = document.getElementById('check-btn');
  let arrayLen = collectedArray.length;

  if (direction == 'next' && slideNumHere.dataset.slidenum != arrayLen - 1) {
    slideNumHere.dataset.slidenum++;
  } else if (direction == 'prev' && slideNumHere.dataset.slidenum != 0) {
      slideNumHere.dataset.slidenum--;
  }
  let slideNum = slideNumHere.dataset.slidenum;
  slideNumHere.innerHTML = slideNum;

  let caroSlides = document.getElementsByClassName('caro-slides');
  for (let j = 0; j < caroSlides.length; j++) {
    caroSlides[j].style.display = 'none';
    caroSlides[slideNum].style.display = 'block';
  }

  if (slideNumHere.dataset.slidenum == arrayLen - 1) {
    checkButton.style.display = 'block';
  } else {
      checkButton.style.display = 'none';
  }
}

function selectHK(hk) {
  this.classList.add('selected-slot');
}

function hkChoice() {
  let selected = document.getElementsByClassName('selected-slot')[0];
  selected.classList.add('answered-slot');
  selected.innerHTML = this.dataset.hk;
  selected.dataset.answer = this.dataset.hk;
  selected.classList.remove('selected-slot');
}

function checkTest() {
  let caroSlides = document.getElementsByClassName('caro-slides');
  let getsCheck = document.getElementById('gets-check');
  let completedAnswers = [];
  for (let x = 0; x < caroSlides.length; x++) {
    let testR = caroSlides[x].firstChild.firstChild.textContent;
    let ansH = caroSlides[x].firstChild.nextSibling.textContent;
    let ansK = caroSlides[x].firstChild.nextSibling.nextSibling.textContent;
    let finishedSlide = [testR, ansH, ansK];
    completedAnswers.push(finishedSlide);
  }

  for (let y = 0; y < collectedArray.length; y++) {
    for (let z = 0; z < completedAnswers.length; z++) {
      if (collectedArray[y][0] == completedAnswers[z][0] && collectedArray[y][1] == completedAnswers[z][1] && collectedArray[y][2] == completedAnswers[z][2]) {
        console.log(y.toString() + ' is correct');
      }
    }
  }

  console.log(completedAnswers);
  console.log(collectedArray);

  let romajiForm = document.getElementById('romform');

  let theDate = new Date();
  let dateInput = document.createElement("input");
  dateInput.setAttribute('type', 'textbox');
  dateInput.setAttribute('name', 'testdate');
  dateInput.value = theDate;
  romajiForm.appendChild(dateInput);

  let time = theDate.getDay();
  //let timeInput = document.createElement()

  for (let a = 0; a < collectedArray.length; a++) {
    let input, inputText;
    let romaji = collectedArray[a][0];

    input = document.createElement("input");
    input.setAttribute('type', 'textbox');
    input.setAttribute('name', 'romaji')
    //inputText = document.createTextNode(romaji.toString());
    romajiForm.appendChild(input);
    input.value = romaji;
    console.log(collectedArray[a][0]);
  }
}

/*
function toggleKanji() {
  let gkt = document.getElementById("gets-kanji-title");
  let allKanji = document.getElementsByClassName("kanjinp");
  let kanjiRow, kanjiBox, kanjiText;

  for (let i = 0; i < allKanji; i++) {
    kanjiText = document.createTextNode(allKanji[i]);
    kanjiBox = document.createElement("div");
    kanjiBox.appendChild(kanjiText);

  }
}*/


//window.onload = navigate('patterns');
