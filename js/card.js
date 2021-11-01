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
  clonedTemplateCard.querySelector('.popup__type').textContent = ads.offer.type;
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

  if (ads.offer.title === null) {
    clonedTemplateCard.querySelector('.popup__title').style.display = 'none';
  }
  if (ads.offer.address === null) {
    clonedTemplateCard.querySelector('.popup__text--address').style.display = 'none';
  }
  if (ads.offer.price === null) {
    clonedTemplateCard.querySelector('.popup__text--price').style.display = 'none';
  }
  if (ads.offer.type === null) {
    clonedTemplateCard.querySelector('.popup__type').style.display = 'none';
  }
  if (ads.offer.rooms === null) {
    clonedTemplateCard.querySelector('.popup__text--capacity').style.display = 'none';
  }
  if (ads.offer.checkin === null) {
    clonedTemplateCard.querySelector('.popup__text--time').style.display = 'none';
  }
};

export {similarAnnouncements};
