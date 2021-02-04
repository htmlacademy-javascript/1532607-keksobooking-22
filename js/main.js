function getRandomIntInclusive(min, max) {
  if (min >= 0 && max >= 0){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  return Error;
}

function getRandomArbitrary(min, max) {
  if (min >= 0 && max >= 0){
    return Math.random() * (max - min) + min;
  }
  let er = ('Введите положительные числа, включая 0');
  return er;
}
getRandomIntInclusive(4, 10);
getRandomArbitrary(12, 400);
