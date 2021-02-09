/*const AVATAR = [
  'img/avatars/user',
  //x,
  '.png',
];*/
const TITLE = [
  'Spend free time',
  'Go off monotony',
  'Find happiness',
];

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
];
const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];
const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const DESCRIPTION = [
  'spacious',
  'clear',
  'high-ceilinged',
];
const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const DESCRIPTION_SIMILAR_AD_COUNT = 10;

const createArr = ([...source], maxLength) => Array.from(
  { length: Math.min(source.length, 1 + Math.random() * maxLength | 0) },
  () => source.splice(Math.random() * source.length | 0, 1)[0]);

/*function mainZero(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}*/

function getRandomInt(min, max) {
  if (min >= 0 && max >= 0){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  let er = ('Введите положительные числа, включая 0');
  return er;
}

const getRandomFloat = (min, max, numbersCountAfterDot) => {
  if (min >= 0 && max >= 0){
    const random = Math.random()* (max - min) + min;
    return random.toFixed(numbersCountAfterDot);
  }
  let er = ('Введите положительные числа, включая 0');
  return er;
}

const describeAuthor = () => {
  return{
    //[AVATAR]: x = mainZero(2, 2),
  };
}

const offerInformation = () => {
  return{
    title: createArr(TITLE, TITLE.length - 1),
    address: '',
    price: getRandomInt(1000, 75000),
    type: getRandomInt(0, TYPE.length - 1),
    rooms: getRandomInt(1, 5),
    guests: getRandomInt(1, 20),
    checkin: getRandomInt(0, CHECKIN.length - 1),
    checkout: getRandomInt(0, CHECKOUT.length - 1),
    features: createArr(FEATURES, FEATURES.length - 1),
    description: getRandomInt(0, DESCRIPTION.length - 1),
    photos: createArr(PHOTOS, PHOTOS.length - 1),
  }
}

const getLocation = () => {
  return{
    x: getRandomFloat(35.65, 35.7, 5),
    y: getRandomFloat(139.7, 139.8, 5),
  };
};
const similarAds =
new Array(DESCRIPTION_SIMILAR_AD_COUNT).fill(null).map(() =>
  describeAuthor(), getLocation(), offerInformation());

similarAds;
