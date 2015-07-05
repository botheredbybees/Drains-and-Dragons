bbqs = new Mongo.Collection('bbqs');

bbqs.all = function() {
  return(bbqs.find({}).fetch());
};
