Monsters = new Mongo.Collection('monsters');

Monsters.planar = function() {
	//console.log(Monsters.find({setting:"Planar Powers"}).fetch());
  	return Monsters.find({setting:"Planar Powers"}).fetch();
};

Monsters.undead = function() {
	//console.log(Monsters.find({setting:"Planar Powers"}).fetch());
  	return Monsters.find({setting:"Undead Legions"}).fetch();
};

Monsters.swamp = function() {
	//console.log(Monsters.find({setting:"Planar Powers"}).fetch());
  	return Monsters.find({setting:"Swamp Denizens"}).fetch();
};

Monsters.cavern = function() {
	//console.log(Monsters.find({setting:"Planar Powers"}).fetch());
  	return Monsters.find({setting:"Cavern Dwellers"}).fetch();
};

Monsters.bin = function() {
	//console.log(Monsters.find({setting:"Planar Powers"}).fetch());
  	return Monsters.find({setting:"Ravenous Hordes"}).fetch();
};

Monsters.realm = function() {
	//console.log(Monsters.find({setting:"Planar Powers"}).fetch());
  	return Monsters.find({setting:"Folk of the Realm"}).fetch();
};

Monsters.depth = function() {
	//console.log(Monsters.find({setting:"Planar Powers"}).fetch());
  	return Monsters.find({setting:"Lower Depths"}).fetch();
};

Monsters.woods = function() {
	//console.log(Monsters.find({setting:"Planar Powers"}).fetch());
  	return Monsters.find({setting:"Dark Woods"}).fetch();
};

Monsters.toilets = function() {
	//console.log(Monsters.find({setting:"Planar Powers"}).fetch());
  	return Monsters.find({setting:"Twisted Experiments"}).fetch();
};


Meteor.methods({
  
});

