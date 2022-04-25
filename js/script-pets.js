// 6-кратное дублирование элементов массива

function sixTimesArr(a) {
  return a.concat(a).concat(a).concat(a).concat(a).concat(a);
}

/**
 * Перемешивание элементов массива
 */

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

    [array[i], array[j]] = [array[j], array[i]]; // деструктурирующее присваивание
  }

  return array;
}
