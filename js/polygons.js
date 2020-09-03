function polygons() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: new google.maps.LatLng(6.931970, 79.857750),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var dest = new google.maps.MVCArray();
  dest.push(new google.maps.LatLng(6.930653, 79.851013));//Colombo
  dest.push(new google.maps.LatLng(7.279653, 80.639282));//Kandy
  dest.push(new google.maps.LatLng(6.018203, 80.221239));//Galle

  var PolygonOptions = {path:dest};
  var Polygon = new google.maps.Polygon(PolygonOptions);

  Polygon.setMap(map);
}
