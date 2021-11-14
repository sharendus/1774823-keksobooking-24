import {showAlert, showSuccessMessage, showErrorMessage, closeAnyMessage} from './error-message.js';
import { form } from './form-status.js';

const getData = (onSuccess) => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(showAlert('Не удалось загрузить данные с сервера'));
    })
    .then((response) => response.json())
    .then((announcement) => {
      onSuccess(announcement);
    });
};

const sendData = (body) => {
  fetch(
    'https://24.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        showSuccessMessage();
        form.reset();
        form.querySelector('#address').value = '35.68950, 139.69171';
        closeAnyMessage(document.querySelector('.success'));
      } else {
        showErrorMessage();
        form.reset();
        form.querySelector('#address').value = '35.68950, 139.69171';
        closeAnyMessage(document.querySelector('.error'));
      }
    })
    .catch(() => {
      showErrorMessage();
      closeAnyMessage(document.querySelector('.error'));
    });
};

export {getData, sendData};
