Arthobart = new Mongo.Collection('arthobart');
//console.log(Arthobart);
Arthobart.all = function() {
  return(Arthobart.find({}).fetch());
};

