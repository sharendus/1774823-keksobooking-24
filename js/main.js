//Получение случайного целого числа в заданном диапазоне
function getRandomFromRange(min ,max) {
  if (min < max && min >=0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    if (min === max) {return('Значение min не должно быть равно max');}
    if (min > max) {return('Значение min должно быть меньше max');}
    if (min < 0) {return('Значение min не должно быть мегбше 0');}
  }
}

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
function getRandomFromRangeToFixed(min, max, numberOfSimbols) {
  if (min < max && min >=0) {
    min = Math.floor(min);
    max = Math.ceil(max);
    const nOS = Math.pow(10, numberOfSimbols);
    return Math.floor ((Math.random() * (max - min + 1) + min) * nOS) / nOS;
  } else {
    if (min === max) {return('Значение min не должно быть равно max');}
    if (min > max) {return('Значение min должно быть меньше max');}
    if (min < 0) {return('Значение min не должно быть меньше 0');}
  }
}
getRandomFromRange(1,5);
getRandomFromRangeToFixed(1,5,2);


// переменные
const avatar = [
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

//переменные
const type = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkin = ['12:00', '13:00', '14:00'];
const checkout = ['12:00', '13:00', '14:00'];
const features= ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

//функция для массива из строк
function getArray(arrayOfStrings) {
  const maxLength = arrayOfStrings.length;
  const lengthOfArray = getRandomFromRange(1, maxLength);
  const array = [];

  for(let int = 0;int < lengthOfArray;int++) {
    const indexOfEl = getRandomFromRange(0, maxLength-1);
    const el = arrayOfStrings[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
}

//функция для обекта

const createAnnouncement = () => {
  const avatarIndex = getRandomFromRange(0, type.length - 1);
  const typeInsex = getRandomFromRange(0, type.length - 1);
  const check = getRandomFromRange(0, checkin.length - 1);


  return {
    author: {
      avatar: avatar[avatarIndex],
    },
    offer : {
      title: 'заголовок',
      address: `${getRandomFromRangeToFixed(35.65000, 35.70000, 5)  }, ${  getRandomFromRangeToFixed(139.70000, 139.80000, 5)}`,
      price: getRandomFromRange(1, 100),
      type: type[typeInsex],
      rooms: getRandomFromRange(1, 10),
      guests: getRandomFromRange(1, 20),
      checkin:checkin[check],
      checkout:checkout[check],
      features:getArray(features),
      description: 'описание помещения',
      photos:getArray(photos),
    },
    location : {
      lat:  getRandomFromRangeToFixed(35.65000, 35.70000, 5),
      lng:  getRandomFromRangeToFixed(139.70000, 139.80000, 5),
    },
  };
};

const creatingArray = Array.from({length: 10}, createAnnouncement);
creatingArray;
