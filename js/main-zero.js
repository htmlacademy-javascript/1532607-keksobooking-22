function getMainZero(min, max, width) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomize = Math.floor(Math.random() * (max - min + 1)) + min;
  const randomNumber = randomize + '';
  return randomNumber.length >= width ? randomNumber : new Array(width - randomNumber.length + 1).join(0) + randomNumber;
}
export {getMainZero};
