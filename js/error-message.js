

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);
};

/*const closeAnyMessage = (element) => {
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      element.remove();
    }
  });
  window.addEventListener('click', () => {
    element.remove();
  });
};

const isEscapeKey = (evt) => {
  return evt.key === 'Escape';
};

const isEnterKey = (evt) => {
  return evt.key === 'Enter';
};

document.isEscapeKey('keydown', (evt) => {
  if (closeAnyMessage(evt)) {
    evt.preventDefault();
    //userModalElement.classList.add('hidden');
  }
});*/

const showSuccessMessage = () => {
  const successTemplate = document.querySelector('#success')
    .content
    .querySelector('.success');
  const successMessage =  successTemplate.cloneNode(true);
  document.body.append(successMessage);

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      successMessage.remove();
    }
  });
  window.addEventListener('click', () => {
    successMessage.remove();
  });

};

const showErrorMessage = () => {
  const errorTemplate = document.querySelector('#error')
    .content
    .querySelector('.error');
  const errorMessage =  errorTemplate.cloneNode(true);
  document.body.append(errorMessage);

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      errorMessage.remove();
    }
  });
  window.addEventListener('click', () => {
    errorMessage.remove();
  });
};

export {showAlert, showSuccessMessage, showErrorMessage};
