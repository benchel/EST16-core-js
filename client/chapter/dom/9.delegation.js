/* ------------------------ */
/* Event delegation         */
/* ------------------------ */


/* 클래스를 사용한 위임 ---------------- */

const nav = getNode('.navigation');

// nav.addEventListener('click', (e) => {
//     const target = e.target.closest('li');

//     if(!target) return;

//     if(target.classList.contains('home')) {
//         console.log('홈 클릭!');
//     }
//     if(target.classList.contains('about')) {
//         console.log('어바웃 클릭!');
//     }
//     if(target.classList.contains('contact')) {
//         console.log('컨택트 클릭!');
//     }
// });

/* 속성을 사용한 위임 ------------------ */

nav.addEventListener('click', (e)=> {
    const target = e.target.closest('li');

    if(!target) return;
/*
    if(target.hasAttribute('data-name')) {

        let attr = target.getAttribute('data-name');
        if(target.getAttribute('data-name') === 'home') {
            console.log('attr', attr);
        }
        if(target.getAttribute('data-name') === 'about') {
            console.log('attr', attr);
        }
        if(target.getAttribute('data-name') === 'contact') {
            console.log('attr', attr);
        }
    }
*/

    if(target.dataset.name === 'home'){
    console.log( 'home click' );
    }

    if(target.dataset.name === 'about'){
    console.log( 'about click' );
    }

    if(target.dataset.name === 'contact'){
    console.log( 'contact click' );
    }
})

getNode('form').addEventListener('submit', (e)=>{
    e.preventDefault();
})

/* 노드를 사용한 위임 ------------------ */