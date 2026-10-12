/* --------- */
/* Object    */
/* --------- */


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */` 
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

const position = {
    x:3.3333, 
    y : 313.3123
};

const dialog = {
    position : 'fixed'
    , ['z-index'] : 10000
    , top : '50%'
    , left : '50%'
    , width : '60vw'
    , 'max-width' : '800px'
    , height: '40vh'
    , ['min-height']: '280px'
    ,  transform: `translate(-${position.x}%, -${position.y}%)`
};


// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap;


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = {
    uuid : crypto.randomUUID()
    , name : 'tiger'
    , email : 'seonbeom@gmail.com'
    , isSignIn : true
    , permission : 'paid'// paid / free
}


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.


const keys = Object.keys(authUser);

function getKeys(obj, excludes) {
    let arr = [];

    for(const key in obj) {
        if(Object.hasOwn(obj.key) && excludes.includes(key)) {
            arr.push(key)
        }
    }
    return arr;
}

function getValues(obj) {
    let arr = [];

    for(const key in obj) {
        if(Object.hasOwn(obj,key)) {
            arr.push(obj[key]);
        }
    }

    return arr;
}

function getEntries(obj) {
    let arr = [];

    for(const key in obj) {
        if(Object.hasOwn(obj, key)) {
            arr.push([key, obj[key]]);
        }
    }
    return arr;
}



// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel


// 프로퍼티 포함 여부 확인


// 프로퍼티 나열


// 프로퍼티 제거 or 삭제 

// 제거(remove) vs 삭제(delete)
//  ㄴ 비워두기     ㄴ 메모리상에서 제거


// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

// 기존 데이터를 가지고 새로운 객체를 만들자
const student = {
    name
    ,email
    ,authorization
    ,isLogin
};


// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}


function removeProperty(obj, key) {
    if(isObject(obj) === 'object') {
        obj[key] = null;
    } else {
        throw new Error('removeProperty 함수의 첫 번째 인수는 객체 타입만 사용할 수 있습니다.')
    }
}


/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */


const arr = [10, 100, 1000, 10_000, 100_000]

// const a1 = arr[0];
// const a2 = arr[1];
// const a3 = arr[3];

// 순서(order)를 바꿀 수 없음, 변수명은 내 마음대로 가능
const [a1, a2, a3, a4, a5, a6 = 999] = arr;

// let a6;

console.log(a6);


/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

const salaries = {
    이소망: 330,
    박소연: 550,
    이유정: 130,
    김효경: 60,
    안경찬: 400,
    조민지: 400
}

/*
 네이밍 마음대로 불가능
 객체의 키와 변수의 이름이 동일해야함
 단, 순서는 상관 없음
 별칭 alias 등록 가능
*/
const {이소망, 박소연:카페점장, 이유정:치이카와좋아, 김효경:패셔니스타, 신재훈:닭강정러버 = 30, ...나머지} = salaries;

console.log(이소망);

console.log(카페점장);

const {log:g} = console

g(authUser);

function createUserObject(obj) {

    const {name, age, address, phone, job, gender} = obj;
    
    return {
        name, age,  address, phone, job, gender
    }
}

createUserObject({
    name : '이름'
    , age : 30
    , address : '남양주시'
    , phone : '010-0000-1111'
    , job : '강사'
    , gender: 'male'
})

const obj = Object.assign({}, salaries, student)

/* ------------------------- */
/* Copy object by reference  */
/* ------------------------- */


// 복사(copy) vs. 참조(reference)

let message = '문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.';
let messenger = {
  name: 'kakao talk',
  manufacture: 'kakao'
};

let text;
let conversationTool;


// 비교 (복사 vs. 참조)
console.log(message == text);
console.log(message === text);
console.log(messenger == conversationTool);
console.log(messenger === conversationTool);


// 객체 복사
// 1. for ~ in 문을 사용한 복사
// 2. Object.assign()을 사용한 복사
// 3. 전개 연산자(...)를 사용한 복사
// 4. 객체를 복사해주는 유틸 함수 


// 객체 병합(합성)
const cssMapA = {
  color: '#4b004b',
  margin: '0 auto',
};

const cssMapB = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  padding: '0.4em 0.62em',
  color: '#3f9e97',
};

let combinedCssMap;


// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  'min-height': '100vh',
  'max-width': {
    sm: '90%',
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140
  },
};

let copiedContainerStyles;


// 1. 깊은 복사 유틸리티 함수
function cloneDeep(object) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      if (value && type === 'object') {
        value = cloneDeep(value);
      }
      return [key, value];
    })
  );
}


// 2. Lodash 라이브러리 활용
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
