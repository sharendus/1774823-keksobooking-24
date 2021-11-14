const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_LENGTH = 1000000;

const titleInputForm = document.querySelector('#title');
const priceInputForm = document.querySelector('#price');
const typeSelectForm = document.querySelector('#type');
const roomSelectForm = document.querySelector('#room_number');
const capacitySelectForm = document.querySelector('#capacity');
const timeinSelectForm = document.querySelector('#timein');
const timeoutSelectForm = document.querySelector('#timeout');

titleInputForm.addEventListener('input', () => {
  const valueLength = titleInputForm.value.length;
  if (valueLength < MIN_TITLE_LENGTH) {
    titleInputForm.setCustomValidity(`Ещё ${  MIN_TITLE_LENGTH - valueLength  } симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInputForm.setCustomValidity(`Удалите лишние ${  valueLength - MAX_TITLE_LENGTH  } симв.`);
  } else {
    titleInputForm.setCustomValidity('');
  }
  titleInputForm.reportValidity();
});

const testPageValue = () => {
  if (typeSelectForm.value === 'bungalow') {
    priceInputForm.min = '0';
    priceInputForm.placeholder = '0';
  } else if (typeSelectForm.value === 'flat') {
    priceInputForm.min = '1000';
    priceInputForm.placeholder = '1000';
  } else if (typeSelectForm.value === 'hotel') {
    priceInputForm.min = '3000';
    priceInputForm.placeholder = '3000';
  } else if (typeSelectForm.value === 'house') {
    priceInputForm.min = '5000';
    priceInputForm.placeholder ='5000';
  } else if (typeSelectForm.value === 'palace') {
    priceInputForm.min = '10000';
    priceInputForm.placeholder = '10000';
  }
};

typeSelectForm.addEventListener('change', () => {
  testPageValue();
});

priceInputForm.addEventListener('input', () => {
  if (priceInputForm.validity.rangeOverflow) {
    priceInputForm.setCustomValidity(`Максимальная цена ${  MAX_PRICE_LENGTH}`);
  } else if (priceInputForm.validity.rangeUnderflow) {
    priceInputForm.setCustomValidity(`Минимальная цена ${  priceInputForm.min}`);
  } else if (priceInputForm.validity.valueMissing) {
    priceInputForm.setCustomValidity('Обязательное поле');
  } else {
    priceInputForm.setCustomValidity('');
  }
  priceInputForm.reportValidity();
});

const testRoomSelect = () => {
  if (roomSelectForm.value === '100') {
    for (let i = 0; i < capacitySelectForm.length; i++) {
      if (capacitySelectForm[i].value === '0') {
        capacitySelectForm[i].disabled = false;
        capacitySelectForm[i].selected = true;
      } else {
        capacitySelectForm[i].disabled = true;
      }
    }
  } else {
    for (let i = 0; i < capacitySelectForm.length; i++) {
      if (capacitySelectForm[i].value <= roomSelectForm.value && capacitySelectForm[i].value !== '0') {
        capacitySelectForm[i].disabled = false;
        capacitySelectForm[i].selected = true;
      } else {
        capacitySelectForm[i].disabled = true;
      }
    }
  }
};

roomSelectForm.addEventListener('change', () => {
  testRoomSelect();
});

timeinSelectForm.addEventListener('change', () => {
  if (timeinSelectForm.value === '12:00') {
    timeoutSelectForm.value = '12:00';
  } else if (timeinSelectForm.value === '13:00') {
    timeoutSelectForm.value = '13:00';
  } else if (timeinSelectForm.value === '14:00') {
    timeoutSelectForm.value = '14:00';
  }
});

timeoutSelectForm.addEventListener('change', () => {
  if (timeoutSelectForm.value === '12:00') {
    timeinSelectForm.value = '12:00';
  } else if (timeoutSelectForm.value === '13:00') {
    timeinSelectForm.value = '13:00';
  } else if (timeoutSelectForm.value === '14:00') {
    timeinSelectForm.value = '14:00';
  }
});


export {testPageValue, testRoomSelect};

