import {sendData} from './api.js';
import {showErrorMessage} from './error-message.js';

const map = document.querySelector('.map__filters');
const form = document.querySelector('.ad-form');
const formFieldset = form.querySelectorAll('.ad-form__element');
const mapSelect = map.querySelectorAll('select');
const mapFieldset = map.querySelector('fieldset');


const creatInactive = function () {
  form.classList.add('.ad-form--disabled');
  for (let i = 0; i < formFieldset.length; i++) {
    formFieldset[i].disabled = true;
  }

  map.classList.add('.ad-form--disabled');
  for (let i = 0; i < mapSelect.length; i++) {
    mapSelect[i].disabled = true;
  }
  mapFieldset.disabled = true;
};

const creatActive = function () {
  form.classList.remove('.ad-form--disabled');
  for (let i = 0; i < formFieldset.length; i++) {
    formFieldset[i].disabled = false;
  }

  map.classList.remove('.ad-form--disabled');
  for (let i = 0; i < mapSelect.length; i++) {
    mapSelect[i].disabled = false;
  }
  mapFieldset.disabled = false;
};

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => showErrorMessage(),
      new FormData(evt.target),
    );
  });
};

export {creatInactive, creatActive, form, setUserFormSubmit};
