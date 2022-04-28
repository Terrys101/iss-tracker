const map = L.map('map').setView([0,0], 0);
const marker = L.marker([0,0]).addTo(map);
const attribution ='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);


const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'

async function getISS(){
const response = await fetch(api_url);
const data = await response.json();
const {latitude, longitude} = data
marker.setLatLng([latitude,longitude])
document.getElementById('latitude').textContent = latitude;
document.getElementById('longitude').textContent = longitude


}
getISS();






