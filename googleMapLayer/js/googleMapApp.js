const circleObjects=[];
const polygonObjects=[];
const recObjects=[];
const allObjects=[];
const lineObjects=[];
const markerObjects=[];
var allObj=0;
var arrHeader = new Array();
var circleMapNew = new Map();
var markerMap=new Map();
var polygonMap = new Map();
var rectangleMap= new Map();
var polyLineMap=new Map();
var RecshapeTypeMap=new Map();
var CircleshapeTypeMap=new Map();
var polyCoordinatesMap=new Map();
var lineCoordinatesMap=new Map();
var markerCoordinatesMap=new Map();
var markerShapeMap=new Map();
var polyShapesMap=new Map();
var lineShapesMap=new Map();
//maps for store shapes coordinates
var recCordinatesMap=new Map();
var circleCordinatesMap=new Map();
arrHeader=['Shape Id','Shape','Delete'];
var map;
function drawtools() {
   map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: new google.maps.LatLng(6.931970, 79.857750),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });}
  //create table
  function createTable(){

    var shapesTable = document.createElement('table');
    shapesTable.setAttribute('id','shapesTable');
    var tr=shapesTable.insertRow(-1);

    for(var i=0;i<arrHeader.length; i++) {
      var th=document.createElement('th');
      th.innerHTML= arrHeader[i];
      tr.appendChild(th);
    }

    var div =document.getElementById('tbl');
    div.appendChild(shapesTable);

    }
    //add circle row
    function addcirclerow(circleId){
 var shapesTable = document.getElementById('shapesTable');

            var rowCount = shapesTable.rows.length;
            var tr=shapesTable.insertRow(rowCount);
            tr=shapesTable.insertRow(rowCount);

            for (var i=0;i<arrHeader.length; i++)
            {
              var td= document.createElement('td');
              td=tr.insertCell(i);
            if(i==2) {
              var button=document.createElement('input');
              button.setAttribute('type','button');
              button.setAttribute('value','Remove');

              button.setAttribute('onclick', 'removeCircleRow(' + circleId + ', this)');
              td.appendChild(button);
            }
            else if(i==1){
              var shape=document.innerHTML="Circle";
              td.append(shape);
            }
            else{
              var idd=document.innerHTML=circleId;
              td.append(idd);
            }
            }
          }

          //add polygon row
          function addpolygonrow(polygonId){
            var shapesTable = document.getElementById('shapesTable');

            var rowCount = shapesTable.rows.length;
            var tr=shapesTable.insertRow(rowCount);
            tr=shapesTable.insertRow(rowCount);

            for (var i=0;i<arrHeader.length; i++)
            {
              var td= document.createElement('td');
              td=tr.insertCell(i);
            if(i==2) {
              var button=document.createElement('input');
              button.setAttribute('type','button');
              button.setAttribute('value','Remove');

              button.setAttribute('onclick', 'removePolygonRow('+polygonId+',this)');
              td.appendChild(button);
            }
            else if(i==1){
              var shape=document.innerHTML="Polygon";
              td.append(shape);
            }
            else{
              var idd=document.innerHTML=polygonId;
              td.append(idd);
            }
            }
              }

      //add rectangle row
              function addrectanglerow(rectanId){
                var shapesTable = document.getElementById('shapesTable');

                var rowCount = shapesTable.rows.length;
                var tr=shapesTable.insertRow(rowCount);
                tr=shapesTable.insertRow(rowCount);

                for (var i=0;i<arrHeader.length; i++)
                {
                  var td= document.createElement('td');
                  td=tr.insertCell(i);
                if(i==2) {
                  var button=document.createElement('input');
                  button.setAttribute('type','button');
                  button.setAttribute('value','Remove');

                  button.setAttribute('onclick', 'removeRectRow('+rectanId+',this)');
                  td.appendChild(button);
                }
                else if(i==1){
                  var shape=document.innerHTML="Rectangle";
                  td.append(shape);
                }
                else{
                  var idd=document.innerHTML=rectanId;
              td.append(idd);
                }
                }
                  }
                      function addpolyLinerow(lineID){
                    var shapesTable = document.getElementById('shapesTable');

                    var rowCount = shapesTable.rows.length;
                    var tr=shapesTable.insertRow(rowCount);
                    tr=shapesTable.insertRow(rowCount);
                    for (var i=0;i<arrHeader.length; i++)
                {
                  var td= document.createElement('td');
                  td=tr.insertCell(i);
                if(i==2) {
                  var button=document.createElement('input');
                  button.setAttribute('type','button');
                  button.setAttribute('value','Remove');

                  button.setAttribute('onclick', 'removeLineRow('+lineID+',this)');
                  td.appendChild(button);
                }
                else if(i==1){
                  var shape=document.innerHTML="PolyLine";
                  td.append(shape);
                }
                else{
                  var idd=document.innerHTML=lineID;
              td.append(idd);
                }
                }
                  }
                  //add marker row
                  function addMarkerRow(markId){
                    var shapesTable = document.getElementById('shapesTable');

                    var rowCount = shapesTable.rows.length;
                    var tr=shapesTable.insertRow(rowCount);
                    tr=shapesTable.insertRow(rowCount);

                    for (var i=0;i<arrHeader.length; i++)
                {
                  var td= document.createElement('td');
                  td=tr.insertCell(i);
                if(i==2) {
                  var button=document.createElement('input');
                  button.setAttribute('type','button');
                  button.setAttribute('value','Remove');

                  button.setAttribute('onclick', 'removeMarkerRow('+markId+',this)');
                  td.appendChild(button);
                }
                else if(i==1){
                  var shape=document.innerHTML="Marker";
                  td.append(shape);
                }
                else{
                  var idd=document.innerHTML=markId;
              td.append(idd);
                }
                }

                  }
//Remove Circle
                  function removeCircleRow(circleId, oButton) {
                    var empTab = document.getElementById('shapesTable');
                    empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);       // BUTTON -> TD -> TR.
                    var circleObj = circleMapNew.get(circleId);
                    console.log("circle");
                    for(var i=0;i<circleObjects.length;i++){
                      console.log(circleObjects[i]);
                      if(circleObjects[i]==circleId){
                        circleObjects.splice(i,1);
                        i--;

                        console.log("deleted circle");
                        circleMapNew.delete(circleId);
                        console.log("circle map deleted");
                      }
                    }
                    for(var i=0;i<allObjects.length;i++){
                      if(allObjects[i]==circleId)
                      {
                        allObjects.splice(i,1);
                        i--;
                      }
                    }
                    circleObj.setMap(null);

                }
                //Remove Polygon
                function removePolygonRow(polygonId, oButton) {
                  var empTab = document.getElementById('shapesTable');
                  empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);       // BUTTON -> TD -> TR.
                  var polygonObj = polygonMap.get(polygonId);
                  for(var i=0;i<allObjects.length;i++){
                    if(allObjects[i]==polygonId)
                    {
                      allObjects.splice(i,1);
                      i--;
                    }
                  }
                  polygonObj.setMap(null);

              }
              //remove rectangle
              function removeRectRow(rectangleId, oButton) {
                var empTab = document.getElementById('shapesTable');
                empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);       // BUTTON -> TD -> TR.
                var recObj = rectangleMap.get(rectangleId);
                console.log("rectangles");
               for(var i=0;i<recObjects.length;i++){
                 console.log(recObjects[i]);
                 if (recObjects[i]==rectangleId){
                  recObjects.splice(i,1);
                  i--;
                  console.log("Deleted");
                  rectangleMap.delete(rectangleId);

                 }
               }

               for(var i=0;i<allObjects.length;i++){
                if(allObjects[i]==rectangleId)
                {
                  allObjects.splice(i,1);
                  i--;
                }
              }
                recObj.setMap(null);

            }
             //remove polyline
            function removeLineRow(polylineid, oButton){
              var empTab = document.getElementById('shapesTable');
                empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);
                var lineObj=polyLineMap.get(polylineid);
                for(var i=0;i<lineObj.length;i++){
                  if(lineObjects[i]==polylineid){
                    lineObjects.splice(i,1);
                    i--;
                    polyLineMap.delete(polylineid);

                  }
                }
                for(var i=0;i<allObjects.length;i++){
                  if(allObjects[i]==polylineid)
                  {
                    allObjects.splice(i,1);
                    i--;
                  }
                }
                lineObj.setMap(null);
              }
               //remove marker
              function removeMarkerRow(markId,oButton){
                var empTab = document.getElementById('shapesTable');
                empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);
                var markObj=markerMap.get(markId);
                for(var i=0; i<markObj.length;i++){
                  if(markerObjects[i]==markId){
                    markerObjects.splice(i,1);
                    i--;
                    markerMap.delete(markId);
                  }
                }

                for(var i=0;i<allObjects.length;i++){
                  if(allObjects[i]==markId)
                  {
                    allObjects.splice(i,1);
                    i--;
                  }
                }

                markObj.setMap(null);
              }

                var cirVal=100;
                var polyVal=200;
                var recVal=300;
                var lineVal=400;
                var markerVal=500;
                var recCordinates;
                var circlCoordinates;
                var polygonCoordinates;
                var LineCoordinate;
                var markerCoordinate;
                var shapeType;
var circlee=[];
            cirID;
            polyID;
            LineID;
            markerID;
                function enableDrawTool()
                {
                  markerID=markerVal;
                  polyID=polyVal;
                  cirID=cirVal;
                  recId=recVal;
                  lineID=lineVal;
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
                  markerOptions:{icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png',
                  draggable:true},


                  circleOptions:{
                    draggable:true,
                    strokeColor: "#DA70D6",
                    fillColor: '#DA70D6',
                    draggable:true,
                    editable:true,
                    cirID:cirVal

                  },

                  polygonOptions: {
                    fillColor: "#1E90FF",
                    strokeColor: "#1E90FF",
                    draggable:true,
                    editable:true,
                    polyID:polyVal
                  },
                  rectangleOptions:{
                    fillColor: "#ffff00",
                    strokeColor: "#ffff00",
                    draggable:true,
                    editable:true,
                    recVal:recVal
                  },
                  polylineOptions:{
                    draggable:true,
                    editable:true,
                    LineID:lineVal
                  },
                  markerOptions:{

                    draggable:true,
                    markerID:markerVal
                  }

                })
                drawingManager.setMap(map);

                var i=0
                google.maps.event.addListener(drawingManager, 'circlecomplete', function(circle){




              cirVal++;
              circleObjects[i]=cirVal;
              i=i+1;
              allObj=allObj+1;
              allObjects[allObj]=cirVal;
              console.log(cirVal);
              circle.cirID=cirVal;
              console.log("cir ID "+circle.cirID);
              console.log(circle);

              circleMapNew.set(cirVal, circle);
              addcirclerow(cirVal);
              circlCoordinates= circle.center.toString();
              shapeType="circle";
              circleCordinatesMap.set(cirVal,circlCoordinates,circle);
              CircleshapeTypeMap.set(cirVal,shapeType,circle);

                })

                google.maps.event.addListener(drawingManager, 'polygoncomplete', function (polygon) {

                  polyVal++;
                  polygon.polyID=polyVal;
                  console.log("polygon id ", polygon.polyID);
                  polygonMap.set(polyVal, polygon);
                  addpolygonrow(polyVal);

              var plgn = new google.maps.MVCArray();
    for (var i = 0; i < polygon.getPath().getLength(); i++) {
      plgn.push(polygon.getPath().getAt(i).toUrlValue(3));
      console.log(polygon.getPath().getAt(i).toUrlValue(3));
    }

    polygonCoordinates=plgn.getArray();
    console.log(polygonCoordinates);
    polyCoordinatesMap.set(polyVal,polygonCoordinates,polygon);
    shapeType="Polygon";
    polyShapesMap.set(polyVal,shapeType,polygon);
    allObj=allObj+1;
              allObjects[allObj]=polyVal;
              console.log(allObjects[allObj]);

                })

                google.maps.event.addListener(drawingManager, 'rectanglecomplete', function (rec){
                  recVal++;


                  rec.recId=recVal;
                  console.log("rectangle id ", rec.recId);
                  rectangleMap.set(recVal,rec)
                  addrectanglerow(recVal);
                  recObjects[i]=recVal;
                  i=i+1;
                   recCordinates=rec.getBounds().toString();
                  console.log("rectangle added");
                  console.log(recCordinates);
                  shapeType="rectangle"
                  recCordinatesMap.set(recVal,recCordinates,rec);
                  RecshapeTypeMap.set(recVal,shapeType,rec)
                  allObj=allObj+1;
              allObjects[allObj]=recVal;
                })

                google.maps.event.addListener(drawingManager, 'polylinecomplete', function (polyline) {

                  console.log("okay");
                  lineVal++;
                  polyline.lineID=lineVal;
                  polyLineMap.set(lineVal,polyline);
                  addpolyLinerow(lineVal);
                  lineObjects[i]=lineVal;
                  i++;
                  LineCoordinate=polyline.getPath().getArray().toString();
                  console.log(LineCoordinate);
                  shapeType="polyline";
                  lineCoordinatesMap.set(lineVal,LineCoordinate,polyline);
                  lineShapesMap.set(lineVal,shapeType,polyline);
                  allObj=allObj+1;
                  allObjects[allObj]=lineVal

                })
                google.maps.event.addListener(drawingManager, 'markercomplete', function (marker){
console.log("marker");
markerVal++;
console.log(markerVal);
marker.markerID=markerVal;
markerMap.set(markerVal, marker);
markerObjects[i]=markerVal;
i++;
allObj=allObj+1;
                  allObjects[allObj]=markerVal;
                  addMarkerRow(markerVal);
                  console.log("completed");


                  var mrkLat=marker.position.lat();
                  var mrkLng=marker.position.lng();
                  var coordinate=[2];
                  coordinate[0]=mrkLat;
                  coordinate[1]=mrkLng;
                  var markerCoordinate=coordinate;
                  shapeType="Marker";
                  console.log(markerCoordinate);
                  markerCoordinatesMap.set(markerVal,markerCoordinate,marker);
                  console.log("markerCoordinatesMap "+markerCoordinatesMap.get(markerVal));
                  markerShapeMap.set(markerVal,shapeType,marker);

                })

                }

             function getCoordinates(){

              const jsonObj=[];
              var shapetype;
              var cor;
              for(var i=0;i<allObjects.length;i++){

                var ob=allObjects[i]
                console.log("idddddd "+ob);
                if(ob>=101&& ob<200){
                   cor=circleCordinatesMap.get(allObjects[i]);
                   shapetype=CircleshapeTypeMap.get(allObjects[i]);
                   jsonObj.push({'ShapeType':shapeType},{'coordinates':cor});
                }
                 if(ob>=301&& ob<400){
                   cor=recCordinatesMap.get(allObjects[i]);
                   shapetype=RecshapeTypeMap.get(allObjects[i]);
                   jsonObj.push({'ShapeType':shapeType},{'coordinates':cor});
                }
                 if(ob>=201&& ob<300){
                  cor=polyCoordinatesMap.get(allObjects[i]);
                  shapetype=polyShapesMap.get(allObjects[i]);
                  jsonObj.push({'ShapeType':shapeType},{'coordinates':cor});
               }
                  if(ob>=401&& ob<500){
                cor=lineCoordinatesMap.get(allObjects[i]);
                shapetype=lineShapesMap.get(allObjects[i]);
                jsonObj.push({'ShapeType':shapeType},{'coordinates':cor});
             }
             if(ob>=501&& ob<600){
              console.log("idddddd "+ob);
              cor=markerCoordinatesMap.get(allObjects[i]);

              console.log(cor);
              shapetype=markerShapeMap.get(allObjects[i]);
              jsonObj.push({'ShapeType':shapeType},{'coordinates':cor});
           }

                console.log(cor);
                console.log("Shape for ",allObjects[i]);


                document.getElementById("coordinates").innerHTML=JSON.stringify(jsonObj);
               }

                console.log(jsonObj);
                for(i=0;i<allObjects.length;i++){
                  console.log("all objects"+allObjects[i]);
                }

             }

             function importingPolygon()
             {
               var poly=new google.maps.MVCArray();
              var objjj=[];
               var impval=document.getElementById("textArea").value;
               objjj=JSON.parse(impval);
               for (var i=0;i<objjj.length;i++){
                 var lat=objjj[i].lat;
                 var lng=objjj[i].lng;
                 poly.push(new google.maps.LatLng(objjj[i]));
                 console.log(objjj[i]);
               }
               var PolygonOptions={path:poly};
               var Polygon = new google.maps.Polygon(PolygonOptions);
               Polygon.setMap(map);

             }

             function importingPolyline(){

              var poly=new google.maps.MVCArray();
              var objjj=[];
               var impval=document.getElementById("textArea").value;
               objjj=JSON.parse(impval);
               for (var i=0;i<objjj.length;i++){
                 var lat=objjj[i].lat;
                 var lng=objjj[i].lng;
                 poly.push(new google.maps.LatLng(objjj[i]));
                 console.log(objjj[i]);
               }
               var polylineOptions={path:poly};
               var polyline=new google.maps.Polyline(polylineOptions);
               polyline.setMap(map);
             }

             function importingRectangle(){
              var poly=new google.maps.MVCArray();
              var objjj=[];
               var impval=document.getElementById("textArea").value;
               objjj=JSON.parse(impval);

               var rectangleOptions={
                bounds:{north:objjj[0],
                south: objjj[1],
                east: objjj[2],
                west: objjj[3]}};
               var rectangle=new google.maps.Rectangle(rectangleOptions);
               rectangle.setMap(map);
             }
