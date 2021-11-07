import {createAnnouncement} from './data.js';
import {similarAnnouncements} from './card.js';
import {creatInactive, creatActive} from './form-status.js';
import {testPageValue} from './form-validation.js';

//вызов функции
similarAnnouncements(createAnnouncement());

creatInactive();
creatActive();
testPageValue();


