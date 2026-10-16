/* eslint-disable no-useless-assignment */
/* eslint-disable no-undef */


const content = document.querySelector('.contents');
const textField = document.querySelector('#comment37');


function getComment(img, alt, name, message) {
    return `<div class="id">
            <div class="profile_img border_over">
              <img src="./assets/part04/${img}" alt="${alt}">
            </div>
            <div class="comment_field">
              <div class="text_container">
                <div class="name"><a href="#">${name}</a></div>
                <div class="text_field">${message}</div>
              </div>
            </div>
          </div>`; 
}

function handleClick(e) {
    e.preventDefault();

    let target = e.target;

    while(!target.getAttribute('data-name')) {
        target = target.parentElement;

        if(target.tagName === 'BODY') {
            target = null;
            return;
        }
    }

    if(target.dataset.name === 'like') {
        toggleClass(target,'active');
    }
    if(target.dataset.name === 'comment') {
        textField.focus();
    }
    
    if(target.dataset.name === 'more') {
        toggleClass(target,'active');
    }
    if(target.dataset.name === 'delete') {
        if(confirm('삭제하시겠습니까?')) {
            this.remove();
        }
    }
    if(target.dataset.name === 'send') {

        if(textField.value === '') return;

        const container = getNode('.comment_container');
        const message = textField.value;
        insertLast(container, getComment('tigerr.png', '프로필사진', '타이거', message));
        textField.value = '';

        container.scrollTop = container.scrollHeight;
    }

}

content.addEventListener('click', handleClick);
