import {createAnnouncement} from './data.js';
import {similarAnnouncements} from './card.js';
import {creatInactive, creatActive} from './page-status.js';


//вызов функции
similarAnnouncements(createAnnouncement());

creatInactive();
creatActive();
