let getRandomIntInclusive = function (min, max) {
  if (min >= 0 && max >= 0){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
return console.log('Введите положительные числа, включая 0')
}

function getRandomArbitrary(min, max) {
  if (min >= 0 && max >= 0){
  return Math.random() * (max - min) + min;
  }
  return console.log('Введите положительные числа, включая 0');
}
