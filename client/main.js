import { clearContent, diceAnimation, getNode, getNodes, insertLast } from './lib/index.js';
import { endScroll } from './lib/utils/endScroll.js';

// 주사위 굴리기 버튼 선택
// 클릭 이벤트 바인딩

const [rollingButton, recordButton, resetButton] = getNodes('.buttonGroup > button');

const recordListWrapper = getNode('.recordListWrapper');

const handleRollingDice = (() => {
  let isClicked = false;
  let interval;

  return function() {
    if (!isClicked) {
      interval = setInterval(diceAnimation, 300);
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      clearInterval(interval);
       recordButton.disabled = false;
      resetButton.disabled = false;
    }
    isClicked = !isClicked;
  }
})()

let count = 0;
let total = 0;

function createItem(value) {
  const template = `
    <tr>
      <td>${++count}</td>
      <td>${value}</td>
      <td>${total += value}</td>
    </tr>
    `;

  return template;
}

function renderRecordItem() {
  const dice = +getNode('#cube').getAttribute('dice');
  insertLast('tbody', createItem(dice));
}

function handleRecord() {
  recordListWrapper.hidden = false;
  renderRecordItem();
  endScroll(recordListWrapper);
}

function handleReset() {
  clearContent('tbody');
  count = 0;
  total = 0;
  recordListWrapper.hidden = true;
}

rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);
