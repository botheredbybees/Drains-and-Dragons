// Monsters.getmymonster = function() {
//   console.log("1 "+Session.get("selectedMonster"));
//   	console.log(Monsters.findOne({name: Session.get("selectedMonster")}).fetch());
//     return Monsters.findOne({name: Session.get("selectedMonster")}).fetch();
// };

Router.route('showamonster');

Template.showamonster.helpers({
  getmymonster: function() {
  	// console.log('looking for monsters');
  	//console.log("2 "+Session.get("selectedMonster"));
  	//console.log(Monsters.findOne({name: Session.get("selectedMonster")}));
    return Monsters.findOne({name: Session.get("selectedMonster")});
  }
});