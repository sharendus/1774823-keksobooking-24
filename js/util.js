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

export {getRandomFromRange, getRandomFromRangeToFixed};
