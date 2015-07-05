// Monsters.getmymonster = function() {
//   console.log("1 "+Session.get("selectedMonster"));
//   	console.log(Monsters.findOne({name: Session.get("selectedMonster")}).fetch());
//     return Monsters.findOne({name: Session.get("selectedMonster")}).fetch();
// };


///////////////////////////////// show monster ///////////////////////////////////////////

Router.route('showamonster');

Template.showamonster.helpers({
  getmymonster: function() {
  	// console.log('looking for monsters');
  	//console.log("2 "+Session.get("selectedMonster"));
  	//console.log(Monsters.findOne({name: Session.get("selectedMonster")}));
    return Monsters.findOne({name: Session.get("selectedMonster")});
  },
  fighting: function() {
  		return Session.get("fighting");
  }
});

Template.showamonster.events({
    'click .fight': function(){
        console.log("You clicked fight");
    },
    'click .flee': function(){
        Router.go('/');
    },
    'click .findout': function(){
        console.log("You clicked find out more");
    }
});

////////////////////////////////////////////// find out more /////////////////////////////////////

Router.route('monster_findout');

Template.monster_findout.helpers({
  getmymonster: function() {
  	// console.log('looking for monsters');
  	//console.log("2 "+Session.get("selectedMonster"));
  	//console.log(Monsters.findOne({name: Session.get("selectedMonster")}));
    return Monsters.findOne({name: Session.get("selectedMonster")});
  },
  fighting: function() {
  		return Session.get("fighting");
  }
});

Template.monster_findout.events({
    'click .fight': function(){
        console.log("You clicked fight");
    },
    'click .flee': function(){
        Router.go('/');
    }
});

 //////////////////////////////// fight ///////////////////////////////////////////

Router.route('monster_fight');

Template.monster_fight.helpers({
  getmymonster: function() {
  	// console.log('looking for monsters');
  	//console.log("2 "+Session.get("selectedMonster"));
  	//console.log(Monsters.findOne({name: Session.get("selectedMonster")}));
    return Monsters.findOne({name: Session.get("selectedMonster")});
  },
  fighting: function() {
  		return Session.get("fighting");
  }
});

Template.monster_fight.events({
    'click .flee': function(){
        Router.go('/');
    },
    'click .findout': function(){
        console.log("You clicked find out more");
    }
});