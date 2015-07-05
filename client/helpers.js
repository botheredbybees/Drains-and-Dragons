pluralize = function(n, thing, options) {
  var plural = thing;
  if (_.isUndefined(n)) {
    return thing;
  } else if (n !== 1) {
    if (thing.slice(-1) === 's')
      plural = thing + 'es';
    else
      plural = thing + 's';
  }

  if (options && options.hash && options.hash.wordOnly)
    return plural;
  else
    return n + ' ' + plural;
}

UI.registerHelper('pluralize', pluralize);

var DIMENSIONS = {
  small: '320x350',
  large: '640x480',
  full: '640x800'
};

UI.registerHelper('recipeImage', function(options) {
  var size = options.hash.size || 'large';

  if (options.hash.recipe)
    return '/img/recipes/' + DIMENSIONS[size] + '/' + options.hash.recipe.name + '.jpg';
});

UI.registerHelper('questImage', function(options) {
  var size = options.hash.size || 'large';

  if (options.hash.recipe)
    return '/img/quests/' + DIMENSIONS[size] + '/' + options.hash.quest.name + '.jpg';
});

UI.registerHelper('activePage', function() {
  // includes Spacebars.kw but that's OK because the route name ain't that.
  var routeNames = arguments;

  return _.include(routeNames, Router.current().route.name) && 'active';
});

UI.registerHelper('session',function(input){
    return Session.get(input);
});