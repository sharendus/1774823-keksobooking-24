import {carrayOfDeclarations} from './data.js';
const containerForAds = document.querySelector('.map__canvas'); //сюда будем добавлять обьявления

//нашли шаблон
const templateСardAnnouncement = document.querySelector('#card')
  .content
  .querySelector('.popup');

const clonedTemplateCard = templateСardAnnouncement.cloneNode(true);

//нашли нужный класс заголовка
const newTitle = clonedTemplateCard.querySelector('.popup__title');
//заменили заголовок/
newTitle.textContent = carrayOfDeclarations[0].offer.title;

// адрес
const newAddress = clonedTemplateCard.querySelector('.popup__text--address');
newAddress.textContent = carrayOfDeclarations[0].offer.address;

//цена
const newPrice = clonedTemplateCard.querySelector('.popup__text--price');
newPrice.textContent = `${carrayOfDeclarations[0].offer.price  } ₽/ночь`;

//тип жилья
const newType = clonedTemplateCard.querySelector('.popup__type');
newType.textContent = carrayOfDeclarations[0].offer.type;

//количество гостей и комнат
const newRoomsGuests = clonedTemplateCard.querySelector('.popup__text--capacity');
newRoomsGuests.textContent = `${carrayOfDeclarations[0].offer.rooms  } комнаты для ${  carrayOfDeclarations[0].offer.guests}`;

//Время заезда и выезда
const newCheck = clonedTemplateCard.querySelector('.popup__text--time');
newCheck.textContent = `Заезд после ${  carrayOfDeclarations[0].offer.checkin  }, выезд до ${  carrayOfDeclarations[0].offer.checkout}`;

//удобства
const newFeatures = clonedTemplateCard.querySelector('.popup__features');
newFeatures.textContent = carrayOfDeclarations[0].offer.features;

//описание объекта
const newDescription = clonedTemplateCard.querySelector('.popup__description');
newDescription.textContent = carrayOfDeclarations[0].offer.description;

//все фотографии из списка
//пока добавляеься только одна фотка
const newPhotos = clonedTemplateCard.querySelector('.popup__photos');
newPhotos.src = carrayOfDeclarations[0].offer.photos;

//аватарка пользователя
const newAvatar = clonedTemplateCard.querySelector('.popup__avatar');
newAvatar.src = carrayOfDeclarations[0].author.avatar;

//добавляем 1 обьект
containerForAds.appendChild(clonedTemplateCard); //добавили карточку в карту

//проверки
//title


const requiredFields = () => {
  if (carrayOfDeclarations[0].offer.title === null) {
    newTitle.style.display = 'none';
  }
};
requiredFields();
