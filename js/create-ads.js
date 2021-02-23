import {describeAuthor} from './avatar'
import {offerInformation} from './offer-info'
import {getLocation} from './location'

const DESCRIPTION_SIMILAR_AD_COUNT = 10;

const createAD = () => {
  return{
    author: describeAuthor(),
    offer: offerInformation(),
    location: getLocation(),
  }
}
const similarAds = new Array(DESCRIPTION_SIMILAR_AD_COUNT).fill(null).map(() =>
  createAD());

export {similarAds}
