/* ---------------- */
/* Condition        */
/* ---------------- */

/*
let answer = prompt('자바스크립트의 공식 이름은 무엇일까요?');

if(answer === 'ECMAScript') {
    alert('정답입니다.')
} else {
    alert('모르셨나요? 정답은 ECMAScript 입니다!');
}
*/

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?

/*
let didWatchMovie = confirm('그 영화 봤니?');

if(didWatchMovie) {
    console.log(didWatchMovie);
} else {
    // 영화 볼거니?
    let goingToWatchMovie = confirm('그 영화 볼 거니?');
    if(goingToWatchMovie) {
        console.log(goingToWatchMovie);
    } else {
        console.log(goingToWatchMovie);
    }
}
*/

let result = confirm('고양이 좋아해?');

(result? alert('나도 고양이 좋아해'): alert('아쉽네 강아지 파구나 ㅂㅂ'))


// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식