/* -------------------------- */
/* DOM Manipulation           */
/* -------------------------- */


/* 노드 생성 메서드 --------------------------------------------------------- */

// - document.createElement(tagName) – 태그 이름을 사용해 새로운 요소 생성
// - document.createTextNode(value) – 새로운 텍스트 노드 생성
// - element.cloneNode(deep) – 요소 복제. deep==true일 경우 모든 자손 요소도 복제


/* 노드 삽입, 삭제 메서드 ---------------------------------------------------- */

// - node.append(노드나 문자열) – node 끝에 노드를 삽입
// - node.prepend(노드나 문자열) – node 맨 앞에 노드를 삽입
// - node.before(노드나 문자열) – node 이전에 노드를 삽입
// - node.after(노드나 문자열) – node 다음에 노드를 삽입
// - node.replaceWith(노드나 문자열) – node를 대체
// - node.remove() – node를 제거

const div = document.createElement('div');
div.textContent = 'hello star ★'
div.className = 'star';
div.dataset.value = '10';

document.body.append(div);

console.log(div);

/* '오래된' 메서드 ----------------------------------------------------------- */

// - parent.appendChild(node)
// - parent.insertBefore(node, nextSibling)
// - parent.removeChild(node)
// - parent.replaceChild(newElement, node)


/* 특정 위치에 삽입 --------------------------------------------------------- */

// - insertAdjacentHTML

const template = /* html */`
    <div class="admin" data-role="">
        <span>admin 권한입니다.</span>
    </div>
`

document.body.insertAdjacentElement('afterend', template);

/**
 * 대상 요소의 바로 앞(형제 위치)에 HTML 문자열을 삽입합니다.
 * 
 * insertAdjacentHTML의 'beforebegin' 위치에 해당합니다.
 * 
 * @param {HTMLElement | string} node - 요소 또는 CSS 선택자
 * @param {string} text - 삽입할 HTML 문자열
 * @return {void}
 */

function insertBefore(node,text){
  if(isString(node)) node = getNode(node);
  node.insertAdjacentHTML('beforebegin',text);
}

/**
 * 대상 요소의 첫 번째 자식으로 HTML 문자열을 삽입합니다.
 * 
 * insertAdjacentHTML의 'afterbegin' 위치에 해당합니다.
 * 
 * @param {HTMLElement | string} node - 요소 또는 CSS 선택자
 * @param {string} text - 삽입할 HTML 문자열
 * @return {void}
 */
function insertFirst(node,text){
  if(isString(node)) node = getNode(node);
  node.insertAdjacentHTML('afterbegin',text);
}

/**
 * 대상 요소의 마지막 자식으로 HTML 문자열을 삽입합니다.
 * 
 * insertAdjacentHTML의 'beforeend' 위치에 해당합니다.
 * 
 * @param {HTMLElement | string} node - 요소 또는 CSS 선택자
 * @param {string} text - 삽입할 HTML 문자열
 * @return {void}
 */

function insertLast(node,text){
  if(isString(node)) node = getNode(node);
  node.insertAdjacentHTML('beforeend',text);
}


/**
 * 대상 요소의 형제의 마지막 요소 HTML 문자열을 삽입합니다.
 * 
 * insertAdjacentHTML의 'afterend' 위치에 해당합니다.
 * 
 * @param {HTMLElement | string} node - 요소 또는 CSS 선택자
 * @param {string} text - 삽입할 HTML 문자열
 * @return {void}
 */
function insertAfter(node,text){
  if(isString(node)) node = getNode(node);
  node.insertAdjacentHTML('afterend',text);
}

// - insertAdjacentElement
// - insertAdjacentText

// - "beforebegin" – elem 바로 앞에 html을 삽입
// - "afterbegin" – elem의 첫 번째 자식 요소 바로 앞에 html을 삽입
// - "beforeend" – elem의 마지막 자식 요소 바로 다음에 html을 삽입
// - "afterend" – elem 바로 다음에 html을 삽입