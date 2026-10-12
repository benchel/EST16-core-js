/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

/*
let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);
*/

/** 함수 선언 → 화살표 함수 (표현)식
 *  arrow function에서는 arguments를 사용할 수 없음
 *  rest parameter 사용 
 * @param  {...any} rest 
 */
let calcAllMoney = (a, ...rest) => {
    console.log('rest', rest);
    console.log('rest[3]', rest[3]);
    console.log('a', a);
}

calcAllMoney(1000, 2000, 3000, 4000, 5000, 6000, 7000);

let _calcAllMoney = (...rest) => {
    // let total = 0;
    // for(const val of rest) total += val;
    // rest.forEach((el) => total += el);

    let total = rest.reduce((acc,val) => acc + val, 0);
    console.log('total : ', total);
}

let subtraction = (num1, num2) => num1 - num2;

subtraction(3-2);

_calcAllMoney(1000, 2000, 3000, 4000, 5000, 6000, 7000);

let __calcAllMoney = (...rest) => rest.reduce((acc,val) => acc + val, 0);

__calcAllMoney(1000, 2000, 3000, 4000, 5000, 6000, 7000);

// 화살표 함수와 this

// 일반 함수 : 나를 호출한 대상을 기준으로 this를 바인딩한다.
// prototype.constructor를 내장하고 있음

function a() {
    console.log(this);
}

a();

// 화살표 함수 : this 자체를 바인딩하지 않음. 상위 컨텍스트에서 가져옴.
// prototype.constructor를 내장하고 있지 않음(성능 최적화)

const _a = () => console.log(this)

_a();

console.clear();

// concise method
// 나를 호출한 대상을 기준으로 this를 바인딩한다.
// prototype.constructor를 내장하고 있지 않음(성능 최적화)
// 일반 함수처럼 동작하고 성능 최적화도 지원함 그래서 많이 사용됨

const obj = {
    name : 'tiger'
    , age : '30'
    , sayHi : function() { console.log(this) } // 일반 함수 메서드
    , _sayHi : () => console.log(this)  // 화살표 함수 메서드
    , __sayHi() { // concise method
        console.log(this);
    }
}

console.log('obj.sayHi() : ');
obj.sayHi();

console.log('obj._sayHi() : ');
obj._sayHi();

console.log('obj.__sayHi() : ');
obj.__sayHi();


// 객체의 메서드를 정의할 떄는 concise method를 사용
// 그 메서드 안에서 함수를 써야한다면 화살표 함수를 사용
// 왜? this 때문에

const example = {
    name : 'tiger'
    , age : '30'
    , sayHi : function() { 
        function sayBye() {
            console.log(this);
        }

        sayBye();
    } 
    , _sayHi : () => console.log(this)  // 화살표 함수 메서드
    , __sayHi() { 
        const sayBye = () => {
            console.log(this);
        }
        sayBye();
    }
}

console.log('example.sayHi() : ');
example.sayHi();

console.log('example.__sayHi() : ');
example.__sayHi();

console.clear();

const user = {
    name : '이소망'
    , total : 0
    , grades: [30, 50, 90]
    , totalGrades() {
        this.grades.forEach((grade) => {
            console.log(this.total += grade);
        })
    }
}

user.totalGrades();


/**
 * 1. normal function (일반 함수) => 리턴 값을 명시하면 해당 값을 리턴함
 * 2. constructor function(생성자 함수) => 무조건 객체를 리턴함
 */
function sum(a,b) {
    return a+b;
}

sum()

const result = new sum(1,2);


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
    
    let total = 1;

    for(let i = 0; i < powerCount; i++) {
        total = total * numeric;
    }

    return total
}; 

let _pow = (numeric, powerCount) => 
    Array(powerCount).fill(null).reduce(acc => acc * numeric); 

let __pow = (numeric, powerCount) => {
    Array(powerCount).fill(null).reduce((acc) => {
        return acc * numeric
    },1) 
}



// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {

    let str = '';
    for(let i = 0; i < repeatCount; i++) {
        str += text;
    }
    return str;
}

let _repeat = (text, repeatCount) => {
    return Array(repeatCount).fill(null).reduce(acc => acc + text, ''); 
}
