
//нашли шаблон
const templateСardAnnouncement = document.querySelector('#card')
  .content
  .querySelector('.popup');

//обьявляем функцию
const similarAnnouncements = (element) => {
  const clonedTemplateCard = templateСardAnnouncement.cloneNode(true);
  clonedTemplateCard.querySelector('.popup__title').textContent = element.offer.title;
  clonedTemplateCard.querySelector('.popup__text--address').textContent = element.offer.address;
  clonedTemplateCard.querySelector('.popup__text--price').textContent = `${element.offer.price  } ₽/ночь`;
  clonedTemplateCard.querySelector('.popup__type').textContent = getClothingType(element.offer.type);

  function getClothingType (type) {
    if (type === 'palace') {
      return 'Дворец';
    } else if (type === 'flat') {
      return 'Квартира';
    } else if (type === 'house') {
      return 'Дом';
    } else if (type === 'bungalow') {
      return 'Бунгало';
    } else if (type === 'hotel') {
      return 'Отель';
    }
  }

  clonedTemplateCard.querySelector('.popup__text--capacity').textContent = `${element.offer.rooms  } комнаты для ${  element.offer.guests  } гостей`;
  clonedTemplateCard.querySelector('.popup__text--time').textContent = `Заезд после ${  element.offer.checkin  }, выезд до ${  element.offer.checkout}`;


  const featureContainer = clonedTemplateCard.querySelector('.popup__features');
  featureContainer.innerHTML = '';
  element.offer.features.forEach((feature) => {
    const featureListItem = document.createElement('li');
    featureListItem.classList.add('popup__feature');
    featureListItem.classList.add(`popup__feature--${  feature}`);
    featureContainer.appendChild(featureListItem);
  });

  clonedTemplateCard.querySelector('.popup__description').textContent = element.offer.description;

  const photoContainer = clonedTemplateCard.querySelector('.popup__photos');
  photoContainer.innerHTML = '';
  element.offer.photos.forEach((photoItem) => {
    const newPhotoList = document.createElement('img');
    newPhotoList.classList.add('popup__photo');
    newPhotoList.src = photoItem;
    newPhotoList.width = 45;
    newPhotoList.height = 40;
    newPhotoList.alt = 'Фотография жилья';
    photoContainer.appendChild(newPhotoList);
  });

  clonedTemplateCard.querySelector('.popup__avatar').src = element.author.avatar;


  if (element.offer.features === undefined) {
    clonedTemplateCard.querySelector('.popup__features').style.display = 'none';
  }
  if (element.offer.description === undefined) {
    clonedTemplateCard.querySelector('.popup__description').style.display = 'none';
  }
  if (element.offer.photos === undefined) {
    clonedTemplateCard.querySelector('.popup__photos').style.display = 'none';
  }
  if (element.author.avatar === undefined) {
    clonedTemplateCard.querySelector('.popup__avatar').style.display = 'none';
  }

  return clonedTemplateCard;
};

export {similarAnnouncements};
