import {creatInactive, creatActive, setUserFormSubmit} from './form-status.js';
import {testPageValue, testRoomSelect} from './form-validation.js';
import './map.js';
import {showSuccessMessage} from './error-message.js';

creatInactive();
testPageValue();
testRoomSelect();
creatActive();
setUserFormSubmit(showSuccessMessage);
