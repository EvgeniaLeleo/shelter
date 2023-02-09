/***
 * Requesting data from the pets file.json and output them to the current page in the cards
 */

function requestFunction() {
  const request = new XMLHttpRequest();

  request.open('GET', '../../assets/pets.json');

  request.send();

  request.onload = function () {
    if (request.status !== 200) {
      console.error('Не удалось получить данные!');
    } else {
      const data = JSON.parse(request.response);

      showData(data);
    }
  };
}

/***
 * Data output from the * file.json to flashcards and popup
 */

function showData(data) {
  let sixData = sixTimesArr(data);

  app.numberOfCardsOnPage = 8;
  app.numberOfPages = sixData.length / app.numberOfCardsOnPage;

  if (window.matchMedia('(max-width: 1279.98px)').matches) {
    app.numberOfCardsOnPage = 6;
    app.numberOfPages = sixData.length / app.numberOfCardsOnPage;
  }

  if (window.matchMedia('(max-width: 767.98px)').matches) {
    app.numberOfCardsOnPage = 3;
    app.numberOfPages = sixData.length / app.numberOfCardsOnPage;
  }

  /**
   * Generation of numberOfPages of pages by numberOfCardsOnPage random elements
   */

  const dataPets = [];

  for (let i = 0; i < app.numberOfPages; i++) {
    dataPets.push(shuffle(sixData.splice(0, app.numberOfCardsOnPage)));
  }

  generateCardsContent(
    app.numberOfCardsOnPage,
    dataPets[app.pageNumber],
    petsCards,
  ); // randomly fills the cards of the first page of petsCards

  arrowPagination(dataPets); // slider
}

/**
 * The functionality of the slider arrows
 */

const arrowFirst = document.querySelector('.pagination__button_first');
const arrowPrev = document.querySelector('.pagination__button_prev');
const buttonCurrentPage = document.querySelector('.pagination__button_current');
const arrowNext = document.querySelector('.pagination__button_next');
const arrowLast = document.querySelector('.pagination__button_last');

function arrowPagination(data) {
  const callFirst = () => showFirstSlide(data);
  const callPrev = () => showPrevSlide(data);
  const callNext = () => showNextSlide(data);
  const callLast = () => showLastSlide(data);

  arrowNext.addEventListener('click', callNext);
  arrowLast.addEventListener('click', callLast);

  // activates the Back buttons

  if (app.pageNumber > 0) {
    arrowPrev.addEventListener('click', callPrev);
    arrowPrev.classList.remove('inactive');
    arrowFirst.addEventListener('click', callFirst);
    arrowFirst.classList.remove('inactive');
  }

  function showNextSlide(data) {
    app.pageNumber++;

    buttonCurrentPage.textContent = app.pageNumber + 1; // changing the page number on the button

    newSlideFromRight(data);

    // when reaches the end, the button turns off
    if (app.pageNumber === app.numberOfPages - 1) {
      arrowNext.classList.add('inactive');
      arrowNext.removeEventListener('click', callNext);
      arrowLast.classList.add('inactive');
      arrowLast.removeEventListener('click', callLast);
    }

    if (app.pageNumber > 0) {
      arrowPrev.classList.remove('inactive');
      arrowPrev.addEventListener('click', callPrev);
      arrowFirst.classList.remove('inactive');
      arrowFirst.addEventListener('click', callFirst);
    }
  }

  function showPrevSlide(data) {
    app.pageNumber--;

    buttonCurrentPage.textContent = app.pageNumber + 1;

    newSlideFromLeft(data);

    if (app.pageNumber < app.numberOfPages - 1) {
      arrowNext.classList.remove('inactive');
      arrowNext.addEventListener('click', callNext);
      arrowLast.classList.remove('inactive');
      arrowLast.addEventListener('click', callLast);
    }

    // when reaches the beginning, the button turns off
    if (app.pageNumber === 0) {
      arrowPrev.classList.add('inactive');
      arrowPrev.removeEventListener('click', callPrev);
      arrowFirst.classList.add('inactive');
      arrowFirst.removeEventListener('click', callFirst);
    }
  }

  function showLastSlide(data) {
    app.pageNumber = app.numberOfPages - 1;

    buttonCurrentPage.textContent = app.pageNumber + 1;

    newSlideFromRight(data);

    // button Forward turns off
    arrowNext.classList.add('inactive');
    arrowNext.removeEventListener('click', callNext);
    arrowLast.classList.add('inactive');
    arrowLast.removeEventListener('click', callLast);
    arrowFirst.classList.remove('inactive');
    arrowFirst.addEventListener('click', callFirst);
    arrowPrev.classList.remove('inactive');
    arrowPrev.addEventListener('click', callPrev);
  }

  function showFirstSlide(data) {
    app.pageNumber = 0;

    buttonCurrentPage.textContent = app.pageNumber + 1;

    newSlideFromLeft(data);

    arrowNext.classList.remove('inactive');
    arrowNext.addEventListener('click', callNext);
    arrowLast.classList.remove('inactive');
    arrowLast.addEventListener('click', callLast);

    // when reaches the beginning, the button turns off
    arrowPrev.classList.add('inactive');
    arrowPrev.removeEventListener('click', callPrev);
    arrowFirst.classList.add('inactive');
    arrowFirst.removeEventListener('click', callFirst);
  }
}

/**
 * Generating and changing slides from right to left
 */

function newSlideFromRight(data) {
  const currentSlide = document.querySelector('.pets__cards-container-current');

  hideSlide(currentSlide, 'to-left');

  generateNewSlide(app.numberOfCardsOnPage, 'pets');

  const petsCardsNew = document.querySelectorAll('.pets__card-new');

  generateCardsContent(
    app.numberOfCardsOnPage,
    data[app.pageNumber],
    petsCardsNew,
  );

  const nextSlide = document.querySelector('.pets__cards-container-new');
  showSlide(nextSlide, 'from-right');
}

/**
 * Generating and changing slides from left to right
 */

function newSlideFromLeft(data) {
  const currentSlide = document.querySelector('.pets__cards-container-current');

  hideSlide(currentSlide, 'to-right');
  generateNewSlide(app.numberOfCardsOnPage, 'pets');

  const petsCardsNew = document.querySelectorAll('.pets__card-new');

  generateCardsContent(
    app.numberOfCardsOnPage,
    data[app.pageNumber],
    petsCardsNew,
  );

  const prevSlide = document.querySelector('.pets__cards-container-new');
  showSlide(prevSlide, 'from-left');
}
