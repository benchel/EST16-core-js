import {
  attr
  , getNode
  , insertLast
  , clearContent
  , getRandom
  , addClass
  , showAlert
  , shake
} from './lib/index.js'

import jujeobData from './data/data.js'

const jujeobButton = getNode('input[type="submit"');
const nameField = getNode('#nameField');
const result = getNode('.result');

function jujeobHandler(e) {
  e.preventDefault();
  
  let name = nameField.value;
  let list = jujeobData(name);
  let jujeobStr = list[getRandom(list.length)];

  if(!name || name.replaceAll(' ', '') === '') {
    showAlert('.alert-error', '공백은 허용되지 않습니다.');
    shake(nameField);
    return;
  }

  if(!isNaN(Number(name))) {
    showAlert('.alert-error', '정확한 이름을 입력해주세요.');
    return;
  }
  
  clearContent(result);
  insertLast(result, jujeobStr);
}

/*
function jujeobHandler(e) {
  e.preventDefault();

  const nickName = getNode('#nameField').value;
  let num = Math.floor(Math.random() * (50 - 0 + 1)) + 0;
  let jujeobStr = jujeobData(nickName)[num];

  const result = getNode('.result');
  clearContent(result);
  insertLast(result, jujeobStr);
}*/

jujeobButton.addEventListener('click', jujeobHandler);

function copyHandler() {
  const text = this.textContent;
  navigator.clipboard.writeText(text);
  showAlert('.alert-success', '클립보드 복사 완료!');
}
result.addEventListener('click', copyHandler);

