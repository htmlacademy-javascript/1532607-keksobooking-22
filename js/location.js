import {getRandomFloat} from 'util.js'

const getLocation = () => {
  return{
    x: getRandomFloat(35.65, 35.7, 5),
    y: getRandomFloat(139.7, 139.8, 5),
  };
};
export {getLocation};
