/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */


const section = getNode('section')
const article = getNode('article')
const p = getNode('p')

/* 버블링 ----------------------------------------------------------------- */




section.addEventListener('click',(e)=>{
    // arrow 함수 안에서는 this 대신 e.currentTarget 사용
    console.log(e.target, e.currentTarget);
    console.log('%c section clicked', 'color:dodgerblue');
})

/*
article.addEventListener('click',()=>{
  console.log('%c article clicked', 'color:orange');
})

p.addEventListener('click',()=>{
  console.log('%c p clicked', 'color:hotpink');
})
*/

section.addEventListener('mouseenter', (e)=>{
    e.currentTarget.style.background = 'black'
});

section.addEventListener('mouseleave', (e)=>{
    e.currentTarget.style.background = 'red'
});


/* 캡처링 ----------------------------------------------------------------- */