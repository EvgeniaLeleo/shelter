/**
 * Slide animation
 */

function hideSlide(slide, direction) {
  slide.classList.add(direction);

  slide.addEventListener('animationend', function () {
    const current = document.body.querySelector(
      '.pets__cards-container-current',
    );

    slideContainer.removeChild(current);
  });
}

function showSlide(slide, direction) {
  slide.classList.add('pets__cards-container-new', direction);

  slide.addEventListener('animationend', function () {
    this.classList.remove('pets__cards-container-new', direction);
    this.classList.add('pets__cards-container-current');

    const slidePetsCardNew = document.querySelectorAll('.pets__card-new');

    slidePetsCardNew.forEach((slide) => {
      slide.classList.remove('pets__card-new');
    });
  });
}
