import {creatInactive, creatActive, setUserFormSubmit} from './form-status.js';
import {testPageValue, testRoomSelect, setUserFormReset} from './form-validation.js';
import './map.js';
import {showSuccessMessage} from './error-message.js';
import './filter.js';

creatInactive();
testPageValue();
testRoomSelect();
creatActive();
setUserFormReset();
setUserFormSubmit(showSuccessMessage);
