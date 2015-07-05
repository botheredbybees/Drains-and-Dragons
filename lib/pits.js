pits = new Mongo.Collection('pits');

var getPitPoints = function(){
return(pits.find({'geometry.type':'Point'},{'geometry.coordinates':1}).fetch());
};


// if (Meteor.isClient) {
// console.log(mypits.fetch());
// }
// pits.all = function() {
//   return(pits.find({}).fetch());
// };

//pitPOI = new Mongo.Collection('pitlocations');
