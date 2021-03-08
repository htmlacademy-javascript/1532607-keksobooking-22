import {createAds} from './create-ads.js';

const similarAdsTemplate = document.querySelector('#card').content.querySelector('.popup');
const similarAds = createAds.slice(0, 1);
const mapCanvas = document.querySelector('.map__canvas');
const similarListFragment = document.createDocumentFragment();
similarAds.forEach((offer) => {
  const adElement = similarAdsTemplate.cloneNode(true);
  adElement.querySelector('.popup__title').textContent = offer.offer.title;
  adElement.querySelector('.popup__text--address').textContent = offer.offer.address;
  adElement.querySelector('.popup__text--price').textContent = offer.offer.price, '₽/ночь';
  adElement.querySelector('.popup__text--capacity').textContent = offer.offer.rooms, ' комнаты для ', offer.offer.guests, ' гостей.';
  adElement.querySelector('.popup__text--time').textContent = 'Заезд после ', offer.offer.checkin, ', выезд до ', offer.offer.checkout;
  adElement.querySelector('.popup__description').textContent = offer.offer.description;
  adElement.querySelector('.popup__photos').textContent = offer.offer.photos;
  adElement.querySelector('.popup__avatar').src = offer.author.avatar;

  const featuresList = adElement.querySelector('.popup__features');
  const featuresItems = featuresList.textContent = offer.offer.features;
  featuresList.innerHTML = featuresItems.map(function (featuresItem){
    return `<li class='popup__feature popup__feature--${featuresItem}'> ${featuresItem} </li>`;
  }).join('');

  const typeOffer = offer.offer.type;
  const typeTranslation = getTypeOffer(typeOffer);

  function getTypeOffer(type){
    switch(type){
      case 'flat':
        return 'Квартира';
      case 'palace':
        return 'Дворец'
      case 'bungalow':
        return 'Бунгало';
      case 'house':
        return 'Дом';
    }
  }

  const typePopup = adElement.querySelector('.popup__type');
  typePopup.textContent = typeTranslation;
  similarListFragment.appendChild(adElement)
});

mapCanvas.appendChild(similarListFragment);
