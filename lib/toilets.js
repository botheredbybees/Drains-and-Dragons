toilets = new Mongo.Collection('toilets');

toilets.all = function() {
  return(toilets.find({}).fetch());
};
