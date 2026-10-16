import {
  attr
  , getNode
  , insertLast
  , clearContent
} from './lib/index.js'

/* named export =>  import { 함수이름/변수이름 } from '경로설정'  
 내보낼 때의 이름과 가져올 때의 이름이 동일해야함(단, 별칭 부여 가능) 1:n
 import { getNode, getNodes as $ } from "./lib/dom/getNode.js"
import { insertLast } from "./lib/dom/insert.js" 
*/

/* default export =>  함수이름/변수이름 from 경로. 
한 파일에 하나만 내보냄 1:1
디폴트 익스포트로 여러 개의 함수를 내보내야할 때는
객체에 여러 개의 함수를 담아서 내보내서 사용함 
import clearContent from "./lib/dom/clearContent.js";
*/

// 1. input 선택하기
// 2. input 이벤트 바인딩
//    -addEventListener('input')
// 3. input value값 가져오기
// 4. 숫자 더하기
// 5. result에 출력하기

function phase1(){

    const first = getNode('#firstNumber');
    const second = getNode('#secondNumber');
    const result = getNode('.result');
    const clear = getNode('#clear');


    function handleInput(){

      const firstValue = Number(first.value);
      const secondValue = +second.value;
      const total = firstValue + secondValue;

      clearContent(result);
      insertLast(result,total);
    }


    function handleClear(e){
      e.preventDefault();
      clearContent(first);
      clearContent(second);
      clearContent(result);
      first.focus();
    }



    first.addEventListener('input',handleInput)
    second.addEventListener('input',handleInput)
    clear.addEventListener('click',handleClear)



}



function phase2(){
  // const first = getNode('#firstNumber');
  // const second = getNode('#secondNumber');
  const calculator = getNode('.calculator');
  const result = getNode('.result');
  const clear = getNode('#clear');
  const numberInputs = [...document.querySelectorAll('input:not(#clear)')];


  function handleInput(){
    const total = numberInputs.reduce((acc,cur)=> acc + Number(cur.value),0);
    
    result.textContent = ''
    insertLast(result,total);

  }

  function handleClear(e){
    e.preventDefault();
    console.log( numberInputs );
    
    numberInputs.forEach((elem)=> elem.textContent = '')
    result.textContent = '-'
  }


  calculator.addEventListener('input',handleInput)
  clear.addEventListener('click',handleClear)

}




phase2()