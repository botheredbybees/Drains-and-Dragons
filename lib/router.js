var feedSubscription;
MLibaries = ['art','art-hobart','bbqs', 'bins','pits','playgrounds','toilets','trees'];
// Handle for launch screen possibly dismissed from app-body.js
dataReadyHold = null;

// Global subscriptions
if (Meteor.isClient) {
  Meteor.subscribe('news');
  Meteor.subscribe('allmonsters');
  Meteor.subscribe('arthobart');
  Meteor.subscribe('getHobartArt');
  Meteor.subscribe('allpits');
  mypitlocations = Meteor.subscribe('pitlocations');
  Meteor.subscribe('bookmarkCounts');
  Meteor.subscribe('allart');
  Meteor.subscribe('artlocations');
  feedSubscription = Meteor.subscribe('feed');
}

Router.configure({
  layoutTemplate: 'appBody',
  notFoundTemplate: 'notFound'
});

if (Meteor.isClient) {
  // Keep showing the launch screen on mobile devices until we have loaded
  // the app's data
  dataReadyHold = LaunchScreen.hold();
}

HomeController = RouteController.extend({
  onBeforeAction: function() {
    Meteor.subscribe('latestActivity', function() {
      dataReadyHold.release();
    });
  }
});


FeedController = RouteController.extend({
  onBeforeAction: function() {
    this.feedSubscription = feedSubscription;
  }
});

RecipesController = RouteController.extend({
  data: function() {
    return _.values(RecipesData);
  }
});

BookmarksController = RouteController.extend({
  onBeforeAction: function() {
    if (Meteor.user())
      Meteor.subscribe('bookmarks');
    else
      Overlay.open('authOverlay');
  },
  data: function() {
    if (Meteor.user())
      return _.values(_.pick(RecipesData, Meteor.user().bookmarkedRecipeNames));
  }
});

RecipeController = RouteController.extend({
  onBeforeAction: function() {
    Meteor.subscribe('recipe', this.params.name);
  },
  data: function() {
    return RecipesData[this.params.name];
  }
});

AdminController = RouteController.extend({
  onBeforeAction: function() {
    Meteor.subscribe('news');
  }
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('art');
  this.route('bbqs');
  this.route('pits');
  this.route('nodes');
  this.route('bins');
  this.route('parks');
  this.route('playgrounds');
  this.route('trees');
  this.route('toilets');
  this.route('urbanart');
  this.route('feed');
  this.route('recipes');
  this.route('bookmarks');
  this.route('about');
  // this.route('showamonster', {
  //   // get parameter via this.params
  //   path: '/mymonster/:_id'
  // });
  this.route('recipe', {path: '/recipes/:name'});
  this.route('admin', { layoutTemplate: null });
});

Router.onBeforeAction('dataNotFound', {only: 'recipe'});
