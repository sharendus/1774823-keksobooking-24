import {creatInactive, creatActive} from './form-status.js';
//import {createAnnouncement} from './data.js';
import {testPageValue} from './form-validation.js';
//import {similarAnnouncements} from './card.js';
import {mapLeaflet} from './map.js';

creatInactive();
testPageValue();
creatActive();
mapLeaflet;

/*fetch('https://24.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((announcement) => {
    console.log(announcement);
  });*/
