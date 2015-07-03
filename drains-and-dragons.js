

$(window).resize(function () {
  var h = $(window).height(), offsetTop = 90; // Calculate the top offset
  $mc = $('#map_canvas');
  $mc.css('height', (h - offsetTop));
}).resize();

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
map = L.map($('#map_canvas'), {
  doubleClickZoom: false,
  touchZoom: false
}).setView(new L.LatLng(-42.8806, 147.3250), 13);

L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {opacity: .5}).addTo(map);
