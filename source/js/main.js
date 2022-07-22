const navMain = document.querySelector('.menu-mobile__list');
const navToggle = document.querySelector('.menu-mobile__toggle');

/*navToggle.addEventListener('click', function () {
   if (navMain.classList.contains('menu-mobile__list--closed')) {
      navMain.classList.remove('menu-mobile__list--closed');
      navMain.classList.add('menu-mobile__list--opened');
   } else {
      navMain.classList.add('menu-mobile__list--closed');
      navMain.classList.remove('menu-mobile__list--opened');
   }
});*/

function navOpened() {
   navMain.classList.remove('menu-mobile__list--closed');
   navMain.classList.add('menu-mobile__list--opened');
}

function navClosed() {
   navMain.classList.remove('menu-mobile__list--opened');
   navMain.classList.add('menu-mobile__list--closed')
}

navToggle.addEventListener('click', function () {
   if (navMain.classList.contains('menu-mobile__list--closed')) {
      navOpened()
   } else {
      navClosed()
   }
})

navMain.addEventListener('click', (e) => {
   if (e.target === navMain) {
      navClosed();
   }
});