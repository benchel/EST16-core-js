/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log(AandB);

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB);

// 논리곱 할당 연산자

//a &&= b;
//a = a && b;

// 논리합 할당 연산자
a ||= b;
a = a || b;

// 부정 연산자
let reverseValue = !value;
console.log(reverseValue);

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};
console.log(whichFalsy);

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy =  false || '' || [2,3].length || {thisIsFalsy:true};
console.log(whichTruthy);



/*
let id = prompt('아이디를 입력해주세요.');
let pw;

if(id === '') {
    alert('취소되었습니다.');
}  else {
    if(id === 'Admin') {
        pw = prompt('비밀번호를 입력해주세요.');

        if(pw === 'TheMaster') {
            alert('환영합니다!');
        } else {
            alert('인증에 실패하였습니다.');
        }
    } else {
        alert('존재하지 않는 아이디입니다.');
    }
}
*/

/* 
1. 대소문자 구분 없이 받을 수 있게
2. 공백 문자 처리 
3. null 처리
*/

// replace(/\s*/g, '')
// toLowerCase()
// ?. (Optional chaining)  : 앞의 평가 대상이 null이나 undefined이면 평가를 멈추고 undefined를 반환함

let id = prompt('아이디를 입력해주세요.');
id = id?.replaceAll(' ','');
console.log('id : ', id);
id = id?.toLowerCase();
let pw;

if(id === '') {
    alert('취소되었습니다.');
}  else {
    if(id === 'admin') {
        pw = prompt('비밀번호를 입력해주세요.');
        pw = pw.toLowerCase();

        if(pw === 'themaster') {
            alert('환영합니다!');
        } else {
            alert('인증에 실패하였습니다.');
        }
    } else {
        alert('존재하지 않는 아이디입니다.');
    }
}

function logIn() {

    const userID = prompt('아이디를 입력하세요');
    
    if(!userID) return;
}