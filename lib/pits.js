pits = new Mongo.Collection('pits');

pits.all = function() {
  return(pits.find({}).fetch());
};
