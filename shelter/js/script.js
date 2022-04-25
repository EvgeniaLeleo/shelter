/**
 * Генерация карточек
 */
document.addEventListener('DOMContentLoaded', () => {
  requestFunction();
});

const app = { currentCardsData: [], pageNumber: 0 };

/**
 * Бургер-меню
 */
const btnNavElement = document.querySelector('.btn-mobile-nav');
const menu = document.querySelector('.menu');
const headerElement = document.querySelector('.header');
const logoLinkMobile = document.querySelector('.logo-link_mobile');
const navLinks = document.querySelectorAll('.menu-link');
const shadow = document.querySelector('.shadow');

/**
 * Включение и отключение скролла
 */

function scrollToggle() {
  const currentWidth = document.documentElement.clientWidth; // ширина за вычетом прокрутки
  const windowWidth = window.innerWidth; // вся полная ширина окна
  const paddingScroll = windowWidth - currentWidth;

  if (document.body.style.overflow === 'hidden') {
    document.body.style.overflow = 'auto';
    document.body.style.position = 'static';

    document.body.style.paddingRight = '0';
    document.body.style.background = '#ffffff';
  } else {
    document.body.style.paddingRight = paddingScroll + 'px';
    document.body.style.overflow = 'hidden';
    menu.style.overflowY = 'auto';
    document.body.style.background = '#e6e6e6'; //'#cdcdcd';
  }
}

/**
 * Появление и исчезновение бургер-меню и тени при клике по бургеру
 */

btnNavElement.addEventListener('click', () => {
  btnNavElement.classList.toggle('btn-mobile-nav-rotate');
  shadow.classList.toggle('shadow_visible');
  menu.classList.toggle('menu_visible');

  scrollToggle();
});

/**
 * Появление и исчезновение бургер-меню и тени при клике по логотипу в меню
 */

logoLinkMobile.addEventListener('click', () => {
  btnNavElement.classList.toggle('btn-mobile-nav-rotate');
  shadow.classList.toggle('shadow_visible');
  menu.classList.toggle('menu_visible');

  scrollToggle();
});

/**
 * Появление и исчезновение бургер-меню и тени при клике по ссылкам в меню
 */

navLinks.forEach((navLink) =>
  navLink.addEventListener('click', () => {
    if (menu.classList.contains('menu_visible')) {
      btnNavElement.classList.toggle('btn-mobile-nav-rotate');
      shadow.classList.toggle('shadow_visible');
      menu.classList.toggle('menu_visible');

      scrollToggle();
    }
  })
);

/**
 * Появление и исчезновение бургер-меню и тени при клике по тени
 */

shadow.addEventListener('click', () => {
  shadow.classList.remove('shadow_visible');
  btnNavElement.classList.remove('btn-mobile-nav-rotate');
  menu.classList.remove('menu_visible');
});

/**
 * Появление попапа при нажатии на карточку питомца
 */

const petsCards = document.querySelectorAll('.pets__card');
const popup = document.createElement('div');

/**
 * Перемотка страницы в начальное положение
 */
const activeLink = document.querySelector('.menu__link_active');
activeLink.addEventListener('click', () => {
  window.scrollTo(0, 0);
});
