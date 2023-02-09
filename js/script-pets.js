// 6-fold duplication of array elements

function sixTimesArr(a) {
  return a.concat(a).concat(a).concat(a).concat(a).concat(a);
}

/**
 * Shuffling array elements
 */

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}
