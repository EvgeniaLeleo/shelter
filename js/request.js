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
 * Data output from the * file.json to cards and popup
 */

function showData(data) {
  generateCardsContent(petsCards.length, data, petsCards); // fills petsCards

  for (let i = 0; i < petsCards.length; i++) {
    app.currentCardsData[i] = data[i];
  }

  arrowSlider(data); // slider
}

/**
 * The functionality of the slider arrows with random data
 */

function arrowSlider(data) {
  const arrowRight = document.querySelector('.arrow-right');

  arrowRight.addEventListener('click', () => {
    const currentSlide = document.querySelector(
      '.pets__cards-container-current',
    );

    hideSlide(currentSlide, 'to-left');

    generateNewSlide(3, 'main');

    const petsCardsNew = document.querySelectorAll('.pets__card-new');

    let newArr = arrayRandElement(data, 3);

    generateCardsContent(3, newArr, petsCardsNew);

    const nextSlide = document.querySelector('.pets__cards-container-new');
    showSlide(nextSlide, 'from-right');

    for (let i = 0; i < petsCards.length; i++) {
      app.currentCardsData[i] = newArr[i];
    }
  });

  const arrowLeft = document.querySelector('.arrow-left');

  arrowLeft.addEventListener('click', () => {
    const currentSlide = document.querySelector(
      '.pets__cards-container-current',
    );
    hideSlide(currentSlide, 'to-right');

    generateNewSlide(3, 'main');

    const petsCardsNew = document.querySelectorAll('.pets__card-new');

    let newArr = arrayRandElement(data, 3);

    generateCardsContent(3, newArr, petsCardsNew);

    const nextSlide = document.querySelector('.pets__cards-container-new');
    showSlide(nextSlide, 'from-left');

    for (let i = 0; i < petsCards.length; i++) {
      app.currentCardsData[i] = newArr[i];
    }
  });
}
