

var arrHeader = new Array();
arrHeader=['Shape','Delete'];
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
    function addcirclerow(){
//drawCircle();


      var shapesTable = document.getElementById('shapesTable');

      var rowCount = shapesTable.rows.length;
      var tr=shapesTable.insertRow(rowCount);
      tr=shapesTable.insertRow(rowCount);

      for (var i=0;i<arrHeader.length; i++)
      {
        var td= document.createElement('td');
        td=tr.insertCell(i);
      if(i==1) {
        var button=document.createElement('input');
        button.setAttribute('type','button');
        button.setAttribute('value','Remove');

        button.setAttribute('onclick', 'removeRow(this)');
        td.appendChild(button);
      }
      else{
        var shape=document.innerHTML="Circle";
        td.append(shape);
      }
      }
    }

    //add polygon row

    function addpolygonrow(){

      //drawPolygon();
      var shapesTable = document.getElementById('shapesTable');

      var rowCount = shapesTable.rows.length;
      var tr=shapesTable.insertRow(rowCount);
      tr=shapesTable.insertRow(rowCount);

      for (var i=0;i<arrHeader.length; i++)
      {
        var td= document.createElement('td');
        td=tr.insertCell(i);
      if(i==1) {
        var button=document.createElement('input');
        button.setAttribute('type','button');
        button.setAttribute('value','Remove');

        button.setAttribute('onclick', 'removeRow(this)');
        td.appendChild(button);
      }
      else{
        var shape=document.innerHTML="Polygon";
        td.append(shape);
      }
      }
        }

//add rectangle row
        function addrectanglerow(){

          drawRectangle();
          var shapesTable = document.getElementById('shapesTable');

          var rowCount = shapesTable.rows.length;
          var tr=shapesTable.insertRow(rowCount);
          tr=shapesTable.insertRow(rowCount);

          for (var i=0;i<arrHeader.length; i++)
          {
            var td= document.createElement('td');
            td=tr.insertCell(i);
          if(i==1) {
            var button=document.createElement('input');
            button.setAttribute('type','button');
            button.setAttribute('value','Remove');

            button.setAttribute('onclick', 'removeRow(this)');
            td.appendChild(button);
          }
          else{
            var shape=document.innerHTML="Rectangle";
            td.append(shape);
          }
          }
            }






              function removeRow(oButton) {
                var empTab = document.getElementById('shapesTable');
                empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);       // BUTTON -> TD -> TR.


            }


            var cirVal=100;
            var circlee=[];
            //draw Circle
            function drawCircle()
            {

             cirID=cirVal;

              var drawingManager = new  google.maps.drawing.DrawingManager();
              var circle = google.maps.drawing.OverlayType.CIRCLE;
              drawingManager.setOptions({
                drawingControl: true,
    drawingControlOptions:{
      position:google.maps.ControlPosition.BOTTOM_LEFT,
      drawingModes:[circle]
              },
              circleOptions:{
                draggable:true,
                strokeColor: "#DA70D6",
                fillColor: '#DA70D6',
                draggable:true,
                editable:true,
                cirID:cirVal

                //position: new google.maps.LatLng(circle.getCenter().lat(), circle.getBounds().getNorthEast().lng())
              }
            })

            drawingManager.setMap(map);
            console.log("cir1");
var a;
var i=0
            google.maps.event.addListener(drawingManager, 'circlecomplete', a=function(circle){
              circlee[i]=circle


              i=i+1;
              cirVal++;
              console.log("iddd")
              console.log(cirVal);
              circle.cirID=cirVal;
              console.log("cir ID "+circle.cirID);

              drawingManager.setMap(null);
              return circle.cirID;

            });

            this.hide=function(){

              drawingManager.setMap(null);
            }



            }


            var polyVal=200;
            var del;

            var newObject;
            //draw polygon
            function drawPolygon() {
               polyID=polyVal;
              var drawingManager = new  google.maps.drawing.DrawingManager();
              var polygon=google.maps.drawing.OverlayType.POLYGON;
              drawingManager.setOptions({
                drawingControl: true,
    drawingControlOptions:{
      position:google.maps.ControlPosition.BOTTOM_LEFT,
      drawingModes:[polygon]
              },
              polygonOptions: {
                fillColor: "#1E90FF",
                strokeColor: "#1E90FF",
                draggable:true,
                editable:true,
                polyID:polyVal


                //position: new google.maps.LatLng(circle.getCenter().lat(), circle.getBounds().getNorthEast().lng())
              }
            })

            drawingManager.setMap(map);
            console.log("poly");

            google.maps.event.addListener(drawingManager, 'polygoncomplete', newObject.map=function(polygon){
              polyVal++;
              polygon.polyID=polyVal;
              console.log("poly ID "+polygon.polyID);

              drawingManager.setMap(null);
              delpolygon();

              return polygon.polyID;


              function delpolygon()
              {
                polygon.setMap(null)
              }


            });
console.log("new object",newObject);
            }

//draw rectangle
            var rectVal=300;

            function drawRectangle() {
               rectID=rectVal;
              var drawingManager = new  google.maps.drawing.DrawingManager();
              var rectangle=google.maps.drawing.OverlayType.RECTANGLE;
              drawingManager.setOptions({
                drawingControl: true,
    drawingControlOptions:{
      position:google.maps.ControlPosition.BOTTOM_LEFT,
      drawingModes:[rectangle]
              },
              rectangleOptions:{
                fillColor: "#ffff00",
                strokeColor: "#ffff00",
                draggable:true,
                editable:true,
                rectID:rectVal


                //position: new google.maps.LatLng(circle.getCenter().lat(), circle.getBounds().getNorthEast().lng())
              }
            })

            drawingManager.setMap(map);
            console.log("rect");

            google.maps.event.addListener(drawingManager, 'rectanglecomplete', a=function(rect){
              rectVal++;
              rect.rectID=rectVal;
              console.log("rect Id "+rect.rectID);

              drawingManager.setMap(null);
              return rect.rectID;

            });

            }
//remove circle
            function removeCir()
            {

              var drawingManager = new  google.maps.drawing.DrawingManager();
              //drawingManager.setMap(null);
              console.log("remove circle 1");
              //var a=drawCircle();

              console.log("remove circle 2");

              //console.log("cirID is "+cirID+1);

              alert(cirID+1);

             for(var i=0;i<circlee.length;i++)
             {
               console.log(circlee[i]);

             }



            }
//remove polygon
            function removePoly()
            {
              var drawingManager = new  google.maps.drawing.DrawingManager();
              console.log("remove polygon ");
               alert(polyID+1);
               //delpolygon();

            }
//remove rectangle
            function removeRect()
            {
              console.log("remove Rectangle ");
               alert(rectID+1);
            }


                function enableDrawTool()
                {
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
                  polylineOptions:{
                    draggable:true,
                    editable:true
                  }

                })
                drawingManager.setMap(map);

                google.maps.event.addListener(drawingManager, 'circlecomplete', function(circle){

                  addcirclerow();
                })

                google.maps.event.addListener(drawingManager, 'polygoncomplete', function (polygon) {
                  addpolygonrow();
                })

                google.maps.event.addListener(drawingManager, 'rectanglecomplete', function (rec){
                  addrectanglerow();
                })

                }

               function toolbarHide()
                {
                  drawCircle().hide();
                }


