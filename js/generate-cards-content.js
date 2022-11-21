/**
 * Заполнение n карточек слайда данными из массива data
 */

function generateCardsContent(n, data, container) {
  for (let i = 0; i < n; i++) {
    let img = container[i].querySelector('.pets__card_img');

    img.setAttribute('src', data[i].img);
    img.setAttribute(
      'alt',
      `${data[i].name}: ${data[i].type} - ${data[i].breed}`
    );

    let name = container[i].querySelector('.pets__card_name');
    name.textContent = data[i].name;

    // Вывод данных data из файла *.json в popup
    container[i].addEventListener('click', () => {
      shadow.classList.add('shadow_visible');

      showPopup({
        name: data[i].name,
        img: data[i].img,
        type: data[i].type,
        breed: data[i].breed,
        description: data[i].description,
        age: data[i].age,
        inoculations: data[i].inoculations,
        diseases: data[i].diseases,
        parasites: data[i].parasites,
      });
    });
  }
}
