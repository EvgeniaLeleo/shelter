/**
 * Make mobile navigation work
 */

const btnNavElement = document.querySelector('.btn-mobile-nav');
const headerElement = document.querySelector('.header');
const logoLinkMobile = document.querySelector('.logo-link_mobile');
const navLinks = document.querySelectorAll('.menu-link');
const shadow = document.querySelector('.shadow');

btnNavElement.addEventListener('click', () => {
  headerElement.classList.toggle('nav-open');
});

logoLinkMobile.addEventListener('click', () => {
  headerElement.classList.toggle('nav-open');
});

navLinks.forEach((navLink) =>
  navLink.addEventListener('click', () => {
    headerElement.classList.toggle('nav-open');
  })
);

shadow.addEventListener('click', () => {
  headerElement.classList.toggle('nav-open');
});

/**
 * Popup
 */

// const petsCards = document.querySelectorAll('.pets__card');

// petsCards.forEach((petsCard) =>
//   petsCard.addEventListener('click', () => {
//     shadow.classList.toggle('shadow_visible');
//   })
// );

// shadow.addEventListener('click', () => {
//   shadow.classList.toggle('shadow_visible');
// });
