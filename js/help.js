// helper functions

function gebi(idName) {
  let element = document.getElementById(idName);
  return element;
}

function gebcn(className) {
  let elements = document.getElementsByClassName(className);
  return elements;
}

function clear(div) {
  while(div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

function getStyleValue(ele, style) {
  let el = getComputedStyle(ele).getPropertyValue(style);
  return el;
}

function getURLVars() {
  let url = window.location.href;
  return url;
}

function createEl(docEl) {
  let newEl = document.createElement(docEl);
  return newEl;
}

function textNode(tn) {
  let newTN = document.createTextNode(tn);
  return newTN;
}
