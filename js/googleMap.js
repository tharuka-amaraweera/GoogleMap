//Array for table header

var arrHeader = new Array();
arrHeader=['Shape','Delete'];
function drawtools() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: new google.maps.LatLng(6.931970, 79.857750),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });



}
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

  function addcirclerow(){

  

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

  function addpolygonrow(){
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


      function addrectanglerow(){
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
//************************************************************************************************************************* */

function drwcir(){
  var map = new google.maps.Map(document.getElementById('map');

}
