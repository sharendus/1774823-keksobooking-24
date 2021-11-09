const form = document.querySelector('.ad-form');
const formFieldset = form.querySelectorAll('.ad-form__element');
const map = document.querySelector('.map__filters');
const mapSelect = map.querySelectorAll('select');
const mapFieldset = map.querySelector('fieldset');
const addressInputForm = document.querySelector('#address');


const creatInactive = function () {
  form.classList.add('.ad-form--disabled');
  for (let i = 0; i < formFieldset.length; i++) {
    formFieldset[i].disabled = true;
  }

  map.classList.add('.ad-form--disabled');
  for (let i = 0; i < mapSelect.length; i++) {
    mapSelect[i].disabled = true;
  }
  mapFieldset.disabled = true;
};

const creatActive = function () {
  form.classList.remove('.ad-form--disabled');
  for (let i = 0; i < formFieldset.length; i++) {
    formFieldset[i].disabled = false;
  }

  map.classList.remove('.ad-form--disabled');
  for (let i = 0; i < mapSelect.length; i++) {
    mapSelect[i].disabled = false;
  }

  mapFieldset.disabled = false;
};

const mapLeaflet = L.map('map-canvas')
  .on('load', () => {
    creatActive();
  })
  .setView({
    lat: 35.68950,
    lng: 139.69171,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(mapLeaflet);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

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

marker.on('moveend', (evt) => {
  addressInputForm.value = `lat: ${  evt.target.getLatLng()['lat'].toFixed(5)  } lng: ${  evt.target.getLatLng()['lng'].toFixed(5)}`;
});

marker.addTo(mapLeaflet);


export {creatInactive, creatActive, mapLeaflet};
