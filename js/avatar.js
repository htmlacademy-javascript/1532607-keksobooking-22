import {getMainZero} from './main-zero';

const AVATAR = 'img/avatars/user{{xx}}.png';

const rechangeNumber = () => {
  return AVATAR.replace(/\{(\x\x)\}/g, getMainZero(1, 8, 2));
}

const describeAuthor = () => {
  return{
    avatar: rechangeNumber(),
  }
}

export {describeAuthor};
