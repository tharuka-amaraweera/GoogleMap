var selectedShape;

function drawtools() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: new google.maps.LatLng(6.931970, 79.857750),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  //map.data.loadGeoJson('google.json');

  var drawingManager = new  google.maps.drawing.DrawingManager();
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
  var circle = google.maps.drawing.OverlayType.CIRCLE;
  var rectangle=google.maps.drawing.OverlayType.RECTANGLE;
  var polygon=google.maps.drawing.OverlayType.POLYGON;
  var polyline=google.maps.drawing.OverlayType.POLYLINE;
  var marker = google.maps.drawing.OverlayType.MARKER;
  drawingManager.setOptions({

    drawingControl: true,
    drawingControlOptions:{
      position:google.maps.ControlPosition.BOTTOM_LEFT,
      drawingModes:[marker,polygon,circle,rectangle,polyline]
    },
    //markerOptions:{icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
    markerOptions:{icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png',
    draggable:true},


    circleOptions:{
      draggable:true,
      strokeColor: "#DA70D6",
      fillColor: '#DA70D6',
      draggable:true,
      editable:true

      //position: new google.maps.LatLng(circle.getCenter().lat(), circle.getBounds().getNorthEast().lng())
    },

    polygonOptions: {
      fillColor: "#1E90FF",
      strokeColor: "#1E90FF",
      draggable:true,
      editable:true
    },
    rectangleOptions:{
      fillColor: "#ffff00",
      strokeColor: "#ffff00",
      draggable:true,
      editable:true
    },

  });
  getRadius();
  getPolyLineCordinates();
  getRectangleCoordibates();
  getPolygonCoordinates();
  geo();

  function getPolyLineCordinates() {
    {

    }
    google.maps.event.addListener(drawingManager, 'polylinecomplete', function (line) {

      console.log((line.getPath().getArray().toString()));
    })
  }
function getRectangleCoordibates(){
  google.maps.event.addListener(drawingManager, 'rectanglecomplete', function (rec) {

    console.log(rec.getBounds().toString());
  })}
  function getRadius(){
  google.maps.event.addListener(drawingManager, 'circlecomplete', function(circle) {
    var radius = circle.getRadius();
    var c=circle.center.toString();
   // console.log("circle center coordinates "+c);

   // var dest = new google.maps.MVCArray();



  var cor={"type":"circle",
           "coordinates":c}
   console.log(JSON.stringify(cor));

   map.data.loadGeoJson(circle);


  // When the user clicks, set 'isColorful', changing the color of the letters.
  map.data.addListener('click', function(event) {
    event.feature.setProperty('isColorful', true);
  });



  });
  }

function getPolygonCoordinates() {
  google.maps.event.addListener(drawingManager, 'polygoncomplete', function (polygon) {

    var len = polygon.getPath().getLength();
    console.log(len);
     var plgn = new google.maps.MVCArray();
    for (var i = 0; i < len; i++) {
      plgn.push(polygon.getPath().getAt(i).toUrlValue(3));
      console.log(polygon.getPath().getAt(i).toUrlValue(3));
    }
    console.log(plgn.getArray());

  });
}


 /* google.maps.event.addListener(drawingManager, 'overlaycomplete', function (e) {
    if (e.type !== google.maps.drawing.OverlayType.MARKER) {
      // Switch back to non-drawing mode after drawing a shape.
      drawingManager.setDrawingMode(null);*/

  drawingManager.setMap(map);
  function deleteCircle()
  {
    google.maps.event.addListener(drawingManager, 'circlecomplete', function(circle){
      circle.setMap(null);
    });
  }
  google.maps.event.addDomListener(document.getElementById('delete-button'), 'click',deleteCircle );

  function removeCircle()
  {
    circle.setMap(null);
  }

  function clickShape(){
    map.data.addListener('click',function(event){
      event.feature.setProperty('isColorful', false)
    })
  }
  function geo(){
  map.data.loadGeoJson('google.json');
  console.log("geolocation");
}

}

function deleteShape() {
  alert("deleted");
}





