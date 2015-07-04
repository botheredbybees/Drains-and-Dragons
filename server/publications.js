MLibaries = ['art','art-hobart','bbqs', 'bins','pits','playgrounds','toilets','trees'];


  Meteor.publish('art', function(){
    return art.find();
  })
  Meteor.publish('art-hobart', function(){
    return art-hobart.find();
  })
  Meteor.publish('bbqs', function(){
    return bbqs.find();
  })
  Meteor.publish('bins', function(){
    return bins.find();
  })
  Meteor.publish('pits', function(){
    return pits.find();
  })
  Meteor.publish('playgrounds', function(){
    return playgrounds.find();
  })
  Meteor.publish('toilets', function(){
    return toilets.find();
  })
  Meteor.publish('trees', function(){
    return trees.find();
  })
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
})
