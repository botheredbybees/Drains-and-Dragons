// on startup run resizing event
Meteor.startup(function() {

  $(window).resize(function() {
  });

   sAlert.config({
        effect: 'jelly',
        position: 'top-left',
        timeout: 2500,
        html: false,
        onRouteClose: true,
        stack: true,
        offset: 0
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




  $('#map').css('height', $('#container').height());
  L.Icon.Default.imagePath = 'packages/bevanhunt_leaflet/images';

  map = L.map('map', {
    doubleClickZoom: false, 
    zoomControl: false,
    attributionControl: false 
  //}).setView([-42.8806, 147.3250], 13);
  }).setView([-42.831024, 147.276568], 13);
  new L.Control.Zoom({ position: 'bottomright' }).addTo(map);
  //map.locate({setView: true, maxZoom: 16}); // turn off location tracking for demo

  var basemap = L.tileLayer.provider('Thunderforest.Outdoors').addTo(map);

  var lc = L.control.locate({
        position: 'bottomright',  // set the location of the control
        drawCircle: true,  // controls whether a circle is drawn that shows the uncertainty about the location
        follow: true,  // follow the user's location
        setView: true, // automatically sets the map view to the user's location, enabled if `follow` is true
        keepCurrentZoomLevel: false, // keep the current map zoom level when displaying the user's location. (if `false`, use maxZoom)
        stopFollowingOnDrag: false, // stop following when the map is dragged if `follow` is true (deprecated, see below)
        remainActive: true, // if true locate control remains active on click even if the user's location is in view.
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

    // get markers

    // var pitListCursor = pits.find({});
    // console.log("find done");
    // var pitList = pitListCursor.fetch();
    // pitListCursor.forEach(function(point){
    //   console.log("point found");
    //   var lat = parseFloat(point.geometry.coordinates[1]);
    //   console.log(lat);
    //   var longitude = parseFloat(point.geometry.coordinates[0]);
    //   console.log(longitude);
    //   L.marker(L.latLng(lat,longitude)).addTo(map);
    // });

    // var hobartart = Arthobart.find();
    // console.log(Arthobart.all());
    // console.log("Hobart art points");
    // console.log(hobartart);
    // console.log('hobartartpoints');
    // console.log(hobartartpoints);
    // hobartart.forEach(function(point){
    //   var lat = parseFloat(point.geometry.coordinates[1]);
    //   console.log(lat);
    //   var longitude = parseFloat(point.geometry.coordinates[0]);
    //   console.log(longitude);
    //   L.marker(L.latLng(lat,longitude)).addTo(map);
    // });

// glenorcy art
    layer = [];
    var planarIcon = L.icon({
      iconUrl: 'img/monsters/planar_powers_icon.png',
      //shadowUrl: 'img/monsters/planar_powers_icon_shadow.png',

      iconSize:     [40, 30], // size of the icon
      //shadowSize:   [54, 60], // size of the shadow
      iconAnchor:   [20, 30], // point of the icon which will correspond to marker's location
      //shadowAnchor: [25, 45],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    var markers = new L.MarkerClusterGroup({ 
        iconCreateFunction: function (cluster) {
            var markers = cluster.getAllChildMarkers();
            var html = '<div class="icon-gartcircle">' + markers.length + '</div>';
            return L.divIcon({ html: html, className: 'mycluster', iconSize: L.point(40, 40) });
        },
        spiderfyOnMaxZoom: false, showCoverageOnHover: false, zoomToBoundsOnClick: false, maxClusterRadius: 10 
    });
    artpoints.forEach(function(point){
      lat = parseFloat(point[1]);
      longitude = parseFloat(point[0]);
      markers.addLayer(new L.marker(L.latLng(lat,longitude), {icon: planarIcon}));
    });
    var artgroup = map.addLayer(markers);
    markers.on('click', function (a) {
      monsternum = Math.floor((Math.random() * 14));
      //console.log('monsternum: '+ monsternum);
      var suspects = Monsters.planar();
      //console.log(suspects);
      var opponent = suspects[monsternum];
      //console.log(opponent);
      Session.set("selectedMonster",opponent.name);
      Session.set("fighting", true);
      Session.set("monsterSetting", "planar");
      Session.set("monsterfile","planar_powers");
      Session.set("playerhealth",100);
      Router.go('showamonster');
    });

    // artpoints.forEach(function(point){
    //   var lat = parseFloat(point[1]);
    //   //console.log(lat);
    //   var longitude = parseFloat(point[0]);
    //   //console.log(longitude);
    //   layer.push(L.marker(L.latLng(lat,longitude)));
    // });
    // var artgroup = L.layerGroup(layer).addTo(map);
    // // var hobartartgroup = L.layerGroup(layer);


    var undeadIcon = L.icon({
        iconUrl: 'img/monsters/legions_undead_icon.png',
        //shadowUrl: 'img/monsters/planar_powers_icon_shadow.png',

        iconSize:     [40, 30], // size of the icon
        //shadowSize:   [54, 60], // size of the shadow
        iconAnchor:   [20, 30], // point of the icon which will correspond to marker's location
        //shadowAnchor: [25, 45],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    // var bbqmarkers = new L.MarkerClusterGroup({ 
    //     iconCreateFunction: function (cluster) {
    //         var markers = cluster.getAllChildMarkers();
    //         var html = '<div class="icon-bbqcircle">' + markers.length + '</div>';
    //         return L.divIcon({ html: html, className: 'mycluster', iconSize: L.point(40, 40) });
    //     },
    //     spiderfyOnMaxZoom: false, showCoverageOnHover: false, zoomToBoundsOnClick: false, maxClusterRadius: 80 
    // });
    // bbqspoints.forEach(function(point){
    //   lat = parseFloat(point[1]);
    //   longitude = parseFloat(point[0]);
    //   bbqmarkers.addLayer(new L.marker(L.latLng(lat,longitude), {icon: undeadIcon}));
    // });
    // var bbqgroup = map.addLayer(bbqmarkers);
    // bbqmarkers.on('click', function (a) {
    //   monsternum = Math.floor((Math.random() * 18));
    //   //console.log('monsternum: '+ monsternum);
    //   var suspects = Monsters.undead();
    //   //console.log(suspects);
    //   var opponent = suspects[monsternum];
    //   //console.log(opponent);
    //   Session.set("selectedMonster",opponent.name);
    //   Session.set("fighting", true);
    //   Session.set("monsterSetting", "bbqs");
    //   Session.set("monsterfile","legions_undead");
    //   Session.set("playerhealth",100);
    //   Router.go('showamonster');
    // });

//  glenorcy bbqs
    bbqmarkers = [];
    bbqspoints.forEach(function(point){
      var lat = parseFloat(point[1]);
      //console.log(lat);
      var longitude = parseFloat(point[0]);
      //console.log(longitude);
      L.marker(L.latLng(lat,longitude), {icon: undeadIcon}).addTo(map).on('click', function (a) {
        monsternum = Math.floor((Math.random() * 18));
        //console.log('monsternum: '+ monsternum);
        var suspects = Monsters.undead();
        //console.log(suspects);
        var opponent = suspects[monsternum];
        //console.log(opponent);
        Session.set("selectedMonster",opponent.name);
        Session.set("fighting", true);
        Session.set("monsterSetting", "bbqs");
        Session.set("monsterfile","legions_undead");
        Session.set("playerhealth",100);
        Router.go('showamonster');
      });
    });
    // var hobartartgroup = L.layerGroup(layer);


    
    var swampIcon = L.icon({
      iconUrl: 'img/monsters/swamp_icon.png',
      //shadowUrl: 'img/monsters/planar_powers_icon_shadow.png',

      iconSize:     [40, 30], // size of the icon
      //shadowSize:   [54, 60], // size of the shadow
      iconAnchor:   [20, 30], // point of the icon which will correspond to marker's location
      //shadowAnchor: [25, 45],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    var pitmarkers = new L.MarkerClusterGroup({ 
        iconCreateFunction: function (cluster) {
            var markers = cluster.getAllChildMarkers();
            var html = '<div class="icon-pitcircle">' + markers.length + '</div>';
            return L.divIcon({ html: html, className: 'mycluster', iconSize: L.point(40, 40) });
        },
        spiderfyOnMaxZoom: false, showCoverageOnHover: false, zoomToBoundsOnClick: false, maxClusterRadius: 10 
    });
    pitpoints.forEach(function(point){
      lat = parseFloat(point[1]);
      longitude = parseFloat(point[0]);
      pitmarkers.addLayer(new L.marker(L.latLng(lat,longitude), {icon: swampIcon}));
    });
    var bbqgroup = map.addLayer(pitmarkers);
    pitmarkers.on('click', function (a) {
      monsternum = Math.floor((Math.random() * 20));
      //console.log('monsternum: '+ monsternum);
      var suspects = Monsters.swamp();
      //console.log(suspects);
      var opponent = suspects[monsternum];
      //console.log(opponent);
      Session.set("selectedMonster",opponent.name);
      Session.set("fighting", true);
      Session.set("monsterSetting", "pits");
      Session.set("monsterfile","denizens_swamp");
      Session.set("playerhealth",100);
      Router.go('showamonster');
    });

// // // glenorcy pits
// //     layer = [];
// //     pitpoints.forEach(function(point){
// //       var lat = parseFloat(point[1]);
// //       //console.log(lat);
// //       var longitude = parseFloat(point[0]);
// //       //console.log(longitude);
// //       layer.push(L.marker(L.latLng(lat,longitude)));
// //     });
// //     var pitgroup = L.layerGroup(layer).addTo(map);

    var cavernIcon = L.icon({
      iconUrl: 'img/monsters/cavern_icon.png',
      //shadowUrl: 'img/monsters/planar_powers_icon_shadow.png',

      iconSize:     [40, 30], // size of the icon
      //shadowSize:   [54, 60], // size of the shadow
      iconAnchor:   [20, 30], // point of the icon which will correspond to marker's location
      //shadowAnchor: [25, 45],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    var nodemarkers = new L.MarkerClusterGroup({ 
        iconCreateFunction: function (cluster) {
            var markers = cluster.getAllChildMarkers();
            var html = '<div class="icon-caverncircle">' + markers.length + '</div>';
            return L.divIcon({ html: html, className: 'mycluster', iconSize: L.point(40, 40) });
        },
        spiderfyOnMaxZoom: false, showCoverageOnHover: false, zoomToBoundsOnClick: false, maxClusterRadius: 100 
    });
    drainnodepoints.forEach(function(point){
      lat = parseFloat(point[1]);
      longitude = parseFloat(point[0]);
      nodemarkers.addLayer(new L.marker(L.latLng(lat,longitude), {icon: cavernIcon}));
    });
    var nodegroup = map.addLayer(nodemarkers);
    nodemarkers.on('click', function (a) {
      monsternum = Math.floor((Math.random() * 19));
      //console.log('monsternum: '+ monsternum);
      var suspects = Monsters.cavern();
      //console.log(suspects);
      var opponent = suspects[monsternum];
      //console.log(opponent);
      Session.set("selectedMonster",opponent.name);
      Session.set("fighting", true);
      Session.set("monsterSetting", "nodes");
      Session.set("monsterfile","cavern_dwellers");
      Session.set("playerhealth",100);
      Router.go('showamonster');
    });


// // // hobart drainage nodes
// //     layer = [];
// //     drainnodepoints.forEach(function(point){
// //       var lat = parseFloat(point[1]);
// //       //console.log(lat);
// //       var longitude = parseFloat(point[0]);
// //       //console.log(longitude);
// //       layer.push(L.marker(L.latLng(lat,longitude)));
// //     });
// //     var drainnodegroup = L.layerGroup(layer).addTo(map);

    var binIcon = L.icon({
      iconUrl: 'img/monsters/bin_icon.png',
      //shadowUrl: 'img/monsters/planar_powers_icon_shadow.png',

      iconSize:     [40, 30], // size of the icon
      //shadowSize:   [54, 60], // size of the shadow
      iconAnchor:   [20, 30], // point of the icon which will correspond to marker's location
      //shadowAnchor: [25, 45],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    var binmarkers = new L.MarkerClusterGroup({ 
        iconCreateFunction: function (cluster) {
            var markers = cluster.getAllChildMarkers();
            var html = '<div class="icon-bincircle">' + markers.length + '</div>';
            return L.divIcon({ html: html, className: 'mycluster', iconSize: L.point(40, 40) });
        },
        spiderfyOnMaxZoom: false, showCoverageOnHover: false, zoomToBoundsOnClick: false, maxClusterRadius: 100 
    });
    binpoints.forEach(function(point){
      lat = parseFloat(point[1]);
      longitude = parseFloat(point[0]);
      binmarkers.addLayer(new L.marker(L.latLng(lat,longitude), {icon: binIcon}));
    });
    var bbqgroup = map.addLayer(binmarkers);
    binmarkers.on('click', function (a) {
      monsternum = Math.floor((Math.random() * 19));
      //console.log('monsternum: '+ monsternum);
      var suspects = Monsters.bin();
      //console.log(suspects);
      var opponent = suspects[monsternum];
      //console.log(opponent);
      Session.set("selectedMonster",opponent.name);
      Session.set("fighting", true);
      Session.set("monsterSetting", "bins");
      Session.set("monsterfile","ravenous_hordes");
      Session.set("playerhealth",100);
      Router.go('showamonster');
    });

// // // hobart bins
// //     layer = [];
// //     binpoints.forEach(function(point){
// //       var lat = parseFloat(point[1]);
// //       //console.log(lat);
// //       var longitude = parseFloat(point[0]);
// //       //console.log(longitude);
// //       layer.push(L.marker(L.latLng(lat,longitude)));
// //     });
// //     var bingroup = L.layerGroup(layer).addTo(map);
// //     // var hobartartgroup = L.layerGroup(layer);


    var playgroundIcon = L.icon({
      iconUrl: 'img/monsters/lower_icon.png',
      //shadowUrl: 'img/monsters/planar_powers_icon_shadow.png',

      iconSize:     [40, 30], // size of the icon
      //shadowSize:   [54, 60], // size of the shadow
      iconAnchor:   [20, 30], // point of the icon which will correspond to marker's location
      //shadowAnchor: [25, 45],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    var playgroundmarkers = new L.MarkerClusterGroup({ 
        iconCreateFunction: function (cluster) {
            var markers = cluster.getAllChildMarkers();
            var html = '<div class="icon-playgroundcircle">' + markers.length + '</div>';
            return L.divIcon({ html: html, className: 'mycluster', iconSize: L.point(40, 40) });
        },
        spiderfyOnMaxZoom: false, showCoverageOnHover: false, zoomToBoundsOnClick: false, maxClusterRadius: 100 
    });
    playgroundpoints.forEach(function(point){
      lat = parseFloat(point[1]);
      longitude = parseFloat(point[0]);
      playgroundmarkers.addLayer(new L.marker(L.latLng(lat,longitude), {icon: playgroundIcon}));
    });
    var bbqgroup = map.addLayer(playgroundmarkers);
    playgroundmarkers.on('click', function (a) {
      monsternum = Math.floor((Math.random() * 13));
      //console.log('monsternum: '+ monsternum);
      var suspects = Monsters.depth();
      //console.log(suspects);
      var opponent = suspects[monsternum];
      //console.log(opponent);
      Session.set("selectedMonster",opponent.name);
      Session.set("fighting", true);
      Session.set("monsterSetting", "playgrounds");
      Session.set("monsterfile","lower_depths");
      Session.set("playerhealth",100);
      Router.go('showamonster');
    });



// // // hobart playgrounds
// //     layer = [];
// //     playgroundpoints.forEach(function(point){
// //       var lat = parseFloat(point[1]);
// //       //console.log(lat);
// //       var longitude = parseFloat(point[0]);
// //       //console.log(longitude);
// //       layer.push(L.marker(L.latLng(lat,longitude)));
// //     });
// //     var playgroundgroup = L.layerGroup(layer).addTo(map);


    var treeIcon = L.icon({
      iconUrl: 'img/monsters/woods_icon.png',
      //shadowUrl: 'img/monsters/planar_powers_icon_shadow.png',

      iconSize:     [40, 30], // size of the icon
      //shadowSize:   [54, 60], // size of the shadow
      iconAnchor:   [20, 30], // point of the icon which will correspond to marker's location
      //shadowAnchor: [25, 45],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    var treemarkers = new L.MarkerClusterGroup({ 
        iconCreateFunction: function (cluster) {
            var markers = cluster.getAllChildMarkers();
            var html = '<div class="icon-treecircle">' + markers.length + '</div>';
            return L.divIcon({ html: html, className: 'mycluster', iconSize: L.point(40, 40) });
        },
        spiderfyOnMaxZoom: false, showCoverageOnHover: false, zoomToBoundsOnClick: false, maxClusterRadius: 10 
    });
    treepoints.forEach(function(point){
      lat = parseFloat(point[1]);
      longitude = parseFloat(point[0]);
      treemarkers.addLayer(new L.marker(L.latLng(lat,longitude), {icon: treeIcon}));
    });
    var bbqgroup = map.addLayer(treemarkers);
    treemarkers.on('click', function (a) {
      monsternum = Math.floor((Math.random() * 18));
      //console.log('monsternum: '+ monsternum);
      var suspects = Monsters.woods();
      //console.log(suspects);
      var opponent = suspects[monsternum];
      //console.log(opponent);
      Session.set("selectedMonster",opponent.name);
      Session.set("fighting", true);
      Session.set("monsterSetting", "trees");
      Session.set("monsterfile","dark_woods");
      Session.set("playerhealth",100);
      Router.go('showamonster');
    });


// // // hobart trees
// //     layer = [];
// //     treepoints.forEach(function(point){
// //       var lat = parseFloat(point[1]);
// //       //console.log(lat);
// //       var longitude = parseFloat(point[0]);
// //       //console.log(longitude);
// //       layer.push(L.marker(L.latLng(lat,longitude)));
// //     });
// //     var treegroup = L.layerGroup(layer).addTo(map);


    
    var hartmarkers = new L.MarkerClusterGroup({ 
        iconCreateFunction: function (cluster) {
            var markers = cluster.getAllChildMarkers();
            var html = '<div class="icon-gartcircle">' + markers.length + '</div>';
            return L.divIcon({ html: html, className: 'mycluster', iconSize: L.point(40, 40) });
        },
        spiderfyOnMaxZoom: false, showCoverageOnHover: false, zoomToBoundsOnClick: false, maxClusterRadius: 10 
    });
    arthobartpoints.forEach(function(point){
      lat = parseFloat(point[1]);
      longitude = parseFloat(point[0]);
      hartmarkers.addLayer(new L.marker(L.latLng(lat,longitude), {icon: planarIcon}));
    });
    var bbqgroup = map.addLayer(hartmarkers);
    hartmarkers.on('click', function (a) {
      monsternum = Math.floor((Math.random() * 14));
      //console.log('monsternum: '+ monsternum);
      var suspects = Monsters.planar();
      //console.log(suspects);
      var opponent = suspects[monsternum];
      //console.log(opponent);
      Session.set("selectedMonster",opponent.name);
      Session.set("fighting", true);
      Session.set("monsterSetting", "planar");
      Session.set("monsterfile","planar_powers");
      Session.set("playerhealth",100);
      Router.go('showamonster');
    });

//   // hobart art
//     var layer = [];
//     arthobartpoints.forEach(function(point){
//       var lat = parseFloat(point[1]);
//       //console.log(lat);
//       var longitude = parseFloat(point[0]);
//       //console.log(longitude);
//       layer.push(L.marker(L.latLng(lat,longitude)));
//     });
//     var hobartartgroup = L.layerGroup(layer).addTo(map);

//     var baseMaps = {
//       "Environments": basemap
//     };
//     var overlayMaps = {
//         "Glenorchy Art": artgroup,
//         "Glenorchy BBQs": bbqgroup,
//         "Glenorchy Stormater Pits": pitgroup,
//         "Hobart Drains": drainnodegroup,
//         "Hobart Bins": bingroup,
//         "Hobart Playgrounds": playgroundgroup,
//         "Hobart Trees": treegroup,
//         "Hobart Art": hobartartgroup,
//     };



//     L.control.layers(baseMaps, overlayMaps, {position: 'bottomright'}).addTo(map);



lc.start();


  // var query = Markers.find();
  // query.observe({
  //   added: function (document) {
  //     var marker = L.marker(document.latlng).addTo(map)
  //       .on('click', function(event) {
  //         map.removeLayer(marker);
  //         Markers.remove({_id: document._id});
  //       });
  //   },
  //   removed: function (oldDocument) {
  //     layers = map._layers;
  //     var key, val;
  //     for (key in layers) {
  //       val = layers[key];
  //       if (val._latlng) {
  //         if (val._latlng.lat === oldDocument.latlng.lat && val._latlng.lng === oldDocument.latlng.lng) {
  //           map.removeLayer(val);
  //         }
  //       }
  //     }
  //   }
  // });
};
