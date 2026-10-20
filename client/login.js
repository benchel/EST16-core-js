import { getNode, saveAuthUser, tiger } from "./lib/index.js"

const END_POINT = 'https://6ad6f705f71f154ac4878755.mockapi.io/users';

function showMessage (message){
  authMessage.textContent = message;
  gsap.fromTo(authMessage,{opacity:0,y:-6},{opacity:1,y:0});
}


const loginForm = getNode('.login-form');
const signupForm = getNode('.signup-form');
const authMessage = getNode('.auth-message');

async function handleLogin(e){
  e.preventDefault();

  const email = getNode('#loginEmail').value.trim();
  const password = getNode('#loginPassword').value.trim();

 // validation
  if(!email || !password){
    showMessage('이메일과 비밀번호를 입력해주세요.');
    return;
  }

  // 비밀번호에 &, = 와 같은 특수문자가 들어갈 수도 있어서 별도의 처리(URLSearchParams)를 함
  const query = new URLSearchParams({email, password});
  const response = await tiger.get(`${END_POINT}?${query}`);

  if(!response.ok) {
    showMessage('이메일 또는 비밀번호가 올바르지 않습니다.');
    return;
  }

  const [user] = response.data;
  saveAuthUser(user);

  if(confirm('로그인 성공! \n메인 페이지로 이동하시겠습니까?')) {
    location.href = './index.html';
  }
}

async function handleSignup(e) {
    e.preventDefault();

    const username = getNode('#signupName').value.trim();
    const email = getNode('#signupEmail').value.trim();
    const website = getNode('#signupSite').value.trim();
    const password = getNode('#signupPassword').value.trim();

    if(!username || !email || !website || !password) {
        showMessage('모든 항목을 입력해주세요.');
        return;
    }

    // 중복 처리 / 같은 이메일이 있는지 조회 / 있으면 200 => 중복
    const check = await tiger.get(`${END_POINT}?${new URLSearchParams({email})}`);

    if(check.ok) {
        showMessage('이미 가입된 이메일입니다.');
        return;
    }

    const response = await tiger.post(END_POINT, {username, email, website, password})

    if(!response.ok) {
        showMessage('회원가입에 실패했습니다.');
        return;
    }

    saveAuthUser(response.data);

    if(confirm('회원가입이 완료되었습니다. \n자동 로그인 후 메인 페이지로 넘어가시겠습니까?')) {
        location.href = './index.html';
    }
}

loginForm.addEventListener('submit', handleLogin)
signupForm.addEventListener('submit', handleSignup)

//localStorage.setItem('')
//localStorage.getItem('')
