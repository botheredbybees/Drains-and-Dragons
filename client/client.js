// on startup run resizing event
Meteor.startup(function() {

  $(window).resize(function() {
  });
});

// create marker collection
var Markers = new Meteor.Collection('markers');

Meteor.subscribe('markers');


function showPosition(position) {
    alert(position.coords.latitude);
    alert(position.coords.longitude);

}


Template.mapdisplay.rendered = function() {
  ///navigator.geolocation.watchPosition(showPosition); //get and update the players current location 

  $('#map').css('height', window.innerHeight - 82 - 45);
  L.Icon.Default.imagePath = 'packages/bevanhunt_leaflet/images';

 var map = L.map('map', {
    doubleClickZoom: false
  }).setView([-42.8806, 147.3250], 13);

  map.locate({setView: true, maxZoom: 16});

  L.tileLayer.provider('Thunderforest.Outdoors').addTo(map);

  var lc = L.control.locate({
        position: 'topleft',  // set the location of the control
        drawCircle: true,  // controls whether a circle is drawn that shows the uncertainty about the location
        follow: false,  // follow the user's location
        setView: true, // automatically sets the map view to the user's location, enabled if `follow` is true
        keepCurrentZoomLevel: false, // keep the current map zoom level when displaying the user's location. (if `false`, use maxZoom)
        stopFollowingOnDrag: false, // stop following when the map is dragged if `follow` is true (deprecated, see below)
        remainActive: false, // if true locate control remains active on click even if the user's location is in view.
        markerClass: L.circleMarker, // L.circleMarker or L.marker
        circleStyle: {},  // change the style of the circle around the user's location
        markerStyle: {},
        followCircleStyle: {},  // set difference for the style of the circle around the user's location while following
        followMarkerStyle: {},
        icon: 'fa fa-map-marker',  // class for icon, fa-location-arrow or fa-map-marker
        iconLoading: 'fa fa-spinner fa-spin',  // class for loading icon
        circlePadding: [0, 0], // padding around accuracy circle, value is passed to setBounds
        metric: true,  // use metric or imperial units
        onLocationError: function(err) {alert(err.message)},  // define an error callback function
        onLocationOutsideMapBounds:  function(context) { // called when outside map boundaries
            alert(context.options.strings.outsideMapBoundsMsg);
        },
        showPopup: true, // display a popup when the user click on the inner marker
        strings: {
        title: "Show me where I am",  // title of the locate control
        popup: "You are within {distance} {unit} from this point",  // text to appear if user clicks on circle
        outsideMapBoundsMsg: "You seem located outside the boundaries of the map" // default message for onLocationOutsideMapBounds
        },
        locateOptions: {}  // define location options e.g enableHighAccuracy: true or maxZoom: 10
    }).addTo(map);

lc.start();


  var query = Markers.find();
  query.observe({
    added: function (document) {
      var marker = L.marker(document.latlng).addTo(map)
        .on('click', function(event) {
          map.removeLayer(marker);
          Markers.remove({_id: document._id});
        });
    },
    removed: function (oldDocument) {
      layers = map._layers;
      var key, val;
      for (key in layers) {
        val = layers[key];
        if (val._latlng) {
          if (val._latlng.lat === oldDocument.latlng.lat && val._latlng.lng === oldDocument.latlng.lng) {
            map.removeLayer(val);
          }
        }
      }
    }
  });
};
