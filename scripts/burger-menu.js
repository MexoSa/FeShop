const burgerBtn = document.querySelector('.navigation__icon')
const navList = document.querySelector('.navigation')

burgerBtn.addEventListener('click', () => {
   navList.classList.toggle('active')
   document.body.classList.toggle('lock')
})
