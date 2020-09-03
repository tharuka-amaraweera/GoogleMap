function multiplemarkers(){
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
