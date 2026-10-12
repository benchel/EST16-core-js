/* ---------------------------- */
/* Functions → Declaration      */
/* ---------------------------- */

console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

function getRandomValue() {
    return Math.floor(Math.random() * Math.random());
}

// 함수 선언

function calcPrice(
    priceA, 
    priceB = getRandomValue(), 
    priceC = getRandomValue()
) {

    if(!priceA) {
        throw new Error('calcPrice() 의 첫 번째 인자는 필수 입력 항목입니다.');
    }

    return priceA + priceB + priceC;
}

const total = calcPrice(100);

console.log(total);

// 함수 호출

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

/**
 * rem(pxValue: number|string, base: number):string;
 * @param {number|string} pxValue 
 * @param {number} base 
 */
function rem(pxValue, base = 16) {
    if(typeof pxValue === 'string') {
        pxValue = parseInt(pxValue, 10);
    }
    return pxValue / base + 'rem';
}

console.assert(rem('30px') === '1.875rem');


/**
 * css(node: string, style: string, value: number|strung) : string;
 * @param {string} node 
 * @param {string} style 
 * @returns 
 */
function getCss(node, style) {
    if(typeof node == 'string') {
        node = document.querySelector(node);
    }
    if( !(style in document.body.style)) {
        throw new Error('getCss 함수의 두 번째 인수는 유효한 css 속성이어야 합니다.');
    } 
    return getComputedStyle(node)[style];
}

getCss('.first', 'font-size');

function setCss(node, prop, val) {
    if(typeof node == 'string') {
        node = document.querySelector(node);
    }    
    if( !(prop in document.body.style)) {
        throw new Error('setCss 함수의 두 번째 인수는 유효한 css 속성이어야 합니다.');
    }
    if(!val) throw new Error('setCss 함수의 세 번째 인수는 필수 입력 값 입니다.');

    node.style[prop] = val;
}

setCss('.second', 'color', 'orange');

/*
function css(node, prop, val) {
    if(typeof node == 'string') {
        node = document.querySelector(node);
    }    
    if( !(prop in document.body.style)) {
        throw new Error('css 함수의 두 번째 인수는 유효한 css 속성이어야 합니다.');
    }    
    if(typeof val === 'undefined') 
        return getComputedStyle(node)[prop];
    node.style[prop] = val;
}
*/

function css(node, prop, val) {
    return !val ? getCss(node, prop) : setCss(node, prop, val);
}
// node의 값을 'h1'으로 받았을 경우 

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 style 속성이 아닐 경우 

// value의 값이 number가 아닌 경우 



// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.