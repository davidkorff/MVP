
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: new google.maps.LatLng(40.758896,-73.985130),
    mapTypeId: 'roadmap'
  });

  // Create a <script> tag and set the USGS URL as the source.
  var script = document.createElement('script');
  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
  document.getElementsByTagName('head')[0].appendChild(script);
  // var latLng1 = new google.maps.LatLng(40.768996,-73.985130);
  // var latLng2 = new google.maps.LatLng(40.778996,-73.985130);
  // var latLng3 = new google.maps.LatLng(40.765996,-73.985130);
}

// Loop through the results array and place a marker for each
// set of coordinates.
function click(marker) {
  if (infowindow) {
        infowindow.close();
    }
  console.log('click')
  var infowindow = new google.maps.InfoWindow({
    content:  `Website: <a href=${marker.website}>
      ${marker.website}</a> `
  });
  infowindow.open(map, marker);
}

window.eqfeed_callback = function(results) {


  var array = [
    [40.768996,	-73.98513, 'event1'],
    [40.757996,	-73.98513, 'event2'],
    [40.746996,	-73.98513, 'event3']
  ]

    for (let i =0; i<array.length; i++) {
      console.log(array[i][0])
      console.log(array[i][1])
      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(array[i][0],array[i][1]),
          title: array[i][2],
          address: '123 main',
          website: 'https://www.grownyc.org/greenmarket/manhattan-union-square-m',
          map: map
        });
        marker.addListener('click', function() {
          click(this);
        })
    }



  // var latLng1 = new google.maps.LatLng(40.768996,-73.985130);
  // var latLng2 = new google.maps.LatLng(40.778996,-73.985130);
  // var latLng3 = new google.maps.LatLng(40.765996,-73.985130);
  // var marker = new google.maps.Marker({
  //     position: latLng1,
  //     map: map
  //   });
  // var marker = new google.maps.Marker({
  //     position: latLng2,
  //     map: map
  //   });
  // var marker = new google.maps.Marker({
  //     position: latLng3,
  //     map: map
  //   });


  // for (var i = 0; i < results.features.length; i++) {
  //   var coords = results.features[i].geometry.coordinates;
  //   var latLng = new google.maps.LatLng(40.758896,-73.985130);
  //   var marker = new google.maps.Marker({
  //     position: latLng,
  //     map: map
  //   });
  //   var latLng1 = new google.maps.LatLng(40.768996,-73.985130);
  // }
}
