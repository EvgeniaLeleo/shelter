/***
 * Запрос данных из файла pets.json и вывод их на текущую страницу в карточки
 */
function requestFunction() {
  const request = new XMLHttpRequest();

  request.open('GET', '../../../assets/pets.json');

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
 * Вывод данных data из файла *.json в карточки и popup
 */

function showData(data) {
  generateCardsContent(petsCards.length, data, petsCards); //заполняем карточки petsCards

  // запись текущих данных в глобальный объект
  for (let i = 0; i < petsCards.length; i++) {
    app.currentCardsData[i] = data[i];
  }

  arrowSlider(data); //добавляем функционал слайдеру
}

/**
 * Функционал стрелок для слайдера с рандомным наполнением
 */

function arrowSlider(data) {
  const arrowRight = document.querySelector('.arrow-right');

  arrowRight.addEventListener('click', () => {
    const currentSlide = document.querySelector(
      '.pets__cards-container-current'
    );

    hideSlide(currentSlide, 'to-left');

    generateNewSlide(3, 'main');

    const petsCardsNew = document.querySelectorAll('.pets__card-new');

    let newArr = arrayRandElement(data, 3);

    generateCardsContent(3, newArr, petsCardsNew);

    const nextSlide = document.querySelector('.pets__cards-container-new');
    showSlide(nextSlide, 'from-right');

    // запись текущих данных в глобальный объект
    for (let i = 0; i < petsCards.length; i++) {
      app.currentCardsData[i] = newArr[i];
    }
  });

  const arrowLeft = document.querySelector('.arrow-left');

  arrowLeft.addEventListener('click', () => {
    const currentSlide = document.querySelector(
      '.pets__cards-container-current'
    );
    hideSlide(currentSlide, 'to-right');

    generateNewSlide(3, 'main');

    const petsCardsNew = document.querySelectorAll('.pets__card-new');

    let newArr = arrayRandElement(data, 3);

    generateCardsContent(3, newArr, petsCardsNew);

    const nextSlide = document.querySelector('.pets__cards-container-new');
    showSlide(nextSlide, 'from-left');

    // запись текущих данных в глобальный объект
    for (let i = 0; i < petsCards.length; i++) {
      app.currentCardsData[i] = newArr[i];
    }
  });
}
