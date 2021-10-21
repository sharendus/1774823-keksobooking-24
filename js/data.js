import {getRandomFromRange, getRandomFromRangeToFixed} from './util';

// переменные
const avatars = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png',
];
const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkins = ['12:00', '13:00', '14:00'];
const features= ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const lat = getRandomFromRangeToFixed(35.65000, 35.70000, 5);
const lng = getRandomFromRangeToFixed(139.70000, 139.80000, 5);

//функция для массива из строк
const getArray = (arrayOfStrings) => {
  const maxLength = arrayOfStrings.length;
  const lengthOfArray = getRandomFromRange(1, maxLength);
  const array = [];

  for(let i = 0;i < lengthOfArray;i++) {
    const indexOfEl = getRandomFromRange(0, maxLength-1);
    const el = arrayOfStrings[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
};

//функция для обекта
const createAnnouncement = () => {
  const avatarIndex = getRandomFromRange(0, avatars.length - 1);
  const typeIndex = getRandomFromRange(0, types.length - 1);
  const check = getRandomFromRange(0, checkins.length - 1);

  return {
    author: {
      avatar: avatars[avatarIndex],
    },
    offer : {
      title: 'заголовок',
      address: lat, lng,
      price: getRandomFromRange(1, 100),
      type: types[typeIndex],
      rooms: getRandomFromRange(1, 10),
      guests: getRandomFromRange(1, 20),
      checkin:checkins[check],
      checkout:checkins[check],
      features:getArray(features),
      description: 'описание помещения',
      photos:getArray(photos),
    },
    location : {
      lat,
      lng,
    },
  };
};


export {createAnnouncement};
