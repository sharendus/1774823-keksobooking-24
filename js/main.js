import {createAnnouncement} from './data.js';
import {similarAnnouncements} from './card.js';

//создание массива из 10 объктов

const carrayOfDeclarations = Array.from({length: 10}, createAnnouncement);
carrayOfDeclarations;

//вызов функции
similarAnnouncements(carrayOfDeclarations[0]);


export {carrayOfDeclarations};
