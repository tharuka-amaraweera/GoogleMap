function polylines() {
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
}
