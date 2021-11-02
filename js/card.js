const containerForAds = document.querySelector('.map__canvas'); //сюда будем добавлять обьявления

//нашли шаблон
const templateСardAnnouncement = document.querySelector('#card')
  .content
  .querySelector('.popup');

//обьявляем функцию
const similarAnnouncements = (ads) => {
  const clonedTemplateCard = templateСardAnnouncement.cloneNode(true);
  clonedTemplateCard.querySelector('.popup__title').textContent = ads.offer.title;
  clonedTemplateCard.querySelector('.popup__text--address').textContent = ads.offer.address;
  clonedTemplateCard.querySelector('.popup__text--price').textContent = `${ads.offer.price  } ₽/ночь`;
  clonedTemplateCard.querySelector('.popup__type').textContent = getClothingType(ads.offer.type);

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

  clonedTemplateCard.querySelector('.popup__text--capacity').textContent = `${ads.offer.rooms  } комнаты для ${  ads.offer.guests  } гостей`;
  clonedTemplateCard.querySelector('.popup__text--time').textContent = `Заезд после ${  ads.offer.checkin  }, выезд до ${  ads.offer.checkout}`;


  const featureContainer = clonedTemplateCard.querySelector('.popup__features');
  featureContainer.innerHTML = '';
  ads.offer.features.forEach((feature) => {
    const featureListItem = document.createElement('li');
    featureListItem.classList.add('popup__feature');
    featureListItem.classList.add(`popup__feature--${  feature}`);
    featureContainer.appendChild(featureListItem);
  });

  clonedTemplateCard.querySelector('.popup__description').textContent = ads.offer.description;

  const photoContainer = clonedTemplateCard.querySelector('.popup__photos');
  photoContainer.innerHTML = '';
  ads.offer.photos.forEach((photoItem) => {
    const newPhotoList = document.createElement('img');
    newPhotoList.classList.add('popup__photo');
    newPhotoList.src = photoItem;
    newPhotoList.width = 45;
    newPhotoList.height = 40;
    newPhotoList.alt = 'Фотография жилья';
    photoContainer.appendChild(newPhotoList);
  });

  clonedTemplateCard.querySelector('.popup__avatar').src = ads.author.avatar;
  containerForAds.appendChild(clonedTemplateCard);

  if (ads.offer.features === undefined) {
    clonedTemplateCard.querySelector('.popup__features').style.display = 'none';
  }
  if (ads.offer.description === undefined) {
    clonedTemplateCard.querySelector('.popup__description').style.display = 'none';
  }
  if (ads.offer.photos === undefined) {
    clonedTemplateCard.querySelector('.popup__photos').style.display = 'none';
  }
  if (ads.author.avatar === undefined) {
    clonedTemplateCard.querySelector('.popup__avatar').style.display = 'none';
  }
};

export {similarAnnouncements};
