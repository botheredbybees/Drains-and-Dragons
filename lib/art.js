art = new Mongo.Collection('art');

art.all = function() {
  return(art.find({}).fetch());
};

// poi = new Mongo.Collection('artlocations');
//var location=L.geoJson(mark).addTo(window.map);