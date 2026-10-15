/* -------------------- */
/* DOM Styling          */
/* -------------------- */


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용


const first = getNode('.first');

console.log(first.classList);

/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장


/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`


addClass('.first', 'a')


function addClass(node, className) {
    if(isString(node)) node = getNode(node);
    
    if(className.includes?.(',')) {
        className.replace(/\s*/g, '').split(',');
    }

    if(isObject(className)) {
        className = Object.values(className);
    }

    if(Array.isArray(className)) {
        className.forEach((c)=> node.node.classList.add(c))
    } else {
        node.classList.add(className);
    }
}

// addClass('.first','a')
// addClass('.first',['d','e','f'])
// addClass('.first','a-1,b-2,c-3')
addClass('.first',{a:'hello',b:'bye'})


/*
function addClass(node, values) {
    if(isString(node)) node = getNode(node);
    if(isObject(values)) {
        for(let val of values) {
            node.classList.add(val);
        }
    }
    if(isString(values)) node.classList.add(values);
}*/
