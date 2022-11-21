/**
 * Генерация n случайных элементов массива arr, не совпадающих с элементами app.currentCardsData
 */

function arrayRandElement(arr, n = 3) {
  let randomArray = [];

  while (randomArray.length < n) {
    let indexNext = Math.floor(Math.random() * arr.length);

    let check = 0;

    for (let i = 0; i < n; i++) {
      if (app.currentCardsData[i].name === arr[indexNext].name) {
        check++;
      }
    }

    if (!randomArray.includes(arr[indexNext]) && check === 0) {
      randomArray.push(arr[indexNext]);
    }
  }

  return randomArray;
}
