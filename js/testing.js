// testing ops

let kanjiArray = []

let answersArray = []

/*
  when user clicks test
    - select 10 random kanji
    - save those kanji to the questions array
      * each questions object will have:
        .the kanji
        .answers
          - [0] = correct answer
          - [1] = student answer

    - need to create an array for each kanji question
      * when the kanji is selcted, save the correct answer to the answerChoices array
      * select 3 random kanji and push them into the answerChoices array



*/

function KanjiBox(ka, k, o, km, ex) {
  this.kanji = ka,
  this.kun = k,
  this.on = o,
  this.meaning = km,
  this.examples = ex
}

function KanjiExample(k, r, e) {
  this.exK = k,
  this.exR = r,
  this.exE = e
}

let ex1 = new KanjiExample('始め', 'はじめ', 'beginning');
let ex2 = new KanjiExample('始終', 'しじゆう', 'all the time');
let ex3 = new KanjiExample('年始', 'ねんし', 'beginning of the year');

let 始ex = [];
let 始ex2 = [
  {
    exK: '始め',
    exR: 'はじめ',
    exE: 'beginning'
  },
  {
    exK: '始終',
    exR: 'しじゆう',
    exE: 'all the time'
  },
  {
    exK: '始末',
    exR: 'しまつ',
    exE: 'getting rid of'
  }
];
始ex.push(ex1, ex2, ex3);


let 始 = new KanjiBox('始', 'はじ', 'し', 'beginning', 始ex);
let 終 = new KanjiBox('終', 'おわり', 'しゆう', 'end', 始ex);
let 不 = new KanjiBox('不', 'ふ', 'ぶ', 'anxious', 始ex);
let 数 = new KanjiBox('数', 'かず', 'すう', 'count', 始ex);
let 算 = new KanjiBox('算', 'さん', 'さん', 'calculate', 始ex);
let 親 = new KanjiBox('親', 'おや', 'しん', 'kind', 始ex);

let kba = [
  始,
  終,
  不,
  数,
  算,
  親
];

console.log(始.examples[0].exK);

function makeKanjiBox(kanjiObject) {
  let mkh = document.getElementById('made-kanji-here');
  let newKanjiBox = document.createElement("div");
  let kanjiDiv = document.createElement("div");

  newKanjiBox.classList.add('new-kanji-box');
  kanjiDiv.classList.add('kanji-of-db');
  kanjiDiv.classList.add('for-test');

  let newAttr = [
    'id',
    'data-kun',
    'data-on',
    'data-meaning',
    'data-examples'
  ];

  let newAttrValue = [
    kanjiObject.kanji,
    kanjiObject.kun,
    kanjiObject.on,
    kanjiObject.meaning,
    kanjiObject.examples
  ];

  for (var i = 0; i < newAttr.length; i++) {
    kanjiDiv.setAttribute(newAttr[i], newAttrValue[i]);
  }


  let theKanji = kanjiObject.kanji;
  let kanjiText = document.createTextNode(theKanji);

  kanjiDiv.appendChild(kanjiText);
  newKanjiBox.appendChild(kanjiDiv);
  mkh.appendChild(newKanjiBox);
  //document.body.appendChild(newKanjiBox);
}

for (var az = 0; az < kba.length; az++) {
  makeKanjiBox(kba[az]);
}

let test2 = {
  date: '',
  score: '',
  questions: [
    {
      kanji: '',
      answerChoices: [],
      answers: {
        meaning: [],
        kun: [],
        on: [],
        example: [],
        sound: []
      }
    }
  ]
};
/*
function testKanji(k, ac, ca, ua) {
  this.kanji = k,
  this.answerChoices = ac,
  this.correctAnswer: ca,
  this.userAnswer: ua
}*/

function randomNumber(max, min) {
  let rand = Math.floor(Math.random() * (max - min) + min);
  return rand;
}

function testKanji(k, ca) {
  this.kanji = k,
  this.correctAnswer = ca,
  this.choices = [ca]
}

// testQuestionsArray = tQA
// testAnswersArray = tAA
let tQA = [];
let tAA = [];

function prepareTestArray() {
  let kanjis = document.getElementsByClassName('for-test');
  let kanjiForTest,
      kK,
      kCH,
      kCA,
      kUA;

  for (var z = 0; z < kanjis.length; z++) {
    kK = kanjis[z]['id'];
    kCA = kanjis[z]['dataset']['meaning'];

    kanjiForTest = new testKanji(kK, kCA);

    tAA.push(kCA);
    tQA.push(kanjiForTest);
  }

  /* pick 3 random that cannot be whats in the choices array already */
  let randomNum;
  for (var l = 0; l < tAA.length; l++) {
    var r = 0;
    while (r < 3) {
      randomNum = randomNumber(tAA.length, 1);
      let randomChoice = tAA[randomNum];
      if (tQA[l]['correctAnswer'] != randomChoice) {
        if (tQA[l].choices.indexOf(randomChoice) == -1) {
          tQA[l].choices.push(randomChoice);
          r++;
        }
      } else {
          r = r;
      }
    }
  }

// random answer location
  let rAL;
  let tQAK, tQACA, tQACH;
  for (var x = 0; x < tQA.length; x++) {
    tQA[x].choices.shift();
    // the random number can be optimized to include the first selection to be possible
    rAL = randomNumber(tQA[x].choices.length, 1);
    tQA[x].choices.splice(rAL, 0, tQA[x].correctAnswer);

    tQAK = tQA[x].kanji;
    tQACA = tQA[x].correctAnswer;
    tQACH = tQA[x].choices;

    createTestSlide(tQAK, tQACA, tQACH);
  }

  // new approach
  // loop through each tQA and select the first value (the answer) and insert it somewhere
  // random using the splice method and unshift the array
  // IT WORKED!

  // first randomize choices to create slide question CHECK
  // create test structure CHECK
  // fill data
  // present test
  reStyle();
  console.log(tQA, rAL);
}

let slideQuestion = {
  kanji: '',
  correctAnswer: '',
  choices: []
}
/*
let slideStructure(k, ca, opt) {
  this.kanji = document.createTextNode(k),
  this.correctAnswer = document.createTextNode(ca),
  this.choices = []
}*/

function createTestSlide(k, ca, ch) {
  let testContainer = gebcn('test-container')[0];
  let slideDiv = createEl("div");
  let kanjiWrapper = createEl("div");
  let kanjiText = textNode(k);

  let allChoicesDiv = createEl("div");
  let choiceWrapper, choiceText;

  let answerDiv = createEl("div");
  let correctAnswer = ca;

  slideDiv.classList.add('test-slide');
  kanjiWrapper.classList.add('kanji-wrapper');
  answerDiv.classList.add('answer-wrapper');
  allChoicesDiv.classList.add('all-choices-wrapper');

  let slidesLength = gebcn('test-slide').length;

  console.log(ch[0]);
  for (var aa = 0; aa < ch.length; aa++) {
    choiceWrapper = createEl("div");
    choiceText = textNode(ch[aa]);
    choiceWrapper.classList.add('choice-wrapper');
    choiceWrapper.setAttribute('onclick', 'fillAnswer(' + slidesLength + ', "' + ch[aa].toString() + '", this)');
    choiceWrapper.appendChild(choiceText);
    allChoicesDiv.appendChild(choiceWrapper);
  }

  kanjiWrapper.appendChild(kanjiText);
  slideDiv.appendChild(kanjiWrapper);
  slideDiv.appendChild(answerDiv);
  slideDiv.appendChild(allChoicesDiv);
  slideDiv.setAttribute('data-corans', ca);
  testContainer.appendChild(slideDiv);

  /*
  slide div
  slide kanji div
  slide kanji text

  slide all choices wrapper
  slide choice wrapper
  slide choices text

  slide answer slot wrapper
  slide correct answer data
  */
}

function slideCaro(direction) {
  let testSlides = gebcn('test-slide');
  let testSlideLen = testSlides.length;
  let kanjiSlideNum = gebcn('kanji-slide-num')[0];
  //let testHere = document.getElementById('gets-test');

  if (direction == 'next' && kanjiSlideNum.dataset.slidenum != testSlideLen - 1) {
    kanjiSlideNum.dataset.slidenum++;
  } else if (direction == 'prev' && kanjiSlideNum.dataset.slidenum != 0) {
      kanjiSlideNum.dataset.slidenum--;
  }
  let slideNum = kanjiSlideNum.dataset.slidenum;
  kanjiSlideNum.innerHTML = slideNum;

  for (let j = 0; j < testSlides.length; j++) {
    testSlides[j].style.display = 'none';
    //testSlides[j].style.animation = 'psah 1s ease 0s forwards';

    // need to separate the previous slide anmiation to come before slideCaro('next') is called
    testSlides[slideNum - 1].style.animation = 'psah 1s ease 0s forwards';

    testSlides[slideNum].style.display = 'block';
    testSlides[slideNum].style.animation = 'nsar 1s ease 0s forwards';
  }

  let checkButton = document.getElementById('check-kanji-btn');

  if (kanjiSlideNum.dataset.slidenum == testSlideLen - 1) {
    checkButton.style.display = 'block';
  } else {
      checkButton.style.display = 'none';
  }
}

function fillAnswer(questionNum, selected, sthis) {
  let answerSlot = gebcn('answer-wrapper')[questionNum];
  sthis.style.background = 'rgba(108, 192, 136, 0.5)';
  answerSlot.innerHTML = selected;

  let slideID = setInterval(frame, 500);
  let i = 0;
  function frame() {
    i++;
    if (i == 1) {
      clearInterval(slideID);
      slideCaro('next');
    }
  }
}

/*
for each testKanji object, create an answers array (of length 4)
and add the correct answer along with other answers then randomize the array */

function reStyle() {
  let tC = gebcn('test-container')[0];
  let tsn = gebcn('test-slide');
  tC.style.width = (375 * tsn.length).toString() + 'px';
  tC.style.overflowX = 'scroll';
}

function newTest(q) {
  this.date = new Date();
  this.score = '',
  this.questions = q
}

function createTest() {
  let date = new Date();
}
