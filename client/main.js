/* eslint-disable no-undef */
import { delayP, tiger, getNode, renderUserCard, changeColor, renderSpinner, renderEmptyCard, clearContent } from './lib/index.js'

const END_POINT = 'https://6ad6f705f71f154ac4878755.mockapi.io/users';

//const res = await tiger.get(END_POINT)
//console.log(res.data);

const cards = getNode('.user-card-inner');

async function renderUserList() {

  renderSpinner(cards);

  try{

    const response = await tiger.get(END_POINT);
    const data = response.data;

    await delayP(1000);

    gsap.to('.loadingSpinner', {
      opacity:0
      , onComplete() { 
        this._targets[0].remove();
      }
    })

    // data를 가지고 유저의 목록을 article로 화면에 렌더링
    data.forEach((user) => renderUserCard(cards, user));
    changeColor('.user-card')

    gsap.from('.user-card',{
      x:-100,
      opacity:0,
      stagger:{
        each:0.1,
        from:'start'
      }
    })

  }catch {
    renderEmptyCard(cards)
    //
  }

}

renderUserList();


function handleDeleteCard(e){
  const button = e.target.closest('button')

  if(!button) return;

  const article = button.parentElement;
  const index = article.dataset.index.slice(5);
  
  tiger.delete(`${END_POINT}/${index}`)
  .then(()=>{
    alert('삭제가 완료되었습니다.');
    clearContent(cards);
    renderUserList();
  })
}

cards.addEventListener('click', handleDeleteCard);

const createButton = getNode('.create');
const cancelButton = getNode('.cancel');
const doneButton = getNode('.done');
const nameField = getNode('#nameField');

function handleCreate() {
  gsap.to('.pop', {autoAlpha:1})
}

function handleCancel(e) {
  e.stopPropagation();
  gsap.to('.pop',{autoAlpha:0})
}

function handleDone(e) {
  e.preventDefault();

  const username = getNode('#nameField').value;
  const email = getNode('#emailField').value;
  const website = getNode('#siteField').value;

  tiger.post(END_POINT,  {username, email, website})
  .then(() => {
    gsap.to('.pop', {autoAlpha:0})
    clearContent(cards);
    renderUserList();
    getNode('#nameField').value = '';
    getNode('#emailField').value = '';
    getNode('#siteField').value = '';
  })
}

createButton.addEventListener('click', handleCreate)
cancelButton.addEventListener('click', handleCancel)
doneButton.addEventListener('click', handleDone);