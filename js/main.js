import {creatInactive, creatActive, mapLeaflet} from './form-status.js';
import {createAnnouncement} from './data.js';

import {testPageValue} from './form-validation.js';
import {similarAnnouncements} from './card.js';


creatInactive();
testPageValue();

const carrayOfDeclarations = Array.from({length: 10}, createAnnouncement);


carrayOfDeclarations.forEach((ads) => {
  const iconAdd = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const markerAdd = L.marker({
    lat: ads.location.lat,
    lng: ads.location.lng,
  },
  {
    icon: iconAdd,
  });

  markerAdd.addTo(mapLeaflet);
  markerAdd.bindPopup(similarAnnouncements(ads));
});


creatActive();


