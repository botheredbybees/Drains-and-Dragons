var hbrtLL = [-42.8806, 147.3250];
var zoom = 13;


if (Meteor.isServer) {
  Meteor.startup(function () {
    //startup code
  });
}
if (Meteor.isClient) {
  Meteor.startup(function () {
    Template.map.onRendered = function(){
    map = L.map('map_canvas').setView(hbrtLL, zoom);
    }

  $(window).resize(function () {
    var h = $(window).height(), offsetTop = 90; // Calculate the top offset
    $mc = $('#map_canvas');
    $mc.css('height', (h - offsetTop));
  }).resize();

  });
}
