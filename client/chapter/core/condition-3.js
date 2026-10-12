/* ---------------- */
/* Switch           */
/* ---------------- */

const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

let thisTime = LUNCH;

switch(thisTime) {
    case MORNING : 
        console.log('뉴스 기사 글을 읽는다.');
        break;
    case LUNCH :
        console.log('자주 가는 식당에 가서 식사를 한다.');
        break;
    case DINNER :
        console.log('동네 한바퀴를 조깅한다.');
        break;
    case NIGHT :
        console.log('친구에게 전화를 걸어 수다를 떤다.');
        break;
    case LATE_NIGHT :
    case DAWN :
        console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
        break;
    default :
        console.log('일치하는 조건이 없습니다');
}

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'


/* switch문 → if문 변환 --------------------------------------------------- */

/*
    if(thisTime === MORNING ) {
        console.log('뉴스 기사 글을 읽는다.');
    } else if(thisTime === LUNCH) {
        console.log('자주 가는 식당에 가서 식사를 한다.');
    } else if(thisTime === DINNER) {
        console.log('동네 한바퀴를 조깅한다.');
    } else if(thisTime === NIGHT) {
        console.log('친구에게 전화를 걸어 수다를 떤다.');
    } else if(thisTime === LATE_NIGHT || thisTime === DAWN) {
        console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    } else {
        console.log('일치하는 조건이 없습니다');
    }
*/

/* switch vs. if -------------------------------------------------------- */

// prompt를 통해서 숫자를 입력받는다.
// 받은 숫자를 사용해서 switch case 사용

/**
 *  0 ~ 6
 *  일 ~ 토
 */


/*
let today = prompt('오늘은 무슨 요일인가요?(0 ~ 6으로 입력해주세요.)');
today = today?.replaceAll(' ', '');
today = Number(today);

switch(today) {
    case 0 :
        console.log('오늘은 일요일입니다.');
        break;
    case 1 :
        console.log('오늘은 월요일입니다.');
        break;
    case 2 :
        console.log('오늘은 화요일입니다.');
        break;
    case 3 :
        console.log('오늘은 수요일입니다.');
        break;
    case 4 :
        console.log('오늘은 목요일입니다.');
        break;
    case 5 :
        console.log('오늘은 금요일입니다.');
        break;
    case 6 :
        console.log('오늘은 토요일입니다.');
        break;
    default :
        console.log('일치하는 값이 없습니다. (0 : 일, 1 : 월, 2 : 화, 3 : 수, 4 : 목, 5 : 금, 6 : 토)');
}
*/


function getRandom(n) {
    return Math.floor(Math.random() * n);
}

function whatIsDay() {

    const val = getRandom(7);

    switch(val) {
        case 0 :
            return '일요일';
        case 1 :
            return '월요일';
        case 2 :
            return '화요일';
        case 3 :
            return '수요일';
        case 4 :
            return '목요일';
        case 5 :
            return '금요일';
        case 6 :
            return '토요일';
    }
}



function weekend() {
    const day = whatIsDay();

    if(day === '토요일' || day === '일요일') {
        console.log(`오늘은 ${day}입니다. 그러므로 주말입니다.`);
    } else {
        console.log(`오늘은 ${day}입니다. 그러므로 평일입니다.`);
    }
}

weekend();
