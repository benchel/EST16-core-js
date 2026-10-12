/* -------------------- */
/* Do While Loop        */
/* -------------------- */

let i  = 0;

do{
    console.log(i);

    if(i === 3){
        break;
    }
    i++;
} while(i < 5);


// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정



/** 
 * nodType 
• 1: ELEMENT_NODE (요소 노드, 예: <div>, <p>)
• 2: ATTRIBUTE_NODE (속성 노드)
• 3: TEXT_NODE (텍스트 노드, 요소 내부의 텍스트)
• 8: COMMENT_NODE (주석 노드, 예: <!-- 주석 -->)
• 9: DOCUMENT_NODE (문서 전체를 나타내는 document)
 * */ 


const first = document.querySelector('.first');

/*
let second = first;

do {
    second = second.nextSibling;
} while(second.nodeType !== 1)
 */

// next() : 대상의 다음요소를 찾는 함수
function next(el) {
    do {
        el = el.nextSibling;
        //console.log('nodeType', el.nodeType);
    } while(el.nodeType !== 1)

    return el;
}

next(first);

// next() 리팩토링
function nextSelector(txt) {

    let el = document.querySelector(txt);
    do {
        el = el.nextSibling;
    } while(el.nodeType !== 1)

    return el;
}

nextSelector('.second');

// text, element 둘 다 사용가능한 함수
function getNext(node) {

    if(typeof node === 'string') {
        node = document.querySelector(node);
    }
    do {
        node = node.nextSibling;
    } while(node.nodeType !== 1)

    return node;
}

getNext(first);
getNext('.second');


function prev(node) {
    if(typeof node == 'string') {
        node = document.querySelector(node);
    }
    do {
        node = node.previousSibling;
    } while(node.nodeType !== 1)

    return node;    
}

prev('.second');