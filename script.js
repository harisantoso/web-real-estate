// login / register
const loginMenu = document.querySelector('header .active');
const loginShow = document.querySelector('.login-container');
const btnClose = document.querySelector('#btn-close');

const btnToggle = document.querySelectorAll('.next-log');
const resForm = document.querySelector('#res');

loginMenu.addEventListener('click', () => {
  loginShow.style.clipPath = 'circle(100% at 50% 50%)';
})

btnClose.addEventListener('click', () => {
  loginShow.style.clipPath = 'circle(0 at 50% 50%)';
})


btnToggle.forEach(item => {
  item.addEventListener('click', () => {
    resForm.classList.toggle('hidden');
  })
})