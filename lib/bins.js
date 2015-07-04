bins = new Mongo.Collection('bins');

bins.all = function() {
  return(bins.find({}).fetch());
};
