//Получение случайного целого числа в заданном диапазоне
function getRandomFromRange (min ,max) {
  if (min < max && min >=0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
function getRandomFromRangeToFixed(min, max) {
  if (min < max && min >=0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor ((Math.random() * (max - min + 1) + min) * 100) / 100;
  }
}

getRandomFromRange(1,3);
getRandomFromRangeToFixed(1,3);
