Monsters = new Mongo.Collection('monsters');

Monsters.planar = function() {
	console.log(Monsters.find({setting:"Planar Powers"}).fetch());
  return Monsters.find({setting:"Planar Powers"}).fetch();
};
Meteor.methods({
  
});

