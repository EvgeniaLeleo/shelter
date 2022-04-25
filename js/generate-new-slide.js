const slideContainer = document.querySelector('.slide-container');

function generateNewSlide(m, page) {
  const newSlide = document.createElement('div');
  newSlide.classList.add('pets__cards-container');
  newSlide.classList.add('pets__cards-container-new');

  slideContainer.appendChild(newSlide);

  for (let i = 0; i < m; i++) {
    const slidePetsCard = document.createElement('div');
    slidePetsCard.classList.add('pets__card');
    slidePetsCard.classList.add('pets__card-new');

    if (i > 0 && page === 'main') {
      slidePetsCard.classList.add('pets__card_mobile-hidden');
    }

    if (i > 1 && page === 'main') {
      slidePetsCard.classList.add('pets__card_tablet-hidden');
    }

    if (i > 2 && page === 'pets') {
      slidePetsCard.classList.add('pets__card_mobile-hidden');
    }

    if (i > 5 && page === 'pets') {
      slidePetsCard.classList.add('pets__card_tablet-hidden');
    }

    const imgPetsCard = document.createElement('img');
    imgPetsCard.classList.add('pets__card_img');

    const namePetsCard = document.createElement('p');
    namePetsCard.classList.add('pets__card_name');

    const buttonPetsCard = document.createElement('button');
    buttonPetsCard.classList.add('button-light');
    buttonPetsCard.textContent = 'Learn more';

    newSlide.appendChild(slidePetsCard);
    slidePetsCard.appendChild(imgPetsCard);
    slidePetsCard.appendChild(namePetsCard);
    slidePetsCard.appendChild(buttonPetsCard);
  }
}
