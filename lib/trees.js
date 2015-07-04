trees= new Mongo.Collection('trees');

trees.all = function() {
  return(trees.find({}).fetch());
};
