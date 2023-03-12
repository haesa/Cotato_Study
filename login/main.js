'strict use';

const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const url = "https://graphql-ts.vercel.app/";
const noUser = 'No Such User Found';
const invalidPw = 'Invalid Password';

loginForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;
  const query = `mutation{ 
    login(email: "${email}", password: "${password}"){
      token
      user{
        id
        name
        email
      }
    }
  }`;
  onLogin(query);
}

function onLogin(query) {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({query}),
  })
    .then(response => response.json())
    .then(data => checkUser(data))
    .catch(error => console.error('실패:', error));
}

function checkUser(data) {
  if(data.data === null) {
    const message = data.errors[0].message;
    if(message === noUser) {
      window.alert('아이디가 잘못되었습니다.');
    } else if(message === invalidPw) {
      window.alert('비밀번호가 잘못되었습니다.');
    }
  } else {
    const token = data.data.login.token;
    console.log(token);
  }
}