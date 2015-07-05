artHobart = new Mongo.Collection('art-hobart');

artHobart.all = function() {
  return(artHobart.find({}).fetch());
};

