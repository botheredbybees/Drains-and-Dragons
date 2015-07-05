  Meteor.publish('art', function(){
    return art.find();
  });

// Meteor.publish('artlocations', function() {

//   return art.find({'geometry.coordinates[0]':{ $near :
//     { $geometry :
//       { type : "Point" ,
//         coordinates: [147.276568, -42.831024] } , $maxDistance : 100}      
//     } 
//   });

// });

  Meteor.publish('artHobart', function(){
    return artHobart.find();
  });
  Meteor.publish('bbqs', function(){
    return bbqs.find();
  });
  Meteor.publish('bins', function(){
    return bins.find();
  });
  

  // Pits = new Mongo.Collection('pits');
  // Meteor.publish('allpits', function(){
  //   return Pits.find();
  // });
  Meteor.publish('pitlocations', function() {

  return Pits.find({ geometry :
       { $near :
          {
            $geometry : {
               type : "Point" ,
               coordinates : [147.276568, -42.831024] },
            $maxDistance : 10
          }
       }
    });

});

  Meteor.publish('playgrounds', function(){
    return playgrounds.find();
  });
  Meteor.publish('toilets', function(){
    return toilets.find();
  });
  Meteor.publish('trees', function(){
    return trees.find();
  });
Meteor.publish('bookmarkCounts', function() {
  return BookmarkCounts.find();
});

Meteor.publish('allmonsters', function() {
  return Monsters.find({});
});

// Meteor.publish('monster', function(monstername) {
//   check(monstername, String);
//   return Monsters.find({name: monstername});
// });

Meteor.publish('news', function() {
  return News.find({}, {sort: {date: -1}, limit: 1});
});

Meteor.publish('latestActivity', function () {
  return Activities.latest();
});

Meteor.publish('feed', function() {
  return Activities.find({}, {sort: {date: -1}, limit: 10});
});

// autopublish the user's bookmarks and admin status
Meteor.publish(null, function() {
  return Meteor.users.find(this.userId, {
    fields: {
      admin: 1,
      bookmarkedRecipeNames: 1,
      'services.twitter.profile_image_url_https': 1
    }
  });
});

// make sure we've got some geospacial indexes to work with
Meteor.startup(function () {  
  art._ensureIndex({ "geometry": "2dsphere" });
  bbqs._ensureIndex({ "geometry": "2dsphere" });
  bins._ensureIndex({ "geometry": "2dsphere" });
  Pits._ensureIndex({ "geometry": "2dsphere" });
  playgrounds._ensureIndex({ "geometry": "2dsphere" });
  // toilets._ensureIndex({ "geometry": "2dsphere" });
  trees._ensureIndex({ "geometry": "2dsphere" });
  artHobart._ensureIndex({ "geometry": "2dsphere" });
});
