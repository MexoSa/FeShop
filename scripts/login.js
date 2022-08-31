const userContainer = document.querySelector('.user__container');
const entranceBtn = document.querySelector('.user__loginBtn');
const loginInput = document.querySelector('.user__login');
const passwordInput = document.querySelector('.user__password');
const enterContainer = document.querySelector('.header__user');
let currentUser = {};

const usersList = [
  {
    login: 'Alex',
    password: '1234',
    name: 'Александр',
    surname: 'Герасимов',
    avatar: "./img/user-avatar.jpg"
  }
]

function stopRefresh(e) {
  e.preventDefault()
}

const loginForm = document.querySelector('.user__container')
loginForm.addEventListener('submit', stopRefresh)

function toggleClassUserContainer() {
  userContainer.classList.toggle('active');
}

function checkedUser() {
  currentUser = usersList.filter(({ login }) => login === loginInput.value).filter(({ password }) => password === passwordInput.value)
  if (currentUser.length >= 1) {
    [currentUser] = currentUser
    toggleClassUserContainer()
    updateStatusLogin()
    setTimeout(() => {
      changeUserContainer(currentUser)
    }, 400);
  } else {
    showWrongDataMessage();
  }
  loginInput.value = ''
  passwordInput.value = ''
}

function showWrongDataMessage() {
  userContainer.classList.add('error')
  setTimeout(() => {
    userContainer.classList.remove('error')
  }, 3000)
}

function changeUserContainer({ name, surname, avatar }) {
  enterContainer.innerHTML = `
      <img class='user__avatar' src='${avatar}' alt=''>
      <div> ${name} ${surname}</div>`
}

function updateStatusLogin() {
  localStorage.setItem('user', JSON.stringify(currentUser))
}

function isUserLogin() {
  currentUser = JSON.parse(localStorage.getItem('user')) ?? {};
  if (Object.keys(currentUser).length > 0) {
    changeUserContainer(currentUser);
  } else {
    const loginBtn = document.createElement('button');
    loginBtn.classList.add('user__btn');
    loginBtn.innerHTML = 'Войти'
    enterContainer.prepend(loginBtn);
    loginBtn.addEventListener('click', function showUserLoginBox() {
      toggleClassUserContainer()
      loginInput.focus()
      loginBtn.removeEventListener('click', showUserLoginBox);
      setTimeout(() => {
        loginBtn.addEventListener('click', showUserLoginBox);
      }, 400)
    })
  }
}

entranceBtn.addEventListener('click', () => {
  checkedUser();
})

isUserLogin();
