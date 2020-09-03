var citymap = {
  Colombo: {
    center: {lat: 6.930653, lng: 79.851013},
    population: 752993
  },
  Kandy: {
    center: {lat: 7.279653, lng: 80.639282},
    population: 125400
  },
  galle: {
    center: {lat: 6.018203, lng: 80.221239},
    population: 99478
  },
  trincomalee: {
    center: {lat: 8.567986, lng: 81.231788},
    population: 99135
  }
};

function circle() {
  // Create the map.
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    //6.931970, 79.857750
    center: {lat: 6.931970, lng: 79.857750},
    mapTypeId: 'roadmap'
  });

  // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the population.
  for (var city in citymap) {
    // Add the circle for this city to the map.
    var cityCircle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: citymap[city].center,
      radius: Math.sqrt(citymap[city].population) * 70,
      draggable:true
    });
  }
}
