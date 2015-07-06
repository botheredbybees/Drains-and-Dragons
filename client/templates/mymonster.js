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
        //console.log("You clicked fight");
        Session.set("monsterhealth",100);
        //console.log(Session.get("monsterhealth"));
    },
    'click .flee': function(){
        Router.go('/');
    },
    'click .findout': function(){
       // console.log("You clicked find out more");
  		var monster = Monsters.findOne({name: Session.get("selectedMonster")});
  		//console.log(monster.setting);
  		switch(monster.setting) {
		    case "Cavern Dwellers":
		        Session.set("monsterfile","cavern_dwellers");
		        break;
		    case "Folk of the Realm":		        
		        Session.set("monsterfile","folk_realm");
		        break;
		    case "Lower Depths":		        
		        Session.set("monsterfile","lower_depths");
		        break;
		    case "Twisted Experiments":		        
		        Session.set("monsterfile","twisted_experiments");
		        break;
		    case "Ravenous Hordes":		        
		        Session.set("monsterfile","ravenous_hordes");
		        break;
		    case "Planar Powers":		        
		        Session.set("monsterfile","planar_powers");
		        break;
		    case "Swamp Denizens":		        
		        Session.set("monsterfile","denizens_swamp");
		        break;
		    case "Undead Legions":		        
		        Session.set("monsterfile","legions_undead");
		        break;
		    case "Dark Woods":		        
		        Session.set("monsterfile","dark_woods");
		        break;
		    default:		        
		        Session.set("monsterfile","planar_powers");
		};
		return;
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
  gettags: function() {
  		var monster = Monsters.findOne({name: Session.get("selectedMonster")});
  		var tags ="";
//console.log(monster.tags);
  		// for(tag in monster.tags) {
  		// 	tags += tag+'<br>';
  		// }
  		return tags;
  },
  imagefile: function() {
  		var monster = Monsters.findOne({name: Session.get("selectedMonster")});
  		//console.log(monster.setting);
  		switch(monster.setting) {
		    case "Cavern Dwellers":
		        Session.set("monsterfile","cavern_dwellers");
		        break;
		    case "Folk of the Realm":		        
		        Session.set("monsterfile","folk_realm");
		        break;
		    case "Lower Depths":		        
		        Session.set("monsterfile","lower_depths");
		        break;
		    case "Twisted Experiments":		        
		        Session.set("monsterfile","twisted_experiments");
		        break;
		    case "Ravenous Hordes":		        
		        Session.set("monsterfile","ravenous_hordes");
		        break;
		    case "Planar Powers":		        
		        Session.set("monsterfile","planar_powers");
		        break;
		    case "Swamp Denizens":		        
		        Session.set("monsterfile","denizens_swamp");
		        break;
		    case "Undead Legions":		        
		        Session.set("monsterfile","legions_undead");
		        break;
		    case "Dark Woods":		        
		        Session.set("monsterfile","dark_woods");
		        break;
		    default:		        
		        Session.set("monsterfile","planar_powers");
		};
		return Session.get("monsterfile");
  },
  fighting: function() {
  		return Session.get("fighting");
  }
});

Template.monster_findout.events({
    'click .fight': function(){
        //console.log("You clicked fight");
        Session.set("monsterhealth",100);
    },
    'click .flee': function(){
        Router.go('/');
    }
});

 //////////////////////////////// fight ///////////////////////////////////////////

Router.route('monster_fight');

Template.monster_fight.helpers({
	ourHealth: function() {
		return Session.get("playerhealth");
	},
	ourmonstersHealth: function() {
		return Session.get("monsterhealth");
	},
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
    'click .hack': function(){
    	var opponent = Monsters.findOne({name: Session.get("selectedMonster")});
    	damage = Math.floor((Math.random() * 10) + 1);    	
      Session.set("monsterhealth",Session.get("monsterhealth")-damage);
      if (Session.get("monsterhealth") <= 0) {
      		sAlert.closeAll();
      		Router.go('monster_died');
      }
      suffer = Math.floor((Math.random() * 10) + 1);
      Session.set("playerhealth", Session.get("playerhealth")-suffer);
      if (Session.get("playerhealth") <= 0) {
      	sAlert.closeAll();
      	Router.go('you_died');
      }
    	switch(damage) {
		    case 10:
		    case 9:
		        sAlert.error('Ouch. '+opponent.name+' does '+damage+' damage');
		        break;
		    case 8:
		    case 7:
		    case 6:
		    case 5:
		        sAlert.warning('You do '+suffer+' damage');
		        break;
		    case 4:
		    case 3:
		    case 2:
		    case 1:
		    	if(suffer>8) {
		        	sAlert.success('You smite '+opponent.name+' for '+suffer+' damage');
		        } else {
		        	sAlert.info('You hit '+opponent.name+' and do '+suffer+' damage');
		        } 
		        break;
		    default:
		        sAlert.success(opponent.name+' missed');
		}

    	

    	//console.log(Session.get("monsterhealth"));
    },
    'click .flee': function(){
        Router.go('/');
    },
    'click .findout': function(){
        //console.log("You clicked find out more");
    }
});

//////////////////////////////// monster died ///////////////////////////////////////////

Router.route('monster_died');

Template.monster_died.helpers({
	ourHealth: function() {
		return Session.get("playerhealth");
	},
	ourmonstersHealth: function() {
		return Session.get("monsterhealth");
	},
  getmymonster: function() {
  	// console.log('looking for monsters');
  	// console.log("2 "+Session.get("selectedMonster"));
  	// console.log(Monsters.findOne({name: Session.get("selectedMonster")}));
    return Monsters.findOne({name: Session.get("selectedMonster")});
  },
  fighting: function() {
  		return Session.get("fighting");
  }
});

Template.monster_died.events({
    'click .fight': function(){
        //console.log("You clicked fight");
        Session.set("monsterhealth",100);
        //console.log(Session.get("monsterhealth"));
    },
    'click .flee': function(){
        Router.go('/');
    },
    'click .findout': function(){
       // console.log("You clicked find out more");
  		var monster = Monsters.findOne({name: Session.get("selectedMonster")});
  		//console.log(monster.setting);
  		switch(monster.setting) {
		    case "Cavern Dwellers":
		        Session.set("monsterfile","cavern_dwellers");
		        break;
		    case "Folk of the Realm":		        
		        Session.set("monsterfile","folk_realm");
		        break;
		    case "Lower Depths":		        
		        Session.set("monsterfile","lower_depths");
		        break;
		    case "Twisted Experiments":		        
		        Session.set("monsterfile","twisted_experiments");
		        break;
		    case "Ravenous Hordes":		        
		        Session.set("monsterfile","ravenous_hordes");
		        break;
		    case "Planar Powers":		        
		        Session.set("monsterfile","planar_powers");
		        break;
		    case "Swamp Denizens":		        
		        Session.set("monsterfile","denizens_swamp");
		        break;
		    case "Undead Legions":		        
		        Session.set("monsterfile","legions_undead");
		        break;
		    case "Dark Woods":		        
		        Session.set("monsterfile","dark_woods");
		        break;
		    default:		        
		        Session.set("monsterfile","planar_powers");
		};
		return;
    }
});

//////////////////////////////// your died ///////////////////////////////////////////

Router.route('you_died');

Template.you_died.helpers({
	ourHealth: function() {
		return Session.get("playerhealth");
	},
	ourmonstersHealth: function() {
		return Session.get("monsterhealth");
	},
  getmymonster: function() {
  	// console.log('looking for monsters');
  	// console.log("2 "+Session.get("selectedMonster"));
  	// console.log(Monsters.findOne({name: Session.get("selectedMonster")}));
    return Monsters.findOne({name: Session.get("selectedMonster")});
  },
  fighting: function() {
  		return Session.get("fighting");
  }
});

Template.you_died.events({
    'click .fight': function(){
        //console.log("You clicked fight");
        Session.set("monsterhealth",100);
        //console.log(Session.get("monsterhealth"));
    },
    'click .flee': function(){
        Router.go('/');
    },
    'click .findout': function(){
       // console.log("You clicked find out more");
  		var monster = Monsters.findOne({name: Session.get("selectedMonster")});
  		//console.log(monster.setting);
  		switch(monster.setting) {
		    case "Cavern Dwellers":
		        Session.set("monsterfile","cavern_dwellers");
		        break;
		    case "Folk of the Realm":		        
		        Session.set("monsterfile","folk_realm");
		        break;
		    case "Lower Depths":		        
		        Session.set("monsterfile","lower_depths");
		        break;
		    case "Twisted Experiments":		        
		        Session.set("monsterfile","twisted_experiments");
		        break;
		    case "Ravenous Hordes":		        
		        Session.set("monsterfile","ravenous_hordes");
		        break;
		    case "Planar Powers":		        
		        Session.set("monsterfile","planar_powers");
		        break;
		    case "Swamp Denizens":		        
		        Session.set("monsterfile","denizens_swamp");
		        break;
		    case "Undead Legions":		        
		        Session.set("monsterfile","legions_undead");
		        break;
		    case "Dark Woods":		        
		        Session.set("monsterfile","dark_woods");
		        break;
		    default:		        
		        Session.set("monsterfile","planar_powers");
		};
		return;
    }
});

