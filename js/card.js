const containerForAds = document.querySelector('.map__canvas'); //сюда будем добавлять обьявления

//нашли шаблон
const templateСardAnnouncement = document.querySelector('#card')
  .content
  .querySelector('.popup');

//обьявляем функцию
const similarAnnouncements = (ads) => {
  const clonedTemplateCard = templateСardAnnouncement.cloneNode(true);

  const featureContainer = clonedTemplateCard.querySelector('.popup__features');
  featureContainer.innerHTML = '';
  ads.offer.features.forEach((feature) => {
    const featureListItem = document.createElement('li');
    featureListItem.classList.add('popup__feature');
    featureListItem.classList.add(`popup__feature--${  feature}`);
    featureContainer.appendChild(featureListItem);
  });


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

  if (clonedTemplateCard.querySelector('.popup__title')) {
    clonedTemplateCard.querySelector('.popup__title').textContent = ads.offer.title;
  }
  if (clonedTemplateCard.querySelector('.popup__text--address')) {
    clonedTemplateCard.querySelector('.popup__text--address').textContent = ads.offer.address;
  }
  if (clonedTemplateCard.querySelector('.popup__text--price')) {
    clonedTemplateCard.querySelector('.popup__text--price').textContent = `${ads.offer.price  } ₽/ночь`;
  }
  if (clonedTemplateCard.querySelector('.popup__type')) {
    clonedTemplateCard.querySelector('.popup__type').textContent = ads.offer.type;
  }
  if (clonedTemplateCard.querySelector('.popup__text--capacity')) {
    clonedTemplateCard.querySelector('.popup__text--capacity').textContent = `${ads.offer.rooms  } комнаты для ${  ads.offer.guests  } гостей`;
  }
  if (clonedTemplateCard.querySelector('.popup__text--time')) {
    clonedTemplateCard.querySelector('.popup__text--time').textContent = `Заезд после ${  ads.offer.checkin  }, выезд до ${  ads.offer.checkout}`;
  }
  if (clonedTemplateCard.querySelector('.popup__description')) {
    clonedTemplateCard.querySelector('.popup__description').textContent = ads.offer.description;
  }
};

export {similarAnnouncements};
