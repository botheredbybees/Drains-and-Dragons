art = new Mongo.Collection('art');

art.all = function() {
  return(artHobart.find({}).fetch());
};
