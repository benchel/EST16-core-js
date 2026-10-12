/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2026;

console.log(String(YEAR));
console.log(YEAR + '');

// undefined, null
const days = null;
let val;

console.log(String(val));
console.log(val + '');

console.log(String(days));
console.log(days + '');

// boolean
const isClicked = false;

console.log(String(isClicked));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

let friend;

console.log(Number(friend));


// null
const money = null;

console.log(money * 1);
console.log(money / 1);
console.log(+money);


// boolean
let isActive = false;

console.log(isActive/1);

// string
let num = 100;

console.log(num + 1);

// numeric string
const width = '120.5px';

console.log('int : ', parseInt(width));
console.log('float : ', parseFloat(width));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''

console.clear();

console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));


// 위에 나열한 것 이외의 것들 
console.log(Boolean('0'));
console.log(Boolean(' '));
console.log(Boolean(-1));

console.log( !!(-1) );
console.log( !!({}) );
console.log( !!([false]) );
console.log( !!(() =>false) );