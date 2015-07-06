drainsHob = new Mongo.Collection('drainagenodes-hobart');

if (Meteor.isServer){
  Meteor.publish('drainagenodes-hobart', function() {
    return drainsHob.find({});
  });
}

if (Meteor.isClient){
  Meteor.subscribe('drainagenodes-hobart', {
    onReady: function(){
      // drainCursor = drainsHob.find();
      // drainCursor.forEach(function(point){
      //   //console.log("point found");
      //   var lat = parseFloat(point.geometry.coordinates[1]);
      //   //console.log(lat);
      //   var longitude = parseFloat(point.geometry.coordinates[0]);
      //   //console.log(long);
      //   L.marker(L.latLng(lat,longitude)).addTo(map);
    });
  }
});
}
