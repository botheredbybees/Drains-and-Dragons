playgrounds = new Mongo.Collection('playgrounds');

playgrounds.all = function() {
  return(playgrounds.find({}).fetch());
};
