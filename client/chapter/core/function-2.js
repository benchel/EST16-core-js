/* ---------------------------- */
/* Functions → Declaration      */
/* ---------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);


// 함수 선언
let calculateTotal = function() {
    let total = 0;
    for(let idx in arguments) {
        //console.log(`arguments[${idx}]`, arguments[idx]);
        total += arguments[idx];
    }
    return total;
};

// 함수 호출
//const result = calculateTotal(10000, 23500, 38400, 19900, 18700, 29800, 9900);
//console.log(result);

let _calculateTotal = function() {
    let total = 0;
    for(let val of arguments) {
        // console.log(`arguments value`, val);
        total += val;
    }
    return total;
}

let total = _calculateTotal(10000, 23500, 38400, 19900, 18700, 29800, 9900);
console.log(total);


let __calculateTotal = function() {
    // const arr = Array.prototype.slice.call(arguments); // array instance method
    // const arr = Array.from(arguments); array static method
    const arr = [...arguments] // spread operator
    console.log(arr);

    arr.forEach((val, idx) => {
        console.log(`arr[${idx}]`, val);
    });

    arr.reduce(function(acc, current) {

    })
}

__calculateTotal(10000, 23500, 38400, 19900, 18700, 29800, 9900);

// arguments.__proto__ = Array.prototype;






// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression;


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression;


// 콜백 함수 (표현)식
let callbackFunctionExpression;

let cb = function(condition, success, fail) {
    if(condition) success()
    else fail()
}

cb(
    true,
    function() {
        console.log('성공입니다.');
    },
    function() {
        console.log('실패입니다.');
    }
)


// 함수 선언문 vs. 함수 (표현)식

function movePage(url, success, fail) {
    if(url.includes('https')) {
        success(url)
    } else {
        fail()
    }
}

movePage(
    'https://www.naver.com', 
    function(url) {
        console.log(`해당 ${url}로 이동합니다.`);
    }, function() {
        console.log('잘못된 url 입니다.');
    }
)

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

const master = (function(){

    let uuid = 'wsfsaewe@#@!#dfsdggzz';

    return {
        getKey() {
            return uuid;
        }
        , setKey(value) {
            uuid = value;
        }
    }
}())

console.log(master);

function ask(question, yes, no) {
    if(confirm(question)) yes()
    else no();
}

ask(
    "동의하십니까?"
    , () => alert("동의하셨습니다.")
    , () => alert("취소 버튼을 누르셨습니다.")
);