/* Map of GeoJSON data from counties.geojson */

//function to instantiate the Leaflet map
function createMap(){
    //create the map
    var map = L.map('section3', {
        center: [39, -98],
        zoom: 4
    });

    //add OSM base tilelayer
    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicHNteXRoMiIsImEiOiJjaXNmNGV0bGcwMG56MnludnhyN3Y5OHN4In0.xsZgj8hsNPzjb91F31-rYA', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibWF0dHJvZGUiLCJhIjoiY2pzdWdsNnJvMDJuODQ5b2VydTBuYWF4dCJ9.4RfNabbj_uH0TcKSACZ_Lw'
    }).addTo(map);

};
$(document).ready(createMap);