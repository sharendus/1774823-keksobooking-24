//Получение случайного целого числа в заданном диапазоне
function getRandomFromRange (min ,max) {
  if (min < max && min >=0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    console.log('Ошибка');
    if (min === max) {console.log('Значение min не должно быть равно max')}
    if (min > max) {console.log('Значение min должно быть меньше max')}
    if (min < 0) {console.log('Значение min не должно быть меньше 0')}}
}

getRandomFromRange(min ,max);


//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
function getRandomFromRangeToFixed(min, max) {
  if (min < max && min >=0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor ((Math.random() * (max - min + 1) + min) * 100) / 100;
  } else {
    console.log('Ошибка');}
}
getRandomFromRangeToFixed (min, max)



//    min = alert((min).toFixed(n));
//max = alert((max).toFixed(n));



