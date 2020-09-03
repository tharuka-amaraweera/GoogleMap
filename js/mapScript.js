
function multipleMarkers() {

  var bounds={
    north:44.599,
    south:44.490,
    east:-78.443,
    west: -78.649
  };
  var iconBase =
    'https://developers.google.com/maps/documentation/javascript/examples/full/images/';

  var icons = {
    parking: {
      icon: iconBase + 'parking_lot_maps.png'
    },
    library: {
      icon: iconBase + 'library_maps.png'
    },
    info: {
      icon: iconBase + 'info-i_maps.png'
    }
  };
  var locations = [
    //colombo
    {position: new google.maps.LatLng(6.930653, 79.851013),
      type: 'info',
      name:'Colombo'},
    //kandy
    {position: new google.maps.LatLng(7.279653, 80.639282),
      type: 'parking',
      name:'Kandy'},
    //galle
    {position: new google.maps.LatLng(6.018203, 80.221239),
      type: 'library',
      name:'Galle'},
    //trincomalee
    {position: new google.maps.LatLng(8.567986, 81.231788),
      type: 'info',
      name:'trincomalee'},
    //anuradhapura
    {position: new google.maps.LatLng(8.294124, 80.412777),
      type: 'parking',
      name:'Anuradhapura'}


  ];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: new google.maps.LatLng(6.931970, 79.857750),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  //this is an mvc which is using in google map and similar to a normal array
  var dest = new google.maps.MVCArray();
  dest.push(new google.maps.LatLng(6.930653, 79.851013));//Colombo
  dest.push(new google.maps.LatLng(7.279653, 80.639282));//Kandy
  dest.push(new google.maps.LatLng(6.018203, 80.221239));//Galle

  //define polyline options
  var polylineOptions = {path:dest,
                         strokeColor:"#ff0000",
                         strokeWeight:3};
  //define polyline object
  var polyline= new google.maps.Polyline(polylineOptions);
  polyline.setMap(map);

  //to draw polylines dynamically on the map create click event on the map
   google.maps.event.addListener(map,'click', function (e) {

     var currentPath = polyline.getPath();
     currentPath.push(e.latLng);
   })

  //to draw a polygon
var PolygonOptions = {path:dest};
var Polygon = new google.maps.Polygon(PolygonOptions);

Polygon.setMap(map);

  //to display content in popup window
  var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {
  marker = new google.maps.Marker({
    position: locations[i].position,
    icon: icons[locations[i].type].icon,
    map: map
  });


  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i].name);
      infowindow.open(map, marker);
    }
  })(marker, i));
}

}

function polylines() {
  
}

