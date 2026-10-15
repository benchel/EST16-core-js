/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */

const h2 = document.querySelector('h2');

// - parentElement
console.log(h2.parentElement);

// - children
console.log(h2.children);

// - firstElementChild
console.log(h2.firstElementChild);

// - lastElementChild
console.log(h2.lastElementChild);

// - previousElementSibling
console.log(h2.previousElementSibling);

// - nextElementSibling
console.log(h2.nextElementSibling);


/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

/* 문서 대상 확인 */
// - matches
// - contains


// 1. nav 태그 요소
const navTag = document.querySelector('.navigation');

// 2. nav 태그 안에 있는 about li 태그 요소
// navTag.document.querySelector('.navigation .about');
const about = document.getElementsByClassName('about');

// 3. data-name이 contact인 li 태그 요소
const contact = document.querySelector('li[data-name="contact"]');

// 4. nav 요소 안에 있는 모든 자식 요소
const navChildren = navTag.children;

// 4.1 nav 요소 안에 있는 li 자식 요소
navChildren[1].children


// 5. nav와 가장 가까운 body 요소
const navClosest = navTag.closest('body');

console.clear();


function getNodeExam(node, context = document) {
    if(context.nodeType !== 9) context = getNode(context);
    return context.querySelector(node);
}

getNodeExam('.about');

/* getNode('.nav') retrun nav element
function getNode(child, parent) {
    const selector = parent + ' ' + child;
    if(typeof selector === 'string')
        return document.querySelector(selector);
}

getNode('.about', '.navigation');
*/

getNode('.about')
