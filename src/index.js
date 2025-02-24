const mapboxgl = require('mapbox-gl');
const marker = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1IjoidmNoYW44MDg0IiwiYSI6ImNrMTZrOWRldjE2cG4zYm54OTF4NHBnMmsifQ.OLYEg8tI_YJJNROy_eiNBA';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement('div'); // Create a new, detached DIV
markerDomEl.style.width = '32px';
markerDomEl.style.height = '39px';
markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);
marker('hotels', [-74.014, 40.711]).addTo(map);
