// my marker
var myMarker = L.AwesomeMarkers.icon({
  icon: 'building',
  prefix: 'fa',
  markerColor: 'darkblue'
});

var myMarker2 = L.AwesomeMarkers.icon({
  icon: 'briefcase',
  prefix: 'fa',
  markerColor: 'darkblue'
});




// Longitude/Latitude UQAR
var latlngu = L.latLng(48.452900, -68.512790);
// Longitude/Latitude UM2
var latlngm = L.latLng(43.63139, 3.86731);
var zoom = 5;


// set up the map and remove the default zoomControl
var map = L.map('map', {
    zoomControl: false
});
//
var map2 = L.map('map2', {
    zoomControl: false
});



map.setView(latlngu, zoom);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | <a href="http://www.openstreetmap.org/#map=17/48.45315/-68.51316">View larger map</a> '
}).addTo(map);

// add a marker in the given location, attach some popup content to it and open the popup
L.marker(latlngu, {icon: myMarker2}).addTo(map)
    .bindPopup('<a href="http://www.uqar.ca"><b>UQAR</b></a> <br/> Campus de Rimouski <br/> 300, allée des Ursulines <br/> Riouski, Qc (Canada) G5L 3A1 <br/> <i class="fa fa-phone fa"></i>  &nbsp; +1 418 723-1986 (1569) ')
    .openPopup();
//
// add the new control to the map
var zoomHome = new L.Control.zoomHome(latlngu, zoom);
zoomHome.addTo(map);







// Map Montpellier

var latm = 43.63139;
var lngm = 3.86731;


map2.setView(latlngm, zoom);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | <a href="http://www.openstreetmap.org/#map=18/43.63127/3.86687">View larger map</a> '
}).addTo(map2);


L.marker(latlngm, {icon: myMarker}).addTo(map2)
    .bindPopup('<a href="http://www.umr-marbec.fr/en/#"><b>MARBEC</b></a> <br/> Universite de Montpellier - Faculté des Sciences <br/> Place Eugène Bataillon - bât 24 - CC093 <br/> 34 095 MONTPELLIER Cedex 5')
    .openPopup();


// add the new control to the map
var zoomHome2 = new L.Control.zoomHome(latlngm, zoom);
zoomHome2.addTo(map2);
