//Marking a map and titles
const map = L.map('map').setView([0,0], 1);
const attribution ='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);
// Marking a marker with a png file
const myIcon = L.icon({
    iconUrl: 'Station.png',
    iconSize: [50,32],
    iconAnchor: [25, 16],
     popupAnchor: [-3, -76],
     shadowUrl: 'International_Space_Station.svg',
    // shadowSize: [68, 95],
    // shadowAnchor: [22, 94]
});
const marker = L.marker([0,0], {icon:myIcon}).addTo(map);
tiles.addTo(map);


const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'

let firstTime = false

async function getISS(){
const response = await fetch(api_url);
const data = await response.json();
const {latitude, longitude} = data
marker.setLatLng([latitude,longitude])
if(firstTime){
map.setView([latitude,longitude],2)
firstTime = false;
} 
document.getElementById('latitude').textContent = latitude.toFixed(2);
document.getElementById('longitude').textContent = longitude.toFixed(2);


}
getISS();


setInterval(getISS, 3000)





