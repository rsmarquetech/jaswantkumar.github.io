/*============== Setting Menu Show ==============*/
const setting = document.querySelector('#setting'),
  settinBtn = document.querySelector('#settinBtn');

settinBtn.addEventListener('click', () => {
  setting.classList.toggle('settingActive');
  // settinBtn.classList.toggle("active");
});

// ====== ======>> Dark/Light Theme Version <<====== ======
const body = document.querySelector('body'),
  changeTheme = document.querySelector('#changeTheme');

changeTheme.addEventListener('click', () => {
  body.classList.toggle('activeDarkTheme');
  setting.classList.remove('settingActive');
});

/*============== TOGGLE MENU SHOW ==============*/
const header = document.querySelector('#header'),
  toggleBtn = document.querySelector('.toggleBtn');

toggleBtn.addEventListener('click', () => {
  header.classList.toggle('activeNav');
  toggleBtn.classList.toggle('active');
});

// ====== ======>> REMOVE NAVMENU ON LINK ACTION <<====== ======
const navLink = document.querySelectorAll('.navLink');

navLink.forEach((n) =>
  n.addEventListener('click', () => {
    const header = document.querySelector('#header');
    header.classList.remove('activeNav');
    toggleBtn.classList.remove('active');
  })
);

// ====== ======>> CHANGE HEADER/NAVBAR BACKGROUND <<====== ======
// function scrollHeader() {
//     const header = document.getElementById('header')
//     // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
//     if (this.scrollY >= 100) header.classList.add('scrollHeader');
//     else header.classList.remove('scrollHeader')
// }
// window.addEventListener('scroll', scrollHeader)

// ====== ======>> Filter Project <<====== ======
let tab = document.querySelectorAll('.tab');
let card = document.querySelectorAll('.portfolio_box');

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener('click', function () {
    for (let j = 0; j < tab.length; j++) {
      tab[j].classList.remove('activeTab');
    }
    this.classList.add('activeTab');

    let dataFilter = this.getAttribute('data-filter');
    for (k = 0; k < card.length; k++) {
      card[k].classList.remove('active');
      card[k].classList.add('hide');

      if (
        card[k].getAttribute('data-item') == dataFilter ||
        dataFilter == 'all'
      ) {
        card[k].classList.remove('hide');
        card[k].classList.add('active');
      }
    }
  });
}

// ====== ======>> Swiper Js <<====== ======
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// ====== ======>> SHOW SCROLL UP BUTTON <<====== ======
function pageScrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 100) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', pageScrollUp);
