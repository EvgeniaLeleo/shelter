/**
 * Generating cards
 */
document.addEventListener('DOMContentLoaded', () => {
  requestFunction();
});

const app = { currentCardsData: [], pageNumber: 0 };

/**
 * Burger-menu
 */
const btnNavElement = document.querySelector('.btn-mobile-nav');
const menu = document.querySelector('.menu');
const headerElement = document.querySelector('.header');
const logoLinkMobile = document.querySelector('.logo-link_mobile');
const navLinks = document.querySelectorAll('.menu-link');
const shadow = document.querySelector('.shadow');

/**
 * Enabling and disabling scrolling
 */

function scrollToggle() {
  const currentWidth = document.documentElement.clientWidth; // width minus scrolling
  const windowWidth = window.innerWidth; // full width of the window
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
 * Appearance and disappearance of the burger menu and shadows when clicking on the burger
 */

btnNavElement.addEventListener('click', () => {
  btnNavElement.classList.toggle('btn-mobile-nav-rotate');
  shadow.classList.toggle('shadow_visible');
  menu.classList.toggle('menu_visible');

  scrollToggle();
});

/**
 * Appearance and disappearance of the burger menu and shadows when clicking on the logo in the menu
 */

logoLinkMobile.addEventListener('click', () => {
  btnNavElement.classList.toggle('btn-mobile-nav-rotate');
  shadow.classList.toggle('shadow_visible');
  menu.classList.toggle('menu_visible');

  scrollToggle();
});

/**
 * Appearance and disappearance of the burger menu and shadows when clicking on links in the menu
 */

navLinks.forEach((navLink) =>
  navLink.addEventListener('click', () => {
    if (menu.classList.contains('menu_visible')) {
      btnNavElement.classList.toggle('btn-mobile-nav-rotate');
      shadow.classList.toggle('shadow_visible');
      menu.classList.toggle('menu_visible');

      scrollToggle();
    }
  }),
);

/**
 * Appearance and disappearance of the burger menu and shadow when clicking on the shadow
 */

shadow.addEventListener('click', () => {
  shadow.classList.remove('shadow_visible');
  btnNavElement.classList.remove('btn-mobile-nav-rotate');
  menu.classList.remove('menu_visible');
});

/**
 * Pop-up appearance when clicking on the pet card
 */

const petsCards = document.querySelectorAll('.pets__card');
const popup = document.createElement('div');

/**
 * Rewind the page to the starting position
 */
const activeLink = document.querySelector('.menu__link_active');
activeLink.addEventListener('click', () => {
  window.scrollTo(0, 0);
});
