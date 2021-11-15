import {creatActive} from './form-status.js';
import {similarAnnouncements} from './card.js';
import {getData} from './api.js';


const addressInputForm = document.querySelector('#address');
const resetButton = document.querySelector('.ad-form__reset');
const submitButton = document.querySelector('.ad-form__submit');

//добавляем карту и обработчик события
const mapLeaflet = L.map('map-canvas');

mapLeaflet.on('load', () => {
  addressInputForm.value = '35.68950, 139.69171';
  creatActive();
  getData((announcement) => {
    const tenAnnouncements = announcement.slice(0, 10);
    tenAnnouncements.forEach((element) => {
      {
        const iconAdd = L.icon({
          iconUrl: 'img/pin.svg',
          iconSize: [40, 40],
          iconAnchor: [20, 40],
        });

        const markerAdd = L.marker({
          lat: element.location.lat,
          lng: element.location.lng,
        },
        {
          icon: iconAdd,
        });
        markerAdd.addTo(mapLeaflet);
        markerAdd.bindPopup(similarAnnouncements(element));
      }
    });
  });
});

//центрирование карты
mapLeaflet.setView({
  lat: 35.68950,
  lng: 139.69171,
}, 10);

//добавляем слой карты
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(mapLeaflet);


//красивая метка
const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

//добавиди главную метку
const marker = L.marker(
  {
    lat: 35.68950,
    lng: 139.69171,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

//событие перетаскивания
marker.on('drag', (evt) => {
  addressInputForm.value = `${evt.target.getLatLng()['lat'].toFixed(5)  }, ${   evt.target.getLatLng()['lng'].toFixed(5)}`;
});

//событие сброса
submitButton.addEventListener('click', () => {
  marker.setLatLng({
    lat: 35.68950,
    lng: 139.69171,
  });
});

resetButton.addEventListener('click', () => {
  marker.setLatLng({
    lat: 35.68950,
    lng: 139.69171,
  });
});

marker.addTo(mapLeaflet);


export {mapLeaflet};
