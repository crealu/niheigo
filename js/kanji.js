// kanji.js

function openKanjiInput() {
  let kanjiInputForm = document.getElementsByClassName('the-kanji-form')[0];
  if (kanjiInputForm.style.transform == 'scale(1)') {
    kanjiInputForm.style.transform = 'scale(0)';
  } else {
    kanjiInputForm.style.transform = 'scale(1)';
  }
}

// tKA = test Kanji Array, pRKA = pre Random Kanji Array
let tKA = [];
let pRKA = [];

function collectKanjiToTest() {
  let kanjiInpCont = document.getElementsByClassName('kanji-input-container');

  let kanjiBoxes = document.getElementsByClassName('new-kanji-box');
  for (let i = 0; i < kanjiBoxes.length; i++) {
    //let displayCardVar = displayKanjiCard(kanjiBoxes[i].children[0].id);
    kanjiBoxes[i].addEventListener('click', collectKanji);
  }
  let ib = document.getElementById('interact-box');
  ib.style.height = '30px';
  ib.style.opacity = '1';
  ib.style.width = 'inherit';
}

function collectKanji() {
  let collectedKanjiHere = document.getElementById('gets-collected-kanji');
  let collectedHere = document.getElementById('collected-amount');

  let theKanji = this.children[0];
  let kanjID = theKanji.id.toString();
  let kunR = theKanji.dataset.kun;
  let onR = theKanji.dataset.on;
  let examples = theKanji.dataset.examples;
  let newEx = JSON.parse(examples);
  console.log(examples, newEx);
}
/*
function collectKanji() {
  let collectedKanjiHere = document.getElementById('gets-collected-kanji');
  let collectedHere = document.getElementById('collected-amount');

  let theKanji = this.firstChild.nextSibling.textContent;
  let theKunReading = this.parentElement.children[1].children[0].textContent;
  let theMeaning = this.parentElement.nextSibling.nextSibling.innerText;

  let tripletArray = [theKanji, theKunReading, theMeaning];

  pRKA.push(tripletArray);
  console.log(pRKA);

  collectedHere.dataset.collection++;
  collectedHere.innerHTML = collectedHere.dataset.collection;

}*/

// RKA = Random Kanji Array
function randomizeKanjiArray() {
  let pRKALength = pRKA.length;
  let rando;
  while (pRKALength > 0) {
    rando = Math.floor(Math.random() * (pRKALength - 1));
    let spliced = pRKA.splice(rando, 1);
    tKA.push(spliced[0]);
    pRKALength = pRKA.length;
  }
  console.log(tKA);
}

function beginKanjiTest() {
  randomizeKanjiArray();

}

function newExample(k, r, m) {
  this.kanji = k;
  this.reading = r;
  this.meaning = m;
}

function enableKanjiCards() {
  let kanjiBoxes = document.getElementsByClassName('new-kanji-box');
  for (let i = 0; i < kanjiBoxes.length; i++) {
    //let displayCardVar = displayKanjiCard(kanjiBoxes[i].children[0].id);

    if (kanjiBoxes[i].children[0].dataset.exl > 1) {
      kanjiBoxes[i].addEventListener('click', displayKanjiCard1);
    } else {
      kanjiBoxes[i].addEventListener('click', displayKanjiCardMany);
    }
  }
}

function displayKanjiCard() {
  let theKanji = this.children[0];
  //console.log(theKanji);
  //console.log(kanj);

  let kanj = theKanji.id.toString();


  //let theKanji = document.getElementById(kanj);

  //let kanj = theKanji.id.toString();
  console.log(kanj);
  let kunR = theKanji.dataset.kun;
  let onR = theKanji.dataset.on;
  let examples = theKanji.dataset.examples;
  console.log(kanj, kunR, onR, examples);
  showCard(kanj, kunR, onR, examples);

  //let newEx = JSON.parse(examples);
  //console.log(kanj, kunR, onR, newEx);
  //showCard(kanj, kunR, onR, newEx);
}

function displayKanjiCard1() {
  let theKanji = this.children[0];

  let kanj = theKanji.id.toString();
  let kunR = theKanji.dataset.kun;
  let onR = theKanji.dataset.on;
  let examples = theKanji.dataset.examples;

  console.log(kanj, kunR, onR, examples);
  showCard1(kanj, kunR, onR, examples);
}

function showCard1(char, kr, or, e) {
  let kanjiHere = document.getElementsByClassName('cm-gets-kanji')[0];
  let onHere = document.getElementsByClassName('cm-gets-on')[0];
  let kunHere = document.getElementsByClassName('cm-gets-kun')[0];

  let kanjiText = document.createTextNode(char);
  let onText = document.createTextNode(kr);
  let kunText = document.createTextNode(or);

  let kanjiP = document.createElement("p");
  let onP = document.createElement("p");
  let kunP = document.createElement("p");

  kanjiP.classList.add('kanji-p');
  onP.classList.add('onkun-p');
  kunP.classList.add('onkun-p');

  clearDiv(kanjiHere);
  clearDiv(onHere);
  clearDiv(kunHere);

  kanjiP.appendChild(kanjiText);
  onP.appendChild(onText);
  kunP.appendChild(kunText);

  kanjiHere.appendChild(kanjiP);
  onHere.appendChild(onP);
  kunHere.appendChild(kunP);

  let eParsed = JSON.parse(e);
  let eKArr, eRArr, eEArr = [];
  eKArr = eParsed[0].exKanji.split(',');
  eRArr = eParsed[0].exReading.split(',');
  eEArr = eParsed[0].exEnglish.split(',');

  //console.log(eKArr, eRArr, eEArr);

  let cmExK = document.getElementsByClassName('cm-example-kanji')[0];
  let cmExR = document.getElementsByClassName('cm-example-reading')[0];
  let cmExE = document.getElementsByClassName('cm-example-english')[0];

  let examplesHere = document.getElementsByClassName('cm-gets-examples')[0];
  clearDiv(examplesHere);

  for (let x = 0; x < eKArr.length; x++) {
    let newExampleRow = document.createElement("div");
    newExampleRow.classList.add('cm-example-row');

    let eKText = eKArr[x];
    let eRText = eRArr[x];
    let eEText = eEArr[x];
    //console.log(eKText, eRText, eEText);

    let eKTextTN = document.createTextNode(eKText);
    let eRTextTN = document.createTextNode(eRText);
    let eETextTN = document.createTextNode(eEText);
    //console.log(eKTextTN, eRTextTN, eETextTN);

    let newCMExK = document.createElement("div");
    newCMExK.classList.add('cm-example', 'cm-example-kanji');
    let newCMExR = document.createElement("div");
    newCMExR.classList.add('cm-example', 'cm-example-reading');
    let newCMExE = document.createElement("div");
    newCMExE.classList.add('cm-example', 'cm-example-english');


    newCMExK.appendChild(eKTextTN);
    newCMExR.appendChild(eRTextTN);
    newCMExE.appendChild(eETextTN);

    newExampleRow.append(newCMExK, newCMExR, newCMExE);
    examplesHere.appendChild(newExampleRow);
  }

  let cardModal = document.getElementsByClassName('card-modal')[0];
  cardModal.style.transform = 'scale(1)';
}

function displayKanjiCardMany() {
  let theKanji = document.getElementById(kanj);

  let kanj = theKanji.id.toString();
  let kunR = theKanji.dataset.kun;
  let onR = theKanji.dataset.on;
  let examples = theKanji.dataset.examples;

  console.log(kanj, kunR, onR, examples);
  showCardMany(kanj, kunR, onR, examples);
}

function showCardMany(char, kr, or, e) {
  let kanjiHere = document.getElementsByClassName('cm-gets-kanji')[0];
  let onHere = document.getElementsByClassName('cm-gets-on')[0];
  let kunHere = document.getElementsByClassName('cm-gets-kun')[0];

  let kanjiText = document.createTextNode(char);
  let onText = document.createTextNode(kr);
  let kunText = document.createTextNode(or);

  let kanjiP = document.createElement("p");
  let onP = document.createElement("p");
  let kunP = document.createElement("p");

  kanjiP.classList.add('kanji-p');
  onP.classList.add('onkun-p');
  kunP.classList.add('onkun-p');

  clearDiv(kanjiHere);
  clearDiv(onHere);
  clearDiv(kunHere);

  kanjiP.appendChild(kanjiText);
  onP.appendChild(onText);
  kunP.appendChild(kunText);

  kanjiHere.appendChild(kanjiP);
  onHere.appendChild(onP);
  kunHere.appendChild(kunP);

  /*
  let ss = 0;
  let spliceArr = [];
  while (ss < e.length) {
    if (e[ss] == '}' && e[ss + 1] != ']') {
      spliceArr.push(ss);
    }
    ss += 1;
  }
  console.log(spliceArr);
  console.log(e.trim().length);*/

  let eParsed = JSON.parse(e);
  //console.log(eParsed[0]);
  /*let eKArr, eRArr, eEArr = [];
  eKArr = eParsed[0].exKanji.split(',');
  eRArr = eParsed[0].exReading.split(',');
  eEArr = eParsed[0].exEnglish.split(',');*/

  let eKArr, eRArr, eEArr = [];
  eKArr = e[0].exKanji.split(',');
  eRArr = e[0].exReading.split(',');
  eEArr = e[0].exEnglish.split(',');

  console.log(eKArr, eRArr, eEArr);

  let cmExK = document.getElementsByClassName('cm-example-kanji')[0];
  let cmExR = document.getElementsByClassName('cm-example-reading')[0];
  let cmExE = document.getElementsByClassName('cm-example-english')[0];

  let examplesHere = document.getElementsByClassName('cm-gets-examples')[0];
  clearDiv(examplesHere);

  for (let x = 0; x < eKArr.length; x++) {
    let newExampleRow = document.createElement("div");
    newExampleRow.classList.add('cm-example-row');

    let eKText = eKArr[x];
    let eRText = eRArr[x];
    let eEText = eEArr[x];
    console.log(eKText, eRText, eEText);

    let eKTextTN = document.createTextNode(eKText);
    let eRTextTN = document.createTextNode(eRText);
    let eETextTN = document.createTextNode(eEText);
    console.log(eKTextTN, eRTextTN, eETextTN);

    let newCMExK = document.createElement("div");
    newCMExK.classList.add('cm-example', 'cm-example-kanji');
    let newCMExR = document.createElement("div");
    newCMExR.classList.add('cm-example', 'cm-example-reading');
    let newCMExE = document.createElement("div");
    newCMExE.classList.add('cm-example', 'cm-example-english');


    newCMExK.appendChild(eKTextTN);
    newCMExR.appendChild(eRTextTN);
    newCMExE.appendChild(eETextTN);

    newExampleRow.append(newCMExK, newCMExR, newCMExE);
    examplesHere.appendChild(newExampleRow);
  }

  let cardModal = document.getElementsByClassName('card-modal')[0];
  cardModal.style.transform = 'scale(1)';
}


function showCard(char, kr, or, e) {
  let kanjiHere = document.getElementsByClassName('cm-gets-kanji')[0];
  let onHere = document.getElementsByClassName('cm-gets-on')[0];
  let kunHere = document.getElementsByClassName('cm-gets-kun')[0];

  let kanjiText = document.createTextNode(char);
  let onText = document.createTextNode(kr);
  let kunText = document.createTextNode(or);

  let kanjiP = document.createElement("p");
  let onP = document.createElement("p");
  let kunP = document.createElement("p");

  kanjiP.classList.add('kanji-p');
  onP.classList.add('onkun-p');
  kunP.classList.add('onkun-p');

  clearDiv(kanjiHere);
  clearDiv(onHere);
  clearDiv(kunHere);

  kanjiP.appendChild(kanjiText);
  onP.appendChild(onText);
  kunP.appendChild(kunText);

  kanjiHere.appendChild(kanjiP);
  onHere.appendChild(onP);
  kunHere.appendChild(kunP);

  /*
  let ss = 0;
  let spliceArr = [];
  while (ss < e.length) {
    if (e[ss] == '}' && e[ss + 1] != ']') {
      spliceArr.push(ss);
    }
    ss += 1;
  }
  console.log(spliceArr);
  console.log(e.trim().length);*/

  let eParsed = JSON.parse(e);
  //console.log(eParsed[0]);
  let eKArr, eRArr, eEArr = [];
  eKArr = eParsed[0].exKanji.split(',');
  eRArr = eParsed[0].exReading.split(',');
  eEArr = eParsed[0].exEnglish.split(',');

  /*let eKArr, eRArr, eEArr = [];
  eKArr = e[0].exKanji.split(',');
  eRArr = e[0].exReading.split(',');
  eEArr = e[0].exEnglish.split(',');*/

  console.log(eKArr, eRArr, eEArr);

  let cmExK = document.getElementsByClassName('cm-example-kanji')[0];
  let cmExR = document.getElementsByClassName('cm-example-reading')[0];
  let cmExE = document.getElementsByClassName('cm-example-english')[0];

  let examplesHere = document.getElementsByClassName('cm-gets-examples')[0];
  clearDiv(examplesHere);

  for (let x = 0; x < eKArr.length; x++) {
    let newExampleRow = document.createElement("div");
    newExampleRow.classList.add('cm-example-row');

    let eKText = eKArr[x];
    let eRText = eRArr[x];
    let eEText = eEArr[x];
    console.log(eKText, eRText, eEText);

    let eKTextTN = document.createTextNode(eKText);
    let eRTextTN = document.createTextNode(eRText);
    let eETextTN = document.createTextNode(eEText);
    console.log(eKTextTN, eRTextTN, eETextTN);

    let newCMExK = document.createElement("div");
    newCMExK.classList.add('cm-example', 'cm-example-kanji');
    let newCMExR = document.createElement("div");
    newCMExR.classList.add('cm-example', 'cm-example-reading');
    let newCMExE = document.createElement("div");
    newCMExE.classList.add('cm-example', 'cm-example-english');


    newCMExK.appendChild(eKTextTN);
    newCMExR.appendChild(eRTextTN);
    newCMExE.appendChild(eETextTN);

    newExampleRow.append(newCMExK, newCMExR, newCMExE);
    examplesHere.appendChild(newExampleRow);
  }

  let cardModal = document.getElementsByClassName('card-modal')[0];
  cardModal.style.transform = 'scale(1)';
}

function closeCard() {
  let cardModal = document.getElementsByClassName('card-modal')[0];
  cardModal.style.transform = 'scale(0)';
}

function changeElement(el, aClicked) {
  let body = document.body;
  let bg;
  var centerImg = document.getElementsByClassName('center-ele')[0];
  var centerImgAlt = centerImg.alt;
  var centerImgSrc = centerImg.src;
  var outerImg = aClicked.firstChild.nextSibling;
  var outerImgAlt = outerImg.alt;
  var outerImgSrc = outerImg.src;
  var newCenterImg, newOuterImg;
  switch (el) {
    case 'fire':
      //bg = 'var(--fire-bg)';
      bg = 'radial-gradient(rgb(255, 240, 93), rgb(255, 93, 70))';
      newCenterImg = 'fires.png';
      centerImg.alt = outerImgAlt;
      loadFire();
      break;
    case 'water':
      //bg = 'var(--water-bg)';
      bg = 'radial-gradient(rgb(0, 184, 233), rgb(8, 0, 191))';
      newCenterImg = 'waters.png';
      centerImg.alt = outerImgAlt;
      loadWater();
      break;
    case 'earth':
      //bg = 'var(--earth-bg)';
      bg = 'radial-gradient(rgb(82, 233, 0), rgb(0, 120, 5))';
      newCenterImg = 'earths.png';
      centerImg.alt = outerImgAlt;
      loadEarth();
      break;
    case 'air':
      //bg = 'var(--air-bg)';
      bg = 'radial-gradient(rgb(255, 120, 220), rgb(152, 0, 156))';
      newCenterImg = 'airs.png';
      centerImg.alt = outerImgAlt;
      loadAir();
      break;
    case 'space':
      //bg = 'var(--space-bg)';
      bg = 'radial-gradient(rgb(107, 90, 121), rgb(36, 25, 45))';
      newCenterImg = 'spaces.png';
      centerImg.alt = outerImgAlt;
      loadSpace();
      break;
  }

  // set new center
  centerImg.src = 'public/media/img/' + newCenterImg;
  centerImg.alt = outerImgAlt;

  // set new outer
  var concatenated = 'public/media/img/'.concat(centerImgAlt, 's.png');
  var re = new RegExp(concatenated, 'g');
  outerImg.src = centerImgSrc.match(re)[0];
  outerImg.alt = centerImgAlt;

  // set new background
  body.style.background = "" + bg + " no-repeat center center fixed";
  body.style.backgroundSize = "cover";

  // set new a function parameter
  aClicked.setAttribute("onclick", "changeElement('" + centerImgAlt + "', this)");
  aClicked.classList.add('center');

  let oes = document.getElementsByClassName('oe');

}

function displayElementContents(element) {
  let titleHere = document.getElementById('gets-el-title');
  let detailsHere = document.getElementById('gets-el-info');
  titleHere.style.opacity = '0';
  detailsHere.style.opacity = '0';

  clearDiv(titleHere);
  clearDiv(detailsHere);

  let title = document.createElement("h2");
  let details = document.createElement("p");

  let titleText = document.createTextNode(element);
  var dT, detailsText;

  switch (element) {
    case 'Fire':
      dT = "Fire info";
      detailsText = document.createTextNode(dT);
      break;

    case 'Water':
      dT = "Water info";
      detailsText = document.createTextNode(dT);
      //title.classList.add('software-title');
      break;

    case 'Air':
      dT = "Air info";
      detailsText = document.createTextNode(dT);
      //title.classList.add('software-title');
      break;

    case 'Earth':
      dT = "Earth info";
      detailsText = document.createTextNode(dT);
      break;

    case 'Space':
      dT = "Space info";
      detailsText = document.createTextNode(dT);
      break;
  }


  title.classList.add('current-title');
  title.appendChild(titleText);
  titleHere.appendChild(title);
  details.appendChild(detailsText);
  detailsHere.appendChild(details);

  return([titleHere, detailsHere]);
}

function loadFire() {
  let mainArray = displayElementContents('Fire');
  mainArray;
  mainArray[0].style.animation = 'beseen 1s forwards';
  mainArray[1].style.animation = 'beseen 1s forwards';
}

function loadWater() {
  let mainArray = displayElementContents('Water');
  mainArray;
  mainArray[0].style.animation = 'beseen 1s forwards';
  mainArray[1].style.animation = 'beseen 1s forwards';
}

function loadAir() {
  let mainArray = displayElementContents('Air');
  mainArray;
  mainArray[0].style.animation = 'beseen 1s forwards';
  mainArray[1].style.animation = 'beseen 1s forwards';
}

function loadEarth() {
  let mainArray = displayElementContents('Earth');
  mainArray;
  mainArray[0].style.animation = 'beseen 1s forwards';
  mainArray[1].style.animation = 'beseen 1s forwards';
}

function loadSpace() {
  let mainArray = displayElementContents('Space');
  mainArray;
  mainArray[0].style.animation = 'beseen 1s forwards';
  mainArray[1].style.animation = 'beseen 1s forwards';
}

function rotateElementCSS() {
  let el1 = document.getElementsByClassName('el1')[0];
  let el2 = document.getElementsByClassName('el2')[0];
  let el3 = document.getElementsByClassName('el3')[0];
  let el4 = document.getElementsByClassName('el4')[0];

  /*let sE1 = function styleE1() {
    let el1 = document.getElementsByClassName('el1')[0];
    el1.style.transform = 'rotate(1800deg) translate(0em) rotate(-1800deg)';
  }*/

  //timedFunction(el1, 250, 0, 2, sE1);

  let id = setInterval(frame, 250);
  let i = 0;
  function frame() {
    i++;
    if (i == 2) {
      clearInterval(id);
      el1.style.transform = 'rotate(900deg) translate(0em) rotate(-900deg)';
      el2.style.transform = 'rotate(900deg) translate(0em) rotate(-900deg)';
      el3.style.transform = 'rotate(900deg) translate(0em) rotate(-900deg)';
      el4.style.transform = 'rotate(900deg) translate(0em) rotate(-900deg)';
      showNiheigo(el1, el2, el3, el4);
    }
  }
}

function showNiheigo(e1, e2, e3, e4) {
  let id = setInterval(frame, 250);
  let i = 0;
  function frame() {
    i++;
    if (i == 3) {
      let ce = document.getElementsByClassName('center-ele')[0];
      ce.style.opacity = '1';
      e1.style.opacity = '0';
      e2.style.opacity = '0';
      e3.style.opacity = '0';
      e4.style.opacity = '0';
    }
  }
}

function timedFunction(el, interval, i0, i1, fncs) {
  let id = setInterval(frame, interval);
  let i = i0;
  function frame() {
    i++;
    if (i == i1) {
      clearInterval(id);
      (fncs);
    }
  }
}

window.onload = rotateElementCSS();

function rotateJS() {
  let el1 = document.getElementsByClassName('el1')[0];
  let i = 15;
  let id = setInterval(frame, 20);
  function frame() {
    i--;
    el1.style.transform = 'rotate(1080deg) translate(' + i + 'em) rotate(-1080deg)';
    console.log(i);
    if (i == 0) {
      clearInterval(id);
    }
  }
}
