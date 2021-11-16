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

const closeAnyMessage = (element) => {
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


const showSuccessMessage = () => {
  const successTemplate = document.querySelector('#success')
    .content
    .querySelector('.success');
  const successMessage =  successTemplate.cloneNode(true);
  document.body.append(successMessage);
  return successMessage;
};

const showErrorMessage = () => {
  const errorTemplate = document.querySelector('#error')
    .content
    .querySelector('.error');
  const errorMessage =  errorTemplate.cloneNode(true);
  document.body.append(errorMessage);
  return errorMessage;
};


export {showAlert, showSuccessMessage, showErrorMessage, closeAnyMessage};
